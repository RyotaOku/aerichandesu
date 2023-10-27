import { useState, useEffect, useReducer } from 'react'
import style from '@/styles/createStatus/index.module.css'
import { CreateStatusHeader } from '@/components/createStatus/Header'
import { Frame } from '@/components/common/Frame'
import { Select } from '@/components/createStatus/Select'
import { CheckboxContent } from '@/types/carrierTypes'
import { Button } from '@/components/common/Button'
import { userCareerReducer, userCareerType, Action, questionType } from '@/lib/createStatusReducer'
import { createStatusIndexReducer, IndexAction, globalState, } from '@/lib/createStatusIndexReducer'
import { getFieldData, getSkillData } from '@/actions/createStatus/actioncreator'

type CareerProps = {
    dispatch: React.Dispatch<Action>,
    selectedOptions: string | string[]
};

type InputVisionProps = {
    vision: string,
    dispatch: React.Dispatch<any>,
}

type SkillProps = {
    dispatch: React.Dispatch<Action>,
    selectedOptions: string | string[]
    field: string
}

function CareerCategories(props: CareerProps) {
    const [state, setState] = useState<CheckboxContent[]>([])

    useEffect(() => {
        const data = getFieldData()
        setState(data)
    }, [])

    return (
        <>
            <h2 className={style.stepTitle + ' ' + style.fieldTitle}>才能あるあなたのキャリアを彩る、その専門分野を教えてください。</h2>
            <Select
                multiple={false}
                fourColumn={false}
                contents={state}
                selectOptions={props.selectedOptions}
                dispatch={props.dispatch}
                updateType={'SET_USER_FIELD'}
            />
        </>
    );
}

function InputVision(props: InputVisionProps) {
    const vision = [
        {
            text: '3年以内に自分のスタートアップを立ち上げ、革新的なサービスを提供したい。',
            image: '/images/visions/vision1.png'
        },
        {
            text: '5年後には大手企業のデザインリーダーとして活躍したい',
            image: '/images/visions/vision2.png'
        },
        {
            text: '独立してフリーランスのエンジニアとして多種多様なプロジェクトに携わりたい。',
            image: '/images/visions/vision3.png'
        },
    ]

    return (
        <>
            <h2 className={style.stepTitle + ' ' + style.fieldTitle}>未来を描く一歩、あなたのビジョンを共有してください。</h2>
            {/* TODO 自動的にフォーカスが当たった状態に。focus時のstyle */}
            <input type="text" className={style.visionInput} placeholder='大胆に綴ってみましょう' value={props.vision} onChange={(e) => {
                props.dispatch({ type: 'SET_USER_VISION', payload: e.target.value })
            }} />
            <p className={style.visionText}>以下がその参考になるかもしれません。</p>
            <div className={style.visionsWrap}>
                {vision.map((v, idx) => (
                    <div key={idx} className={style.vision}>
                        <p>{v.text}</p>
                        <picture><img src={v.image} alt="" /></picture>
                    </div>
                ))}
            </div>
        </>
    )
}

type RadioQuestionProps = {
    question: questionType;
    onChange: (answer: AnswerOption | null) => void;
};

enum AnswerOption {
    StronglyAgree = 'StronglyAgree',
    Agree = 'Agree',
    SomewhatAgree = 'SomewhatAgree',
    Neutral = 'Neutral',
    SomewhatDisagree = 'SomewhatDisagree',
    Disagree = 'Disagree',
    StronglyDisagree = 'StronglyDisagree',
}

function RadioQuestion({ question, onChange }: RadioQuestionProps) {
    const [selected, setSelected] = useState<number | null>(null);



    return (
        <div>
            <p>{question.text}</p>
            {Object.values(AnswerOption).map((answerOption, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        name={question.text}
                        value={answerOption}
                        checked={question.answer === answerOption}
                        onChange={(e) => onChange(e.target.value as AnswerOption)}
                    />
                    <span className="radio-circle"></span>
                </label>
            ))}
        </div>
    );
}




function Mbti() {
    const [state, setState] = useState({})

    const handleAnswerChange = (index: number, answer: AnswerOption | null) => {
        const newQuestions = [...userCareer.question];
        newQuestions[index].answer = answer;
        setUserCareer(prev => ({ ...prev, question: newQuestions }));
    }

    return (
        <>
            <h2 className={style.stepTitle}>ありのままの自分で正直に回答してみましょう。</h2>
            <div className={style.questionWrap}>
                <h3>デザインは、見た目よりも使いやすさ・機能性が重要だ</h3>
                {userCareer.question.map((q, index) => (
                    <RadioQuestion
                        key={index}
                        question={q}
                        onChange={(answer) => handleAnswerChange(index, answer)}
                    />
                ))}
            </div>
        </>
    )
}

function SkillSelection(props: SkillProps) {
    const [state, setState] = useState<CheckboxContent[]>([])

    useEffect(() => {
        const data = getSkillData(props.field)
        setState(data)
    }, [])

    return (
        <>
            <h2 className={style.stepTitle}>最後です！あなたを彩るハイライトはどのジャンルですか？</h2>
            <Select
                multiple={true}
                fourColumn={false}
                contents={state}
                selectOptions={props.selectedOptions}
                dispatch={props.dispatch}
                updateType={'SET_USER_SKILL'}
            />
        </>
    )
}

export default function Main() {
    const initialIndex: globalState = {
        index: 1,
        maxStep: 6
    }
    const [step, indexDispatch] = useReducer(createStatusIndexReducer, initialIndex)

    const initialState: userCareerType = {
        field: '',
        vision: '',
        skill: [],
        tech: [],
        question: []
    }
    const [userCareer, userCareerDispatch] = useReducer(userCareerReducer, initialState)

    return (
        <Frame>
            <CreateStatusHeader step={step.index} maxStep={step.maxStep} dispatch={indexDispatch} />
            <div style={{ border: '1px solid #000', position: 'fixed', top: 0, width: '80%', left: '10%' }}>
                【debug】結果:
                <p>{userCareer.field}</p>
                <p>{userCareer.vision}</p>
                <p>{userCareer.skill}</p>
                <p>{userCareer.tech}</p>
            </div>
            {step.index === 1 && <CareerCategories dispatch={userCareerDispatch} selectedOptions={userCareer.field} />}
            {step.index === 2 && <InputVision vision={userCareer.vision} dispatch={userCareerDispatch} />}
            {/* {step.index === 3 && <Mbti />} */}
            {step.index === 3 && <SkillSelection dispatch={userCareerDispatch} selectedOptions={userCareer.skill} field={userCareer.field} />}

            <Button text={'次へ'} disabled={userCareer.field === ''} className={style.button} onClick={() => {
                if (step.index === step.maxStep) {
                    return
                } else {
                    indexDispatch({ type: 'NEXT_INDEX' })
                }
            }} />
        </Frame>
    )
}