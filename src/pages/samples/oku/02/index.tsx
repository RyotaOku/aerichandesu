import { useState, useEffect, useReducer } from 'react'
import { Action, State, reducer } from './reducer'
import { getUserName } from './actioncreator'
import { ProgressSpinner } from 'primereact/progressspinner';


export default function Main() {
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
        <>
            <p>reducerを用いて、認証の状態を管理する</p>
            <h2>ユーザー名: {state.userName}</h2>
            <input type="text" value={pass} onChange={(e) => { setPass(e.target.value) }} style={{ border: '1px solid #000' }} />
            <button onClick={() => {
                handleClick()
            }}>ログイン</button>
            {state.isLoading && <div style={{ background: '#0000000f', width: '100%', height: '100vh' }}><ProgressSpinner style={{ position: 'fixed', inset: '50%' }} /></div>}
        </>
    )
}