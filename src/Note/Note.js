import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


export default function Note(props) {
    const dateString = new Date(props.modified)
    const day = dateString.getDate()
    const month = dateString.getMonth() + 1
    const year = dateString.getFullYear()
    return (
        <div className="note">
            <Link to={`/note/${props.id}`}><h3>{props.name}</h3></Link>
            <span>Modified on {month}/{day}/{year}</span>
            <button onClick={() => props.deleteNote(props.id)}>Delete Note</button>
        </div>
    )
}

Note.defaultProps = {
    deleteNote: () => {},
    id: '',
    modified: '',
    name: ''
}
Note.propTypes = {
    deleteNote: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    modified: PropTypes.oneOfType([PropTypes.string, PropTypes.number,]).isRequired,
    name: PropTypes.string.isRequired,
}

