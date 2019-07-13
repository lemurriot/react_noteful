import React from 'react'
import './Nav.css'
import Folder from '../Folder'
import FolderError from '../ErrorBoundaries/FolderError'

export default function NavPartial(props) {
    const folderList = props.folders.map(folder => {
        return (
            <FolderError>
                <Folder key={folder.id} id={folder.id} name={folder.name}/>
            </FolderError>
        )
    })
    return (
        <nav>
            <button className="go_back_btn" onClick={props.routerHistoryProps.goBack}>
                Go Back
            </button>
            {folderList}
        </nav>
    )
}
