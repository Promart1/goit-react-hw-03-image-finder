import React, { Component } from 'react';
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
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className={css.SearchFormInput}
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
