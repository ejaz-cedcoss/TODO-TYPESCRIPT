import React, { FC, useRef } from "react";
// import { Iprops } from "../model/interfaceModal";
import '../css/test.css'

interface Iprops {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const TodoApp: FC<Iprops> = ({ todo, setTodo, handleAdd }) => {
  const inpref = useRef<HTMLInputElement>(null);

  return (
    <React.Fragment>
      <div className="formdiv">
        <form action="#" onSubmit={(e)=>{
            handleAdd(e);   
        //    inpref.current?.classList.add("new");
        }}>
          <input
            ref={inpref}
            type="text"
            placeholder="Enter your task"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit">save</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default TodoApp;
