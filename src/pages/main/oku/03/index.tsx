import { useReducer } from 'react'
import { Reducer, State } from './reducer'

export default function Todo() {
    const initialState: State = {
        text: '',
        list: []
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <>
            <input type="text" style={{ border: '1px solid #000' }} value={state.text} onChange={(e) => {
                dispatch({ type: 'ADD_TEXT', payload: e.target.value })
            }} />
            <button onClick={() => {
                dispatch({ type: 'ADD_LIST', payload: state.text })
            }}>三上悠亜</button>
            <ul>
                {state.list.map((v, idx) => <li key={idx}>{v}</li>)}
            </ul>
        </>
    )
}