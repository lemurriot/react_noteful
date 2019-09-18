import React from 'react'
import Note from '../Note/Note'
import PropTypes from 'prop-types'


export default function SelectedNote(props) {
    const { note_title, content, id, date_modified } = props.notes
    const deleteSelectedNote = id => {
        props.deleteNote(id)
        props.routeHistory.goBack()
    }
    return (
        <div>
            <Note 
                id={id}
                name={note_title} 
                modified={date_modified}
                deleteNote={deleteSelectedNote}
            />
            <p>{content}</p>
        </div>
    )
}

SelectedNote.propTypes = {
    deleteNote: PropTypes.func.isRequired,
    routeHistory: PropTypes.object.isRequired,
    notes: PropTypes.shape({     
        id: PropTypes.number.isRequired,
        date_modified: PropTypes.oneOfType([PropTypes.string, PropTypes.number,]).isRequired,
        note_title: PropTypes.string.isRequired,     
    })
}
