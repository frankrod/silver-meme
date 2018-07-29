import React from 'react';
import './modal.css'

export const Modal = ({imageSrc, message, closeModal}) => (
  <div className="modal">
    <span className="close" onClick={closeModal}>&times;</span>
    <img src={imageSrc} alt="500x500" className="modal-content" />
    <h2 className="caption">{message}</h2>
  </div>
);