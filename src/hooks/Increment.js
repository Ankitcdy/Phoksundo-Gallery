import React, { useState } from 'react'

const Increment = () => {
    const [value, setValue] = useState(0)


    // const increase = () => (
    //     setValue(value + 1)
    // )


    return (
        <>
            <center>
                <h2>{value}</h2>
                <button className='btn btn-success' onClick={() => setValue(value + 1)}>Increment</button>
                &nbsp;&nbsp;
                {<button className='btn btn-danger' onClick={() => setValue(value - 1)}>Decrement</button>}
                &nbsp;&nbsp;
                <button className='btn btn-primary' onClick={() => setValue(0)}>Reset Value</button>
            </center>
        </>
    )
}

export default Increment