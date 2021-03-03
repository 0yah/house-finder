import React, { useState, useEffect } from 'react';
import { storage, firestore } from "../firebase";

export const Add = () => {

    const [houseImg,setHouseImg] = useState();
    const [uploadFile,setUploadFile] = useState();
    const [houseName,setHouseName] = useState();
    const [houseBedRoom,setHouseBedroom]=  useState("1");
    const [houseCategory,setHouseCategory] = useState();
    const [houseType,setHouseType]= useState();
    const [housePrice,setHousePrice]= useState();

    const uploadImage = () =>{
         return new Promise((resolve,reject)=>{

         });
    }

    const addHouse= () =>{

    }
    return <div>

        <form>
            <input type="text" placeholder="Name" onChange={(e)=>{setHouseName(e.target.value)}}  />
            <input type="file" multiple onChange={(e)=>{setUploadFile(URL.createObjectURL(e.target.files[0]);setHouseImg(e.target.files[0]);}}/>
            <input type="number" placeholder="Price" onChange={(e)=>{setHousePrice(e.target.value)}}/>
            <input type="number" placeholder="Bedrooms" onChange={(e)=>{houseBedRoom(e.target.value)}}/>

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

            <button>
                Add House
            </button>
        </form>
    </div>
}