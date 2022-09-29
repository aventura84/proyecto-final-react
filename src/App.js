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
  
useEffect(()=>{
db.collection('posts').onSnapshot(snapshot=>{
setPosts(snapshot.docs.map(doc=>({
  id:doc.id,
  post:doc.data()})));
})
},[])
  return (
    <main>
      <Modal
      open={open}
      onClose={handleClose}
      >
        <h2>I am a model <h2>
      </Modal>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
{
  posts.map(({id,post})=>(
    <Post key={id} username={post.username}caption={post.caption} imageUrl={}/>
  ))
}

      <Post username="cleverqazi"caption="wow it works " imageUrl=""/>
      <Post username="sssangha"caption="DOPE "image=/>
      <Post username="amanath"caption="this is a fun project"/>
      {/*Posts */}
      {/*Posts */}
    </main>
  );
}

export default App;
