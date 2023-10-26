export type userCareerType = {
    field: string;
    vision: string;
    skill: string[];
    tech: string[];
}

export type Action =
    | { type: 'SET_USER_FIELD'; payload: string; }
    | { type: 'SET_USER_SKILL'; payload: string }
    | { type: 'SET_USER_TECH'; payload: string }

export function userCareerReducer(userCareer: userCareerType, action: Action): userCareerType {
    switch (action.type) {
        case 'SET_USER_FIELD':
            return {
                ...userCareer, field: action.payload
            };
        case 'SET_USER_SKILL':
            const isSkillExists = userCareer.skill.includes(action.payload);
            return {
                ...userCareer,
                skill: isSkillExists ?
                    userCareer.skill.filter(skill => skill !== action.payload) :
                    [...userCareer.skill, action.payload]
            };
        case 'SET_USER_TECH':
            const isTechExists = userCareer.tech.includes(action.payload);
            return {
                ...userCareer,
                tech: isTechExists ?
                    userCareer.tech.filter(tech => tech !== action.payload) :
                    [...userCareer.tech, action.payload]
            };
        default:
            return userCareer;
    }
}
