import React from 'react'
import { Link } from 'react-router-dom'

export default function Note(props) {
    const dateString = new Date(props.modified)
    const day = dateString.getDate()
    const month = dateString.getMonth() + 1
    const year = dateString.getFullYear()
    return (
        <div className="note">
            <Link to={`/note/${props.id}`}><h3>{props.name}</h3></Link>
            <span>Modified on {month}/{day}/{year}</span>
            <button>Delete Note</button>
        </div>
    )
}
