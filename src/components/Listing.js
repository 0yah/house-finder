import React, { useState, useEffect } from 'react';
import { storage, listingRef } from "../firebase";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import $ from 'jquery';

export const Listing = () => {

    const [listing, setListing] = useState([]);
    let currentLocation = useLocation();
    let myNavigator = useHistory();

    useEffect(()=>{
        let results = [];
        listingRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());

                let m = doc.data();
                m.id = doc.id;
                results.push(m);


            });
            setListing(results);
            $('.loader').css({
                display:'none'
            });
        });

    },[])

    const renderListing = () => {
        return listing.map((value, index) => {
            return <div className="card listingCard" onClick={() => {
             
                myNavigator.push(`/view/${value.id}`,value);
            }}>
                <img src={value.img} />
                <div className="content">
                    <h6>{value.name}</h6>
                    <span className="location">{value.location}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        });

    }
    return <div>


<div className="loader">
            <div class="spinner-border" role="status" id="loader">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

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

                    <div className="controller">
                        <input placeholder="Minimum Size" />-
                    <input placeholder="Maximum Size" />

                    </div>

                    <div className="controller">
                        <input placeholder="Minimum Price" />-
                    <input placeholder="Maximum Price" />

                    </div>

                    <span className="applyButton">
                        Apply
                    </span>
                </form>
            </div>

            <div className="content">
                {renderListing()}
            </div>
        </div>
    </div>
}