import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './noteEditor.module.scss';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];

const Editor = () => {
  const [evalue, setEditorValue] = useState();

  return (
    <div className={styles.main}>
      <div className={styles.titleHeader}>
        <input
          // onChange={props.onChange}
          // value={props.value}
          placeholder="Title"
        />
        <div>
          <img src="/static/img/diskette.png" alt="diskette.png" width={20} />
          <img src="/static/img/delete.png" alt="delete.png" width={20} />
        </div>
      </div>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        theme="snow"
        // onChange={setEditorValue}
        value={evalue}
      />
    </div>
  );
};

export default Editor;
