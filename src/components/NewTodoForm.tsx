import React, { useRef } from 'react'

import Classes from './NewTodo.module.css';
import {TodosContext} from './../Context/context'
import { useContext } from 'react';

const NewTodoForm:React.FC=(props) =>{
    const todoInputRef=useRef<HTMLInputElement>(null); //genaric type
    const todosCTX=useContext(TodosContext); 


    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault();

        const enteredText=todoInputRef.current?.value;

        // guard class
        if(!enteredText?.trim()) return;

        console.log(enteredText);
        todosCTX.addTodo(enteredText);



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
