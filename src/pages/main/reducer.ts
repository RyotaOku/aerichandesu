// reducer.ts
export type userCareerType = {
    field: string;
    skill: string[];
    tech: string[];
    // ... userInformationTypeも統合してもいいですね。
};

export type Action =
    | { type: 'SET_USER_FIELD'; payload: string }
    | { type: 'SET_CAREER_OPTIONS'; payload: string[] }
    | { type: 'SET_SKILL_OPTIONS'; payload: string[] }
// ... その他のアクション

export function userCareerReducer(state: userCareerType, action: Action): userCareerType {
    console.log(state);
    console.log(action);

    switch (action.type) {
        case 'SET_USER_FIELD':
            return { ...state, field: action.payload };
        case 'SET_CAREER_OPTIONS':
            console.log('tintin');
            return { ...state, skill: action.payload }; // fieldとskillの違いを確認してください。
        case 'SET_SKILL_OPTIONS':
            return { ...state, tech: action.payload }; // fieldとtechの違いを確認してください。
        // ... その他のcase
        default:
            return state;
    }
}
