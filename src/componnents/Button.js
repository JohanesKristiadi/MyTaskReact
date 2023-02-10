import React from "react";
import "../styles/Button.css"
import PropTypes from "prop-types"

const Button = ({variant, text}) => {
    return (
        <button className= {`btn btn-${variant}`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text :PropTypes.string.isRequired,
    variant : PropTypes.string.isRequired
}
export default Button