import React from 'react'
import './Nav.css'
import Folder from './Folder'

export default function NavPartial(props) {
    const folderList = props.folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name}/>)
    return (
        <nav>
            <button className="go_back_btn">
                Go Back
            </button>
            {folderList}
        </nav>
    )
}
