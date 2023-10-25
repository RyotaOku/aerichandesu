import { useState, useEffect, useReducer } from 'react'
import style from '@/styles/createStatus/index.module.css'
import { CreateStatusHeader } from '@/components/createStatus/header'
import { CreateStatusFrame } from '@/components/common/Frame'
import { Select } from '@/components/createStatus/select'
import { CheckboxContent } from '@/components/createStatus/select'
import { Button } from '@/components/common/button'
import { userCareerReducer, userCareerType, Action } from './reducer'
import { setUserField, setSkill, setSkillOptions } from './actioncreator'

type CareerAndSkillProps = {
    dispatch: React.Dispatch<Action>, // ここを修正
    selectedOptions: string | string[];  //
};

function CareerCategories(props: CareerAndSkillProps) {
    const [state, setState] = useState<CheckboxContent[]>([
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

    const handleOptionChange = (selectedOptions: string | string[]) => {
        if (Array.isArray(selectedOptions) && selectedOptions.length === 1) {
            props.dispatch(setUserField(selectedOptions[0]));
        } else if (typeof selectedOptions === "string") {
            props.dispatch(setUserField(selectedOptions));
        }
        // 他のロジック...
    };


    return (
        <>
            <h2 className={style.stepTitle}>才能あるあなたのキャリアを彩る、その専門分野を教えてください。</h2>
            <Select
                multiple={false}
                fourColumn={false}
                contents={state}
                setSelectedOptions={handleOptionChange} // この部分を変更しました。
                selectedOptions={props.selectedOptions}
            />
        </>
    );
}

function SkillSelection(props: CareerAndSkillProps) {
    const [state, setState] = useState<CheckboxContent[]>([
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

    const handleOptionChange = (newSelection: string[]) => {
        // newSelectionはクリックされたオプションの配列です（この場合は1つの要素のみ）

        const option = newSelection[0]; // 複数選択を許容しないので、配列は常に1つの要素を持つはずです

        if (props.selectedOptions.includes(option)) {
            // すでに選択されている場合、そのオプションを削除します
            const updatedSelection = props.selectedOptions.filter(item => item !== option);
            props.dispatch(setSkill(updatedSelection));
        } else {
            // それ以外の場合、新しいオプションを追加します
            const updatedSelection = [...props.selectedOptions, option];
            props.dispatch(setSkill(updatedSelection));
        }
    };

    return (
        <>
            <h2 className={style.stepTitle}>あなたのキャリアのハイライト、それはどのジャンルですか？</h2>
            <Select
                multiple={true}
                fourColumn={false}
                contents={state}
                setSelectedOptions={handleOptionChange}
                selectedOptions={props.selectedOptions}
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

    useEffect(() => {
        console.log(userCareer);
    }, [userCareer])

    return (
        <CreateStatusFrame>
            <CreateStatusHeader step={step} maxStep={maxStep}
            />
            {step === 1 && <CareerCategories dispatch={dispatch} selectedOptions={userCareer.field} />}
            {step === 2 && <SkillSelection dispatch={dispatch} selectedOptions={userCareer.skill} />}


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