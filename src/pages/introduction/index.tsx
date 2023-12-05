import { useState, useEffect, useReducer } from 'react'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import style from '@/styles/introduction/index.module.css'
import { type } from 'os';
import { Link as Scroll } from 'react-scroll'
import { log } from 'console';


function getImagePath(filename: string) {
    return `/images/introduction/${filename}`;
}

type ButtonProps = {
    darkColor?: boolean,
    url: string,
    text: string,


}
export function Button(props: ButtonProps) {
    return (
        <div className={`${style.button} ${props.darkColor ? style.darkButton : ""}`}>
            <a href={props.url}>
                {props.text}
            </a>
        </div>
    )
}

type introFeatureProps = {
    children?: React.ReactNode,
    imgAlt: string,
    imgSrc: string,
}

export function IntroFeature(props: introFeatureProps) {

    return (
        <div className={style.introFeatureChild}>
            <picture className={style.introFeatureImg}>
                <img src={getImagePath(props.imgSrc)}
                    alt={props.imgAlt} />
            </picture>
            {/* <p className={style.introFeatureText}>{props.text}</p> */}
            {props.children}
        </div>
    )
}

type IntroDetailProps = {
    title: string,
    text: string,
    imgAlt: string,
    imgSrc: string,
}

export function IntroDetail(props: IntroDetailProps) {

    return (
        <div>
            <picture><img src={getImagePath(props.imgSrc)} alt={props.imgAlt} /></picture>
            <div></div>
        </div>
    )
}

type DetailedFunctionProps = {
    className?: string,
    title: string,
    text: string,
    imgAlt: string,
    imgSrc: string,
}

export function DetailedFunction(props: DetailedFunctionProps) {
    return (
        <div className={style.detailedFunction}>
            <picture className={style.detailedFunctionImg}>
                <img src={getImagePath(props.imgSrc)}
                    alt={props.imgAlt} />
            </picture>
            <div className={style.detailedFunctionText}>
                <h3>{props.title}</h3>
                <p >{props.text}</p>
            </div>
        </div>
    )
}

type ServiceDetailProps = {
    children?: React.ReactNode,
    title: string,
    text: string,
    imgAlt: string,
    imgSrc: string,
}

export function ServiceDetail(props: ServiceDetailProps) {
    return (
        <div className={style.serviceDetail}>
            <picture className={style.serviceDetailImg}>
                <img src={getImagePath(props.imgSrc)} alt={props.imgAlt} />
            </picture>
            <div className={style.serviceDetailText}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                {props.children}
            </div>
        </div>
    )
}

// type userProps = {
//     imgAlt: string,
//     imgSrc: string,
// }

// export function UserButton(props: userProps) {
//     return (
//         <button className={style.userButton}>
//             <picture className={style.userButtonImg}><img src={getImagePath(props.imgSrc)} alt={props.imgAlt} /></picture>
//         </button>
//     )
// }




type userProps = {
    imgAlt: string,
    imgSrc: string,
    index: number,
    onClick: (index: number) => void,
    isActive: boolean,
}

const users = [
    {
        imgSrc: 'user1.svg',
        imgAlt: 'user1',
        name: 'Webエンジニア',
        age: '20代',
        gender: '女性',
        comment: 'このサイトを使って診断し、Webエンジニアの道へ進むことを決断しました。それからは悩みに直面する度、ここで自分を見つめ直し、今では大手企業に就職することができました。このサービスにはとても感謝しています。',
    },
    {
        imgSrc: 'user2.svg',
        imgAlt: 'user2',
        name: 'Webデザイナー',
        age: '30代',
        gender: '男性',
        comment: 'このサイトの診断結果が私のキャリアチェンジのきっかけとなりました。Webデザイナーという選択肢を提示してくれ、それが私の新たな道となりました。今では自分のデザインが多くの人々に使われていることに大いなる喜びを感じています。',
    },
    {
        imgSrc: 'user3.svg',
        imgAlt: 'user3',
        name: 'バックエンドエンジニア',
        age: '40代',
        gender: '女性',
        comment: 'このサイトを通じて、自分がバックエンドエンジニアになりたいという想いを強くしました。診断結果が私の可能性を示してくれ、それが私のキャリアのステップアップにつながりました。',
    },
    {
        imgSrc: 'user4.svg',
        imgAlt: 'user4',
        name: 'Webディレクター',
        age: '30代',
        gender: '女性',
        comment: 'このサイトの診断を受けて、自分がWebディレクターになりたいという目標を見つけました。それからは、自分のリーダーシップと創造性を追求することができ、今では自分の指導が多くのプロジェクトを成功に導いていることに誇りを感じています。',
    },
    {
        imgSrc: 'user5.svg',
        imgAlt: 'user5',
        name: 'フルスタックエンジニア',
        age: '30代',
        gender: '男性',
        comment: 'このサイトの診断を受けて、自分がフルスタックエンジニアになりたいという目標を見つけました。それからは、自分の技術と情熱を追求することができ、今では自分のコードが多くのプロジェクトを成功に導いていることに誇りを感じています。',
    },
    {
        imgSrc: 'user6.svg',
        imgAlt: 'user6',
        name: 'データサイエンティスト',
        age: '20代',
        gender: '女性',
        comment: 'このサイトの診断結果が私のキャリアの方向性を見つけるのに大いに役立ちました。データサイエンティストという職業を選んだことで、自分のスキルを活かし、価値ある洞察を提供することができています。',
    },
];

export function UserButton(props: userProps) {
    return (
        <button className={`${style.userButton} ${props.isActive ? style.active : ''}`} onClick={() => props.onClick(props.index)}>
            <picture className={style.userButtonImg}><img src={getImagePath(props.imgSrc)} alt={props.imgAlt} /></picture>
        </button>
    )
}

export function UserTestimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + users.length) % users.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % users.length);
    };

    const handleUserButtonClick = (index: number) => {
        setCurrentIndex(index);
    };

    const currentUser = users[currentIndex];

    return (
        <div className={style.userTestimonialSection}>
            <h2>利用者の声</h2>
            <div className={style.userTestimonial}>
                <div className={style.userDetailWrap}>
                    <button className={style.userDetailNavigation} onClick={handlePrevClick}>
                        <i className={`pi pi-chevron-left ${style.userDetailNavBtn}`} />
                    </button>
                    <div className={style.userDetailContent}>
                        <picture className={style.userDetailImg}><img src={getImagePath(currentUser.imgSrc)} alt="" /></picture>
                        <div className={style.userDetailText}>
                            <h3>{currentUser.name}<span>{currentUser.age} {currentUser.gender}</span></h3>
                            <p>{currentUser.comment}</p>
                        </div>
                    </div>
                    <button className={`${style.userDetailNext} ${style.userDetailNavigation}`} onClick={handleNextClick}>
                        <i className={`pi pi-chevron-right ${style.userDetailNavBtn}`} />
                    </button>
                </div>
                <div className={style.userButtonSection}>
                    {users.map((user, index) => (
                        <UserButton key={index} imgSrc={user.imgSrc} imgAlt={user.imgAlt} index={index} onClick={handleUserButtonClick} isActive={index === currentIndex} />
                    ))}
                </div>
            </div>
        </div>
    );
}



export default function Introduction() {

    return (
        <>
            <div className={style.mainVisual}>
                <nav className={style.navigation}>
                    <h1>Service Name</h1>
                    <ul>
                        <li>
                            <Scroll to='test' smooth>特徴</Scroll>
                        </li>
                        <li>利点</li>
                        <li>利用者の声</li>
                    </ul>
                </nav>


                <div className={style.topView}>
                    <div className={style.topViewText}>
                        <h2>あなたの魅力を最大限引き出す、
                            キャリアプラットフォーム。</h2>
                        <h3>自分を知り、未来を創る。</h3>
                        <p>これは単なるポートフォリオサポートツールではありません。あなたの未来、キャリア、夢を形にするためのマジックボックスです。</p>
                        <Button darkColor url='#' text='今すぐ始めよう' />
                    </div>
                    <picture className={style.topViewImg}><img src={getImagePath("mainVisual.svg")} alt="" /></picture>
                </div>
            </div>

            <div className={style.introFeaturesSection}>
                <div className={style.introFeaturesWrap}>
                    <IntroFeature imgAlt='' imgSrc='introFeature1.svg'>
                        <p>ありのままに答えることで真のあなたの想いを引き出すことができます。</p>
                    </IntroFeature>
                    <IntroFeature imgAlt='' imgSrc='introFeature2.svg'>
                        <p>道に迷ったなら何度でもここへ
                            帰ってきてください。何度でも
                            お手伝いします。</p>
                    </IntroFeature>
                    <IntroFeature imgAlt='' imgSrc='introFeature3.svg'>
                        <p>自分のキャリアマップがわからないなら、自分を知ることから始めましょう。</p>
                    </IntroFeature>
                </div>
                <h2>美しい言葉、魅力的なフレーズ、<br />あなたの真の価値を引き出すアドバイス。<br />すべてがここに。</h2>
            </div>

            <div className={style.serviceDetailsSection}>
                <div className={style.serviceDetailsWrap}>
                    <ServiceDetail
                        imgSrc='sS1.png'
                        imgAlt=''
                        title="必要なのは、ほんの数ステップです。"
                        text="いくつかの質問に答えるだけで、あなたのための、クオリティーの高いサポートを提供します。"
                    />
                    <ServiceDetail
                        imgSrc='sS2.png'
                        imgAlt=''
                        title="あなたのことを教えてください。"
                        text="GPT-4搭載の優れたAIがあなたの強みやキャリアビジョンを言語化。"
                    ><div><p>produced by</p>
                            <picture><img src={getImagePath("OpenAiLogo.svg")} alt="" /></picture>
                        </div></ServiceDetail>
                </div>
            </div>
            <div className={style.detailedFunctionsSection}>
                <h2>これらの素晴らしい機能が、ひとつに。</h2>
                <div className={style.detailedFunctionsWrap}>
                    <div className={style.detailedFunctionsWrap}>
                        <DetailedFunction title='優れたアシスタント' text='GPT-4を搭載した、優れたAIによって、あなたにあったビジョンを提案することができます。' imgAlt='' imgSrc='function1.svg' />
                        <DetailedFunction title='美しいフレーズ' text='わたしたちで紡ぐ、美しい言葉があなたのポートフォリオを彩ります。' imgAlt='' imgSrc='function2.svg' />
                    </div>
                    <div className={style.detailedFunctionsWrap}>
                        <DetailedFunction title='グラフで可視化' text='あなたの傾向を予測し、グラフで数値的に可視化。客観的な視点から、自分を見つめられるでしょう。' imgAlt='' imgSrc='function3.svg' />
                        <DetailedFunction title='最適なアドバイス' text='さらなる高みを目指すあなたへ向けた、次のステップへ進むための道しるべ。' imgAlt='' imgSrc='function4.svg' />
                    </div>
                </div>
            </div>

            <UserTestimonial />

            <h2>さあ、準備は整いましたか？<br />
                私たちと一緒に、あなたのキャリアデザインを<br />
                素敵に彩りましょう！</h2>
            <Button url='#' text='はじめましょう！' />
            <footer className={style.footer}>
                <ul>
                    <li><a href='#'>プライバシー&利用規約</a></li>
                    <li><a href='#'>お問い合わせ</a></li>
                    <li><a href='#'>私たちについて</a></li>
                </ul>

                <p><small>Service Name.inc &copy; 2023</small></p>
            </footer>

        </>
    )
}