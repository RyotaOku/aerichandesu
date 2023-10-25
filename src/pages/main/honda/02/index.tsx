export default function Test02() {
    return (
        <>
            <h3>state,setStateを用いたtodoリスト Re</h3>
            <br />
            <p>todoリストの中身は配列で管理する。stateを用いてtodoリストを作成するtodoリストの中身は配列で管理する。</p>
            <p>状態の管理には全てstateを用いる。必要に応じてimport宣言・type宣言をする。</p>
            <p>出力には、ul liタグを使用し、mapで描画する。また、それぞれに削除ボタンもつけ、追加・削除ができるように。</p>
            <p>・型のないstate禁止</p>
            <p>・配列の破壊的なメソッド(push,popなど。詳細はnotionのreact tyページを参照)はそのまま用いない</p>
            <br /><br />

            <input type="text" id={'mail'} placeholder="todoを入力" style={{ border: '1px solid #000' }} />
            <button style={{ background: '#dedede' }}>追加！</button>

            <p>todoリスト↓</p>
        </>
    )
}