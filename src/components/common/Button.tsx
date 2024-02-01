import style from '@/styles/components/common/button.module.css';

type ButtonProps = {
    text: string
    className?: string
    onClick?: () => void
    disabled?: boolean
}

export function Button(props: ButtonProps) {
    const handleClick = () => {
        // onClickプロパティが指定されている場合、その関数を呼び出す
        if (props.onClick) {
            props.onClick();
            return;
        }
    }
    return (
        <>
            <button disabled={props.disabled} className={style.button + ' ' + props.className} onClick={() => handleClick()}>{props.text}</button>
        </>
    )
}
