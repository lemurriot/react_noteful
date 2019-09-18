import React from 'react'
import './Nav.css'
import Folder from '../Folder/Folder'
import FolderError from '../ErrorBoundaries/FolderError'
import PropTypes from 'prop-types'


export default function NavPartial(props) {
    const folderList = props.folders.length ? props.folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.folder_title} highlighted={false}/>) : <span>There are no folders yet</span>

    return (
        <nav>
            <button className="go-back-btn" onClick={props.routerHistoryProps.goBack}>
                Go Back
            </button>
            <FolderError>
                {folderList}
            </FolderError>
        </nav>
    )
}


NavPartial.propTypes = {
    routerHistoryProps: PropTypes.object.isRequired,
    folders: PropTypes.arrayOf(PropTypes.shape({
        folder_title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }))
}
