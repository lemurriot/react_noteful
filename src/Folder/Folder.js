import React from 'react'
import './Folder.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


export default function Folder(props) {
    // conditional set up to test error boundary component
    if (!props.id){
        throw new Error('Something went wrong')
    }
    const addClasses = props.highlighted ? 'folder highlighted' : 'folder'
    return (
        <Link to={`/folder/${props.id}`}>
            <div className={addClasses}>
                {props.name}
            </div>
        </Link>
    )
}

Folder.propTypes = {
    highlighted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
