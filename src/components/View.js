
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const View = () => {

    const [name, setHouseName] = useState();
    const [image, setHouseImage] = useState();
    const [description, setDescription] = useState();
    const [agentEmail, setAgentEmail] = useState();
    const [agentPhone, setAgentPhone] = useState();
    const [agentName, setAgentName] = useState();
    const [price, setHousePrice] = useState();
    const [location, setHouseLocation] = useState();
    const [showAgent, setShowAgent] = useState(false);


    let currentLocation = useLocation();

    useEffect(() => {
        console.log(currentLocation.state);
        setDescription(currentLocation.state.description);
        setHousePrice(currentLocation.state.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
        setAgentName(currentLocation.state.agentName);
        setAgentEmail(currentLocation.state.agentEmail);
        setAgentPhone(currentLocation.state.agentPhone);

        setHouseImage(currentLocation.state.img);
        setHouseName(currentLocation.state.name);
        setHouseLocation(currentLocation.state.location)

    }, []);


    return <div>
        <div className="listingViewLayout">
            <div className="media">
                <img src={image} />

                <span className="slides">

                </span>
            </div>
            <div className="content">
                <h1>{name}</h1>
                <h6>{location}</h6>
                <span className="price">KES {price}</span>
                <div className="details">
                    <span>
                        {description}</span>
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

                <div class="card">

  <div class="card-body">
    <h5 class="card-title">Agent</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">{agentName}</li>
    <li class="list-group-item">{agentPhone}</li>
    <li class="list-group-item">                    {agentEmail}</li>
  </ul>
  </div>
</div>
                <div className="contacts">
                    <span>Agent </span>
                    <span>John Doe</span>
                    <form>
                        <input type="text" contentEditable={false} placeholder="Name" />
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