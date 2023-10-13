import style from '@/styles/components/button.module.css';

type buttonProps = {
    text: string
    className?: string
    onClick?: () => void
}

export function Button(props: buttonProps) {
    const handleClick = () => {
        // onClickプロパティが指定されている場合、その関数を呼び出す
        if (props.onClick) {
            props.onClick();
            return;
        }
    }
    return (
        <>
            <button className={style.button + ' ' + props.className} onClick={() => handleClick()}>{props.text}</button>
        </>
    )
}