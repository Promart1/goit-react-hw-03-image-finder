import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as GetImg from '../service/getImg';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    name: '',
    page: 1,
    isEmpty: true,
    isVisible: false,
  };

  componentDidUpdate(_, prevState) {
    const { name, page } = this.state;

    if (prevState.name !== name || prevState.page !== page) {
      this.getPhoto(name, page);
    }
  }

  onSubmit = value => {
    this.setState({ name: value });
  };

  getPhoto = async (name, page) => {
    if (!name) {
      return;
    }
    const {
      hits,
      totalHits,
      page: currentPage,
      per_page,
    } = await GetImg.getImages(name, page);
    if (hits === 0) {
      this.setState({ isEmpty: true });
    }
    this.setState(prevState => ({
      images: [...prevState.images, ...hits],
      isEmpty: false,
      isVisible: currentPage < Math.ceil(totalHits / per_page),
    }));
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isEmpty, isVisible } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {isEmpty && <p>Sorry, there are no images...</p>}

        <ImageGallery images={images} />
        {isVisible && <Button onClick={this.onLoadMore} />}
      </div>
    );
  }
}
