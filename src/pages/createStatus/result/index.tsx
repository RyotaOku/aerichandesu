import style from '@/styles/createStatus/result/result.module.css'
import Footer from 'components/createStatus/result/footer'
import { useState } from 'react'
import Status from 'components/createStatus/result/status'
import { CreateStatusFrame } from '@/components/common/createStatusFrame'
import { statusArray, result } from '@/pages/types/resultTypes'

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
                    </p></div>
            </div>
        </>
    )
}

export default function Result(props: Props) {
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
            }
        ]
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const [page, setPage] = useState<number>(0)

    const handleClick = (index: number) => {
        setActiveIndex(index);  // クリックされたインデックスをアクティブにする
    };

    return (
        <CreateStatusFrame>
            <div className={style.background}>
                <div className={style.wrap}>
                    {page === 0 && <FirstResult result={result} />}
                    {page !== 0 && <OtherResult status={result.status[page - 1]} />}
                    <button onClick={() => { setPage(page + 1) }}>next level</button>
                    <Footer activeIndex={activeIndex} onClick={handleClick} />
                </div>
            </div>
        </CreateStatusFrame>
    )
}