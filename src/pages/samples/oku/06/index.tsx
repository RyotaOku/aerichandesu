import { useState, useEffect, useReducer } from 'react'
import { Action, State, reducer } from './reducer'
import { getUserName } from './actioncreator'
import { ProgressSpinner } from 'primereact/progressspinner';

// 偶数？奇数？素数？
function describeNumber(num: number): string {
    // 素数かどうかを判定する関数
    function isPrime(n: number): boolean {
        if (n <= 1) return false;
        if (n <= 3) return true;

        if (n % 2 === 0 || n % 3 === 0) return false;

        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }

        return true;
    }

    // 偶数か奇数か素数かを判定する
    if (isPrime(num)) {
        return "私に勇気を与えてくれる孤独な数字";
    } else if (num % 2 === 0) {
        return "偶数";
    } else {
        return "奇数";
    }
}

export default function Main() {
    const [inputValue, setInputValue] = useState<number>(0);
    const [result, setResult] = useState<string>('');

    function handleButtonClick() {
        setResult(describeNumber(inputValue));
    }

    return (
        <>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} style={{ border: '1px solid black' }} />
            <button onClick={handleButtonClick}>Submit</button>
            <p>{result}</p>
            <Authentication />
        </>
    )
}

function Authentication() {
    const initialState = {
        userName: '',
        isLoading: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [pass, setPass] = useState<string>("")

    useEffect(() => {
        // getUserName(dispatch)
    }, [])

    function handleClick() {
        getUserName(dispatch, pass)

    }
    return (
        <div style={{ border: '1px solid #000', marginTop: '5rem' }}>
            <p>reducerを用いて、認証の状態を管理する</p>
            <h2>ユーザー名: {state.userName}</h2>
            <input type="text" value={pass} onChange={(e) => { setPass(e.target.value) }} style={{ border: '1px solid #000' }} />
            <button onClick={() => {
                handleClick()
            }}>ログイン</button>
            <p>{state.isLoading.toString()}</p>
            {state.isLoading===true && <div style={{ position: 'fixed', inset: 0, background: '#0000000f', width: '100%', height: '100vh' }}><ProgressSpinner style={{ position: 'fixed', inset: '50%' }} /></div>}
        </div>
    )
}