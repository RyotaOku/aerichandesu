export type Action = { type: 'SET_USERNAME'; payload: string }

export type State = { userName: string }

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state, userName: action.payload
            }
    }
}