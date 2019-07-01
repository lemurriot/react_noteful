import React from 'react'
import './Nav.css'
import Folder from './Folder'

export default function Nav(props) {
    const folderList = props.folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name}/>)
    return (
        <nav>
            {folderList}
        </nav>
    )
}
