import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      I accept
    </Button>
  );

  const modle = (
    <Modal onClick={handleClose} actionBar={actionBar}>
      <p>I accept all condistion</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modle}
    </div>
  );
}

export default ModalPage;
