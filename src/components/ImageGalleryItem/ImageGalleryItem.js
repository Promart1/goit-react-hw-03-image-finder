import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { smallImg, description, bigImg } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemIimage}
          src={smallImg}
          alt={description}
          onClick={this.openModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.closeModal} url={bigImg} />
        )}
      </li>
    );
  }
}
