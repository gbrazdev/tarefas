import Button from "../button"
import Clock from "./clock/clock"
import style from "./crono.module.scss"

export default function Crono() {
    return (
        <><div className={style.crono}>
            <p className={style.title}>Escolha um card e inicie o cronometro</p>
            <div className={style.clockWrapper }>
            <Clock />
            </div><Button
                text="Começar" /></div></>
    )

}