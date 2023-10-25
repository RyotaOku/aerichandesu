export default function Test01() {
    return (
        <>
            <h3>state,setStateを用いたinputタグを作成しよう</h3>
            <br />
            <p>「結果出力」をクリックしたら、ユーザーの入力した情報を画面に出力する。</p>
            <p>状態の管理には全てstateを用いる。必要に応じてimport宣言・type宣言をする。</p>
            <p>・型のないstate禁止</p>
            <br /><br />

            <input type="text" id={'mail'} placeholder="メールアドレス" style={{ border: '1px solid #000' }} />

            {/* 本当はパスワード欄なら type="pass"であるべきだが、今回は値の確認したいのでこのままで良い。 */}
            <input type="text" id={'pass'} placeholder="パスワード" style={{ border: '1px solid #000' }} />

            <button style={{ background: '#dedede' }}>結果出力</button>

            <p>メールアドレス:{ }</p>
            <p>パスワード:{ }</p>
        </>
    )
}