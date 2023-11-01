import { Action } from './reducer'

export async function getUserName(dispatch: React.Dispatch<Action>, pass: string) {

    // リクエスト開始のアクションを発行
    dispatch({ type: 'USERNAME_REQUEST' });

    try {
        const res = await fetch('/api/samples/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify({ pass }),
        });

        if (!res.ok) {
            throw new Error('Server error');
        }

        const result = await res.json();

        // 成功のアクションを発行
        dispatch({ type: 'USERNAME_SUCCESS', payload: result.result });

    } catch (error) {
        // 失敗のアクションを発行
        dispatch({ type: 'USERNAME_FAILURE' });
    } finally {

    }
}