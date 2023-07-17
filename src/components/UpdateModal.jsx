



import React  from "react";
import { Modal, Button } from "react-bootstrap";
import "../style/modal.css"
// AiFillEdit
import { FaPenToSquare } from "react-icons/fa6";
import Drop from "./Drop";
const UpdateModal = ({
  show,
  handleClose,
  handleSaveChanges,
  setUser_details,
  user_details,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="custom-modal" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-light">Update Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center gap-4">
          <input
            type="text"
            id="edit_todo"
            className="edittodo"
            value={user_details.title}
            name="title"
            onChange={(e) =>
              setUser_details({
                ...user_details,
                [e.target.name]: e.target.value,
              })
            }
           
          />
          <span>
            <label htmlFor="edit_todo">
            
              <FaPenToSquare size="35px" />
            </label>
          </span>
        </Modal.Body>
        <div className="mx-1">
          <Drop
            priority={user_details.priority}
            user_details={user_details}
            setUser_details={setUser_details}
          />
        </div>
        <Modal.Footer>
          <Button
            style={{
                background: "#808080",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{
                background: "linear-gradient( 90deg, rgb(97 35 221) 0%, rgb(223 75 99) 100% )",
            }}
            onClick={handleSaveChanges}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default UpdateModal;

