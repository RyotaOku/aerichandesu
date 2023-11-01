import { useState } from 'react'

export async function fetchGptResponse(message: string) {
    try {
        const res = await fetch('/api/gptApi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify({ message }),
        });

        if (!res.ok) {
            throw new Error('Server error');
        }

        const result = await res.json();
        // ここで成功の処理を行う、例えばstateに保存する等
        return result;
    } catch (error) {
        // ここでエラーハンドリングを行う
        console.error(error);
        return null;
    }
}

export default function Main() {
    const [gptResponse, setGptResponse] = useState(null);

    const fetchData = async () => {
        const result = await fetchGptResponse("Hello");
        setGptResponse(result);
    }

    return (
        <>
            <h1>ChatGPT APIでの通信</h1>
            <button onClick={fetchData}>Fetch Data</button>
            <div>{gptResponse ? gptResponse : "No Data"}</div>
        </>
    )
}
