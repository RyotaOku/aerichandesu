import { useState, useReducer } from 'react'
import style from '@/styles/result/result.module.css'
import Footer from '@/components/result/Footer'
import Status from '@/components/result/StatusData'
import { Frame } from '@/components/common/Frame'
import { statusArray, result } from '@/types/resultTypes'
import { resultIndexReducer, globalStateType, Actions } from '@/lib/resultIndexReducer'

type Props = {
    text: string
}

type FirstResultProps = {
    result: result
}

type OtherResultProps = {
    status: statusArray
}

function FirstResult({ result }: FirstResultProps) {
    return (
        <>
            <h2 className={style.resultTitle}><span>あなたは...</span>{result.title}</h2>
            <picture className={style.imageWrap}><img src="" alt="" /></picture>
            <p className={style.text}>{result.text}</p>
        </>
    )
}

function OtherResult({ status }: OtherResultProps) {
    return (
        <>
            <h2 className={style.subTitle}>{status.title}</h2>
            <div className={style.parent}>
                <picture className={style.subResultImage}><img src="" alt="" /></picture>
                <div className={style.div2}><Status status={status} /></div>
                <div className={style.div3}>
                    <p className={style.statusText}>
                        {status.text}
                    </p>
                </div>
            </div>
        </>
    )
}

const result = {
    title: '万能のスイスアーミーナイフ',
    image: '',
    text: '基本的にどのようなタスクでもこなし、枠にハマった考え方をしない優秀なオールラウンダーです。それぞれの分野にも得意分野があります。',
    status: [
        {
            title: '得意な領域',
            image: '',
            leftText: '独立性',
            leftPercent: '64%',
            rightText: 'チーム作業',
            rightPercent: '36%',
            text: '基本的にどのようなタスクでもこなし、枠にハマった考え方をしない優秀なオールラウンダーです。それぞれの分野にも得意分野があります。'
        },
        {
            title: '論理性と創造性',
            image: '',
            leftText: '分析思考',
            leftPercent: '48%',
            rightText: '創造性',
            rightPercent: '52%',
            text: '基本的にどのようなタスクでもこなし、枠にハマった考え方をしない優秀なオールラウンダーです。それぞれの分野にも得意分野があります。'
        },
        {
            title: '論理性と創造性',
            image: '',
            leftText: '分析思考',
            leftPercent: '22%',
            rightText: '創造性',
            rightPercent: '78%',
            text: '基本的にどのようなタスクでもこなし、枠にハマった考え方をしない優秀なオールラウンダーです。それぞれの分野にも得意分野があります。'
        },
        {
            title: '論理性と創造性',
            image: '',
            leftText: '分析思考',
            leftPercent: '64%',
            rightText: '創造性',
            rightPercent: '36%',
            text: '基本的にどのようなタスクでもこなし、枠にハマった考え方をしない優秀なオールラウンダーです。それぞれの分野にも得意分野があります。'
        },
        {
            title: '論理性と創造性',
            image: '',
            leftText: '分析思考',
            leftPercent: '100%',
            rightText: '創造性',
            rightPercent: '0%',
            text: '基本的にどのようなタスクでもこなし、枠にハマった考え方をしない優秀なオールラウンダーです。それぞれの分野にも得意分野があります。'
        }
    ]
}

export default function Result(props: Props) {
    const initialState: globalStateType = {
        index: 0
    }

    const [activeIndex, dispatch] = useReducer(resultIndexReducer, initialState);

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
            <div className={style.background}>
                <div className={style.wrap}>
                    {activeIndex.index === 0 && <FirstResult result={result} />}
                    {activeIndex.index !== 0 && <OtherResult status={result.status[activeIndex.index - 1]} />}
                    <Footer activeIndex={activeIndex.index} onClick={handleClick} />
                </div>
            </div>
        </Frame>
    )
}