import React, { useCallback } from "react";

import PostCard from "../post-card";

import "./style.scss";


const PostCardColumn = ({ posts }) => {
  return (
    <div className="post-card-column-wrapper grid-24">
      <div className="post-card-column">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostCardColumn;
