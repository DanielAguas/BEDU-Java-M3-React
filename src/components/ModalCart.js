import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/modal.module.css'; // Estilos para el modal

const ModalCart = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['modal-header']}>
          <button className={styles['modal-close']} onClick={onClose}>
            &times;
          </button>
        </div>
        {/* Contenido del carrito */}
        <div className={styles['modal-body']}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default ModalCart;