import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Drop = ({priority,user_details,setUser_details}) => {
  
  const handleSelect = (eventKey) => {
    const updatedUserDetails = {
      ...user_details,
      priority: eventKey,
    };
    setUser_details(updatedUserDetails); 
  };

  return (
    <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {priority}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item  eventKey="High">High</Dropdown.Item>
          <Dropdown.Item eventKey="Middle">Middle</Dropdown.Item>
          <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
          <Dropdown.Item  eventKey="None">None</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Drop;
