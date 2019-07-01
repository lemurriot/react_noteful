import React from 'react'
import Note from './Note'

export default function NoteList(props) {
    const notes = props.notes.map(note => {
        return (
            <Note 
                key={note.id}
                id={note.id}
                name={note.name} 
                modified={note.modified}
            />
            );
        })
        return (
            <section>
                {notes}
                <button className="add_note_btn">Add note</button>
            </section>
    )
}
