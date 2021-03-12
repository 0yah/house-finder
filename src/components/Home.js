import React, { useEffect, useState } from 'react';
import { storage, listingRef } from "../firebase";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import $ from 'jquery';

export const Home = () => {

    let currentLocation = useLocation()
    let myNavigator = useHistory();
    const [locations, setlocations] = useState([]);
    const [latestListings, setLatestListings] = useState([]);
    const [qlocation, setqlocation] = useState();
    const [qtype, setqtype] = useState();
    const [qprice, setqprice] = useState();


    useEffect(() => {

        let results = [];
        listingRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                results.push(doc.data());
            });

            setLatestListings(results);
            $('.loader').css({
                display:'none'
            });
        });
    }, []);

    const renderLatest = () => {
        return latestListings.slice(0, 4).map((value, index) => {
            return <div className="card featureCard">
                <img src={value.img} />
                <div className="content">
                    <h2>{value.name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>

            </div>
        })
    }
    return <div>

        <div className="loader">
            <div class="spinner-border" role="status" id="loader">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div className="mainSearch">
            <h1>House Finder</h1>
            <div className="queryBuilder">
                <form>
                    <select onChange={(e) => {
                        setqtype(e.target.value)
                    }}>
                        <option selected disabled>Category</option>
                        <option value="Bedsitter">Bedsitter</option>
                        <option value="Single rooms">Single rooms</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Shop">Shop</option>
                        <option value="Full contained house">Full contained house</option>

                    </select>

                    <select onChange={(e) => {
                        setqlocation(e.target.value)
                    }}>

                        <option selected disabled>Location</option>
                        {locations.map((location) => {
                            return <option value={location.name}>{location.name}</option>
                        })}

                        <option value="Bungalow">Nairobi</option>
                        <option value="Apartments">Mombasa</option>
                        <option value="Masionette">Kisumu</option>
                        <option value="Masionette">Kwale</option>
                        <option value="Masionette">Nakuru</option>
                        <option value="Masionette">Naivasha</option>

                    </select>
                    <input type="number" onChange={(e) => {
                        setqprice(e.target.value)
                    }} placeholder="Minimum Price" />

                    <input type="number" onChange={(e) => {
                        setqprice(e.target.value)
                    }} placeholder="Maximum Price" />
                </form>
            </div>
            <span className="searchButton" onClick={() => {
                myNavigator.push('/Listing');
            }}>Search</span>

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