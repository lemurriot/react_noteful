import React from 'react'
import Note from './Note'
import { Link } from 'react-router-dom'

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
                    <button className="add_note_btn">Add note</button>
                </Link>
            </section>
    )
}
