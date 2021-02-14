import React, { useState, useEffect } from 'react'
export const Listing = () => {

    return <div>
        <div className="listingLayout">
            <div className="hideDesktop mobileFilter">
                <span>Filters</span>
            </div>
            <div className="filters">
                <h5>Filter</h5>
                <form>
                    <select>
                        <option selected disabled>Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3+</option>
                    </select>

                    <div>
                        <input placeholder="Minimum Size" />-
                    <input placeholder="Maximum Size" />
                        <label for="volume">Size</label>
                        <input type="range" id="volume" name="volume"
                            min="0" max="11" />
                    </div>

                    <div>
                        <input placeholder="Minimum Price" />-
                    <input placeholder="Maximum Price" />
                        <label for="volume">Price</label>
                        <input type="range" id="volume" name="volume"
                            min="0" max="11" />
                    </div>
                </form>
            </div>

            <div className="content">

                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 1</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>


                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 2</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>

                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 3</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>
                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 4</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>
                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 5</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>
                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 6</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>
                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 7</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>
                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 8</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>
                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 9</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>
                <div className="card listingCard">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />


                    <div className="content">
                        <h6>House 10</h6>
                        <span className="location">Location</span>
                        <p>fdjfdkjjk jnkdjnkjnfdkj</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
}