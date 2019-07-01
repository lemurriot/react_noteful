import React from 'react'

export default function Note(props) {
    return (
        <div className="note">
            <h3>{props.name}</h3>
            <span>{props.modified}</span>
            <button>Delete Note</button>
        </div>
    )
}
