import React, { useState, useEffect } from 'react';
import { storage, firestore } from "../firebase";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import useOnclickOutside from "react-cool-onclickoutside";

export const Add = () => {

    const [houseImg, setHouseImg] = useState();
    const [uploadFile, setUploadFile] = useState();
    const [houseName, setHouseName] = useState();
    const [houseBedRoom, setHouseBedroom] = useState(1);
    const [houseCategory, setHouseCategory] = useState();
    const [houseType, setHouseType] = useState();
    const [housePrice, setHousePrice] = useState();
    const [houseLocation, setHouseLocation] = useState();
    const [uploadProgress,setUploadProgress] =useState(0);

    const [agentName, setAgentName] = useState();
    const [agentEmail, setAgentEmail] = useState();
    const [agentPhone, setAgentPhone] = useState();
    const [houseImages, setHouseImages] = useState([1]);


    const {
        ready,
        value,
        suggestions: { status, data },
        setValue
    } = usePlacesAutocomplete();




    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = ({description}) => {
        setValue(description, false);
        getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });

      //console.log(val);
    };


    const renderSuggestions = () => {

        return data.map((info) => {

            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
              } = info;

            return <span className="suggestion" onClick={() => { setHouseLocation(value);handleSelect(info); }}>
                
          <strong>{main_text}</strong> <small>{secondary_text}</small>
                </span>

            
        })

    };

    const uploadImage = () => {
        return new Promise((resolve, reject) => {
            var uploadTask = storage.ref(`/Listing/${houseName}.png`).put(houseImg);


            uploadTask.on("state_changed",(snapshot)=>{

                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setUploadProgress(progress);
                
            },(error)=>{
                setUploadProgress(0);
                reject(error);
            },(result)=>{

                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{


                    resolve(downloadURL);
                    setUploadProgress(0);
                
                    var data = {
                        name:houseName,
                        location:houseLocation,
                        bedrooms:houseBedRoom,
                        type:houseType,
                        agent_name:agentName,
                        agent_phone:agentPhone,
                        agent_email:agentEmail,
                    };

                    console.log(data);
                });

            });
        });
    }

    const addHouse = () => {
        uploadImage().then((url)=>{
            console.log(url);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const selectImages = (e) => {

        setUploadFile(URL.createObjectURL(e.target.files[0])); 
        //setHouseImages([...houseImages,e.target.files]);
        setHouseImg(e.target.files[0]);
    }

    const renderSelectImages = () => {
        return houseImages.map((value, index) => {
            return <img src={uploadFile} alt={`Image ${index + 1}`} />
        });
    }
    return <div>

        <div className="addListing">
            <form>
                <input type="text" placeholder="Name" onChange={(e) => { setHouseName(e.target.value) }} />
                <input type="file" multiple onChange={(e) => { selectImages(e)}} />

                <div className="images">
                {renderSelectImages()}
                </div>

                <div>Selected {houseImages} Images</div>
                <input type="number" placeholder="Price" onChange={(e) => { setHousePrice(e.target.value) }} />
                <input type="number" placeholder="Bedrooms" onChange={(e) => { setHouseBedroom(e.target.value) }} />
                <input type="text" placeholder="Agent Name" onChange={(e) => { setAgentName(e.target.value) }} />
                <input type="email" placeholder="Agent Email" onChange={(e) => { setAgentEmail(e.target.value) }} />
                <input type="text" placeholder="Agent Number" onChange={(e) => { setAgentPhone(e.target.value) }} />

                <select onChange={(e) => {
                    setHouseType(e.target.value);
                }} value={houseType}>
                    <option selected disabled>Type</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>

                </select>


                <select onChange={(e) => {
                    setHouseCategory(e.target.value);
                }} value={houseCategory}>
                    <option selected disabled>Category</option>
                    <option value="Bedsitter">Bedsitter</option>
                    <option value="Single rooms">Single rooms</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Shop">Shop</option>
                    <option value="Full contained house">Full contained house</option>

                </select>

                <input

                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Where are you going?"
                />

                {status === "OK" && <div className="suggestions">{renderSuggestions()}</div>}

                <button className="btn btn-primary" onClick={()=>{addHouse()}} type="button">
                    Add House
            </button>
            </form>

        </div>

        <div>




        </div>
    </div>
}