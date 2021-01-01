import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className = "header">
            <a href = "/">Home</a>
            <a href = "/codester">Codester</a>
            <a href = "/techster">Techster</a>
            <a href = "/about">About</a>
        </div>
    )
}

export default Header
