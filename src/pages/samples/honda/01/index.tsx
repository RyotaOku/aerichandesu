import { useState, useEffect, useReducer } from "react";
import style from "@/styles/samples/honda/sample01.module.css";

type HeaderProps = {
    text: string;
}
function Header({ text }: HeaderProps) {
    return (
        <header className={style.header}>
            <h1>{text}</h1>
        </header>
    )
}

function Control() {
    const [text, setText] = useState("")
    const [array, setArray] = useState<string[]>([])

    return (
        <div className={style.control}>
            <input type="text" className={style.textInput} value={text} onChange={(e) => {
                setText(e.target.value)
            }} />
            <button className={style.button} onClick={() => {
                setArray(prev => [...prev, text])
            }}>追加</button>
            <ul>
                {array.map((v, idx) => (
                    <li key={idx}>{v} <button onClick={() => {
                        setArray(
                            [
                                ...array.filter((_, i) => i !== idx)
                            ]
                        )
                    }}>削除</button></li>
                ))}
            </ul>
            <button>シャッフル</button>
            <button>リセット</button>
        </div>
    )
}




function Result() {
    return (
        <div className={style.result}></div>
    )
}
export default function Main() {
    return (
        <div className={style.wrap}>
            <Header text={"順番くん - TeamProject"} />
            <Control />
            <Result />

        </div>
    )
}