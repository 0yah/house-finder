import React, { useEffect, useState } from 'react'
export const Home = () => {
    const [locations, setlocations] = useState([]);
    const [latestListings, setLatestListings] = useState([1, 2, 3,4]);
    const [qlocation, setqlocation] = useState();
    const [qtype, setqtype] = useState();
    const [qprice, setqprice] = useState();


    useEffect(() => {

    }, []);

    const renderLatest = () => {
        return latestListings.map((value, index) => {
            return <div className="card featureCard">
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />
                <div className="content">
                <span className="price">KES 1.8mill</span>
                <h2>House {index+1}</h2>


                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               
                </div>
               
            </div>
        })
    }
    return <div>

        <div className="mainSearch">
            <h1>House Finder</h1>
            <div className="queryBuilder">
                <form>
                    <select onChange={(e) => {
                        setqtype(e.target.value)
                    }}>
                        <option selected disabled>Category</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="Apartments">Apartments</option>
                        <option value="Masionette">Masionette</option>

                    </select>

                    <select onChange={(e) => {
                        setqlocation(e.target.value)
                    }}>

                        <option selected disabled>Location</option>
                        {locations.map((location) => {
                            return <option value={location.name}>{location.name}</option>
                        })}

                        <option value="Bungalow">Bungalow</option>
                        <option value="Apartments">Apartments</option>
                        <option value="Masionette">Masionette</option>

                    </select>
                    <input type="number" onChange={(e) => {
                        setqprice(e.target.value)
                    }} placeholder="Price" />
                </form>
            </div>
            <span className="searchButton">Search</span>

        </div>

        <div className="featureBreaker">
            <span>Latest Listings</span>
        </div>
        <div className="features">

            {renderLatest()}
        </div>
    </div>
}

//https://levelup.gitconnected.com/building-a-simple-dynamic-search-bar-in-react-js-f1659d64dfae