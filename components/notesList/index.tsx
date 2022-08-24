import React from 'react';
import styles from './notesList.module.scss';
import NoteChip from '../noteChip';
import Button from '../button';
const NoteList = () => {
  return (
    <div className={styles.main}>
      <div className={styles.buttonWrapper}>
        <Button />
        {/* <img src="/static/svg/plus.svg" height="12px" /> */}
        {/* </Button> */}
      </div>
      <NoteChip />
      <NoteChip />
      <NoteChip />
      <NoteChip />
    </div>
  );
};

export default NoteList;
