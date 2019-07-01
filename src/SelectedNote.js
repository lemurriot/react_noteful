import React from 'react'

export default function SelectedNote(props) {

    console.log(props)
    return (
        <div>
            <h3>{props.notes.name}</h3>
            <p>{props.notes.content}</p>
        </div>
    )
}
