export type userCareerType = {
    field: string;
    vision: string;
    skill: string[];
    tech: string[];
    question: questionType[]
}

export type questionType = {
    text: string;
    category: string
    answer: null | 'StronglyAgree' | 'Agree' | 'SomewhatAgree' | 'Neutral' | 'SomewhatDisagree' | 'Disagree' | 'StronglyDisagree';
    resultText: { neutral: string, left: string, right: string };
    categoryLeftPercent: string;
    categoryRightPercent: string;
}

export type Action =
    | { type: 'SET_USER_FIELD'; payload: string; }
    | { type: 'SET_USER_SKILL'; payload: string }
    | { type: 'SET_USER_TECH'; payload: string }
    | { type: 'SET_USER_VISION'; payload: string }
    | { type: 'ADD_QUESTION'; payload: questionType[] }
    | { type: 'UPDATE_ANSWER'; payload: { text: string; answer: questionType['answer'] } };

function getRandomPercent(min: number, max: number): string {
    let percent: number;
    do {
        percent = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (percent === 50);
    return `${percent}%`;
}

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
        case 'SET_USER_VISION':
            return {
                ...userCareer, vision: action.payload
            };
        case 'ADD_QUESTION':
            return {
                ...userCareer,
                // question: [...userCareer.question, ...action.payload]
                question: action.payload
            };
        case 'UPDATE_ANSWER':
            const updatedQuestions = userCareer.question.map(q => {
                if (q.text === action.payload.text) {
                    let categoryLeftPercent = "";
                    let categoryRightPercent = "";

                    switch (action.payload.answer) {
                        case 'StronglyAgree':
                            categoryLeftPercent = getRandomPercent(70, 80);
                            break;
                        case 'Agree':
                            categoryLeftPercent = getRandomPercent(60, 70);
                            break;
                        case 'SomewhatAgree':
                            categoryLeftPercent = getRandomPercent(51, 60);
                            break;
                        case 'Neutral':
                            categoryLeftPercent = getRandomPercent(45, 55);
                            break;
                        case 'SomewhatDisagree':
                            categoryRightPercent = getRandomPercent(51, 60);
                            break;
                        case 'Disagree':
                            categoryRightPercent = getRandomPercent(60, 70);
                            break;
                        case 'StronglyDisagree':
                            categoryRightPercent = getRandomPercent(70, 80);
                            break;
                        default:
                            categoryLeftPercent = "50%";
                            categoryRightPercent = "50%";
                            break;
                    }

                    categoryRightPercent = categoryRightPercent || `${100 - parseInt(categoryLeftPercent)}%`;
                    categoryLeftPercent = categoryLeftPercent || `${100 - parseInt(categoryRightPercent)}%`;

                    return {
                        ...q,
                        answer: action.payload.answer,
                        categoryLeftPercent,
                        categoryRightPercent
                    };
                }
                return q;
            });
            return { ...userCareer, question: updatedQuestions };
        default:
            return userCareer;
    }
}
