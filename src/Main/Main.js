import React from 'react'
import NavFull from '../Nav/NavFull'
import NoteList from '../NoteList/NoteList'
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types'


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

Main.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
}