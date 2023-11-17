import style from '@/styles/samples/common.module.css'
import modal from '@/styles/samples/honda/modal.module.css'
import { useEffect, useReducer, useState } from 'react'
import { ActionType, reducer, State } from './reducer'
import { log } from 'console'
import { type } from 'os'
import { text } from 'stream/consumers'

function Test01() {
    // 全てに共通: 関数や機能の実装はそれぞれのコンポーネント内で行う。↓
    const [mailInput, setMailInput] = useState("")
    const [passInput, setPassInput] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    // COMMENT: 型定義もできているとなお良し。

    return (
        <div>
            <h2>01.state,setStateを用いたinputタグを作成しよう</h2>
            <div className={style.conditions}>
                <ul>
                    <li>「結果出力」をクリックしたら、ユーザーの入力した情報を画面に出力する。</li>
                </ul>
            </div>

            <input type="text" id={'mail'} value={mailInput} onChange={(e) => {
                setMailInput(e.target.value)
            }} placeholder="メールアドレス" />
            {/* 本当はパスワード欄なら type="pass"であるべきだが、今回は値の確認したいのでこのままで良い。 */}
            <input type="text" id={'pass'} value={passInput} onChange={(e) => {
                setPassInput(e.target.value)
            }} placeholder="パスワード" />

            <button onClick={() => {
                setMail(mailInput)
                setPass(passInput)
            }}>結果出力</button>

            <p>メールアドレス:{mail}</p>
            <p>パスワード:{pass}</p>
        </div>
    )
}

function Test02() {
    const [todoInput, setTodoInput] = useState("")
    const [todoArray, setTodoArray] = useState<string[]>([])

    // COMMENT: 型定義もできているとなお良し。

    return (
        <div>
            <h2>02.state,setStateを用いたtodoリスト Re</h2>
            <div className={style.conditions}>
                <ul>
                    <li>todoリストの中身は配列で管理する。</li>
                    <li>出力には、ul liタグを使用し、mapで描画する。</li>
                    <li>それぞれに削除ボタンもつけ、追加・削除ができるように。</li>
                    <li>追加ボタンをクリック後、inputタグの中身が空になるようにする。</li>
                    <li>inputの中身が空の時には追加できない(=disabled)ようにする。</li>
                </ul>
            </div>

            <input
                type="text"
                id={'todoInput'}
                value={todoInput}
                onChange={(e) => {
                    setTodoInput(e.target.value)
                }} placeholder="todoを入力" />

            <button onClick={() => {
                setTodoArray(prev => [...prev, todoInput])
            }}>追加！</button>

            <p>todoリスト↓</p>
            <ul>
                {todoArray.map((v, idx) => (
                    <li key={idx}>{v}</li>
                    // COMMENT: 削除ボタンがありまへんがな。
                ))}
            </ul>
        </div>
    )
}

function Test03() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    // COMMENT: 名称はこのままで良い？ 「state」だとなんのstateかわからない。

    // const initialState: State = {
    //     count: ''
    // }

    // stateの名前・型も考えよう。このままでは良くないな。

    return (
        <div>
            <h2>03.reducerを用いたstateの変更</h2>
            <div className={style.conditions}>
                <ul>
                    <li>setStateでのstate更新禁止。</li>
                    <li>シンプルなカウンターを作る。</li>
                    <li>resetをクリックしたら、数値が0に戻る。</li>
                </ul>
            </div>

            <p>現在の値は{state.count}です。</p>
            <button onClick={() => dispatch({ type: ActionType.PLUS })}>+1する</button>
            <button onClick={() => dispatch({ type: ActionType.MINUS })}>-1する</button>
            <button onClick={() => dispatch({ type: ActionType.SET, payload: { count: 0 } })}>reset</button>
            {/* COMMENT: RESETボタンをクリックしたらどうなるのだろう。0になるんだよな。0にしかならない。
            それをわざわざpayloadで渡すのはなんでだろう。もし、0以外の数値を渡したら？ RESETボタンなのに、0以外の数値にもなり得る設計?
            */}
        </div>
    )
}

function Test04() {
    // modal要素はコンポーネント化しても良いし、しなくてもよい。
    const [modalFlg, setModalFlg] = useState<boolean>(false)
    type ModalProps = {
        contents: string;
    }
    // COMMENT: コードたちが窮屈だから改行したりして見やすくする癖をつけよう。
    // COMMENT: Modal関数(コンポーネント)はなぜtest04の中にあるのだろう。コンポーネントとして設計しているなら、test04の外にあるのが自然。
    // COMMENT: また、コンポーネント化したいるのにtest04の中になるせいで、test04の中でしか、Modal関数(コンポーネント)を使うことができない。
    function Modal({ contents }: ModalProps) {
        if (!modalFlg) return null;
        else return (
            <div className={modal.overlay} onClick={() => {
                setModalFlg(false)
            }}><div className={modal.modal} onClick={(e) => {
                e.stopPropagation();
                // COMMENT: stopPropagation()はなぜ必要なのだろう。これがないとどうなるのだろう。バブリングを止めるためだと思うが、
                // バブリングが発生する理由を深く考えて、HTML構造から見直した方が良い。overlay>modalの構造だからバブリングが発生する。
                // なら、overlay + modalの構造にすれば、HTML構造からしてもバブリングが発生しないし適切。modal要素がoverlayの子要素である必要はない。
            }
            }>{contents}</div></div>
        )
    }


    return (
        <div>
            <h2>04.stateを用いた「表示・非表示」の切り替え - modal</h2>
            <div className={style.conditions}>
                <ul>
                    <li>ボタンをクリックしたら表示されるモーダルウィンドウを作成する。</li>
                    <li>modalの外側をクリックしたら閉じるように実装。</li>
                    <li>描画するmodalや、その他のスタイルは自分で実装する</li>
                </ul>
            </div>
            <button onClick={() => {
                setModalFlg(true)
            }}>modal表示</button>
            <Modal contents='てすとですてすとてすとですてすとてすとですてすと' />
        </div>
    )
}

function Test05() {

    return (
        <div>
            <h2>05.実際に使用するコンポーネント</h2>
            <div className={style.conditions}>
                <ul>
                    <li>無効状態の切り替え / クリック時の機能 / 表示されるテキスト / 任意のclassName / アクセントカラーの文字・背景の切り替え</li>
                    <li>上記4つの機能を持ったbuttonコンポーネントを作成する。</li>
                    <li>どのようにこのコンポーネントが使用されるか？をしっかり考えた上で実装する。</li>

                </ul>
            </div>
            <Button text='ボタンです' />
        </div>
    )
}

type ButtonProps = {
    disable?: true;
    text: string;
    theme?: string;
}

function Button({ text }: ButtonProps) {
    // buttonコンポーネントの実装はここで行う。
    //　必要に応じて、propsの設定も忘れずに。

    return (
        <>
            <button>{text}</button>
        </>
    )
}

function Test06() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log();
    }, [count])

    return (
        <div>
            <h2>06.useEffect</h2>
            <div className={style.conditions}>
                <ul>
                    <li>useEffectを使って,countの値が更新されるたびに、console.logでcountを表示する。</li>
                    <li>text05で作成したButtonコンポーネントを使って、countを更新する。</li>
                </ul>
            </div>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}></button>
        </div>
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
            <Test05 />
            <Test06 />
        </div>
    )
}