import { navigate } from "gatsby";
import React from "react";

import "./style.scss";


const PostCard = ({ post }) => {
  const { id, slug, title, excerpt, date, categories } = post;
  return (
    <button className="post-card-wrapper" onClick={() => navigate(slug)}>
      <div className="post-card" key={id}>
        <div className="title">{title}</div>
        <div className="info">
          <div className="date">{date}</div>
        </div>
      </div>
    </button>
  );
};

export default PostCard;
