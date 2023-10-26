export type Action =
    | { type: 'NEXT_INDEX'; }
    | { type: 'PREV_INDEX'; }
    | { type: 'SET_INDEX'; payload: number; }

export type globalState = {
    index: number
}

export function resultReducer(state: globalState, action: Action) {
    switch (action.type) {
        case 'NEXT_INDEX':
            return { ...state, index: state.index + 1 };
        case 'PREV_INDEX':
            return { ...state, index: state.index - 1 };
        case 'SET_INDEX':
            return { ...state, index: action.payload };
    }
}