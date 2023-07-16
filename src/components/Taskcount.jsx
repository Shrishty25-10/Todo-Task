import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { MdDelete } from "react-icons/md";

const Taskcount = ({total,pending,success,handleAllClear}) => {
    
  return (
    <>
      <div className="buttoncount mx-5 my-5">
        <Stack direction="row" className=" " spacing={25}>
          <Button variant="outlined" color="secondary">
            Total: {total}
          </Button>
          <Button variant="outlined" color="success">
            Success: {success}
          </Button>
          <Button variant="outlined" color="error">
            Pending: {pending}
          </Button>
          <Button variant="outlined" color="error" onClick={handleAllClear}>
            All Clear <MdDelete size="20px" />
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Taskcount;
