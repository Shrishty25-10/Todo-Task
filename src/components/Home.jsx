import React from "react";
import "../style/home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Tasklist from "./Tasklist";

const Home = () => {
  const [todos, setTodo] = useState([]);
  const [completed,setcomplete] = useState(false);

 

  const changeTodo = (id) => {
    console.log(id);
     const onetodo = todos.filter((todo) => todo.id === id);
     console.log(onetodo);
     onetodo.completed=!completed;
     setcomplete(!completed);

    // setTodo((todos) => ({ ...todos, completed: !completed }));
    // setTodo((todos) => ({ ...todos, [name]: value }));
  };
  
  useEffect(() => {
    loadTodos();
    
  }, []);
  
  const loadTodos = async () => {
    const result = await axios.get("http://localhost:3003/todos");
    setTodo(result.data.reverse());
  };
  
  const deletetodo = async (id) => {
    await axios.delete(`http://localhost:3003/todos/${id}`);
    loadTodos();
  };
  console.log(todos);
  return (
    <div className="container home">
      <main>
        <header>
          <div className="heading ">
            <h1>TODO - LIST</h1>
          </div>
        </header>
        <div className="buttoncount mx-5 mt-5">
          <Stack direction="row" className=" " spacing={25}>
            <Button variant="outlined" color="secondary">
              Total: 9
            </Button>
            <Button variant="outlined" color="success">
              Success: 7
            </Button>
            <Button variant="outlined" color="error">
              Pending: 5
            </Button>
            <Button variant="outlined" color="error">
              All Clear <MdDelete size="20px" />
            </Button>
          </Stack>

          <div className="fill-box flex">
            <input
              type="text"
              placeholder="Enter your new to-do"
              name="todo"
              onChange={(e) => changeTodo(e)}
              
            />
            <MdOutlineLibraryAddCheck size="30px" />
          </div>
        </div>
            <div>
              

              {todos.map((item,index)=>{
                     return <Tasklist item={item} key={index} loadTodos={loadTodos} />
              })}
       </div>
      </main>
      
    </div>
  );
};

export default Home;
