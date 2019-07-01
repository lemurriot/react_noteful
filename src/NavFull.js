import React from 'react'
import './Nav.css'
import Folder from './Folder'

export default function NavFull(props) {
const folderList = props.folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name} highlighted={folder.id === props.selectedFolder.id}/>)
    return (
        <nav>
            {folderList}
            <button className="add_folder_btn">
                Add Folder
            </button>
        </nav>
    )
}