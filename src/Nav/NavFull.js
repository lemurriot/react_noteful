import React from 'react'
import './Nav.css'
import Folder from '../Folder'
import { Link } from 'react-router-dom'

export default function NavFull(props) {
const folderList = props.folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name} highlighted={folder.id === props.selectedFolder.id}/>)
    return (
        <nav>
            {folderList}
            <Link to="/add-folder">
                <button className="add_folder_btn">
                    Add Folder
                </button>
            </Link>
        </nav>
    )
}