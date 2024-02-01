import { useReducer, useRef } from 'react';
import style from '@/styles/samples/oku/04.module.css'
import { State, orderReducer, Action } from './reducer';

// Headerコンポーネントの引数の型を定義
type HeaderProps = {
    children?: React.ReactNode // headerのコンテンツは文字列ではなく、ReactNode型(HTML要素)で受け取る
}

function Header({ children }: HeaderProps) {
    return (
        <header className={style.header}>
            {children}
        </header>
    )
}

// Controlコンポーネントの引数の型を定義
type ControlProps = {
    state: State  // inputタグのvalue、現在の配列の状態を受け取る
    dispatch: React.Dispatch<Action>  // stateを更新するためのdispatch関数を受け取る
}

function Control({ state, dispatch }: ControlProps) {
    // refオブジェクトを作成。文字列を配列に追加後、inputに再びフォーカスするために使用
    const inputRef = useRef<HTMLInputElement>(null)

    // inputが変更された時に呼び出される関数
    const handleInput = (value: string) => {
        dispatch({ type: 'SET_TEXT', payload: value })
    }

    // 文字列を配列に追加する関数
    const addArray = () => {
        if (state.text !== '') {
            dispatch({ type: 'ADD_ARRAY', payload: state.text })
            // すぐに文字列を追加できるように、inputのvalueを空にして、inputにフォーカスする
            dispatch({ type: 'SET_TEXT', payload: '' })
            inputRef.current?.focus()
        }
    }

    // 文字列をシャッフルする関数
    const shuffleArray = () => {
        dispatch({ type: 'SHUFFLE' })
    }

    return (
        <div className={style.control}>
            <h3>文字列を入力</h3>
            <div className={style.textWrap}>
                <input type="text" ref={inputRef} className={''} value={state.text} onChange={(e) => { handleInput(e.target.value) }} />
                <button className={style.button} onClick={addArray}>→</button>
            </div>
            {/* 入力した文字列を確認するためのlistコンポーネント。list内で追加した文字列の削除が
            できるようにdispatchを引数に渡しておく。文字列の一括削除機能はここでは必要なのでallRemoveはtrue(省略の記述方法で)。
             */}
            <List list={state.textArray} dispatch={dispatch} allRemove />
            <button className={style.shuffle} onClick={shuffleArray}>らんだむ</button>
        </div>
    )
}

type ListProps = {
    list: string[]  // listとして表示するベースとなる配列
    dispatch?: React.Dispatch<Action>,  // 配列を操作する場合はdispatch関数を受け取る
    allRemove?: boolean,  // 配列の一括削除ボタンを表示するかどうか
    order?: boolean, // 要素の順番を表示するかどうか
}

// 現在の文字列の配列、結果の出力画面に使えるListコンポーネント
function List({ list, dispatch, allRemove, order }: ListProps) {
    // 配列の要素を削除する関数
    const removeArray = (idx: number) => {
        if (dispatch) {
            dispatch({ type: 'REMOVE_ARRAY', payload: idx })
        }
    }

    // 配列の要素を全て削除する関数
    const allRemoveArray = () => {
        if (dispatch) {
            dispatch({ type: 'ALL_REMOVE_ARRAY' })
        }
    }

    return (
        <>
            {/* ここは正直もっとスマートな書き方あるけど、いったんこれで。
        order(順番表示)がtrueの場合、ol要素で描画し、それぞれに連番を振る。 */}
            {order &&
                <>
                    <ol className={style.namesList}>
                        {/* 引数でやってきた配列をmapで描画 */}
                        {list.map((v, idx) => (
                            <li key={idx}>{v}
                                {/* dispatchが引数として渡ってきている = 削除する考慮がある状態。
                            その場合のみ、それぞれのlistには削除ボタンを表示 */}
                                {dispatch && <button onClick={() => removeArray(idx)}>削除</button>}
                            </li>
                        ))}
                    </ol>
                    {/* all　Removeがtrueのときのみ一括削除を実装
                    (ではallRemoveがtrueのときはdispatch引数は必須になるべきだが...。気づかなかったことにしよう。)
                    */}
                    {allRemove && <button className={style.reset} onClick={allRemoveArray}>一括削除</button>}
                </>
            }
            {/* orderがfalseなら、ul要素で単純に箇条。 */}
            {!order &&
                <>
                    <ul className={style.namesList}>
                        {list.map((v, idx) => (
                            <li key={idx}>{v}
                                {dispatch && <button onClick={() => removeArray(idx)}>削除</button>}
                            </li>
                        ))}
                    </ul>
                    {allRemove && <button className={style.reset} onClick={allRemoveArray}>一括削除</button>}
                </>
            }
        </>
    )
}

type resultProps = {
    resultArray: string[]
}

// 結果を単純に描画するだけのコンポーネント
function Result({ resultArray }: resultProps) {
    return (
        <div className={style.result}>
            {/* 結果は順番表示する必要があるのでorderはtrue */}
            <List list={resultArray} order />
        </div>
    )
}

export default function Main() {
    // 初期値を定義。型はreducers.tsで定義したState型
    const initialState: State = {
        text: '',
        textArray: [],  // type Stateで定義したtextArrayの型はstring[]なのでneverにはならない
        shuffleArray: []  // シャッフル後の配列。
    }

    const [state, dispatch] = useReducer(orderReducer, initialState)

    return (
        <div className={style.wrap}>
            <Header>
                <h1>順番くん - with Honda</h1>
            </Header>
            <Control state={state} dispatch={dispatch} />
            <Result resultArray={state.shuffleArray} />
        </div>
    )
}