import style from '@/styles/components/result/status.module.css'

export default function Status() {
    return (
        <div>
            <h3>64%独立性</h3>
            <div className={style.barWrap}>
                <span className={style.barLeft}></span>
                <span className={style.barRight}></span>
            </div>
            <div className={style.textWrap}>
                <div className={style.textLeft}>
                    <p>64%</p>
                    <p>独立性</p>
                </div>
                <div className={style.textRight}>
                    <p>36%</p>
                    <p>チーム作業</p>
                </div>
            </div>
        </div>
    )
}