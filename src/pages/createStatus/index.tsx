import { useState, useEffect } from 'react'
import style from '@/styles/createStatus/index.module.css'
import { CreateStatusHeader } from '@/components/createStatus/header'
import { CreateStatusFrame } from '@/components/common/createStatusFrame'
import { Select } from '@/components/createStatus/select'
import { checkboxContent } from '@/components/createStatus/select'
import { Button } from '@/components/common/button'

type CareerAndSkillProps = {
    setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>,
    selectedOptions: string[]
};

function CareerCategories(props: CareerAndSkillProps) {
    const [state, setState] = useState<checkboxContent[]>([
        {
            image: '/images/checkIcons/designer.png',
            title: 'デザイナー',
            text: '色と形、ストーリーで世界を変える、クリエイティブな冒険者への旅立ちを。',
            weaken: false
        },
        {
            image: '/images/checkIcons/engineer.png',
            title: 'エンジニア',
            text: 'デジタルの世界を形づくる技術者、技術の探求者への挑戦を。',
            weaken: false
        },
        {
            image: '/images/checkIcons/director.png',
            title: 'ディレクター',
            text: 'ビジョンを現実に変える船乗り、大きな航海の指揮者としての航路を。',
            weaken: false
        },
        {
            image: '/images/checkIcons/allRounder.png',
            title: 'オールラウンダー',
            text: '多才な才能でさまざまなチャレンジを受け止める、ジャンルを超えた冒険者へ。',
            weaken: false
        },
        {
            image: '/images/checkIcons/cat.png',
            title: '決めかねています',
            text: '未知の領域を探る好奇心、あなたの可能性は無限大。一緒に見つけましょう。',
            weaken: true
        },
    ]
    )

    return (
        <>
            <h2 className={style.stepTitle}>才能あるあなたのキャリアを彩る、その専門分野を教えてください。</h2>
            <Select multiple={false} fourColumn={false} contents={state} setSelectedOptions={props.setSelectedOptions} selectedOptions={props.selectedOptions} />
        </>
    )
}

function SkillSelection(props: CareerAndSkillProps) {
    const [state, setState] = useState<checkboxContent[]>([
        {
            image: '/images/checkIcons/uiDesign.png',
            title: 'UIデザイン',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/uxDesign.png',
            title: 'UXデザイン',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/.png',
            title: 'グラフィックデザイン',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/printDesign.png',
            title: 'プリントデザイン',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/.png',
            title: 'イラストレーター',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/3dModel.png',
            title: '3Dモデリング',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/motion.png',
            title: 'モーションデザイン',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/branding.png',
            title: 'ブランディング・ロゴ',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/movie.png',
            title: '動画編集',
            text: '',
            weaken: false
        },
        {
            image: '/images/checkIcons/dog.png',
            title: 'その他',
            text: '',
            weaken: false
        }
    ]);

    return (
        <>
            <h2 className={style.stepTitle}>あなたのキャリアのハイライト、それはどのジャンルですか？</h2>
            <Select multiple={true} fourColumn={false} contents={state} setSelectedOptions={props.setSelectedOptions} selectedOptions={props.selectedOptions} />
        </>
    )
}

export default function Main() {
    const [step, setStep] = useState(1)
    const [selectCareer, setSelectCareer] = useState<string[]>([]);
    const maxStep = 6;

    return (
        <CreateStatusFrame>
            <CreateStatusHeader step={step} maxStep={maxStep}
            />
            {step === 1 && <CareerCategories setSelectedOptions={setSelectCareer} selectedOptions={selectCareer} />}
            {step === 2 && <SkillSelection setSelectedOptions={setSelectCareer} selectedOptions={selectCareer} />}

            <Button text={'次へ'} className={style.button} onClick={() => {
                if (step === maxStep) {
                    return
                } else {
                    setStep(step + 1)
                }
            }} />
        </CreateStatusFrame>
    )
}