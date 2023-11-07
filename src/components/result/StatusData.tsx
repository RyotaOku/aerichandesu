import { questionType } from '@/lib/createStatusReducer';
import style from '@/styles/components/result/statusData.module.css'
import { statusArray, result } from '@/types/resultTypes'

type Props = {
    status: questionType
}

export default function Status({ status }: Props) {

    const leftPercent = parseInt(status.categoryLeftPercent.replace('%', ''), 10);
    const rightPercent = parseInt(status.categoryRightPercent.replace('%', ''), 10);

    let displayCategory;

    if (leftPercent > rightPercent) {
        // 文字列 "~~vs~~" から "~~" の部分を取得
        displayCategory = status.category.split("vs")[0].trim();
    } else if (rightPercent > leftPercent) {
        // 文字列 "~~vs~~" から "~~" の部分を取得
        displayCategory = status.category.split("vs")[1].trim();
    } else {
        // 両方のパーセントが同じ場合
        displayCategory = "ニュートラル";
    }

    // この関数はアクティブなクラス名を返します。
    function getActiveClass(isLeft: boolean) {
        if (isLeft) {
            return parseInt(status.categoryLeftPercent) > parseInt(status.categoryRightPercent) ? style.active : '';
        } else {
            return parseInt(status.categoryLeftPercent) <= parseInt(status.categoryRightPercent) ? style.active : '';
        }
    }

    const leftActiveClass = getActiveClass(true);
    const rightActiveClass = getActiveClass(false);

    return (
        <div>
            <h3 className={style.statusResult}>{displayCategory}</h3>
            <div className={style.barWrap}>
                <span className={`${style.barLeft} ${leftActiveClass}`} style={{ width: status.categoryLeftPercent }}></span>
                <span className={`${style.barRight} ${rightActiveClass}`} style={{ width: status.categoryRightPercent }}></span>
            </div>
            <div className={style.textWrap}>
                <div className={`${style.textLeft} ${leftActiveClass}`}>
                    <p>{status.categoryLeftPercent}</p>
                    <p>{status.category.split('vs')[0]}</p>
                </div>
                <div className={`${style.textRight} ${rightActiveClass}`}>
                    <p>{status.categoryRightPercent}</p>
                    <p>{status.category.split('vs')[1]}</p>
                </div>
            </div>
        </div>
    )
}