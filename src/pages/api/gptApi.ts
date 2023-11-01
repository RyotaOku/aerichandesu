import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Input = {
    message: string
}

type Output = {
    result?: string
    error?: string
}

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-4-32k';
const API_KEY = process.env.REACT_APP_GPT_API_KEY; // 環境変数からAPIキーを読み込む

async function getGptResponse(message: string) {
    try {
        const response = await axios.post(`${API_URL}chat/completions`, {
            model: MODEL,
            messages: [
                {
                    'role': 'user',
                    'content': message
                }
            ],
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const { message } = req.body as Input

    if (!message) {
        res.status(400).json({ error: 'Bad Request: Message is required' })
        return
    }

    try {
        const result = await getGptResponse(message)
        if (result) {
            res.status(200).json({ result })
        } else {
            res.status(500).json({ error: 'Internal Server Error' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
