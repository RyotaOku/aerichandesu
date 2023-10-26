export type IndexAction =
    | { type: 'NEXT_INDEX'; }
    | { type: 'PREV_INDEX'; }

export type globalState = {
    index: number,
    maxStep: number
}

export function createStatusIndexReducer(state: globalState, action: IndexAction) {
    switch (action.type) {
        case 'NEXT_INDEX':
            return { ...state, index: state.index + 1 };
        case 'PREV_INDEX':
            return { ...state, index: state.index - 1 };
        default: return state;
    }
}