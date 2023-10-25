import style from '@/styles/components/result/status.module.css'
import { statusArray, result } from '@/pages/types/resultTypes'

type Props = {
    status: statusArray
}

export default function Status({ status }: Props) {
    // この関数はアクティブなクラス名を返します。
    function getActiveClass(isLeft: any) {
        if (isLeft) {
            return parseInt(status.leftPercent) > parseInt(status.rightPercent) ? style.active : '';
        } else {
            return parseInt(status.leftPercent) <= parseInt(status.rightPercent) ? style.active : '';
        }
    }

    const leftActiveClass = getActiveClass(true);
    const rightActiveClass = getActiveClass(false);

    return (
        <div>
            <h3 className={style.statusResult}>{status.leftText}</h3>
            <div className={style.barWrap}>
                <span className={`${style.barLeft} ${leftActiveClass}`} style={{ width: status.leftPercent }}></span>
                <span className={`${style.barRight} ${rightActiveClass}`} style={{ width: status.rightPercent }}></span>
            </div>
            <div className={style.textWrap}>
                <div className={`${style.textLeft} ${leftActiveClass}`}>
                    <p>{status.leftPercent}</p>
                    <p>{status.leftText}</p>
                </div>
                <div className={`${style.textRight} ${rightActiveClass}`}>
                    <p>{status.rightPercent}</p>
                    <p>{status.rightText}</p>
                </div>
            </div>
        </div>
    )
}