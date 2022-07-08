import React from "react";
import Button from "../button";
import style from './form.module.scss'

class Form extends React.Component {
    state ={
      task:"",
      time: "00:00"  
    }
    render(): React.ReactNode {
        return (
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label className={style.label} htmlFor="tarefa">Adicione uma tarefa</label>
                    <input className={style.input} type="text" name="tarefa" id="tarefa" placeholder=" o que você quer estudar?" required/>
                </div>
                <div className={style.inputContainer}>
                <label className={style.label} htmlFor="tempo">quanto tempo? </label>
                    <input className={style.input} type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required/>
                </div>
                <Button text="Acionar" />
            </form>
        )

    }
}

export default Form