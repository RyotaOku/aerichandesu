export type Action =
    | { type: ActionType.PLUS }
    | { type: ActionType.MINUS }
    | { type: ActionType.SET; payload: { count: number } };
// COMMENT: PLUS MINUSまでは良いが、SETとはなんだろうか。画面上のボタンではresetではないだろうか。
// 意図してpayloadで値を渡しているとしても、画面側にユーザーが任意の数値を入れられるようなUIがあるのだろうか。
// ないのであれば、SETの持つ意味はないのではないか。「任意の数値を渡せるが、画面上は0になるボタンとして存在」になっているのではないか。

// export type State = {count:number}

// export function reducer(state: State, action:Action):

// COMMENT: enumの併用は意図している？　この場合、Action actionType [action名]というように、名前が重複するというデメリットも発生。
// 文字列での定義の場合、Action type 'action名'というように冗長ではなくなる。

// COMMENT: enumを使用した場合のメリット
// 整理された構造: アクションタイプが列挙型でまとめられており、関連するアクションが一箇所にまとまる。
// 名前空間の利用: 重複を避けるための一貫した名前空間が提供される。
// 型安全性: TypeScriptの型システムにより、アクションタイプの間違った使用を防ぐことができる。

// COMMENT: 文字列で列挙型を定義した場合のメリット
// 明確性: アクションのタイプが直接的な文字列として定義されており、コードを読む際に直感的に理解しやすい。
// 自動補完: 多くのIDEでは、文字列ベースのアクションタイプの自動補完がサポートされている。
// デバッグしやすい: ログやデバッグツールでアクションタイプを見たときに、直接的な文字列が表示されるため理解しやすい。

// これらを頭に入れた上で、上手に使い分けているか、互いの利点を理解しているかを確認する。

export enum ActionType {
    PLUS,
    MINUS,
    SET,
}

export type State = {
    count: number;
};

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case ActionType.PLUS:
            return {
                ...state,
                count: state.count + 1,
            };
        case ActionType.MINUS:
            return {
                ...state,
                count: state.count - 1,
            };
        case ActionType.SET:
            return {
                ...state,
                count: action.payload.count,
            };
    }
}
