import React from 'react'
import './Folder.css'
import { Link } from 'react-router-dom'

export default function Folder(props) {
    return (
        <Link to={`/folder/${props.id}`}>
            <div className="folder">
                {props.name}
            </div>
        </Link>
    )
}
