import { useState, useEffect, useReducer } from 'react'
import style from '@/styles/createStatus/index.module.css'
import { CreateStatusHeader } from '@/components/createStatus/Header'
import { Frame } from '@/components/common/Frame'
import { Select } from '@/components/createStatus/Select'
import { CheckboxContent } from '@/types/carrierTypes'
import { Button } from '@/components/common/Button'
import { userCareerReducer, userCareerType, Action, questionType } from '@/lib/createStatusReducer'
import { createStatusIndexReducer, IndexAction, globalState, } from '@/lib/createStatusIndexReducer'
import { getFieldData, getQuestionData, getSkillData } from '@/actions/createStatus/actioncreator'
import { AnswerOption, RadioQuestion } from '@/components/createStatus/MbtiRadio'

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

type MbtiProps = {
    field: string,
    question: any[],
    dispatch: React.Dispatch<Action>
}


function Mbti({ field, question, dispatch }: MbtiProps) {

    function mapFieldToCategory(field: string): "designer" | "engineer" | "director" | "allRounder" {
        switch (field) {
            case "デザイナー":
                return "designer";
            case "エンジニア":
                return "engineer";
            case "ディレクター":
                return "director";
            case "オールラウンダー":
                return "allRounder";
            case "決めかねています":
                return "allRounder";
            default:
                return "allRounder"; // デフォルト値
        }
    }

    useEffect(() => {
        const category = mapFieldToCategory(field);
        const data = getQuestionData(category);
        dispatch({ type: 'ADD_QUESTION', payload: data })
    }, [])

    const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);


    return (
        <>
            <h2 className={style.stepTitle}>ありのままの自分で正直に回答してみましょう。</h2>
            <div className={style.questionWrap}>
                {question.map((q, index) => (
                    <RadioQuestion
                        key={index}
                        question={q}
                        dispatch={dispatch}
                        index={index}
                        isActive={activeQuestionIndex === index}
                        setActiveQuestionIndex={setActiveQuestionIndex}
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

    const isFieldEmpty = step.index === 1 && userCareer.field === '';
    const hasUnansweredQuestions = step.index === 3 && userCareer.question.some(q => q.answer === null);
    const isButtonDisabled = isFieldEmpty || hasUnansweredQuestions;

    return (
        <Frame className={step.index === 3 ? style.scrollable : ''}>
            <CreateStatusHeader className={step.index === 3 ? style.scrollableHeader : ''} step={step.index} maxStep={step.maxStep} dispatch={indexDispatch} />
            {/* <div style={{ border: '1px solid #000', position: 'fixed', top: 0, width: '80%', left: '10%', fontSize: '0.6rem', background: '#ffffff88' }}>
                【debug】結果:
                <p>{userCareer.field}</p>
                <p>{userCareer.vision}</p>
                <p>{userCareer.skill}</p>
                <p>{userCareer.tech}</p>
                {userCareer.question.map((v: questionType, idx: number) => (
                    <p key={idx}>{v.text}: {v.answer}</p>
                ))}
            </div> */}
            {step.index === 1 && <CareerCategories dispatch={userCareerDispatch} selectedOptions={userCareer.field} />}
            {step.index === 2 && <InputVision vision={userCareer.vision} dispatch={userCareerDispatch} />}
            {step.index === 3 && <Mbti field={userCareer.field} dispatch={userCareerDispatch} question={userCareer.question} />}
            {step.index === 4 && <SkillSelection dispatch={userCareerDispatch} selectedOptions={userCareer.skill} field={userCareer.field} />}

            <Button text={'次へ'}
                disabled={isButtonDisabled}
                className={step.index === 3 ? style.button + ' ' + style.scrollableButton : style.button} onClick={() => {
                    if (step.index === step.maxStep) {
                        return
                    } else {
                        indexDispatch({ type: 'NEXT_INDEX' })
                    }
                }} />
        </Frame>
    )
}