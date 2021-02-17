
import React,{useState,useEffect} from 'react';

export const View = () => {
    return <div>
        <div className="listingViewLayout">
            <div className="media">
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" />
                
                <span className="slides">
                
                </span>
            </div>
            <div className="content">
                <h1>House 1</h1>
                <span className="price">Kes 1.7mil</span>
                <div className="details">
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue. 
                    </span>
                    <div className="basics">
                        <span className="bedroom">5 Bedrooms</span>
                        <span className="bathroom">4 Bathrooms</span>
                        <span className="garage">2 Car Parking Slots</span>

                    </div>
                    <ul>
                        <li>

                            Gym
                        </li>
                        <li>
                            Pool
                        </li>

                        <li>
                            CCTV
                        </li>

                        <li>
                            High speed Lift
                        </li>

                        <li>
                            Intercom
                        </li>

                        <li>
                            Internet ready
                        </li>

                    </ul>
                </div>
                <div className="agentDetails">
                    View Agent details
                </div>
                <div className="contacts">
                <span>Agent </span>
                    <span>John Doe</span>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="tel" placeholder="Phone Number" />
                        <textarea>

                        </textarea>
                    </form>
                </div>

            </div>
        </div>
    </div>
}