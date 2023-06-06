import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

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
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <FiSearch />
          </button>

          <input
            onChange={this.handleInput}
            className={css.searchFormInput}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
