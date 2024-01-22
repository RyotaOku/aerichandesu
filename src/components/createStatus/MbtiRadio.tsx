import { useRef, useEffect } from 'react'
import { Action, questionType } from '@/lib/createStatusReducer';
import style from '@/styles/components/createStatus/mbtiRadio.module.css'

type RadioQuestionProps = {
    question: questionType;
    dispatch: React.Dispatch<Action>,
    index: number,
    isActive: boolean,
    setActiveQuestionIndex: React.Dispatch<React.SetStateAction<number>>
};

export enum AnswerOption {
    StronglyAgree = 'StronglyAgree',
    Agree = 'Agree',
    SomewhatAgree = 'SomewhatAgree',
    Neutral = 'Neutral',
    SomewhatDisagree = 'SomewhatDisagree',
    Disagree = 'Disagree',
    StronglyDisagree = 'StronglyDisagree',
}

export function RadioQuestion({ question, dispatch, index, isActive, setActiveQuestionIndex }: RadioQuestionProps) {
    const questionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (index === 0) {
            return
        }
        if (isActive && questionRef.current) {
            // 現在のエレメントの位置を取得
            const topPosition = questionRef.current.getBoundingClientRect().top + window.scrollY;

            // オフセット値を追加（例：-50ピクセル）
            const offset = -200;
            const newScrollPosition = topPosition + offset;

            // 新しい位置にスクロール
            window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
        }
    }, [isActive]);

    // TODO 自動スクロールやstyle差別化などの機能は良いが、前の回答の変更などに対応しなければ。

    return (
        <div className={style.wrap}
            ref={questionRef}
            style={{
                opacity: isActive ? 1 : 0.5,
                //　とりあえず下をコメントにして、前の回答の変更はできるようにしておく。
                // pointerEvents: isActive ? 'auto' : 'none'
            }}
        >
            <p className={style.title}>{question.text}</p>
            <div className={style.radioWrap}>
                <p className={style.agree}>同意する</p>
                <div className={style.buttons}>
                    {Object.values(AnswerOption).map((answerOption, index) => (
                        <label key={index} className={style.radio}>
                            <input
                                type="radio"
                                name={question.text}
                                value={answerOption}
                                checked={question.answer === answerOption}
                                onChange={() => {
                                    dispatch({ type: 'UPDATE_ANSWER', payload: { text: question.text, answer: answerOption } })
                                    setActiveQuestionIndex((prevIndex: number) => prevIndex + 1)
                                }}
                            />
                            <span className={''}></span>
                        </label>
                    ))}

                </div>
                <p className={style.disagree}>同意しない</p>
            </div>
        </div>
    );
}