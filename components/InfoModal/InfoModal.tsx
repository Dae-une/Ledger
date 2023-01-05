import React, { useCallback, useState } from 'react';
import { Modal, TextButton } from './styles';

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  btnText: string;
  linkTo?: () => void;
};

function InfoModal({ setShowModal, message, btnText, linkTo }: Props) {
  const [modalAnimation, setModalAnimation] = useState(true);

  const closeModal = useCallback(() => {
    setModalAnimation(false);
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  }, []);

  return (
    <Modal isOpen={modalAnimation}>
      <button onClick={closeModal}>X</button>
      <div>
        <p>{message}</p>
        <TextButton onClick={linkTo || closeModal}>{btnText}</TextButton>
      </div>
    </Modal>
  );
}

export default InfoModal;
