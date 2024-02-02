import style from '@/styles/components/result/footer.module.css'

type PaginatorProps = {
    activeIndex: number;
    onClick: (action: 'NEXT_INDEX' | 'PREV_INDEX' | 'SET_INDEX', index?: number) => void
};

export default function Footer({ activeIndex, onClick }: PaginatorProps) {
    const handlePrevClick = () => {
        if (activeIndex > 0) {
            onClick('PREV_INDEX');
        }
    };

    const handleNextClick = () => {
        if (activeIndex === 6) {
            console.log('tintin');
            window.open('https://aerichandesu.vercel.app/result/aerichandesu');

        }
        if (activeIndex < 6) {  // 7ページ分のインデックスなので、最大インデックスは6
            onClick('NEXT_INDEX');
        }
    };

    return (
        <div className={style.wrap}>
            <button className={style.prev} onClick={handlePrevClick}>戻る</button>
            <div className={style.paginator}>
                {Array.from({ length: 7 }, (_, i) => i).map((_, index) => (
                    <span
                        key={index}
                        className={activeIndex === index ? style.active : ''}
                        onClick={() => onClick('SET_INDEX', index)}
                    >
                    </span>
                ))}
            </div>
            <button className={style.next} onClick={handleNextClick}>続ける</button>
        </div>
    )
}