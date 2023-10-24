import style from '@/styles/components/result/footer.module.css'

type PaginatorProps = {
    activeIndex: number;
    onClick: (index: number) => void;
};

export default function Footer({ activeIndex, onClick }: PaginatorProps) {

    return (
        <div className={style.wrap}>
            <button className={style.prev}>戻る</button>
            <div className={style.paginator}>
                {Array.from({ length: 7 }, (_, i) => i).map((_, index) => (
                    <span
                        key={index}
                        className={activeIndex === index ? style.active : ''}
                        onClick={() => onClick(index)}
                    >
                    </span>
                ))}
            </div>
            <button className={style.next}>続ける</button>
        </div>
    )
}