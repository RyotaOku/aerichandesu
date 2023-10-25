import { useState } from 'react'

export default function Test04() {

    return (
        <>
            <h3>stateを用いた「表示・非表示」の切り替え - modal</h3>
            <br />
            <p>ボタンをクリックしたら表示されるモーダルウィンドウを作成する</p>
            <p>modalの外側をクリックしたら閉じるように実装</p>
            <p>・型のないstate禁止</p>
            <br /><br />

            <button style={{ background: '#dedede' }}>modal表示</button>
        </>
    )
}