import { useState, useReducer } from 'react';

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' } | { type: 'SOMETHING' }

function reducer(state: number, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        case 'SOMETHING':
            return 666;
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <button style={{ border: '1px solid #000', margin: '1rem' }} onClick={() => {
                dispatch({ type: 'INCREMENT' })
            }
            }>+1</button>
            <button style={{ border: '1px solid #000', margin: '1rem' }} onClick={() => {
                dispatch({ type: 'DECREMENT' })
            }}>-1</button>
            <button style={{ border: '1px solid #000', margin: '1rem' }} onClick={() => {
                dispatch({ type: 'RESET' })
            }}>Reset</button>
            <button style={{ border: '1px solid #000', margin: '1rem' }} onClick={() => {
                dispatch({ type: 'SOMETHING' })
            }}>何があるかな</button>
            <button style={{ border: '1px solid #000', margin: '1rem' }} onClick={() => {

            }}>4545になるボタン</button>
            <p>Count: {count}</p>
        </div >
    );
};

export default Counter;
