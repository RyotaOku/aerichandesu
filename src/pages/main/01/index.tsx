import { useState, useEffect, useReducer } from 'react'
import { reducer, State } from './reducer'
import { change } from './actioncreator'

export default function Main() {
    const initialState: State = {
        userName: ''
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    function InputChange(e: React.ChangeEvent<HTMLInputElement>, actionCreatorFunction: (value: string) => any) {
        dispatch(actionCreatorFunction(e.target.value));
    }

    return (
        <div>
            <input style={{ border: '1px solid #000' }} type="text" value={state.userName} onChange={(e) => {
                InputChange(e, change)
            }} />
        </div>
    )
}