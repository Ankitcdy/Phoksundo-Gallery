import React from 'react'

const Card = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="/Images/test1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Through Air</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/Images/test2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Via Bus</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/Images/test3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lake-Scenary</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/Images/test4.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Rigmo Village</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card