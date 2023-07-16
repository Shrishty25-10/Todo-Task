import React from "react";
import "../style/home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Tasklist from "./Tasklist";
import CustomModal from "./CustomModal";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import {useNavigate} from "react-router-dom"
import Taskcount from "./Taskcount";


const Home = () => {
  const [todos, setTodo] = useState([]);
  const [user_details,setUser_details] = useState({
    
      title:"",
      priority:"Priority",
      completed:false,
      date:getCurrentDate()
    
  });
  const {title,priority,completed,date} = user_details;
  const [counttodo, setCounttodo] = useState({
    total: 0,
    success: 0,
    pending: 0,
  });
  const { total, success, pending } = counttodo;

  
  const [show,setShow] = useState(false);
  
  const navigate = useNavigate();

  function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    return `${day} ${month}`;
  }
  
  
 
  
  useEffect(() => {
    loadTodos();
    
    
  }, [user_details]);
  
  const loadTodos = async () => {
    const result = await axios.get("http://localhost:3003/todos");
    setTodo(result.data.reverse());
    const tododata = result.data.reverse();
    const pendingtodo = tododata.filter((item) => !item.completed);
    const successtodo = tododata.filter((item) => item.completed);

   
    setCounttodo({
      total: tododata.length,
      pending: pendingtodo.length,
      success: successtodo.length,
    });
  };
  
  const deletetodo = async (id) => {
    await axios.delete(`http://localhost:3003/todos/${id}`);
    loadTodos();
  };
 
  const handleModal = () => {
    setShow(!show);
  };

  const handleModalClose = () => {
    setShow(false);
   
  };
 
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/todos",user_details);
    setShow(false);
    setUser_details(
      {
    
        title:"",
        priority:"Priority",
        completed:false,
        date:getCurrentDate()
      
      }
    )
    navigate("/");
    
    
    
  };
  const handleAllClear = async () => {
    try {
      console.log("kjhghj")
      await axios.delete("http://localhost:3003/todos");
      setTodo([]);
      setCounttodo({
        total: 0,
        pending: 0,
        success: 0,
      });
    } catch (error) {
      console.error("Error in clearing todos:", error);
    }
  };

  
  return (
    <div className="container home">
      <main>
        <header>
          <div className="heading ">
            <h1>TODO - LIST</h1>
          </div>
        </header>
        <Taskcount total={total} success={success} pending={pending} handleAllClear={handleAllClear}/>
            <div>
              

              {todos.map((item,index)=>{
                     return <Tasklist item={item} key={index} handleModal={handleModal} loadTodos={loadTodos} completed={item.completed} user_details={user_details} setUser_details={setUser_details} />
              })}
       </div>
      </main>
    
      <CustomModal
        show={show}
        handleClose={handleModalClose}
        handleSaveChanges={(e)=>onSubmit(e)}
        title={title}
        user_details={user_details}
        setUser_details={setUser_details}
        priority={priority}
        
      />
      
    </div>
  );
};

export default Home;
