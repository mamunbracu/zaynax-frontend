import React, { Fragment } from 'react'
import data from '../../data'
import './MainContent.css'
const MainContent = () => {

    return (
        <Fragment>
            <div className="container">
                <div className="row mt-4">
                    {
                        data.map(item => (
                            <Fragment>
                            <div className="col-md-3">
                            <div className="card mb-3">
                                <img src={item.img} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h4>BDT {item.realPrice}</h4>
                                    <div className="d-flex justify-content-between">
                                        <h6><strong><del>BDT {item.offerPrice}</del></strong></h6>
                                        <h6>34% Off</h6>
                                    </div>
                                </div>
                                </div>

                            </div>
                            </Fragment>
                        ))
                    }
                    
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 mt-5 pages">
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg">
                                <li className="page-item active" aria-current="page">
                                <span className="page-link">1</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item"><a className="page-link" href="#">7</a></li>
                                <li className="page-item"><a className="page-link" href="#">8</a></li>
                                <li className="page-item"><a className="page-link" href="#">9</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default MainContent
