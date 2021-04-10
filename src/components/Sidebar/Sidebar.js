import React, { Fragment } from 'react'
import './index.css'
const Sidebar = () => {
    const countries = ["USA", " UK", "Germany", " Italy", "Canada", "Bangladesh", "Spain", "Nigeria,", "Niagra", "Zimbabwe", "Nitel","Gana", " Africa"," America", "Brazil"];
    const fabrics = ["Cotton Blend", " Cotton Linen Blend ", "Cotton Silk", " Linen Blend ", "Nylon Blend", "Poly Silk ", "Spain", "Nigeria,", "Niagra", "Zimbabwe", "Polycotton","Pure Cotton", " Rayon "];

    const brands = ["Aeropostale", " Antony Morato", "Arrow", " Arrow Blue Jeans ", "Arrow Sport", "Mufti", "Raymond", "United Colors", "Niagra", "Zimbabwe", "Nitel","Gana", " Afran"," America", "Brazil", "Sana", "Mana", "tana", "Men","women", "Boys", "Girsl", "Pet","Met", "Lent","Sant","Gold", "Diamond", "sweet","Mint", "Faint", "Cotton", "mail","Femail"];
    const patterns = ["Checkered", " Chevron/Zig Zag ", "Color Block", "Floral Print ", "Houndstooth", "Polka Print", "Raymond", "Printed", "Niagra", "Self Design ", "Solid","Gana", " Afran"," America", "Brazil", "Sana", "Mana", "tana", "Men","women", "Boys", "Girsl", "Pet","Met", "Lent","Sant","Gold", "Diamond", "sweet","Mint", "Faint", "Cotton", "mail","Femail"];
    return (
        <Fragment>
            <div className="sidebarWrapper">

                <div className="filters">
                    <h5>Filters</h5>
                    <div>Out of Stock <i className="fas fa-times"></i></div>
                    <div>Size: XL <i className="fas fa-times"></i></div>
                    <div><strong>Clear all</strong></div>
                </div>
                {/* Brand filtering */}

                <div className="brand-filtering">
                        <div className="d-flex head">
                        <h5>Brands</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                        
                        <div className="search-box">
                            <input type="text" placeholder="Search By Brands" />
                            <button><i className="fas fa-search"></i></button>
                        </div>
                    <div className="brand-fill">
                    <div className="">
                    {
                        brands.map((brand, i) =>(
                            <Fragment>
                                <div>

                                <input key={brand.i} className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="" for="flexRadioDefault2">
                                    {brand}
                                    </label>
                                </div>
                            </Fragment>
                        ))
                    }
                    </div>

                    </div>
                    <div className="more-content">{brands.length - 8} More</div>
                </div>
                <div className="country-filtering">
                        <div className="d-flex head">
                        <h5>Country</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                        
                    <div className="country-fill">
                    <div className="">
                    {
                        countries.map(item =>(
                            <Fragment>
                                <div>

                                <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="" for="flexRadioDefault2">
                                    {item}
                                    </label>
                                </div>
                            </Fragment>
                        ))
                    }
                    </div>

                    </div>
                    <div className="more-content">{countries.length - 5} More</div>
                </div>

                {/* size filtering  */}

            <div className="size-filtering">
            <div className="d-flex head">
                        <h5>Size</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                    <div className="size-fill">
                        <div className="">XS</div>
                        <div className="">S</div>
                        <div className="">M</div>
                        <div className="r">L</div>
                        <div className="e">XL</div>
                        <div className="">XXL</div>
                    </div>
                </div>
                <div className="color-filtering">
                <div className="d-flex head">
                        <h5>Colors</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                    <div className="colors-fill">
                        <span className="span-one"><i className="fas fa-square"></i></span>
                        <span className="span-two"><i className="fas fa-square"></i></span>
                        <span className="span-three"><i className="fas fa-square"></i></span>
                        <span className="span-four"><i className="fas fa-square"></i></span>
                        <span className="span-five"><i className="fas fa-square"></i></span>
                        <span className="span-six"><i className="fas fa-square"></i></span>
                    </div>
                </div>

{/* discount filtering  */}
            <div className="discount-filter">
            <div className="d-flex head">
                        <h5>Discount</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                <div className="discount__filter">
                    <div className="radio-form">
                        <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="" for="flexRadioDefault1" >
                            10%-30%
                        </label>
                    </div>
                    <div className="">
                    <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="" for="flexRadioDefault2">
                       30%-50%
                    </label>
                    </div>
                    <div className="">
                    <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="" for="flexRadioDefault2">
                       50%-70%
                    </label>
                    </div>
                </div>
					
				</div>
                {/* price filtering  */}
            <div className="price-filter">
                <h5 className="">Price</h5>
                <div className="price__filter">
                <input type="text" className="form-control" placeholder="Min"/>
					<input type="text" className="form-control" placeholder="Max"/>
                    <i className="fas fa-chevron-right"></i>
                </div>
					
				</div>
                    {/* Rating filtering  */}
                <div className="rating-filter">
                    <div className="">
                        <h5>Rating</h5>
                    </div>
                    <div>
                    <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="" for="flexRadioDefault2">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </label>
                    </div>
                    <div>
                    <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="" for="flexRadioDefault2">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </label>
                    </div>
                    <div>
                    <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="" for="flexRadioDefault2">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </label>
                    </div>
                    <div>
                    <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="" for="flexRadioDefault2">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </label>
                    </div>
                    <div>
                    <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="" for="flexRadioDefault2">
                        <i className="fas fa-star"></i>
                        </label>
                    </div>
                </div>
{/* fabrics filtering  */}
                <div className="country-filtering">
                    
                <div className="d-flex head">
                        <h5>Country</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                <div className="country-fill">
                <div className="">
                {
                    fabrics.map((fab, i) =>(
                        <Fragment key={fab.i}>
                            <div>

                            <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="" for="flexRadioDefault2">
                                {fab}
                                </label>
                            </div>
                        </Fragment>
                    ))
                }
                </div>

                </div>
                <div className="more-content">{fabrics.length - 5} More</div>
            </div>

            {/* pattern filtering  */}
                <div className="country-filtering mb-5">
                    
                <div className="d-flex head">
                        <h5>Country</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                <div className="country-fill">
                <div className="">
                {
                    patterns.map((fat, i) =>(
                        <Fragment key={fat.i}>
                            <div>

                            <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="" for="flexRadioDefault2">
                                {fat}
                                </label>
                            </div>
                        </Fragment>
                    ))
                }
                </div>

                </div>
                <div className="more-content">{patterns.length - 5} More</div>
            </div>

                {/* service filtering  */}
                <div className="discount-filter">
                <div className="d-flex head">
                        <h5>Service</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                <div className="discount__filter">
                    <div className="radio-form">
                        <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="" for="flexRadioDefault1" >
                            Cash on Delivery
                        </label>
                    </div>
                    <div className="">
                    <input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="" for="flexRadioDefault2">
                      Free Shipping
                    </label>
                    </div>
                </div>
					
				</div>
                <div className="discount-filter my-5">
                <div className="d-flex head">
                        <h5>Clothing Style</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                <div className="discount__filter">

                </div>
					
				</div>
                <div className="discount-filter my-5">
                <div className="d-flex head">
                        <h5>Men's Trend</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                <div className="discount__filter">
                    
                </div>
					
				</div>
                <div className="discount-filter my-5 pb-5">
                <div className="d-flex head">
                        <h5>Fit Type</h5>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                <div className="discount__filter">
                    
                </div>
					
				</div>

            </div>
        </Fragment>
    )
}

export default Sidebar
