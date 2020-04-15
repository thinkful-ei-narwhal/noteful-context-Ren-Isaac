import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleButton from '../CircleButton/CircleButton';
import CreateContext from '../ContextStore';
import { findNote, findFolder } from '../notes-helpers';
import './NotePageNav.css';

export default class NotePageNav extends React.Component {
  static contextType = CreateContext;
  render() {
    const { notes, folders } = this.context;
    const { noteId } = this.props.match.params;
    const note = findNote(notes, noteId) || {};
    const folder = findFolder(folders, note.folderId);
    console.log(this.props);
    return (
      <div className="NotePageNav">
        <CircleButton
          tag="button"
          role="link"
          onClick={() => this.props.history.goBack()}
          className="NotePageNav__back-button"
        >
          <FontAwesomeIcon icon="chevron-left" />
          <br />
          Back
        </CircleButton>
        {folder && <h3 className="NotePageNav__folder-name">{folder.name}</h3>}
      </div>
    );
  }
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {},
  },
};
