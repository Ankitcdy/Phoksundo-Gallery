import React from 'react'

const Prop = (props) => {

    // const language=props.language
    // const technology=props.technology
    // const{language,technology}=props

    return (
        <>
            <h2 style={{ color: 'white', backgroundColor: '#232f39' }}>
                This is a Demo {props.language} webpage. React is mainly used for {props.technology} development
            </h2>
        </>
    )
}

export default Prop