import { storage, listingRef } from "../firebase";


const uploadFile = (item,index,subfolder) => { //a function that returns a promise
  return new Promise((resolve,reject)=>{




    var uploadTask = storage.ref(`/Listing/${subfolder}/${index}.png`).put(item);
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
                });

            });

    

  });
}

const uploadImage = (subfolder,index) => {
    return new Promise((resolve, reject) => {
        var uploadTask = storage.ref(`/Listing/${subfolder}/${index}.png`).put(houseImg);
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

                var data = {
                    name: houseName,
                    location: houseLocation,
                    bedrooms: houseBedRoom,
                    type: houseType,
                    agent_name: agentName,
                    agent_phone: agentPhone,
                    agent_email: agentEmail,
                };

                console.log(data);
            });

        });
    });
}
