import React from 'react'
import NavFull from './NavFull'
import NoteList from './NoteList'
import NotefulContext from './NotefulContext'

export default function Main() {
    return (
        <NotefulContext.Consumer>
            {(context) => {
                return (
                    <>
                    <NavFull 
                        folders={context.folders}
                        selectedFolder={{}}
                    />
                    <NoteList 
                        notes={context.notes}
                        deleteNote={context.deleteNote}
                    />
                    </>
                );
            }}
        </NotefulContext.Consumer>
    )
}
