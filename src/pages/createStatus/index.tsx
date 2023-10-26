import { useState, useEffect, useReducer } from 'react'
import style from '@/styles/createStatus/index.module.css'
import { CreateStatusHeader } from '@/components/createStatus/Header'
import { Frame } from '@/components/common/Frame'
import { Select } from '@/components/createStatus/Select'
import { CheckboxContent } from '@/types/carrierTypes'
import { Button } from '@/components/common/Button'
import { userCareerReducer, userCareerType, Action } from '@/lib/createStatusReducer'
import { createStatusIndexReducer, IndexAction, globalState } from '@/lib/createStatusIndexReducer'
import { getFieldData, getSkillData } from '@/actions/createStatus/actioncreator'

type CareerProps = {
    dispatch: React.Dispatch<Action>,
    selectedOptions: string | string[]
};

type InputVisionProps = {
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
            <h2 className={style.stepTitle}>才能あるあなたのキャリアを彩る、その専門分野を教えてください。</h2>
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
            image: '/images/vision/vision1.png'
        },
        {
            text: '5年後には大手企業のデザインリーダーとして活躍したい',
            image: '/images/vision/vision2.png'
        },
        {
            text: '独立してフリーランスのエンジニアとして多種多様なプロジェクトに携わりたい。',
            image: '/images/vision/vision3.png'
        },
    ]

    return (
        <>
            <h2 className={style.stepTitle}>未来を描く一歩、あなたのビジョンを共有してください。</h2>
            <input type="text" className={style.visionInput} placeholder='大胆に綴ってみましょう' />
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

function SkillSelection(props: SkillProps) {
    const [state, setState] = useState<CheckboxContent[]>([])

    useEffect(() => {
        const data = getSkillData(props.field)
        setState(data)
    }, [])

    return (
        <>
            <h2 className={style.stepTitle}>あなたのキャリアのハイライト、それはどのジャンルですか？</h2>
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
        index: 2,
        maxStep: 6
    }
    const [step, indexDispatch] = useReducer(createStatusIndexReducer, initialIndex)

    const initialState: userCareerType = {
        field: '',
        vision: '',
        skill: [],
        tech: []
    }
    const [userCareer, userCareerDispatch] = useReducer(userCareerReducer, initialState)

    return (
        <Frame>
            <CreateStatusHeader step={step.index} maxStep={step.maxStep} dispatch={indexDispatch} />
            <div style={{ border: '1px solid #000', position: 'fixed', top: 0 }}>
                結果
                <p>{userCareer.field}</p>
                <p>{userCareer.skill}</p>
            </div>
            {step.index === 1 && <CareerCategories dispatch={userCareerDispatch} selectedOptions={userCareer.field} />}
            {step.index === 2 && <InputVision dispatch={userCareerDispatch} />}
            {step.index === 3 && <SkillSelection dispatch={userCareerDispatch} selectedOptions={userCareer.skill} field={userCareer.field} />}

            <Button text={'次へ'} className={style.button} onClick={() => {
                if (step.index === step.maxStep) {
                    return
                } else {
                    indexDispatch({ type: 'NEXT_INDEX' })
                }
            }} />
        </Frame>
    )
}