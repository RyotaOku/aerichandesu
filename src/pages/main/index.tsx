import { useState, useEffect } from 'react'
import { CreateStatusFrame } from '@/components/common/createStatusFrame'
import style from '@/styles/samples/main.module.css'
// import { Action } from './reducer'

import React, { useReducer } from 'react';
import { setUsername, setPhone, setEmail, setPassword } from './actioncreator';
import { formReducer } from './reducer';

type portfolio = {
    name: string,
    age: string,
    graduateYear: string,
    position: '' | 'デザイナー' | 'エンジニア',
    skill: string[]
}

function CalcLv2() {
    // 入力中の数値や計算式を保持するためのstate
    const [input, setInput] = useState<string>("");

    // 入力された計算式を順番に保存するためのstate
    const [calcNum, setCalcNum] = useState<string[]>([]);

    // 数字ボタンがクリックされたときの処理。
    const handleNumberClick = (num: string) => {
        // 既存の入力内容に新しくクリックされた数字を追加する。
        setInput(prev => prev + num);
    };

    // 演算子ボタンがクリックされたときの処理。
    const handleOperatorClick = (operator: string) => {
        // 既存の計算式に入力中の数値とクリックされた演算子を追加する。
        setCalcNum(prev => [...prev, input, operator]);
        // 入力をリセットする。
        setInput("");
    };

    // = ボタンがクリックされたときの計算処理
    const calculateResult = () => {
        // 既存の計算式に入力中の数値を追加して完成させる。
        const updatedCalcNum = [...calcNum, input];
        // 完成した計算式を文字列として結合する。
        let result = updatedCalcNum.join("");
        // 結合した計算式を評価して計算する。
        // evalは文字列として渡されたJavaScriptコードを実行する関数。
        //悪意を持ったコードを実行させることも可能なので非推奨。
        setInput(eval(result).toString());
        // 計算履歴をリセットする。
        setCalcNum([]);
    };

    // リセット機能
    const resetCalculator = () => {
        // 入力と計算履歴をリセットする。
        setInput("");
        setCalcNum([]);
    };

    // ボタンの表示内容を定義する配列。
    const elements = ["7", "8", "9", "+/-", "c", "4", "5", "6", "×", "÷", "1", "2", "3", "0", ".", "%", "+", "-"];

    return (
        <div className={style.calcWrap}>
            {/* 現在の入力内容を表示する。 */}
            <div className={style.result}>{input}</div>

            {/* elements配列を元にボタンを動的に生成する。 */}
            {elements.map((el, index) => {
                if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(el)) {
                    // 数字のボタンを表示する場合。
                    return (
                        <button key={index} onClick={() => handleNumberClick(el)} className={`${style[`div${index + 2}`]} ${style.button}`}>
                            {el}
                        </button>
                    );
                } else if (el === "c") {
                    // c (リセット)ボタンを表示する場合。
                    return (
                        <button key={index} onClick={resetCalculator} className={`${style[`div${index + 2}`]} ${style.button}`}>
                            {el}
                        </button>
                    );
                } else {
                    // 演算子のボタンを表示する場合。
                    // (特筆: handleOperatorClickを使い、該当する演算子を持つボタンと関連づける。)
                    return (
                        <button key={index} onClick={() => handleOperatorClick(el)} className={`${style[`div${index + 2}`]} ${style.button}`}>
                            {el}
                        </button>
                    );
                }
            })}

            {/* = ボタンを表示する。 */}
            {/* クリックされたとき、calculateResult関数が呼び出される。 */}
            <button onClick={calculateResult} className={style.div20 + ' ' + style.button}>=</button>
        </div>
    );
}

type buttonProps = {
    text: string,
    onOku?: () => void;
    disabled: boolean;
    className: string;
    link: boolean;
}

type inputHondaProps = {
    disabled: boolean;
    className?: string;
    number?: boolean;
}

export function InputHonda(props: inputHondaProps) {
    const [state, setState] = useState('')

    const handleChange = (e: any) => {
        if (props.number) {
            const value = e.replace(/[^\d]/g, "");
            setState(value)
            return
        }
        setState(e)
    }

    return (
        <>
            <input type="text" className={style.input} value={state} onChange={(e) => {
                handleChange(e.target.value)
            }} />
        </>
    );
}

function Button(props: buttonProps) {
    const handleClick = () => {
        props.onOku ? props.onOku() : console.log("何も設定されてなかったよ");
    }
    return (
        <>
            <button disabled={props.disabled} className={props.link ? style.okuButton + " " + props.className + " " + style.link : style.okuButton + " " + props.className} onClick={() => {
                handleClick()
            }}>{props.text}</button>
        </>
    )
}

export default function Main() {
    const [profile, setProfile] = useState<portfolio>({
        name: '',
        age: '',
        graduateYear: '',
        position: '',
        skill: ['']
    })

    const initialState = {
        username: '',
        phone: '',
        email: '',
        password: ''
    };

    const [userInformation, dispatch] = useReducer(formReducer, initialState);

    useEffect(() => {
    }, [userInformation])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>, actionCreatorFunction: (value: string) => any) {
        dispatch(actionCreatorFunction(event.target.value));
    }

    const [state, setState] = useState<string>("")

    return (
        <CreateStatusFrame>
            <input type="text" placeholder='名前' value={profile.name} onChange={(e) => {
                setProfile({
                    ...profile,
                    name: e.target.value
                })
            }} />
            <input type="text" placeholder='年齢' value={profile.age} onChange={(e) => {
                setProfile({
                    ...profile,
                    age: e.target.value
                })
            }} />
            <CalcLv2 />

            <input type="text" value={state} onChange={(e) => {
                setState(e.target.value)
            }} name="" id="" />
            {/* <Button text='クリックできるよ' disabled={false} onOku={() => {
                console.log("CLICK!!!");
            }} /> */}
            <Button link={true} text='無効' className={style.buttonStyle} disabled={state.length < 5} onOku={() => {
                console.log("これが表示されたらおかしいよ！");
            }} />

            <InputHonda disabled={false} number />

            <h2>reducerとactioncreatorの合わせ技</h2>


            <input
                value={userInformation.username}
                style={{ border: '1px solid #000' }}
                onChange={event => handleInputChange(event, setUsername)}
                placeholder="Username"
            />
            <input
                value={userInformation.phone}
                style={{ border: '1px solid #000' }}
                onChange={event => handleInputChange(event, setPhone)}
                placeholder="Phone"
            />
            <input
                value={userInformation.email}
                style={{ border: '1px solid #000' }}
                onChange={event => handleInputChange(event, setEmail)}
                placeholder="Email"
            />
            <input
                type="password"
                value={userInformation.password}
                style={{ border: '1px solid #000' }}
                onChange={event => handleInputChange(event, setPassword)}
                placeholder="Password"
            />
        </CreateStatusFrame>
    )
}