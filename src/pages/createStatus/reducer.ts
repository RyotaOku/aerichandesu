export type userCareerType = {
    field: string;
    skill: string[];
    tech: string[];
}

export type Action =
    | { type: 'SET_USER_FIELD'; payload: string; }
    | { type: 'SET_USER_TECH_GENRE'; payload: string[] }
    | { type: 'SET_USER_TECH'; payload: string[] }

export function userCareerReducer(userCareer: userCareerType, action: Action): userCareerType {
    switch (action.type) {
        case 'SET_USER_FIELD':
            return { ...userCareer, field: action.payload };
        case 'SET_USER_TECH_GENRE':
            return { ...userCareer, skill: action.payload };
        case 'SET_USER_TECH':
            return { ...userCareer, tech: action.payload };
        default:
            return userCareer;
    }
}
