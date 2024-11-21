import React, { useContext } from 'react';
import ModalContext from '../../context/ModalContext';
import getModal from './index.js';

const RenderModal = () => {
  const { modalInfo } = useContext(ModalContext);

  if (!modalInfo.type) {
    return null;
  }
  const Component = getModal(modalInfo.type);
  return <Component />;
};

export default RenderModal;
