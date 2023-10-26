import { useState, useEffect, useReducer } from 'react'
import style from '@/styles/createStatus/index.module.css'
import { CreateStatusHeader } from '@/components/createStatus/Header'
import { Frame } from '@/components/common/Frame'
import { Select } from '@/components/createStatus/Select'
import { CheckboxContent } from '@/types/carrierTypes'
import { Button } from '@/components/common/Button'
import { userCareerReducer, userCareerType, Action } from '../../lib/createStatusReducer'
import { getFieldData, getSkillData } from '@/actions/createStatus/actioncreator'

type CareerProps = {
    dispatch: React.Dispatch<Action>,
    selectedOptions: string | string[]
};

type SkillProps = {
    dispatch: React.Dispatch<Action>,
    selectedOptions: string | string[]
    field: 'designer' | 'engineer' | 'director' | 'allRounder' | 'other' | string
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
            {step === 2 && <SkillSelection dispatch={dispatch} selectedOptions={userCareer.skill} field={userCareer.field} />}

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