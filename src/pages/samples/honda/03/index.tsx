import { useState } from 'react'

export default function Test03() {
    // setStateを無くし、型を明示する。stateの名前も、今回の課題に沿った適切な名前に変更しよう。
    const [state, setState] = useState(0)

    return (
        <>
            <h3>state,reducerを用いたstateの変更</h3>
            <br />
            <p>シンプルなカウンターを作る。</p>
            <p>resetをクリックしたら、数値が0に戻る</p>
            <p>・型のないstate禁止</p>
            <p>・setStateは用いない</p>
            <br /><br />

            <p>現在の値は{state}です。</p>
            <button style={{ background: '#dedede', marginRight: '1rem' }}>＋1する</button>
            <button style={{ background: '#dedede', marginRight: '1rem' }}>-1する</button>
            <button style={{ background: '#dedede' }}>reset</button>

            <p>todoリスト↓</p>
        </>
    )
}