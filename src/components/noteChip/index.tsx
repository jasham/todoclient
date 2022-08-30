import React from 'react';
import styles from './noteChip.module.scss';

type NoteChipProps = {
  value: string;
  handleClick: (key: number) => void;
  key?: string;
  index: number;
};

const NoteChip = ({ value, handleClick, index }: NoteChipProps) => {
  return (
    <div className={styles.main} onClick={() => handleClick(index)}>
      {value}
    </div>
  );
};

export default NoteChip;
