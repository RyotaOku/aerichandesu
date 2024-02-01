export type Action =
    { type: 'PLUS' } |
    { type: 'MINUS' } |
    { type: 'RESET' }


export function countReducer(state: number, action: Action): number {
    switch (action.type) {
        case 'PLUS':
            return state + 1
        case 'MINUS':
            return state - 1
        case "RESET":
            return 0
        default: return state
    }
}