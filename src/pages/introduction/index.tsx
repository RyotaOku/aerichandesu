import style from '@/styles/introduction/index.module.css'
import { Link as Scroll } from 'react-scroll'


function getImagePath(filename: string) {
    return `/images/introduction/${filename}`;
}

type MainConceptProps = {
    children?: React.ReactNode,
    imgAlt: string,
    imgSrc: string,
}

export function MainConcept(props: MainConceptProps) {

    return (
        <div className={style.mainConcept}>
            <picture className={style.mainConceptImg}>
                <img src={getImagePath(props.imgSrc)}
                    alt={props.imgAlt} />
            </picture>
            {/* <p className={style.mainConceptText}>{props.text}</p> */}
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

type FeatureProps = {
    className?: string,
    title: string,
    text: string,
    imgAlt: string,
    imgSrc: string,
}

export function Feature(props: FeatureProps) {
    return (
        <div className={style.feature}>
            <picture className={style.featureImg}>
                <img src={getImagePath(props.imgSrc)}
                    alt={props.imgAlt} />
            </picture>
            <div className={style.featureText}>
                <h3>{props.title}</h3>
                <p >{props.text}</p>
            </div>
        </div>
    )
}

export default function Introduction() {

    return (
        <>
            <div className={style.mainVisual}>
                <div className={style.firstView}>
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


                    <h2>あなたの魅力を最大限引き出す、
                        キャリアプラットフォーム。</h2>
                    <h3>自分を知り、未来を創る。</h3>
                    <p>これは単なるポートフォリオサポートツールではありません。あなたの未来、キャリア、夢を形にするためのマジックボックスです。</p>
                    <a href="#">今すぐ始めよう</a>
                </div>
                <div className={style.decorationWrap} >
                    <div className={style.decoration1}></div>
                </div>

                <div className={style.mainConceptWrap}>
                    <MainConcept imgAlt='' imgSrc='mainConcept1.svg'>
                        <p>ありのままに答えることで真のあなたの想いを引き出すことができます。</p>
                    </MainConcept>
                    <MainConcept imgAlt='' imgSrc='mainConcept2.svg'>
                        <p>道に迷ったなら何度でもここへ
                            帰ってきてください。何度でも
                            お手伝いします。</p>
                    </MainConcept>
                    <MainConcept imgAlt='' imgSrc='mainConcept3.svg'>
                        <p>自分のキャリアマップがわからないなら、自分を知ることから始めましょう。</p>
                    </MainConcept>
                    {/* <MainConcept text={'道に迷ったなら何度でもここへ帰ってきてください。何度でもお手伝いします。'} imgAlt='' imgSrc='mainConcept2.svg' /> */}
                    {/* <MainConcept text={'自分のキャリアマップがわからないなら、自分を知ることから始めましょう。'} imgAlt='' imgSrc='mainConcept3.svg' /> */}
                </div>
                <div>
                    <h2>美しい言葉、魅力的なフレーズ、あなたの真の価値を引き出すアドバイス。すべてがここに。</h2>
                    <div className={style.conceptWrap}>
                        <picture className={style.conceptImg}>
                            <img src={getImagePath("sS1.png")} alt="" />
                        </picture>
                        <div className={style.conceptText}>
                            <h3>必要なのは、ほんの数ステップです。</h3>
                            <p>いくつかの質問に答えるだけで、あなたのための、クオリティーの高いサポートを提供します。</p>
                        </div>
                    </div>

                </div>
            </div>
            <h2>これらの素晴らしい機能が、ひとつに。</h2>
            <div className={style.featuresWrap}>
                <div className={style.featuresWrap}>
                    <Feature title='優れたアシスタント' text='GPT-4を搭載した、優れたAIによって、あなたにあったビジョンを提案することができます。' imgAlt='' imgSrc='feature1.svg' />
                    <Feature title='美しいフレーズ' text='わたしたちで紡ぐ、美しい言葉があなたのポートフォリオを彩ります。' imgAlt='' imgSrc='feature2.svg' />
                </div>
                <div className={style.featuresWrap}>
                    <Feature title='グラフで可視化' text='あなたの傾向を予測し、グラフで数値的に可視化。客観的な視点から、自分を見つめられるでしょう。' imgAlt='' imgSrc='feature3.svg' />
                    <Feature title='最適なアドバイス' text='さらなる高みを目指すあなたへ向けた、次のステップへ進むための道しるべ。' imgAlt='' imgSrc='feature4.svg' />
                </div>
            </div>

        </>
    )
}