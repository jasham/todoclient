import React from 'react';
import styles from './button.module.scss';

const Button = ({}) => {
  return (
    <button className={styles.main}>
      <img src="/static/svg/plus.svg" width={'11rem'} />
    </button>
  );
};

export default Button;
