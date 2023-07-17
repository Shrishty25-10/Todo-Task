import React from "react";
import "../style/home.css";

import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Tasklist from "./Tasklist";
import CustomModal from "./CustomModal";
import { useNavigate } from "react-router-dom";
import Taskcount from "./Taskcount";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Home = () => {
  const [todos, setTodo] = useState([]);
  const [user_details, setUser_details] = useState({
    title: "",
    priority: "None",
    completed: false,
    date: getCurrentDate(),
  });
  const { title, priority, completed, date } = user_details;
  const [counttodo, setCounttodo] = useState({
    total: 0,
    success: 0,
    pending: 0,
  });
  const { total, success, pending } = counttodo;

  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [handlemsg, setHandlemsg] = useState(false);

  const navigate = useNavigate();

  function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  }

  useEffect(() => {
    loadTodos();
  }, [user_details]);

  const loadTodos = async () => {
    const result = await axios.get("http://localhost:3003/todos");
    const tododata = result.data;
    const pendingtodo = tododata.filter((item) => !item.completed);
    const successtodo = tododata.filter((item) => item.completed);

    setTodo(tododata.reverse());
    setCounttodo({
      total: tododata.length,
      pending: pendingtodo.length,
      success: successtodo.length,
    });
  };

  const handleModal = () => {
    setShow(!show);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!user_details.title){
          
           setMsg('Please enter some text!!');
           setHandlemsg(!handlemsg);
           
    }
    else{
    await axios.post("http://localhost:3003/todos", user_details);
    setShow(false);
    setUser_details({
      title: "",
      priority: "None",
      completed: false,
      date: getCurrentDate(),
    });
    navigate("/");
    setMsg("Task Added Successfully!!");
    setHandlemsg(!handlemsg);
  }
  };
  const handleAllClear = async () => {
    try {
      console.log(todos);
      const promiseTodos = todos.map((el) => {
        return axios.delete(`http://localhost:3003/todos/${el.id}`)
      })
      await Promise.all(promiseTodos)
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
    <div className="container-fluid home">
      <div className="background-div"></div>
      {handlemsg && (
        <Snackbar
          open={handlemsg}
          autoHideDuration={3000}
          onClose={() => setHandlemsg(!handlemsg)}
        >
          <Alert
            onClose={() => setHandlemsg(!handlemsg)}
            severity={msg==="Please enter some text!!"? "error" : "success"}
            sx={{ width: "100%" }}
          >
            {msg}
          </Alert>
        </Snackbar>
      )}

      <main className="front-div">
        <header>
          <div className="heading ">
            <h1>TODO - LIST</h1>
          </div>
        </header>

        <Taskcount
          total={total}
          success={success}
          pending={pending}
          handleAllClear={handleAllClear}
        />
        <div className="fill-box container">
          <input
            placeholder="what's your plan for today?"
            name="title"
            value={title}
            onChange={(e) =>
              setUser_details({
                ...user_details,
                [e.target.name]: e.target.value,
              })
            }
            className="todo-input"
          />
          <span onClick={handleModal} className="todo-button">
            <MdOutlineLibraryAddCheck size="30px" />
          </span>
        </div>
        <div>
          {todos.length===0? <h1 className="text-center my-4" style={{color:"whitesmoke"}}>No  added tasks</h1>:null}
          {todos && todos.map((item, index) => {
            return (
              <Tasklist
                item={item}
                key={index}
                loadTodos={loadTodos}
                completed={item.completed}
                user_details={user_details}
                setUser_details={setUser_details}
                setMsg={setMsg}
                setHandlemsg={setHandlemsg}
                handlemsg={handlemsg}
                getCurrentDate={getCurrentDate}
              />
            );
          })}
        </div>
      </main>

      <CustomModal
        show={show}
        handleClose={handleModalClose}
        handleSaveChanges={(e) => onSubmit(e)}
        title={title}
        user_details={user_details}
        setUser_details={setUser_details}
        priority={priority}
      />
    </div>
  );
};

export default Home;
