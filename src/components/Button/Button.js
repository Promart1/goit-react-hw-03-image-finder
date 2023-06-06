import React from 'react';
import css from '../Button/Button.module.css';

export function Button({ onClick }) {
  return (
    <button className={css.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
