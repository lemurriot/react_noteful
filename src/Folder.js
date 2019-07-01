import React from 'react'
import './Folder.css'
import { Link } from 'react-router-dom'

export default function Folder(props) {
    const addClasses = props.highlighted ? 'folder highlighted' : 'folder'
    return (
        <Link to={`/folder/${props.id}`}>
            <div className={addClasses}>
                {props.name}
            </div>
        </Link>
    )
}
