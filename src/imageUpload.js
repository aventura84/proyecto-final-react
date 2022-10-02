import React,{useState} from "react";
import {Button}from "material-ul/core";
import {useLocalStorage}from "./useLocalStorage";
import { dblClick } from "@testing-library/user-event/dist/click";
function ImageUpload({username}) {
    const [image,setImage]=useState(null);
    const[progress,setProgress]=useState(0);
    const [caption,setCaption]= useState('');

const handleChange=(e)=>{
    if(e.target.files(0)){
        setImage(e.target.files(0));
    }
};
  const handleUpload = ()=>{
    const uploadTask = useLocalStorage.ref('images/${image.name}').put(image);
    uploadTask.on(
        "stage_changed"
        (snapshot)=>{
            //progress function...
            const progress = Math.round(
                (snapshot.bytesTransferred/snapshot.totalBytes)*100
            );
        setProgress(progress);
        },
        (error)=>{
            //Error function...
            console.log(error);
            alert(error.message)
        },
        ()=>{
            //complete function...
            localStorage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then (url =>{
                //post image inside db
            db.collection("posts").add((
                timestamp:firebase.firestore.fieldValue.serverTimestamp(),
                caption:caption,
                imageUrl:url
                username: username
            });
            setProgress(0);
            setCaption("")
            setImage(null)
        }
        );
  };
    return (
    
      <div className="imageUpload">
        <progress className="imageupload_progress">
<input type="text"placeholder='Enter a caption...'onChange={event=>setCaption(event.target.value)/>
<input type="file"onChange={handleChange}/>
<Button onClick={handleUpload}/>
Upload
</Button
    </div>
  );
}

export default ImageUpload;
