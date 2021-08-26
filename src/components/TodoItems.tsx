import React from 'react';
import Classes from './TodoItem.module.css';

const TodoItems:React.FC<{todoText:string,todoId:string,onDeleateHandler:(id:string)=>void}>=(props)=> {

    const handleOnClick=()=>{
        props.onDeleateHandler(props.todoId);
    };

    return <li className={Classes.item} onClick={handleOnClick}>{props.todoText} </li>
    
}

export default TodoItems;
