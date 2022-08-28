import React from 'react';
import styles from './noteChip.module.scss';

type NoteChipProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const NoteChip = (props: NoteChipProps) => {
  return (
    <div className={styles.main}>
      {/* <input
        onChange={props.onChange}
        value={props.value}
        placeholder="Title"
      /> */}
      {/* <img src="/static/img/diskette.png" alt="diskette.png" width={20} />
      <img src="/static/img/delete.png" alt="delete.png" width={20} /> */}
    </div>
  );
};

export default NoteChip;
