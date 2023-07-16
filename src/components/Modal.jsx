
import { useState } from "react";
import CustomModal from "./CustomModal";

function App() {
  const [show, setShow] = useState(false);



  const handleModal = () => {
    setShow(!show);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  const handleSaveChanges = () => {
    // Perform necessary actions to save changes
    setShow(false);
  };

  return (
    <div className='Main-Modal'>
      <div className="d-flex justify-content-center">
        <button onClick={handleModal}>Add</button>
      </div>
      <CustomModal
        show={show}
        handleClose={handleModalClose}
        handleSaveChanges={handleSaveChanges}
      />
     
    </div>
  );
}

export default App;
