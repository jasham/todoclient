import React, { useReducer, createContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'react-quill/dist/quill.snow.css';
import { store } from '../src/utility/store';
import { reducer } from '../src/utility/reducer';

export type ContextProps = {
  noteList: {
    note: string;
    noteTitle: string;
  }[];
  currentNoteIndex: number;
};

export const GlobalContext = createContext<{
  state: ContextProps;
  dispatch: React.Dispatch<any>;
}>({
  state: store,
  dispatch: () => null,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />;
    </GlobalContext.Provider>
  );
};

export default MyApp;
