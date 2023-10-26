import React, { useState, useEffect, useReducer } from 'react'
import style from '@/styles/components/createStatus/select.module.css'
import { userCareerReducer, userCareerType, Action } from '@/lib/createStatusReducer'

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
    selectOptions: string[] | string,
    dispatch: React.Dispatch<Action>,
    updateType: 'SET_USER_FIELD' | 'SET_USER_SKILL' | 'SET_USER_TECH'
}

// export default function Main() {
//     const initialState: userCareerType = {
//         field: '',
//         skill: [],
//         tech: [],
//     }

//     const [selectOptions, dispatch] = useReducer(userCareerReducer, initialState)

//     const props = {
//         multiple: false,
//         fourColumn: false,
//         contents: [{
//             image: '/images/checkIcons/uiDesign.png',
//             title: 'UIデザイン',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/uxDesign.png',
//             title: 'UXデザイン',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/.png',
//             title: 'グラフィックデザイン',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/printDesign.png',
//             title: 'プリントデザイン',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/.png',
//             title: 'イラストレーター',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/3dModel.png',
//             title: '3Dモデリング',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/motion.png',
//             title: 'モーションデザイン',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/branding.png',
//             title: 'ブランディング・ロゴ',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/movie.png',
//             title: '動画編集',
//             text: '',
//             weaken: false
//         },
//         {
//             image: '/images/checkIcons/dog.png',
//             title: 'その他',
//             text: '',
//             weaken: false
//         }],
//     }

//     return (
//         <Select multiple={props.multiple} fourColumn={props.fourColumn} contents={props.contents} selectOptions={selectOptions.field} dispatch={dispatch} updateType={'SET_USER_FIELD'} />
//     )
// }

export function Select(props: SelectProps) {
    const [state, setState] = useState('');

    const renderRadios = (contents: CheckboxContent[]) => (
        contents.map((v, idx) =>
            <React.Fragment key={idx}>
                <input
                    key={idx}
                    type={props.multiple ? 'checkbox' : 'radio'}
                    onChange={() => {
                        props.dispatch({ type: props.updateType, payload: v.title });
                    }}
                    checked={Array.isArray(props.selectOptions)
                        ? props.selectOptions.includes(v.title)
                        : props.selectOptions === v.title}
                    className={style.radioInput}
                    name="radioButton"
                    id={v.title}
                />
                <label htmlFor={v.title} className={contents[idx].weaken ? style.radio + ' ' + style.weaken : style.radio}
                    data-title={v.title}
                    data-image={v.image}
                    onMouseOver={() => {
                        // if (!props.multiple && props.selectedOptions.length === 0) {
                        //     setState(v.text);
                        // }
                        // console.log(props.selectedOptions.includes(v.title));

                    }}
                    onMouseLeave={() => {
                        // if (!props.multiple && state !== '' && props.selectedOptions.length === 0) {
                        //     setState('');
                        // }
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
