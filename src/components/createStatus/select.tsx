import React, { useState, useEffect, useReducer } from 'react'
import style from '@/styles/components/createStatus/select.module.css'
import { Action } from '@/lib/createStatusReducer'
import { CheckboxContent } from '@/types/carrierTypes'

export type SelectProps = {
    multiple: boolean;
    fourColumn: boolean;
    contents: CheckboxContent[];
    selectOptions: string[] | string,
    dispatch: React.Dispatch<Action>,
    updateType: 'SET_USER_FIELD' | 'SET_USER_SKILL' | 'SET_USER_TECH'
}

export function Select({ multiple, fourColumn, contents, selectOptions, dispatch, updateType }: SelectProps) {
    const [state, setState] = useState('');

    const renderRadios = (contents: CheckboxContent[]) => (
        contents.map((v, idx) =>
            <React.Fragment key={idx}>
                <input
                    key={idx}
                    type={multiple ? 'checkbox' : 'radio'}
                    onChange={() => {
                        dispatch({ type: updateType, payload: v.title });
                    }}
                    checked={Array.isArray(selectOptions)
                        ? selectOptions.includes(v.title)
                        : selectOptions === v.title}
                    className={style.radioInput}
                    name="radioButton"
                    id={v.title}
                />
                <label htmlFor={v.title} className={contents[idx].weaken ? style.radio + ' ' + style.weaken : style.radio}
                    data-title={v.title}
                    data-image={v.image}
                    onMouseOver={() => {
                        if (!multiple && selectOptions.length === 0) {
                            setState(v.text);
                        }
                    }}
                    onMouseLeave={() => {
                        if (!multiple && state !== '' && selectOptions.length === 0) {
                            setState('');
                        }
                    }}

                >
                    <picture className={style.image}><img src={v.image} alt="" /></picture>
                </label>
            </React.Fragment>
        )
    );


    if (fourColumn) {
        return (
            <>
                tintin
            </>
        )
    }
    else if (contents.length > 5) {
        const halfLength = Math.ceil(contents.length / 2);
        const firstHalf = contents.slice(0, halfLength);
        const secondHalf = contents.slice(halfLength);

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
                    {renderRadios(contents)}
                </div>
                {multiple === false && <p className={style.text}>{state === '' ? '　' : state}</p>}
            </div>
        );
    }
}
