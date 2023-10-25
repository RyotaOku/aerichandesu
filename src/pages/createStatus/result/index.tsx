import style from '@/styles/createStatus/result/result.module.css'
import Footer from 'components/createStatus/result/footer'
import { useState } from 'react'
import Status from 'components/createStatus/result/status'

type Props = {
    text: string
}

export default function Result(props: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);  // クリックされたインデックスをアクティブにする
    };

    return (
        <div className={style.background}>
            <div className={style.wrap}>
                {/* <h2 className={style.resultTitle}><span>あなたは...</span>万能のスイスアーミーナイフ</h2> */}
                {/* <picture className={style.imageWrap}><img src="" alt="" /></picture> */}
                {/* <p className={style.text}>基本的にどのようなタスクでもこなし、枠にハマった考え方をしない優秀なオールラウンダーです。それぞれの分野にも得意分野があります。</p> */}
                <h2 className={style.subTitle}>得意な領域</h2>
                <div className={style.parent}>
                    <picture className={style.subResultImage}><img src="" alt="" /></picture>
                    <div className={style.div2}><Status /></div>
                    <div className={style.div3}><p className={style.statusText}>
                        基本的にどのようなタスクでもこなし、枠にハマった考え方をしない優秀なオールラウンダーです。それぞれの分野にも得意分野があります。それぞれの分野にも得意分野があります。
                    </p></div>
                </div>
                <Footer activeIndex={activeIndex} onClick={handleClick} />
            </div>
        </div >
    )
}