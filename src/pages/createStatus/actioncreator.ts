export function setUserField(field: string) {
    return {
        type: 'SET_USER_FIELD',
        payload: field
    };
}