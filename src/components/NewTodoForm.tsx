import React, { useRef } from 'react'

import Classes from './NewTodo.module.css';


const NewTodoForm:React.FC<{onAddTodo:(text:string)=>void}>=(props) =>{
    const todoInputRef=useRef<HTMLInputElement>(null); //genaric type
   
    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault();

        const enteredText=todoInputRef.current?.value;

        // guard class
        if(!enteredText?.trim()) return;

        props.onAddTodo(enteredText);


    };

    return (
        <form onSubmit={handleSubmit} className={Classes.form}>
            <label htmlFor="" ></label>
            <input type="text"  ref={todoInputRef} />
            <button >Add Todo</button>
        </form>
    )
}

export default NewTodoForm;
