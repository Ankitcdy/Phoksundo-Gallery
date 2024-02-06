import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const ComC = () => {
    const js = useContext(GlobalContext)
    return (
        <>
            <h2> The javascript library we are learning is React Js</h2>
        </>
    )
}

export default ComC