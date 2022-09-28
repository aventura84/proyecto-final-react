import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post_avatar"
          alt="RafehQazi"
          src="static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      {/*header->avatar + username*/}
      <img className="post__image" src={imageUrl} alt="" />

      <h4 className="post_text">
        <strong>cleverqazi</strong> {caption}
      </h4>
      {/*username+caption*/}
    </div>
  );
}

export default Post;
