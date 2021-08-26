import React,{ useContext } from 'react';
import TodoItems from './TodoItems';

import Classes from './Todos.module.css';
import {TodosContext} from './../Context/context';


const Todos: React.FC= (props) => {

  const todosCTX=useContext(TodosContext);


  const onDeleateHandler=(todoId:string)=>{
    todosCTX.removeTodo(todoId);
  };
  return (
    <ul className={Classes.todos} >
    
      {

      todosCTX.items.map((item) => (
        <TodoItems key={item.id} todoText={item.text} todoId={item.id} onDeleateHandler={onDeleateHandler}/>
      ))
      }
    </ul>
  );
};

export default Todos;
