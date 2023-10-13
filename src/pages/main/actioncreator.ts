
// actionCreator.ts
export function setUsername(username: string) {
    return {
        type: 'SET_USERNAME',
        payload: username
    };
}

export function setPhone(phone: string) {
    return {
        type: 'SET_PHONE',
        payload: phone
    };
}

export function setEmail(email: string) {
    return {
        type: 'SET_EMAIL',
        payload: email
    };
}

export function setPassword(password: string) {
    return {
        type: 'SET_PASSWORD',
        payload: password
    };
}
