import React from 'react'
import './Nav.css'
import Folder from '../Folder'
import FolderError from '../ErrorBoundaries/FolderError'
import PropTypes from 'prop-types'


export default function NavPartial(props) {
    const folderList = props.folders.length ? props.folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name}/>) : <span>There are no folders yet</span>

    return (
        <nav>
            <button className="go_back_btn" onClick={props.routerHistoryProps.goBack}>
                Go Back
            </button>
            <FolderError>
                {folderList}
            </FolderError>
        </nav>
    )
}


NavPartial.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }))
}
