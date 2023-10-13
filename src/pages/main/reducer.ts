type userInformationType = {
    username: string;
    phone: string;
    email: string;
    password: string;
};

type Action =
    | { type: 'SET_USERNAME'; payload: string }
    | { type: 'SET_PHONE'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string };

export function formReducer(userInformation: userInformationType, action: Action): userInformationType {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...userInformation, username: action.payload };
        case 'SET_PHONE':
            return { ...userInformation, phone: action.payload };
        case 'SET_EMAIL':
            return { ...userInformation, email: action.payload };
        case 'SET_PASSWORD':
            return { ...userInformation, password: action.payload };
        default:
            return userInformation;
    }
}
