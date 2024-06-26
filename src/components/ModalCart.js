import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/modal.module.css';

const ModalCart = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}> 
        <div className={styles['modal-body']}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default ModalCart;