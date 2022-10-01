import React,{useState} from "react";
import {Button}from "material-ul/core";
import {useLocalStorage}from "./useLocalStorage";
function ImageUpload() {
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
        }
        )
  }
    return (
    <div>
      <h1>abc</h1>
      {/* I want to have ...*/}
      {/*Caption input*/}
      {/*File picker */}
      {/*Post button */}
<input type="text"placeholder='Enter a caption...'onChange={event=>setCaption(event.target.value)/>
<input type="file"onChange={handleChange}/>
<Button onClick={handleUpload}/>
Upload
</Button
    </div>
  );
}

export default ImageUpload;
