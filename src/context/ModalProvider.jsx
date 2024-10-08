import React, { useState, useMemo } from 'react';
import ModalContext from './ModalContext.js';

const ModalProvider = ({ children }) => {
  const [modalInfo, setModalInfo] = useState({type: null, payload: null});

  const openModal = (type, payload = null) => setModalInfo({ type, payload });

  const closeModal = () => setModalInfo({ type: null, payload: null });

  const props = useMemo(() => ({ modalInfo, openModal, closeModal }), [modalInfo]);
  return (
    <ModalContext.Provider value={props}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;