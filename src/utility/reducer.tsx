import { ContextProps } from '../../pages/_app';
import { ADD_NEW_NOTE, APPEND_NOTE, CURRENT_NOTE_INDEX } from './type';

type NewNoteProps = { note: string; noteTitle: string };

type ActionTypes =
  | { type: 'ADD_NEW_NOTE'; value: NewNoteProps[] }
  | { type: 'CURRENT_NOTE_INDEX'; value: number };

export const reducer = (state: ContextProps, action: ActionTypes) => {
  switch (action.type) {
    case ADD_NEW_NOTE:
      return { ...state, noteList: action.value };
    case CURRENT_NOTE_INDEX:
      return { ...state, currentNoteIndex: action.value };
    default:
      return state;
  }
};
