import React from 'react';
import styles from './notesList.module.scss';
import NoteChip from '../noteChip';
const NoteList = () => {
  return (
    <div className={styles.main}>
      <NoteChip />
      <NoteChip />
      <NoteChip />
      <NoteChip />
    </div>
  );
};

export default NoteList;
