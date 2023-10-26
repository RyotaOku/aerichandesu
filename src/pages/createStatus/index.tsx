import { useState, useEffect, useReducer } from 'react'
import style from '@/styles/createStatus/index.module.css'
import { CreateStatusHeader } from '@/components/createStatus/Header'
import { Frame } from '@/components/common/Frame'
import { Select } from '@/components/createStatus/Select'
import { CheckboxContent } from '@/components/createStatus/Select'
import { Button } from '@/components/common/Button'
import { userCareerReducer, userCareerType, Action } from '../../lib/createStatusReducer'
// import { setUserField, setSkill, setSkillOptions } from '../../actions/createStatus/actioncreator'

type CareerAndSkillProps = {
    dispatch: React.Dispatch<Action>,
    selectedOptions: string | string[]
};

function CareerCategories(props: CareerAndSkillProps) {
    const data: CheckboxContent[] = [
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

    return (
        <>
            <h2 className={style.stepTitle}>才能あるあなたのキャリアを彩る、その専門分野を教えてください。</h2>
            <Select
                multiple={false}
                fourColumn={false}
                contents={data}
                selectOptions={props.selectedOptions}
                dispatch={props.dispatch}
                updateType={'SET_USER_FIELD'}
            />
        </>
    );
}

function SkillSelection(props: CareerAndSkillProps) {
    const data: CheckboxContent[] = [
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
    ];

    return (
        <>
            <h2 className={style.stepTitle}>あなたのキャリアのハイライト、それはどのジャンルですか？</h2>
            <Select
                multiple={true}
                fourColumn={false}
                contents={data}
                selectOptions={props.selectedOptions}
                dispatch={props.dispatch}
                updateType={'SET_USER_SKILL'}
            />
        </>
    )
}

export default function Main() {
    const [step, setStep] = useState(1)
    const maxStep = 6;

    const initialState: userCareerType = {
        field: '',
        skill: [],
        tech: []
    }

    const [userCareer, dispatch] = useReducer(userCareerReducer, initialState)

    return (
        <Frame>
            <CreateStatusHeader step={step} maxStep={maxStep}
            />
            <div style={{ border: '1px solid #000' }}>
                結果
                <p>{userCareer.field}</p>
                <p>{userCareer.skill}</p>
            </div>
            {step === 1 && <CareerCategories dispatch={dispatch} selectedOptions={userCareer.field} />}
            {step === 2 && <SkillSelection dispatch={dispatch} selectedOptions={userCareer.skill} />}

            <Button text={'次へ'} className={style.button} onClick={() => {
                if (step === maxStep) {
                    return
                } else {
                    setStep(step + 1)
                }
            }} />
        </Frame>
    )
}