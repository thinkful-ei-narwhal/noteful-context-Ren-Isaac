import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Note from '../Note/Note';
import CircleButton from '../CircleButton/CircleButton';
import CreateContext from '../ContextStore';
import './NoteListMain.css';

export default class NoteListMain extends React.Component {
  static contextType = CreateContext;
  render() {
    const { notes, folders } = this.context;
    return (
      <section className="NoteListMain">
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Note id={note.id} name={note.name} modified={note.modified} />
            </li>
          ))}
        </ul>
        <div className="NoteListMain__button-container">
          <CircleButton
            tag={Link}
            to="/add-note"
            type="button"
            className="NoteListMain__add-note-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Note
          </CircleButton>
        </div>
      </section>
    );
  }
}
// const { folderId } = routeProps.match.params;
// const notesForFolder = getNotesForFolder(notes, folderId);

NoteListMain.defaultProps = {
  notes: [],
};
