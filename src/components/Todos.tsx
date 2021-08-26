import React from 'react';
import todo from '../models/todo';
import TodoItems from './TodoItems';

import Classes from './Todos.module.css';


const Todos: React.FC<{ items: todo[],onRemoveHandler:(id:string)=>void }> = (props) => {
  const onDeleateHandler=(todoId:string)=>{
    props.onRemoveHandler(todoId);
  };
  return (
    <ul className={Classes.todos} >
      {
      props.items.map((item) => (
        <TodoItems key={item.id} todoText={item.text} todoId={item.id} onDeleateHandler={onDeleateHandler}/>
      ))
      }
    </ul>
  );
};

export default Todos;
