import React from 'react';
import NoteList from '../../components/notesList';
import NoteEditor from '../../components/noteEditor';
import styles from './webView.module.scss';

const WebView = () => {
  return (
    <div className={styles.main}>
      {/* Web View */}
      <NoteList />
      <NoteEditor />
    </div>
  );
};

export default WebView;
