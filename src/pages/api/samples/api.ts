import type { NextApiRequest, NextApiResponse } from 'next'

type Input = {
    userPass: string
}

type Output = {
}

async function getAllArchives() {
    // const result = await client.query(``)
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            const result = 'jason';
            resolve(result);
        }, 3000);
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    const pass = req.body.pass

    if (pass !== 'jason') {
        setTimeout(() => {
            res.status(401).json({ error: 'Unauthorized' }); // ここでエラーを返す
            return
        }, 3000);
    }

    try {
        const result = await getAllArchives()
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
    }
}