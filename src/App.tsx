import React, { FC, Fragment, useState } from "react";
import TodoList from "./component/TodoList"
import TodoApp from "./component/TodoApp";
import { Todo } from "./model/interfaceModal";



const App:FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([])
  
  const handleAdd = (e:React.FormEvent) => {
      e.preventDefault();
      
        if(todo){
          setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
        }
        setTodo("") 
  }
  
  return (
    <Fragment>  
      <div className="wrapper">
        <h1>todo list</h1>
        <br></br>
        <TodoApp todo={todo} setTodo= {setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodo={setTodo}/>
      </div>
    </Fragment>
  );
};

export default App;
