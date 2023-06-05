import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { smallUrl, description } = this.props;
    return (
      <li>
        <img src={smallUrl} alt={description} />
      </li>
    );
  }
}
