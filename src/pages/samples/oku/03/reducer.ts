export type Action = { type: 'ADD_TEXT', payload: string } | { type: 'ADD_LIST', payload: string }

export type State = {
    text: string,
    list: string[]
}

export function Reducer(state: State, action: Action) {
    switch (action.type) {
        case 'ADD_TEXT':
            return {
                ...state, text: action.payload
            }
        case 'ADD_LIST':
            return {
                ...state, list: [...state.list, action.payload]
            }
    }
}