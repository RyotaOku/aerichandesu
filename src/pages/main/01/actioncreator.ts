export function change(string: string) {
    return {
        type: 'SET_USERNAME',
        payload: string
    };
}