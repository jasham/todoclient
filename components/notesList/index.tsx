import React from 'react';
import styles from './notesList.module.scss';
import NoteChip from '../noteChip';
import Button from '../button';

const NoteList = () => {
  const handleClick = () => {
    console.log('Here is event called');
  };
  return (
    <div className={styles.main}>
      <div className={styles.buttonWrapper}>
        <Button handleClick={handleClick} />
      </div>
      {/* <NoteChip /> */}
    </div>
  );
};

export default NoteList;
