import React, { useEffect, useState } from 'react'
export const Home = () => {
    const [locations, setlocations] = useState([]);
    const [qlocation, setqlocation] = useState();
    const [qtype, setqtype] = useState();
    const [qprice, setqprice] = useState();


    useEffect(() => {

    }, []);
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
            <span>Title</span>
        </div>
        <div className="features">

            <div className="card featureCard">
                <h2>Lorem</h2>


                <p>
                    fdjvkjndf
                </p>
            </div>

            <div className="card featureCard">
                <h2>Lorem</h2>
                <p>
                    fdjvkjndf
                </p>
            </div>


            <div className="card featureCard">
                <h2>Lorem</h2>

                <p>
                    fdjvkjndf
                </p>
            </div>
            <div className="card featureCard">
                <h2>Lorem</h2>

                <p>
                    fdjvkjndf
                </p>
            </div>
        </div>
    </div>
}

//https://levelup.gitconnected.com/building-a-simple-dynamic-search-bar-in-react-js-f1659d64dfae