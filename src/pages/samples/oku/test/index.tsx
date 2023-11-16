import style from '@/styles/samples/common.module.css'
import { useState, useReducer, useEffect } from 'react'
import { countReducer } from './reducer'

function Test01() {
    // 全てに共通: 関数や機能の実装はそれぞれのコンポーネント内で行う。↓

    type userInformationType = {
        mail: string,
        pass: string
    }
    const [userInfo, setUserInfo] = useState<userInformationType>({
        mail: '',
        pass: ''
    })

    const [view, setView] = useState<userInformationType>({
        mail: '',
        pass: ''
    })

    const handleInput = (e: string, kind: string) => {
        switch (kind) {
            case 'mail':
                setUserInfo({
                    ...userInfo,
                    mail: e
                })
                break
            case 'pass':
                setUserInfo({
                    ...userInfo,
                    pass: e
                })
                break
            default: userInfo
        }
    }

    return (
        <div>
            <h2>01.state,setStateを用いたinputタグを作成しよう</h2>
            <div className={style.conditions}>
                <ul>
                    <li>「結果出力」をクリックしたら、ユーザーの入力した情報を画面に出力する。</li>
                </ul>
            </div>

            <input type="text" id={'mail'} value={userInfo.mail} onChange={(e) => {
                handleInput(e.target.value, 'mail')
            }} placeholder="メールアドレス" />

            {/* 本当はパスワード欄なら type="pass"であるべきだが、今回は値の確認したいのでこのままで良い。 */}
            <input type="text" id={'pass'} value={userInfo.pass} onChange={(e) => {
                handleInput(e.target.value, 'pass')
            }} placeholder="パスワード" />

            <button onClick={() => {
                setView({
                    ...view,
                    mail: userInfo.mail,
                    pass: userInfo.pass
                })
            }}>結果出力</button>

            <p>メールアドレス:{view.mail}</p>
            <p>パスワード:{view.pass}</p>
        </div>
    )
}

function Test02() {
    type todoType = {
        text: string,
        list: string[]
    }

    const [todo, setTodo] = useState<todoType>({
        text: '',
        list: []
    })

    return (
        <div>
            <h2>state,setStateを用いたtodoリスト Re</h2>
            <div className={style.conditions}>
                <ul>
                    <li>todoリストの中身は配列で管理する。</li>
                    <li>出力には、ul liタグを使用し、mapで描画する。</li>
                    <li>それぞれに削除ボタンもつけ、追加・削除ができるように。</li>
                    <li>追加ボタンをクリック後、inputタグの中身が空になるようにする。</li>
                </ul>
            </div>

            <input type="text" id={'mail'} value={todo.text} onChange={(e) => {
                setTodo({
                    ...todo,
                    text: e.target.value
                })
            }} placeholder="todoを入力" />
            <button
                disabled={todo.text === ''}
                onClick={() => {
                    setTodo({
                        ...todo,
                        text: '',
                        list: [...todo.list, todo.text]
                    })
                }}>追加！</button>

            <p>todoリスト↓</p>
            <ul>
                {todo.list.map((list, idx) => (
                    <li key={idx}>{list} <button onClick={() => {
                        // deleteするボタン
                        setTodo({
                            ...todo,
                            list: todo.list.filter((_, i) => i !== idx)
                        })

                    }}>削除</button></li>
                ))}
            </ul>
        </div>
    )
}

function Test03() {
    // stateの名前・型も考えよう。このままでは良くないな。
    const [state, dispatch] = useReducer(countReducer, 0)


    return (
        <div>
            <h2>reducerを用いたstateの変更</h2>
            <div className={style.conditions}>
                <ul>
                    <li>setStateでのstate更新禁止。</li>
                    <li>シンプルなカウンターを作る。</li>
                    <li>resetをクリックしたら、数値が0に戻る。</li>
                </ul>
            </div>

            <p>現在の値は{state}です。</p>
            <button onClick={() => {
                dispatch({ type: 'PLUS' })
            }}>+1する</button>
            <button onClick={() => {
                dispatch({ type: 'MINUS' })
            }}>-1する</button>
            <button onClick={() => {
                dispatch({ type: 'RESET' })
            }}>reset</button>
        </div>
    )
}

type modalProps = {
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

function Modal({ setIsShowModal }: modalProps) {
    return (
        <>
            <div style={{
                background: '#000000aa',
                width: '100%',
                height: '100vh',
                position: 'fixed',
                inset: 0,
                cursor: 'pointer'
            }}
                onClick={() => { setIsShowModal(false) }}>
            </div>
            <div style={{
                position: 'fixed',
                inset: 0,
                margin: 'auto',
                background: '#fff',
                width: '60%',
                height: '60%',
                borderRadius: '6px'
            }}></div>
        </>
    )
}

function Test04() {
    // modal要素はコンポーネント化しても良いし、しなくてもよい。
    const [isShowModal, setIsShowModal] = useState<boolean>(false)

    return (
        <div>
            <h2>stateを用いた「表示・非表示」の切り替え - modal</h2>
            <div className={style.conditions}>
                <ul>
                    <li>ボタンをクリックしたら表示されるモーダルウィンドウを作成する。</li>
                    <li>modalの外側をクリックしたら閉じるように実装。</li>
                    <li>描画するmodalや、その他のスタイルは自分で実装する</li>
                </ul>
            </div>
            <button onClick={() => { setIsShowModal(true) }}>modal表示</button>
            {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
        </div >
    )
}

export default function Main() {
    return (
        <div className={style.wrap}>
            <header><h1>Homework</h1></header>
            <div>
                <h2>全てに共通したルール</h2>
                <div className={style.conditions} style={{ marginBottom: 0 }}>
                    <ul>
                        <li>型が明示されていないstate、変数・定数は用いない。</li>
                        <li>必要に応じてtype宣言、import文を記述する。</li>
                        <li>classNameはmodule.cssを用いた形式で記述する。</li>
                        <li>配列操作において、破壊的なメソッド<small>(push,popなど。詳細はnotionのreact tsページを参照)</small>はそのまま用いない。</li>
                        <li>copilot使用禁止。してもいいっちゃいいけど力にならない。</li>
                    </ul>
                </div>
            </div>
            <Test01 />
            <Test02 />
            <Test03 />
            <Test04 />
            {/* <Test05 /> */}
            {/* <Test06 /> */}
        </div>
    )
}