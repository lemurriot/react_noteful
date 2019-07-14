import React from 'react'
import './Nav.css'
import Folder from '../Folder/Folder'
import { Link } from 'react-router-dom'
import FolderError from '../ErrorBoundaries/FolderError'
import PropTypes from 'prop-types'


export default function NavFull(props) {
const folderList = props.folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name} highlighted={folder.id === props.selectedFolder.id}/>)
    return (
        <nav>
            <FolderError>
                {folderList}
            </FolderError>
            <Link to="/add-folder">
                <button className="add_folder_btn">
                    Add Folder
                </button>
            </Link>
        </nav>
    )
}

NavFull.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })),
    selectedFolder: PropTypes.object.isRequired
}