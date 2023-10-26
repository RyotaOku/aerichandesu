import style from '@/styles/samples/common.module.css'
import { useState } from 'react'

function Test01() {
    // 全てに共通: 関数や機能の実装はそれぞれのコンポーネント内で行う。↓



    return (
        <div>
            <h2>01.state,setStateを用いたinputタグを作成しよう</h2>
            <div className={style.conditions}>
                <ul>
                    <li>「結果出力」をクリックしたら、ユーザーの入力した情報を画面に出力する。</li>
                </ul>
            </div>

            <input type="text" id={'mail'} placeholder="メールアドレス" />

            {/* 本当はパスワード欄なら type="pass"であるべきだが、今回は値の確認したいのでこのままで良い。 */}
            <input type="text" id={'pass'} placeholder="パスワード" />

            <button>結果出力</button>

            <p>メールアドレス:{ }</p>
            <p>パスワード:{ }</p>
        </div>
    )
}

function Test02() {



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

            <input type="text" id={'mail'} placeholder="todoを入力" />
            <button>追加！</button>

            <p>todoリスト↓</p>
        </div>
    )
}

function Test03() {
    // stateの名前・型も考えよう。このままでは良くないな。
    const [state, setState] = useState(0)


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

            <p>現在の値は{state}です。</p>
            <button>+1する</button>
            <button>-1する</button>
            <button>reset</button>
        </div>
    )
}

function Test04() {
    // modal要素はコンポーネント化しても良いし、しなくてもよい。



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
            <button>modal表示</button>
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
            <Button />
        </div>
    )
}

function Button() {
    // buttonコンポーネントの実装はここで行う。
    //　必要に応じて、propsの設定も忘れずに。



    return (
        <></>
    )
}

function Test06() {
    const [count, setCount] = useState(0);

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
            <Button />
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