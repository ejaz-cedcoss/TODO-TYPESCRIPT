import React, { FC } from "react";
import { Todo } from "../model/interfaceModal";
import '../css/test.css'

interface listProps {
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: FC<listProps> = ({ todos, setTodo }) => {
  console.log(todos);

  return (
    <React.Fragment>
      {
      todos.map((val,index) => {
        return(
            <ul className="list" key={index}>
              <li className="list__item">
                <span>{val.todo}</span>
                <button>edit</button>
                <button>delete</button>
                </li>
            </ul>
        )
      })
      }
    </React.Fragment>
  );
};

export default TodoList;
