import { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from "prop-types";

export default function Modal({toggleModal, largeImageURL}) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [toggleModal]);

     const handleKeyDown = e => {
        if (e.code === 'Escape') {
            toggleModal();
        }
    };

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            toggleModal();
        }
    }

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
              <div className={s.modal}>
                  <img src={largeImageURL} alt="" />
              </div>
          </div>
  )
}


Modal.propTypes = {
    toggleModal: PropTypes.func,
    largeImageURL: PropTypes.string,
};