import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Home from "./Home/Home";
import Post from "./Post";
import { useState,useEffect } from "react";
import{db}from './firebase';
import SingIn from ".SignIn/SignIn"
function App() {
  const[posts,setPosts]=useState([
    {
      username:"cleverqazi"
      caption:
      imageUrl
    },{
      username:"cleverqazi"
      caption:
      imageUrl
    }
  ]);
const[open,setOpen]=useState([]);
const[username,setusername]=useState('');
const[password,setPassword]=useState('');
const[email,setEmail]=useState('');
const[user,setuser]=useState(null);
useEffect(()=>{
  const unsubscribe = AuthenticatorAssertionResponse.onAuthStateChanged((authUser)=>{
    if(authUser){
    console.log(authUser);
    setUser(authUser);
    if(authUser.displayName){
}else{
  return authUser.updateProfile({
    displayName:username,
});
}
  }else{
    setUser(null);
  }
})
return()=>{
  unsubscribe();
}

},[user,username]);


useEffect(()=>{
db.collection('posts').onSnapshot(snapshot=>{
setPosts(snapshot.docs.map(doc=>({
  id:doc.id,
  post:doc.data()
})));
})
},[]);


  return (
    <main>
      <div className="app">
        

      {/* I want to have ...*/}
      {/*Caption input*/}
      {/*File picker */}
      {/*Post button */}
      <Modal
      open={open}
      onClose={handleClose}
      >
      <div style={modalStyle}className={classes.paper}>
        <form className="app_signup">
          <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/"
          alt=""
        />

        </div>
      </Modal>
      </div>
      <div className="app_posts">
      {
  posts.map(({id,post})=>(
    <Post key={id} username={post.username}caption={post.caption} imageUrl={}/>
  ))
}
</div>
<Instagramembed
url=
maxWidth
hideCaption=
containerTagName
protocol
Injectscripr
onLoading
onSucess
onAfterRender
onFailure
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin"element={<Signin/>}/>
      </Routes>
      <Footer />


      <Post username="cleverqazi"caption="wow it works " imageUrl=""/>
      <Post username="sssangha"caption="DOPE "image=/>
      <Post username="amanath"caption="this is a fun project"/>
      {/*Posts */}
      {/*Posts */}
      {user?.displayName ?(
    
    <ImageUpload username=(user.displayName)/>
    ):(
      <h3>Sorry you need to upload</h3>
    )}
    </main>
  );
}

export default App;
