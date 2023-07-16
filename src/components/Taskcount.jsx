import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { MdDelete } from "react-icons/md";

const Taskcount = ({total,pending,success,handleAllClear}) => {
    
  return (
    <>
      <div className="buttoncount  my-5">
        <Stack direction="row" className="flex-button" >
          <Button variant="outlined" color="secondary" className="button-flex-item my-3">
            Total: {total}
          </Button>
          <Button variant="outlined" color="success" className="button-flex-item my-3">
            Success: {success}
          </Button>
          <Button variant="outlined" color="error" className="button-flex-item my-3">
            Pending: {pending}
          </Button>
          <Button variant="outlined" color="error" onClick={handleAllClear} className="button-flex-item my-3">
            All Clear <MdDelete size="20px" />
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Taskcount;
