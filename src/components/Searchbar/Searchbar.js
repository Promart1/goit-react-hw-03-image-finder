import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleInput = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase().trim() });
  };
  reset = () => {
    this.setState({ name: '' });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    this.props.onSubmit(name);
    this.reset();
  };
  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            onChange={this.handleInput}
            class="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
