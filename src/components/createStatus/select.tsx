import React, { useState, useEffect } from 'react'
import style from '@/styles/createStatus/select.module.css'

export type CheckboxContent = {
    image: string,
    title: string,
    text: string,
    weaken: boolean,
}

export type CheckboxContents = {
    contents: CheckboxContent[]
}

export type SelectProps = {
    multiple: boolean;
    fourColumn: boolean;
    contents: CheckboxContent[];
    setSelectedOptions: (selectedOptions: string[]) => void; // ここを変更
    selectedOptions: string[]; // これも変更
}


export function Select(props: SelectProps) {
    const [state, setState] = useState('');

    const handleCheckboxChange = (title: string) => {
        if (props.multiple) {
            const updatedOptions = props.selectedOptions.includes(title)
                ? props.selectedOptions.filter(t => t !== title)
                : [...props.selectedOptions, title];
            props.setSelectedOptions(updatedOptions);
        } else {
            props.setSelectedOptions([title]);
        }
    };

    const renderRadios = (contents: CheckboxContent[]) => (
        contents.map((v, idx) =>
            <React.Fragment key={idx}>
                <input
                    key={idx}
                    type={props.multiple ? 'checkbox' : 'radio'}
                    onChange={() => { handleCheckboxChange(v.title) }}
                    // checked={props.multiple ? (Array.isArray(props.selectedOptions) && props.selectedOptions.includes(v.title)) : v.title === props.selectedOptions}

                    checked={props.multiple ? props.selectedOptions.includes(v.title) : v.title === props.selectedOptions}

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
                        console.log(props.selectedOptions.includes(v.title));

                    }}
                    onMouseLeave={() => {
                        if (!props.multiple && state !== '' && props.selectedOptions.length === 0) {
                            setState('');
                        }
                    }}

                >
                    <picture className={style.image}><img src={v.image} alt="" /></picture>
                </label>
            </React.Fragment>
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
