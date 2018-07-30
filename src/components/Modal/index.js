import React from 'react';
import './modal.css'
import PropTypes from 'prop-types';

const Modal = ({imageSrc, message, closeModal}) => (
  <div className="modal">
    <span className="close" onClick={closeModal}>&times;</span>
    <img src={imageSrc} alt="500x500" className="modal-content" />
    <h2 className="caption">{message}</h2>
  </div>
);

Modal.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export { Modal };