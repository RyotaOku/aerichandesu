import style from '@/styles/components/common/frame.module.css'

// Frameコンポーネントに渡せるprops（プロパティ）の型を定義
export type FrameProps = {
    children?: React.ReactNode // 子コンポーネント（オプショナル）
}

// Frameコンポーネントの定義。このFrameコンポーネントで各画面の幅やスタイルを統一して実装。
export function Frame(props: FrameProps) {
    return (
        <div className={style.frame}>
            {/* 子コンポーネントを表示 */}
            {props.children}
        </div>
    )
}