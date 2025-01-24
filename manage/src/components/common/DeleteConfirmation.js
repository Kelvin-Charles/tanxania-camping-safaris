import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import './DeleteConfirmation.css';

const DeleteConfirmation = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="delete-modal" onClick={e => e.stopPropagation()}>
        <div className="delete-icon">
          <FaExclamationTriangle />
        </div>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="delete-actions">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation; 