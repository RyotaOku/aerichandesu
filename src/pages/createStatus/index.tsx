import { useState, useEffect, useReducer } from 'react'
import style from '@/styles/createStatus/index.module.css'
import { CreateStatusHeader } from '../../components/createStatus/Header'
import { Frame } from '@/components/common/Frame'
import { Select } from '@/components/createStatus/Select'
import { CheckboxContent } from '@/types/carrierTypes'
import { Button } from '@/components/common/Button'
import { userCareerReducer, userCareerType, Action, questionType } from '@/lib/createStatusReducer'
import { createStatusIndexReducer, IndexAction, globalState, } from '@/lib/createStatusIndexReducer'
import { getFieldData, getQuestionData, getSkillData } from '@/actions/createStatus/actioncreator'
import { AnswerOption, RadioQuestion } from '@/components/createStatus/MbtiRadio'

import styles from '@/styles/result/result.module.css'
import Footer from '@/components/result/Footer'
import Status from '@/components/result/StatusData'
import { statusArray, result } from '@/types/resultTypes'
import { resultIndexReducer, globalStateType, Actions } from '@/lib/resultIndexReducer'

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
        index: 0,
        maxStep: 4
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

    const isFieldEmpty = step.index === 0 && userCareer.field === '';
    const hasUnansweredQuestions = step.index === 2 && userCareer.question.some(q => q.answer === null);
    const isButtonDisabled = isFieldEmpty || hasUnansweredQuestions;

    return (
        <Frame className={step.index === 2 ? style.scrollable : ''}>
            {step.index !== 4 && <CreateStatusHeader className={step.index === 2 ? style.scrollableHeader : ''} step={step.index} maxStep={step.maxStep} dispatch={indexDispatch} />}
            {step.index === 0 && <CareerCategories dispatch={userCareerDispatch} selectedOptions={userCareer.field} />}
            {step.index === 1 && <InputVision vision={userCareer.vision} dispatch={userCareerDispatch} />}
            {step.index === 2 && <Mbti field={userCareer.field} dispatch={userCareerDispatch} question={userCareer.question} />}
            {step.index === 3 && <SkillSelection dispatch={userCareerDispatch} selectedOptions={userCareer.skill} field={userCareer.field} />}
            {step.index === 4 && <Result userCareer={userCareer} />}

            {/* {step.index !== 4 && <Button text={'次へ'}
                disabled={isButtonDisabled}
                className={step.index === 2 ? style.button + ' ' + style.scrollableButton : style.button} onClick={() => {
                    if (step.index === step.maxStep) {
                        return
                    } else {
                        indexDispatch({ type: 'NEXT_INDEX' })
                    }
                }} />} */}
            <Button text={'次へ'}
                className={step.index === 2 ? style.button + ' ' + style.scrollableButton : style.button} onClick={() => {
                    if (step.index === step.maxStep) {
                        return
                    } else {
                        indexDispatch({ type: 'NEXT_INDEX' })
                    }
                }} />
        </Frame>
    )
}















type FirstResultProps = {
    result: result
}

type OtherResultProps = {
    status: questionType,
    imageIndex: number,
    titleIndex: number
}

type resultProps = {
    userCareer: userCareerType
}

function FirstResult({ result }: FirstResultProps) {
    return (
        <>
            <h2 className={styles.resultTitle}><span>あなたは...</span>{result.title}</h2>
            <picture className={styles.imageWrap}><img src="" alt="" /></picture>
            <p className={styles.text}>{result.text}</p>
        </>
    )
}

function OtherResult({ status, imageIndex, titleIndex }: OtherResultProps) {

    const titles = ["内なる探求", "あなたの隠された強み", "心の旅路", "未知なる自己", "発見の瞬間", "心の風景", "あなたの内面の世界", "深層心理の探検", "感情の海", "自己発見の旅", "思考のパターン", "感覚の響き", "直感の光", "夢想と現実", "精神の軌跡"];
    const selectedTitle = titles[titleIndex];

    const images = ["anything.png", "balance.png", "brand.png", "build.png", "code.png", "communication.png", "creative.png", "creator.png", "data.png", "elect.png", "harmony.png", "infinity.png", "jack.png", "leader.png", "road.png", "trend.png", "undraw_fixing_bugs_w7gi.png", "ux.png", "vision.png", "visual.png"]
    // 選択された画像のファイル名
    const selectedImage = images[imageIndex];


    return (
        <>
            <h2 className={styles.subTitle}>
                {/* {status.category} */}
                {selectedTitle}
            </h2>
            <div className={styles.parent}>
                <picture className={styles.subResultImage}><img src={`images/resultImages/${selectedImage}`} alt="" /></picture>
                <div className={styles.div2}><Status status={status} /></div>
                <div className={styles.div3}>
                    <p className={styles.statusText}>
                        {
                            parseInt(status.categoryLeftPercent) >= 55 ? status.resultText.left :
                                parseInt(status.categoryRightPercent) >= 55 ? status.resultText.right :
                                    status.resultText.neutral
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export function Result({ userCareer }: resultProps) {
    const initialState: globalStateType = {
        index: 0
    }

    const result = {
        title: '',
        text: '',
        image: ''
    }

    const [activeIndex, dispatch] = useReducer(resultIndexReducer, initialState);

    const [titles, setTitleIndexes] = useState(() => Array.from({ length: 7 }, () => Math.floor(Math.random() * 15)));
    const [imageIndexes, setImageIndexes] = useState(() => Array.from({ length: 7 }, () => Math.floor(Math.random() * 20)));

    const handleClick = (action: 'NEXT_INDEX' | 'PREV_INDEX' | 'SET_INDEX', index?: number) => {
        switch (action) {
            case 'NEXT_INDEX':
                dispatch({ type: 'NEXT_INDEX' });
                break;
            case 'PREV_INDEX':
                dispatch({ type: 'PREV_INDEX' });
                break;
            case 'SET_INDEX':
                dispatch({ type: 'SET_INDEX', payload: index ?? 0 });
                break;
        };
    }

    return (
        <Frame>
            <div className={styles.background}>
                <div className={styles.wrap}>
                    {activeIndex.index === 0 && <FirstResult result={result} />}
                    {activeIndex.index !== 0 && <OtherResult status={userCareer.question[activeIndex.index]} titleIndex={titles[activeIndex.index - 1]} imageIndex={imageIndexes[activeIndex.index - 1]} />}
                    <Footer activeIndex={activeIndex.index} onClick={handleClick} />
                </div>
            </div>
        </Frame>
    )
}