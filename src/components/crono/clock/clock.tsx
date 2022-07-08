import style from './clock.module.scss'

export default function Clock(){
    return(
        <><span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockDiv}>:</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span></>
    )
}