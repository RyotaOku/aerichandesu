
export type Action =
    { type: 'SHUFFLE' } |
    { type: 'ADD_ARRAY', payload: string } |
    { type: 'SET_TEXT', payload: string } |
    { type: 'REMOVE_ARRAY', payload: number } |
    { type: 'ALL_REMOVE_ARRAY' }

export type State = {
    text: string;  // inputタグのvalue
    textArray: string[];  // シャッフルする前の配列
    shuffleArray: string[];  // シャッフルした後の配列
}

export function orderReducer(state: State, action: Action) {
    switch (action.type) {
        // シャッフル処理を行う
        case 'SHUFFLE':
            // stateのtextArrayをディープコピーして新しい配列arrayを作成
            let array = [...state.textArray];
            // Fisher-Yates（Knuth）シャッフルアルゴリズムを用いて配列をシャッフル
            // iを配列の最後のインデックスから開始し、1まで逆順にループ
            for (let i = array.length - 1; i > 0; i--) {
                // 0からiまでのランダムな整数jを生成
                const j = Math.floor(Math.random() * (i + 1));
                // array[i]とarray[j]を入れ替える（分割代入を使用）
                [array[i], array[j]] = [array[j], array[i]];
            }
            // シャッフル後の配列arrayを新しいstateのshuffleArrayプロパティにセットして返す
            return { ...state, shuffleArray: array };

        // 新しい要素をtextArrayに追加
        case 'ADD_ARRAY':
            return { ...state, textArray: [...state.textArray, action.payload] };

        // textフィールドを更新
        case 'SET_TEXT':
            return { ...state, text: action.payload };

        // 特定の要素をtextArrayから削除
        case 'REMOVE_ARRAY':
            // stateのtextArrayをフィルタリングして新しい配列を作成
            // filterメソッドを使用して、action.payloadで指定されたインデックスの要素だけを除外
            const filteredArray = state.textArray.filter((_, index) => index !== action.payload);
            // フィルタリング後の配列filteredArrayを新しいstateのtextArrayプロパティにセットして返す
            return { ...state, textArray: filteredArray };

        // textArrayの全要素を削除（空配列にする）
        case 'ALL_REMOVE_ARRAY':
            return { ...state, textArray: [] };

        // どれにも該当しない場合は現在のstateをそのまま返す
        default:
            return state;
    }
}
