import React, { useState } from "react";
import Item from './item/item'
import style from './list.module.scss'

function List() {
    const [tasks, setTasks ] = useState([
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'Javascript',
            time: '01:00:00'
        },
        {
            task: 'Typescript',
            time: '01:00:00'
        }
    ]) 
    return (
        <aside>
            <h2 onClick={() =>{
                console.log('click');
                
               setTasks([...tasks, {
                task:"Etudar estado", time: "05:00:00",
            }] ) 
            } }> Estudos do dia</h2>
            <ul className={style.list__task}>
                {tasks.map((task, index) => (
                    <Item
                    key={index}
                    {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}



export default List