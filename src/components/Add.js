import React, { useState, useEffect } from 'react';
import { storage, listingRef } from "../firebase";
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
    const [uploadProgress, setUploadProgress] = useState(0);

    const [agentName, setAgentName] = useState();
    const [agentEmail, setAgentEmail] = useState();
    const [agentPhone, setAgentPhone] = useState();
    const [houseImages, setHouseImages] = useState([]);


    const {
        ready,
        value,
        suggestions: { status, data },
        setValue
    } = usePlacesAutocomplete();




    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => {
        setValue(description, false);
        setHouseLocation(description);
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

            return <span className="suggestion" onClick={() => { setHouseLocation(value); handleSelect(info); }}>

                <strong>{main_text}</strong> <small>{secondary_text}</small>
            </span>


        })

    };

    const uploadImage = () => {
        return new Promise((resolve, reject) => {
            var uploadTask = storage.ref(`/Listing/${houseName}.png`).put(houseImg);


            uploadTask.on("state_changed", (snapshot) => {

                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setUploadProgress(progress);

            }, (error) => {
                setUploadProgress(0);
                reject(error);
            }, (result) => {

                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {


                    resolve(downloadURL);
                    setUploadProgress(0);


                });

            });
        });
    }

    const addHouse = () => {


        if (houseName === undefined ||
            housePrice === undefined ||
            agentEmail === undefined ||
            agentPhone === undefined ||
            houseCategory === undefined ||
            houseType === undefined

        ) {

            return

        }


        uploadImage().then((url) => {
            console.log(url);
            var house = {
                name: houseName,
                price: housePrice,
                agentEmail: agentEmail,
                agentPhone: agentPhone,
                agentName:agentName,
                category: houseCategory,
                type: houseType,
                img: url,
                location:houseLocation

            }

            console.log(house);

            listingRef.add(house).then((result) => {

                console.log(result);
                console.log(house);

            }).catch((error) => {
                console.log(error);
            });

            house.img = url;
        }).catch((error) => {
            console.log(error);
        });


    }

    const selectImages = (e) => {

        setUploadFile(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
        //setHouseImages([...houseImages,e.target.files]);
        setHouseImg(e.target.files[0]);

        let selectedImages = Array.from(e.target.files).map(image => URL.createObjectURL(image));
        setHouseImages(selectedImages);


    }

    const renderSelectImages = () => {

        return houseImages.map((value, index) => {
            return <img src={value} alt={`Image ${index + 1}`} />
        });

    }


    const uploadFiles = () => {

        return new Promise((resolve, reject) => {
            houseImages.map((value, index) => {
                console.log(value);


            });

            resolve(houseImages);

        });



    }
    return <div>

        <div className="addListing">
            <form>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" onChange={(e) => { setHouseName(e.target.value) }} />
                    <label for="floatingInput">House Name</label>
                </div>


                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02" multiple onChange={(e) => { selectImages(e) }} />
                    <label class="input-group-text" for="inputGroupFile02">Upload</label>
                </div>
                <div className="images">
                    <span>Selected Images</span>
                    <div className="media">
                        {renderSelectImages()}
                    </div>

                </div>



                <div class="form-floating mb-3">

                    <input class="form-control" id="floatingInput" type="number" placeholder="Price" onChange={(e) => { setHousePrice(e.target.value) }} />
                    <label for="floatingInput">House Price</label>
                </div>

                <div class="form-floating mb-3">
                    <input class="form-control" id="floatingInput" type="number" min='1' placeholder="Bedrooms" onChange={(e) => { setHouseBedroom(e.target.value) }} />
                    <label for="floatingInput">Bedrooms</label>
                </div>



                <div class="form-floating mb-3">
                    <input class="form-control" id="floatingInput" type="text" placeholder="Agent Name" onChange={(e) => { setAgentName(e.target.value) }} />
                    <label for="floatingInput">Agent Name</label>
                </div>


                <div class="form-floating mb-3">
                    <input class="form-control" id="floatingInput" type="email" placeholder="Agent Email" onChange={(e) => { setAgentEmail(e.target.value) }} />
                    <label for="floatingInput">Agent Email</label>
                </div>


                <div class="form-floating mb-3">
                    <input class="form-control" id="floatingInput" type="text" placeholder="Agent Number" onChange={(e) => { setAgentPhone(e.target.value) }} />
                    <label for="floatingInput">Agent Phone</label>
                </div>


                <div class="form-floating">
                    <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={(e) => {
                        setHouseType(e.target.value);
                    }} value={houseType}>
                        <option value="Rent">For Rent</option>
                        <option value="Sale">For Sale</option>
                    </select>
                    <label for="floatingSelectGrid">Type</label>
                </div>

                <div class="form-floating">
                    <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={(e) => {
                        setHouseCategory(e.target.value);
                    }} value={houseCategory}>
                        <option value="Bedsitter">Bedsitter</option>
                        <option value="Single rooms">Single rooms</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Shop">Shop</option>
                        <option value="Full contained house">Full contained house</option>

                    </select>
                    <label for="floatingSelectGrid">Category</label>
                </div>




                <div class="form-floating mb-3">
                    <input value={value}
                        onChange={handleInput}
                        disabled={!ready}
                        placeholder="Location" type="email" class="form-control" id="floatingInput" />
                    <label for="floatingInput">Location</label>

                    {status === "OK" && <div className="suggestions">{renderSuggestions()}</div>}
                </div>




                <button className="btn btn-primary" onClick={() => { addHouse() }} type="button">
                    Add House
            </button>
            </form>

        </div>

        <div>




        </div>
    </div>
}


/*


                <div class="form-floating mb-3">
                    <input class="form-control" id="floatingInput"
                        value={houseLocation}
                        onChange={(e) => setHouseLocation(e.target.value)}
                        placeholder="Location"
                        type="text"
                    />
                    <label for="floatingInput">Location</label>
                </div>


  <input

      value={value}
      onChange={handleInput}
      disabled={!ready}
      placeholder="Location"
  />

  {status === "OK" && <div className="suggestions">{renderSuggestions()}</div>}
*/