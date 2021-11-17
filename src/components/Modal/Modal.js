import { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from "prop-types";

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown)
  }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount')

        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.toggleModal();
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal();
        }
    }

    render() {
        const { largeImageURL } = this.props;
      return (
          <div className={s.overlay} onClick={this.handleBackdropClick}>
              <div className={s.modal}>
                  <img src={largeImageURL} alt="" />
                  {/* <button className={s.button} type="button" onClick={this.props.toggleModal}></button> */}
              </div>
          </div>
      );
    }
};


Modal.propTypes = {
    toggleModal: PropTypes.func,
    largeImageURL: PropTypes.string,
};