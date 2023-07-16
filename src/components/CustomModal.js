import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// AiFillEdit
import { FaPenToSquare } from "react-icons/fa6";
import Drop from "./Drop";
const CustomModal = ({ show, handleClose, handleSaveChanges, title, setUser_details,priority,user_details}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Task Details</Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex align-items-center gap-4">
        {/* <p>Task created successfully</p> */}
        <input type="text" id="edittodo" value={title} name="title"  onChange={(e) => setUser_details({...user_details,[e.target.name]:e.target.value})} className="form-control" />
        <span>
          <label htmlFor="edittodo"> <FaPenToSquare size="35px"  /></label>
        
        </span>
      </Modal.Body>
      <div className="mx-1">
        <Drop priority={priority} user_details={user_details} setUser_details={setUser_details}  />
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
