import style from '@/styles/createStatus/header.module.css'
import { useState, useRef, useEffect } from 'react'

type headerProps = {
    step: number
    maxStep: number
}

export function CreateStatusHeader(props: headerProps) {
    const progressWidthPercentage = (props.step / props.maxStep) * 100;

    return (
        <div className={style.header}>
            <div className={style.headerContents}>
                <button className={style.prev} onClick={() => { }}>
                    戻る
                </button>
            </div>
            <div className={style.progressBarWrap}>
                <div className={style.progressBar} style={{ width: `${progressWidthPercentage}%` }}></div>
                <div className={style.base}></div>
            </div>
        </div>
    )
}