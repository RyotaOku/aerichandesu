import style from '@/styles/result/aeri.module.css'
import { useState } from 'react'

export default function Main() {
    return (
        <>
            <title>フロントエンドのアート職人 | aeDesignsQuest</title>
            <div className={style.background}></div>
            <MainContent />
            {/* <MainContent2 /> */}
            {/* <MainContent3 /> */}
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
function MainContent2() {

    const HelperServiceBoxs = [
        {
            imageSrc: '/images/github.svg',
            name: 'GitHub',
        },
        {
            imageSrc: '/images/socio.svg',
            name: 'Sociomedia',
        },
        {
            imageSrc: '/images/chatgpt.svg',
            name: 'ChatGPT',
        },
        {
            imageSrc: '/images/figma.svg',
            name: 'Figma',
        },
        {
            imageSrc: '/images/godly.svg',
            name: 'Godly',
        }
        // 必要に応じて他のボックスも同様に追加
    ];

    const NextSteps = [
        {
            number: '1',
            title: 'プロジェクトの経験を積む',
            content: 'JavaScript、Node.js、React、Dockerなどのスキルを活用して、実際のプロジェクトに取り組むことをお勧めします。これは、あなたのスキルを実践的な状況で試す絶好の機会です。また、ポートフォリオを作成するのにも役立ちます。'
        },
        {
            number: '2',
            title: 'UX/UIデザインの学習を深める',
            content: 'Webデザイン、UX、UIに興味があるとのことなので、これらの分野についての知識を深めることをお勧めします。オンラインコースやワークショップを利用すると、理論的な知識と実践的なスキルを同時に習得することができます。'
        },
        {
            number: '3',
            title: 'ネットワーキング',
            content: 'ITやシステム構築の業界での人脈を広げることは、将来的に独立する際に非常に有益です。イベントやミートアップに参加したり、オンラインコミュニティに参加したりすることで、同じ興味を持つ人々とつながることができます。'
        }
    ];

    return (
        <div className={style.wrap}>
            <h3 className={style.mainTitle}>あなたにおすすめの次のステップ</h3>

            <div className={style.nextSteps}>
                {NextSteps.map((box, index) => (
                    <NextStep key={index} {...box} />
                ))}
            </div>
            <h3 className={style.mainTitle}>あなたの学習を手助けするWebサービス</h3>
            <div className={style.partner}>
                <div className={style.carouselWrap}>
                    {HelperServiceBoxs.map((box, index) => (
                        <HelperServiceBox key={index} {...box} />
                    ))}
                </div>
            </div>
        </div>
    )
}
function MainContent3() {

    const CompanyBoxs = [
        {
            imageSrc: '/images/iDesign.png',
            name: 'アイデザインエンターテイメント株式会社',
            content: '「この人と一緒に働きたいという人だけがいる会社」にしたいという採用方針を掲げる当社は、40個以上の認定実績を持ちます。'
        },
        {
            imageSrc: '/images/squareComp.png',
            name: '株）スクエアエンジニアチーム',
            content: '”社会を創るエンジニアリング”を掲げ、革新的なサービスを生み出す仲間を募集しています。2021年ゴットプロダクト賞受賞。'
        },
    ];

    return (
        <div className={style.wrap}>
            <h3 className={style.mainTitle}>これらの会社があなたに興味を示しています</h3>

            <div className={style.companies}>
                {CompanyBoxs.map((box, index) => (
                    <CompanyBox key={index} {...box} />
                ))}
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
type HelperServiceBoxProps = {
    imageSrc: string;
    name: string;
}

function HelperServiceBox({ imageSrc, name }: HelperServiceBoxProps) {
    return (
        <div className={`${style.genreBox} ${style.serviceBox}`}>
            <picture>
                <img src={imageSrc} alt="" />
            </picture>
            <h4 className={style.serviceName}>{name}</h4>
        </div>
    );
}

type NextStepProps = {
    number: string;
    title: string;
    content: string;
}

function NextStep(props: NextStepProps) {
    return (
        <div className={style.nextStep}>
            <p className={style.nextStepNum}>{props.number}</p>
            <div className={style.nextStepText}>
                <h4 className={style.nextStepTitle}>{props.title}</h4>
                <p className={style.nextStepContent}>{props.content}</p>
            </div>
        </div>
    )
}
type CompanyBoxProps = {
    imageSrc: string;
    name: string;
    content: string;
}
function CompanyBox(props: CompanyBoxProps) {
    return (
        <div className={style.companyBox}>
            <picture>
                <img src={props.imageSrc} alt="" />
            </picture>
            <div className={style.nextStepText}>
                <h4 className={style.nextStepTitle}>{props.name}</h4>
                <p className={style.companyBoxContent}>{props.content}</p>
            </div>
        </div>
    )
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
    title: string; // titleに入る文字列x
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