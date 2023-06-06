import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as GetImg from '../service/getImg';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

import css from './App.module.css';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    name: '',
    page: 1,
    isEmpty: true,
    isVisible: false,
    error: null,
    isLoading: false,
    showModal: false,
    selectedImage: null,
  };

  componentDidUpdate(_, prevState) {
    const { name, page } = this.state;

    if (prevState.name !== name || prevState.page !== page) {
      this.getPhoto(name, page);
    }
  }

  onSubmit = value => {
    this.setState({
      images: [],
      name: value,
      page: 1,
      isEmpty: true,
      isVisible: false,
      error: null,
    });
  };

  getPhoto = async (name, page) => {
    if (!name) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await GetImg.getImages(name, page);
      if (hits === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isEmpty: false,
        isVisible: Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isEmpty, isVisible, error, isLoading } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {isEmpty && <p className={css.text}>Sorry, there are no images...</p>}
        {error && <p className={css.text}>Sorry, {error}</p>}
        <ImageGallery images={images} />
        {isVisible &&
          (isLoading ? <Loader /> : <Button onClick={this.onLoadMore} />)}
      </div>
    );
  }
}
