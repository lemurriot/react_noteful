import React from 'react'
import Note from '../Note/Note'
import PropTypes from 'prop-types'


export default function SelectedNote(props) {
    const { name, content, id, modified } = props.notes
    const deleteSelectedNote = id => {
        props.deleteNote(id)
        props.routeHistory.goBack()
    }
    return (
        <div>
            <Note 
                id={id}
                name={name} 
                modified={modified}
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
        id: PropTypes.string.isRequired,
        modified: PropTypes.oneOfType([PropTypes.string, PropTypes.number,]).isRequired,
        name: PropTypes.string.isRequired,     
    })
}
