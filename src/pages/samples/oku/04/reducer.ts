
export type Action =
    { type: 'SHUFFLE' } |
    { type: 'ADD_ARRAY', payload: string } |
    { type: 'SET_TEXT', payload: string } |
    { type: 'REMOVE_ARRAY', payload: number } |
    { type: 'ALL_REMOVE_ARRAY' }

export type State = {
    text: string;
    textArray: string[];
    shuffleArray: string[];
}

export function orderReducer(state: State, action: Action) {
    switch (action.type) {
        case 'SHUFFLE':
            let array = [...state.textArray];
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return { ...state, shuffleArray: array };
        case 'ADD_ARRAY':
            return { ...state, textArray: [...state.textArray, action.payload] }
        case 'SET_TEXT':
            return { ...state, text: action.payload }
        case 'REMOVE_ARRAY':
            return { ...state, textArray: state.textArray.filter((_, index) => index !== action.payload) }
        case 'ALL_REMOVE_ARRAY':
            return { ...state, textArray: [] }
        default:
            return state;
    }
}