import React from 'react'
import Note from '../Note/Note'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './NoteList.css'


export default function NoteList(props) {
    const notes = props.notes.map(note => {
        return (
            <Note 
                key={note.id}
                id={note.id}
                name={note.name} 
                modified={note.modified}
                deleteNote={props.deleteNote}
            />
            );
        })
        return (
            <section>
                {!notes.length && (<p>There are no notes yet in this folder</p>)}
                {notes}
                <Link to="/add-note">
                    <button className="add-note-btn">Add New Note</button>
                </Link>
            </section>
    )
}

NoteList.propTypes = {
    deleteNote: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.string.isRequired,
        folderId: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        modified: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
    }))
}
