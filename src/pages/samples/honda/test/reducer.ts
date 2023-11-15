export type Action =
    | { type: ActionType.PLUS }
    | { type: ActionType.MINUS }
    | { type: ActionType.SET; payload: { count: number } };

// export type State = {count:number}

// export function reducer(state: State, action:Action):

export enum ActionType {
    PLUS,
    MINUS,
    SET,
}

export type State = {
    count: number;
};

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case ActionType.PLUS:
            return {
                ...state,
                count: state.count + 1,
            };
        case ActionType.MINUS:
            return {
                ...state,
                count: state.count - 1,
            };
        case ActionType.SET:
            return {
                ...state,
                count: action.payload.count,
            };
    }
}
