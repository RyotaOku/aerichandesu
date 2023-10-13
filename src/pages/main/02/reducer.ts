export type State = {
    userName: string;
    isLoading: boolean;
}

export type Action = { type: 'USERNAME_REQUEST' }
    | { type: 'USERNAME_SUCCESS'; payload: string }
    | { type: 'USERNAME_FAILURE' }

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'USERNAME_REQUEST':
            return {
                ...state, isLoading: true
            }
        case 'USERNAME_SUCCESS':
            return {
                ...state, userName: action.payload, isLoading: false
            }
        case 'USERNAME_FAILURE':
            return {
                ...state, isLoading: false
            }
        default:
            return state;
    }
}