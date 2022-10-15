import React from "react";

import "./style.scss";


const PostContent = ({ html }) => {
  return (
    <div className="post-content">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default PostContent;
