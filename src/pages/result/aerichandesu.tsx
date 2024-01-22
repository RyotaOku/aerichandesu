import style from '@/styles/result/aeri.module.css'
import { useState } from 'react'

export default function Main() {
    return (
        <>
            <div className={style.background}></div>
            <MainContent />
            <LeftContent />
        </>
    )
}

function MainContent() {
    return (
        <div className={style.wrap}>
            <h3 className={style.mainTitle}>あなたと相性のいいパートナー</h3>
            <div className={style.partner}>
                <div className={style.carouselWrap}>
                    <div className={style.genreBox}>
                        <picture><img src="/images/visionResult.png" alt="" /></picture>
                        <p className={style.genreTitle}>Engineer A</p>
                        <h4 className={style.genreName} style={{ color: '#AF216E' }}>ビジョンの先導者</h4>
                    </div>
                    <div className={style.genreBox}>
                        <picture><img src="/images/visualResult.png" alt="" /></picture>
                        <p className={style.genreTitle}>Designer SR</p>
                        <h4 className={style.genreName} style={{ color: '#6C4E00' }}>ビジュアルの道化師</h4>
                    </div>
                    <div className={style.genreBox}>
                        <picture><img src="/images/aeriResult.png" alt="" /></picture>
                        <p className={style.genreTitle}>aerichandesu G</p>
                        <h4 className={style.genreName} style={{ color: '#2869A6' }}>aeのMain Rapper</h4>
                    </div>
                    <div className={style.genreBox}>
                        <picture><img src="/images/sovietResult.png" alt="" /></picture>
                        <p className={style.genreTitle}>Soviet Reader SS</p>
                        <h4 className={style.genreName} style={{ color: '#C60000' }}>平和の書記長</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LeftContent() {
    return (
        <div className={style.parentBar}>
            <div className={style.content}>
                <h3 className={style.genre}>オールラウンダー</h3>
                <h2 className={style.resultTitle}>フロントエンドのアート職人</h2>

                <ContentBox title="得意なツール" content="JavaScript, Node.js, React, Docker" iconClassName="pi pi-code" />
                <ContentBox title="興味のある業界" content="IT, システム構築, Webデザイン, UX, UI" iconClassName="pi pi-building" />
                <ContentBox title="キャリアビジョン" content="あなたは技術的なスキルを持ち、創造的な問題解決に興味があり、自己啓発と成長を追求する意欲的なプロフェッショナルであると読み取れます。新しい経験を通じて学び続けることを望んでいます。これらの特性は、あなたが成功するための強固な基盤を形成しています。" iconClassName="pi pi-send" />

                <ContentBox title="結果を共有して、パートナーを見つけましょう" iconClassName="pi pi-comments" shareLink />
                <picture className={style.logoWrap}><img src="/images/iconSet_white.png" alt="" /></picture>
            </div>
        </div>
    )
}

type ContentBoxProps = {
    title: string; // titleに入る文字列
    content?: string | JSX.Element; // contentの文字列
    iconClassName?: string; // アイコンのパス
    shareLink?: boolean; // リンクコピーの有無
}

function ContentBox({ title, content, iconClassName, shareLink }: ContentBoxProps) {
    return (
        <div className={style.contentBox}>
            {iconClassName && <i className={iconClassName}></i>}
            <p className={style.contentTitle}>{title}</p>
            {content && <p>{content}</p>}
            {shareLink && <LinkCopyComponent providedLink='https://ae-design-quest.com/result?=23845sq4tjhnfejnsk' />}
        </div>
    )
};

type LinkCopyComponentProps = {
    providedLink: string;
}


function LinkCopyComponent({ providedLink }: LinkCopyComponentProps) {
    // リンクをstateで管理
    const initialLink = 'https://www.instagram.com/aerichandesu/'

    // クリップボードにコピーする関数
    const copyToClipboard = () => {
        navigator.clipboard.writeText(providedLink).then(() => {
            alert('リンクがクリップボードにコピーされました！');
        });
    };

    return (
        <div className={style.linkCopyWrap}>
            <input type="text" value={providedLink ? providedLink : initialLink} readOnly />
            <button onClick={copyToClipboard} className={'pi pi-link'}></button>
        </div>
    );
};