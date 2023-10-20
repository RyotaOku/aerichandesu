import { Action } from './reducer'

export function setUserField(field: string): Action {
    return {
        type: 'SET_USER_FIELD',
        payload: field
    };
}

export function setSkill(selectedOptions: string[]): Action {
    return {
        type: 'SET_USER_TECH_GENRE',
        payload: selectedOptions
    };
}

export function setSkillOptions(options: string[]): Action {
    return {
        type: 'SET_USER_TECH',
        payload: options
    };
}
