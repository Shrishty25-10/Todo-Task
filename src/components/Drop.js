import React  from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Drop = ({ priority, user_details, setUser_details }) => {
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
        <Dropdown.Toggle
          variant="dark"
          id="dropdown-basic"
          style={{
            background: "linear-gradient( 90deg, rgb(97 35 221) 0%, rgb(223 75 99) 100% )",
            borderColor: "blue",
          }}
          className="p-2 m-3 "
        >
          Set Priority: {priority}
        </Dropdown.Toggle>

        <Dropdown.Menu className="p-2">
          <div className="dropdown-items-row">
            <Dropdown.Item  eventKey="High">
              High
            </Dropdown.Item>
            <Dropdown.Item eventKey="Middle">Middle</Dropdown.Item>
            <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Drop;
