export type Actions =
    | { type: 'NEXT_INDEX'; }
    | { type: 'PREV_INDEX'; }
    | { type: 'SET_INDEX'; payload: number; }

export type globalStateType = {
    index: number
}

export function resultIndexReducer(state: globalStateType, action: Actions) {
    switch (action.type) {
        case 'NEXT_INDEX':
            return { ...state, index: state.index + 1 };
        case 'PREV_INDEX':
            return { ...state, index: state.index - 1 };
        case 'SET_INDEX':
            return { ...state, index: action.payload };
        default: return state;
    }
}