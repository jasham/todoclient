// Import React dependencies.
import React, { useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
import styles from './noteEditor.module.scss';
const NoteEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  // Add the initial value.
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];
  return (
    <div className={styles.main}>
      <Slate editor={editor} value={initialValue}>
        <Editable style={{ height: '100%' }} />
      </Slate>
    </div>
  );
};

export default NoteEditor;
