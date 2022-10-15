import React, { useMemo } from "react";

import PostCardColumn from "../post-card-column";

import "./style.scss";


const PostTabs = ({ tabIndex, onChange, tabs, posts }) => {
  const tabPosts = useMemo(() => {
    if (tabs[tabIndex] === "All") return posts;
    return posts.filter((post) => post.categories.includes(tabs[tabIndex]));
  }, [posts, tabs, tabIndex]);

  return (
    <div className="post-tabs-wrap grid">
      <div className="post-tabs grid-1">
        <div className="category-page-header-wrap">
          <p className="category-page-title">{tabs[tabIndex]}</p>
        </div>
      </div>
      <PostCardColumn posts={tabPosts} />
    </div>
  );
};

export default PostTabs;
