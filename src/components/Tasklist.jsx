import React from "react";
import "../style/home.css";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

const Tasklist = ({item,loadTodos}) => {
    const [completed,setcomplete] = useState(false);
    const deletetodo = async (id) => {
        await axios.delete(`http://localhost:3003/todos/${id}`);
        loadTodos();
      };

      
  return (
    <div className="container ">
      <main>
      
            <>
              
              <div
                class="main-container mx-5 d-flex text-black mt-1 border-bottom"
              >
                <div class="p-2 btns">
                  <h6
                    className={completed ? "text-decoration-line-through" : ""}
                  >
                    {item.title}
                  </h6>
                </div>
                <div class="p-2 priority ">
                  <p>{item.priority}</p>
                </div>
                <div className="p-2 heading-1">
                  <div className="d-flex justify-content-center align-items-center gap-4">
                    <div className="d-flex align-items-center">
                      <p className="m-2 text-muted">10 July</p>
                    </div>
                    <div className="d-flex input-container">
                      <div className="mt-2">
                        <input
                          type="checkbox"
                          name="completed"
                          checked={completed}
                          onChange={() => setcomplete(!completed)}
                        />
                      </div>
                      <div className="m-2">
                        <MdDelete size="28px" onClick={() => deletetodo(item.id)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
        
      </main>
      
    </div>
  );
};

export default Tasklist;