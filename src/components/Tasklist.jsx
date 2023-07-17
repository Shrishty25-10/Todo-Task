import React from "react";
import "../style/home.css";
import { MdDelete } from "react-icons/md";
import { useState} from "react";
import axios from "axios";
import { BsFillCircleFill } from "react-icons/bs";
import UpdateModal from "./UpdateModal";


const Tasklist = ({
  item,
  loadTodos,
  completed,
  user_details,
  setUser_details,
  setMsg,
  setHandlemsg,
  handlemsg,
}) => {
  const [openmodal, setOpenmodal] = useState(false);
  const handleModal = () => {
    setOpenmodal(!openmodal);
  };

  const handleModalClose = () => {
    setUser_details({
      ...user_details,
      title : "",
      priority:"None",
      startDate:"",
      endDate:""

    });
    setOpenmodal(false);
  };

  const deletetodo = async (id) => {
    await axios.delete(`http://localhost:3003/todos/${id}`);
    loadTodos();
    setMsg("Task Deleted Successfully!!");
    setHandlemsg(!handlemsg);
  };
  const handleCheckboxChange = async () => {
    const updatedItem = {
      ...item,
      completed: !completed,
    };

    // Update the 'completed' property in the backend
    await axios.put(`http://localhost:3003/todos/${item.id}`, updatedItem);

    // Update the 'completed' property in the state
    setUser_details({
      ...user_details,
      completed: !completed,
    });
  };

  const handleModalclick = () =>{
    setUser_details({
      ...user_details,
      title: item.title,
      priority:item.priority,
      startDate:item.startDate,
      endDate:item.endDate

    });
    setOpenmodal(!openmodal);
  }

  const handleUpdate = async (e) => {
    if (!user_details.title){
          
      setMsg('Please enter some text!!');
      setHandlemsg(!handlemsg);
      
    }
    else{
    try {
      const updatedItem = {
        ...item,
        title: user_details.title,
        priority: user_details.priority,
      };

      await axios.put(`http://localhost:3003/todos/${item.id}`, updatedItem);
      loadTodos();
      setOpenmodal(false);
      setUser_details({
        title: "",
        priority: "None",
        completed: false,
        date: "",
      });
      setMsg("Task Updated Successfully!!");
      setHandlemsg(!handlemsg);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }
  };

  return (
    <div className="container ">
      <main className="my-3">
        <>
          <div className={item.completed ? "todo-row complete" : "todo-row"}>
            <div
              className="px-2 btns"
              onClick={handleModalclick}
              style={{ cursor: "pointer" }}
            >
              <h6 className="">{item.title}</h6>
            </div>
            <div className="p-2 priority ">
              <div>
                {item.priority === "High" && <BsFillCircleFill color="red" />}
                {item.priority === "Middle" && (
                  <BsFillCircleFill color="yellow" />
                )}
                {item.priority === "Low" && <BsFillCircleFill color="green" />}
              </div>
              <div>
                {" "}
                <p>{item.priority}</p>
              </div>
            </div>
            <div className="p-2 heading-1">
              <div className="d-flex justify-content-center align-items-center gap-4">
                <div className="d-flex align-items-center">
                  <p className="m-2 date text-lead">{item.date}</p>
                </div>

                <div className="mt-2">
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="m-2" style={{ cursor: "pointer" }}>
                  <MdDelete size="28px" onClick={() => deletetodo(item.id)} />
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
      <UpdateModal
        show={openmodal}
        handleClose={handleModalClose}
        handleSaveChanges={(e) => handleUpdate(e)}
        user_details={user_details}
        setUser_details={setUser_details}
       
      />
    </div>
  );
};

export default Tasklist;
