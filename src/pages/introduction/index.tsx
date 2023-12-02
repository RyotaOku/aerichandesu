import style from '@/styles/introduction/index.module.css'
import { type } from 'os';
import { Link as Scroll } from 'react-scroll'


function getImagePath(filename: string) {
    return `/images/introduction/${filename}`;
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
    title: string;
    text: string;
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


                <div>
                    <h2>あなたの魅力を最大限引き出す、
                        キャリアプラットフォーム。</h2>
                    <h3>自分を知り、未来を創る。</h3>
                    <p>これは単なるポートフォリオサポートツールではありません。あなたの未来、キャリア、夢を形にするためのマジックボックスです。</p>
                    <a href="#">今すぐ始めよう</a>
                </div>
                <picture><img src={getImagePath("mainVisual.svg")} alt="" /></picture>
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
            {/* <introFeature text={'道に迷ったなら何度でもここへ帰ってきてください。何度でもお手伝いします。'} imgAlt='' imgSrc='introFeature2.svg' /> */}
            {/* <introFeature text={'自分のキャリアマップがわからないなら、自分を知ることから始めましょう。'} imgAlt='' imgSrc='introFeature3.svg' /> */}

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

            <div className={style.userTestimonialSection}>
                <h2>利用者の声</h2>
                <div>
                    <div>
                    </div>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>

            <h2>さあ、準備は整いましたか？
                私たちと一緒に、あなたのキャリアデザインを
                素敵に彩りましょう！</h2>
            <a href="#">今すぐ始めよう</a>

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