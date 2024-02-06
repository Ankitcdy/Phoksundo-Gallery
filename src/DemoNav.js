//Under maintanance


import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const DemoNav = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">link1</Link>
                    <Link to="/hello">link2</Link>
                    <Link to="/test">link3</Link>
                </li>
            </ul>
        </>
    )
}

export default DemoNav