import style from '@/styles/components/common/frame.module.css'

type Props = {
    children?: React.ReactNode
}

export function Frame({ children }: Props) {
    <div className={style.wrap}>
        {children}
    </div>
}