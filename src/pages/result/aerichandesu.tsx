import style from '@/styles/result/aeri.module.css'
import { useState } from 'react'

export default function Main() {
    return (
        <>
            <title>フロントエンドのアート職人 | aeDesignsQuest</title>
            <div className={style.background}></div>
            <MainContent />
            <LeftContent />
        </>
    )
}

function MainContent() {

    const genreBoxes = [
        {
            imageSrc: '/images/visionResult.png',
            title: 'Engineer A',
            name: 'ビジョンの先導者',
            color: '#AF216E'
        },
        {
            imageSrc: '/images/visualResult.png',
            title: 'Designer SR',
            name: 'ビジュアルの道化師',
            color: '#6C4E00'
        },
        {
            imageSrc: '/images/aeriResult.png',
            title: 'aerichandesu G',
            name: 'aeのMain Rapper',
            color: '#2869A6'
        },
        {
            imageSrc: '/images/sovietResult.png',
            title: 'Soviet Reader SS',
            name: '平和の書記長',
            color: '#C60000'
        }
        // 必要に応じて他のボックスも同様に追加
    ];

    return (
        <div className={style.wrap}>
            <h3 className={style.mainTitle}>あなたと相性のいいパートナー</h3>
            <div className={style.partner}>
                <div className={style.carouselWrap}>
                    {genreBoxes.map((box, index) => (
                        <GenreBox key={index} {...box} />
                    ))}
                </div>
            </div>
            <div className={style.saying}>
                <h4 className={style.sayingContent}>大切なのは、疑問を持つのをやめないこと。好奇心はそれ自体に存在意義があるのだ。</h4>
                <span className={style.sayingSpeaker}>アルベルト・アインシュタイン</span>
            </div>

            <div className={style.explanation}>
                <p>デザインと技術の融合に優れ、美しいウェブ界面の創造に情熱を注いでいます。細部にこだわり、ユーザー体験を第一に考えるあなたの作品は、見た目だけでなく機能面でもユーザーを魅了します。<br /><br />あなたは、ウェブサイトが単なる情報の塊ではなく、一つの芸術作品であるという信念を持っており、それを通じてユーザーに感動を与えることができます。</p>
            </div>
        </div>
    )
}

type GenreBoxProps = {
    imageSrc: string;
    title: string;
    name: string;
    color: string;
}

function GenreBox({ imageSrc, title, name, color }: GenreBoxProps) {
    return (
        <div className={style.genreBox}>
            <picture>
                <img src={imageSrc} alt="" />
            </picture>
            <p className={style.genreTitle}>{title}</p>
            <h4 className={style.genreName} style={{ color: color }}>{name}</h4>
        </div>
    );
}

type CarouselProps = {
    boxes: GenreBoxProps[]; // genreBoxのプロパティの配列
}

function Carousel({ boxes }: CarouselProps) {
    return (
        <div className={style.partner}>
            <div className={style.carouselWrap}>
                {boxes.map((box, index) => (
                    <GenreBox key={index} {...box} />
                ))}
            </div>
        </div>
    );
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