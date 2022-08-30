import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.main} onClick={props.handleClick}>
      <img src="/static/svg/plus.svg" width={'11rem'} />
    </button>
  );
};

export default Button;
