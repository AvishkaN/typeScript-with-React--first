import Todos from './components/Todos';
import todo from './models/todo';
import NewTodoForm from './components/NewTodoForm';
import { useState } from 'react';

function App() {

  // const todos=[
  //   new todo('Learn React'),
  //   new todo('Learn typescript'),
  // ]
  const[todos,setTodos]=useState<todo[]>([])

  const onAddTodoHandler=(todoText:string)=>{
    console.log(todoText);
    //  create new todo
    const newTodo=new todo(todoText);  

    // add new todo to Array
    setTodos(prevState=>{
      return prevState.concat(newTodo);
    });
  };

  const onRemoveHandler=(todoId:string)=>{
    console.log(todoId);
    setTodos(prevSate=>{

      const newArr=prevSate.filter(item=>item.id!==todoId);
      return newArr;
    });
    
  };

  return (
    <div>
      <NewTodoForm onAddTodo={onAddTodoHandler}/>
      <Todos items={todos} onRemoveHandler={onRemoveHandler}/>
    </div>
  );
}

export default App;
