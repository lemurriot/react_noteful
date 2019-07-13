import React from 'react'
import PropTypes from 'prop-types'
import './ValidationError.css'

export default function ValidationError(props) {
    return (
        <div className="validation-message">
            {props.message}
        </div>
    )
}

ValidationError.propTypes = {
    message: PropTypes.string
}
