import React from "react";
import { Link } from "gatsby";

import "./style.scoped.scss";

function PostHeader({ post, viewCount }) {
  return (
    <header className="post-header grid">
      <h1 className="title grid-12">{post.title}</h1>
      <div className="info grid-34">
        {post.date}
        {viewCount && ` · ${viewCount} views`}
      </div>
    </header>
  );
}
export default PostHeader;
