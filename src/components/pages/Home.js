import React, { Fragment } from 'react'
import MainContent from '../Maincontent/MainContent'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'
const Home = () => {
    return (
        <Fragment>
           <nav className="navbar navbar-expand-lg navbar-none bg-none mt-4">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{marginLeft:"70px", fontSize:"18px"}}>
                    <li className="nav-item">
                    <a className="nav-link text-muted active" aria-current="page" href="#!">HomePage</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#!">All Products</a>
                    </li>
                </ul>
                </div>
            </div>
                <hr style={{border: "1px solid grey", height:"2px"}}/>
            </nav>
            <h6 style={{borderBottom: "1px solid grey", height:"2px", marginLeft:"86px", marginRight:"50px"}}></h6>
            <div className="bottom-nab">
                <h6>Showing 1 – 40 of 80,068 products</h6>
                <h6><strong>Refine by</strong>  <span className="refine-by"></span></h6>
                <h6><strong>Price</strong> 
                    <select name="" id="">
                    <option value="" disabled selected hidden></option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                    </select>
                </h6>
                <h6><strong>Sort by</strong> <span className="refine-by"></span></h6>
                <h6><strong className="">Best Sellers</strong> 
                    <select name="" id="">
                    <option value="" disabled selected hidden></option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                        <option value="">100 BDT</option>
                    </select>
                </h6>

                <div className="search-box search-input">
                            <input type="text" placeholder="Search By Brands" />
                            <button><i className="fas fa-search"></i></button>
                        </div>
            </div>


            <div className="content-other">
                <div className="sidebar-wrap">

                <Sidebar />
                </div>
                <div className="main-content-wrap">
                <MainContent />
                </div>

            </div>


           
            
        </Fragment>
    )
}

export default Home
