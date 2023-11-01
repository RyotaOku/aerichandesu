import { useState } from 'react'
import axios from 'axios';
const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-4-32k';
const API_KEY = 'APIキーをここに貼り付け';

async function message(message: string) {
    try {
        const response = await axios.post(`${API_URL}chat/completions`, {
            // モデル ID の指定
            model: MODEL,
            // 質問内容
            messages: [
                {
                    'role': 'user',
                    'content': message,
                }
            ],
        }, {
            // 送信する HTTP ヘッダー(認証情報)
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        // 回答の取得
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default function Main() {
    return (
        <>
            <h1>ChatGPT APIでの通信</h1>
            <div></div>
        </>
    )
}