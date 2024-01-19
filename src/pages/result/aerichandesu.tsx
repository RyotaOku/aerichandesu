import style from '@/styles/result/aeri.module.css'

export default function Main() {
    return (
        <>
            <div className={style.background}></div>
            <div className={style.wrap}></div>
            <div className={style.parentBar}>
                <div className={style.content}>
                    <h3 className={style.genre}>オールラウンダー</h3>
                    <h2 className={style.resultTitle}>フロントエンドのアート職人</h2>
                    <div className={style.contentBox}>
                        <p className={style.contentTitle}>得意なツール</p>
                        <p>JavaScript, Node.js, React, Docker</p>
                    </div>
                    <div className={style.contentBox}>
                        <p className={style.contentTitle}>興味のある業界</p>
                        <p>IT, システム構築, Webデザイン, UX, UI</p>
                    </div>
                    <div className={style.contentBox}>
                        <p className={style.contentTitle}>キャリアビジョン</p>
                        <p></p>
                    </div>

                </div>
            </div>
        </>
    )
}