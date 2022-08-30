import React, { useContext } from 'react';
import styles from './notesList.module.scss';
import Button from '../button';
import { GlobalContext } from '../../../pages/_app';
import { ADD_NEW_NOTE, CURRENT_NOTE_INDEX } from '../../utility/type';
import NoteChip from '../noteChip';

const NoteList = () => {
  const globalContext = useContext(GlobalContext);

  const handleClick = () => {
    let noteList = globalContext?.state?.noteList;
    if (noteList.length > 0) {
      noteList.push({ note: '', noteTitle: '' });
    }
    globalContext?.dispatch({
      type: ADD_NEW_NOTE,
      value: noteList,
    });
    globalContext?.dispatch({
      type: CURRENT_NOTE_INDEX,
      value: noteList?.length > 0 ? noteList?.length - 1 : 0,
    });
  };

  const onClickChip = (id: number) => {
    globalContext?.dispatch({
      type: CURRENT_NOTE_INDEX,
      value: id,
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.buttonWrapper}>
        <Button handleClick={handleClick} />
      </div>
      {globalContext?.state?.noteList?.map((noteTitledata, index) => {
        return (
          <NoteChip
            value={noteTitledata.noteTitle}
            key={index.toString()}
            handleClick={onClickChip}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
