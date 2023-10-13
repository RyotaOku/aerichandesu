import { useState, useEffect } from 'react'
import style from '@/styles/createStatus/select.module.css'

export type checkboxContent = {
    image: string,
    title: string,
    text: string,
    weaken: boolean,
}

export type checkboxContents = {
    contents: checkboxContent[]
}

export type checkboxProps = {
    multiple: boolean,
    fourColumn: boolean,
    contents: checkboxContent[],
    setSelectedOptions: (selectedOptions: string[]) => void,
    selectedOptions: string[]
}

export function Select(props: checkboxProps) {
    const [state, setState] = useState('');

    const handleCheckboxChange = (title: string) => {
        props.setSelectedOptions(prev => {
            if (prev.includes(title)) {
                return prev.filter(t => t !== title);
            } else {
                return [...prev, title];
            }
        });
    };

    useEffect(() => {
        console.log(state);
    }, [state])

    const renderRadios = (contents: checkboxContent[]) => (
        contents.map((v, idx) =>
            <>
                <input
                    key={idx}
                    type={props.multiple ? 'checkbox' : 'radio'}
                    onChange={() => {
                        props.multiple ? handleCheckboxChange(v.title) : props.setSelectedOptions([v.title])
                        setState(v.text)
                    }}
                    checked={props.multiple ? props.selectedOptions.includes(v.title) : v.title === props.selectedOptions[0]}
                    className={style.radioInput}
                    name="radioButton"
                    id={v.title}
                />
                <label htmlFor={v.title} className={contents[idx].weaken ? style.radio + ' ' + style.weaken : style.radio}
                    data-title={v.title}
                    data-image={v.image}
                    onMouseOver={() => {
                        if (!props.multiple && props.selectedOptions.length === 0) {
                            setState(v.text);
                        }
                    }}
                    onMouseLeave={() => {
                        if (!props.multiple && state !== '' && props.selectedOptions.length === 0) {
                            setState('');
                        }
                    }}

                >
                    <picture className={style.image}><img src={v.image} alt="" /></picture>
                </label>
            </>
        )
    );


    if (props.fourColumn) {
        return (
            <>
                tintin
            </>
        )
    }
    else if (props.contents.length > 5) {
        const halfLength = Math.ceil(props.contents.length / 2);
        const firstHalf = props.contents.slice(0, halfLength);
        const secondHalf = props.contents.slice(halfLength);

        return (
            <>
                <div className={style.halfWrap + ' ' + style.inner}>
                    <div className={style.halfInner}>
                        {renderRadios(firstHalf)}
                    </div>
                    <div className={style.halfInner}>
                        {renderRadios(secondHalf)}
                    </div>
                    <p className={style.text}>{state}</p>
                </div>
            </>
        );
    } else {
        return (
            <div className={style.wrap}>
                <div className={style.inner}>
                    {renderRadios(props.contents)}
                </div>
                {props.multiple === false && <p className={style.text}>{state === '' ? '　' : state}</p>}
            </div>
        );
    }
}
