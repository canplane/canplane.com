import React, { useState } from "react";
import { navigate } from "gatsby";

import "./style.scss";
import SearchIcon from "/src/assets/icons/mui/search-icon";
import CloseIcon from "/src/assets/icons/mui/close-icon";


const AutoCompleteList = ({ posts }) => {
  return (
    <div className="auto-complete-list">
      {posts.map((post, idx) => (
        <button className="auto-complete-item" key={idx} onClick={() => navigate(post.slug)}>
          <p>{post.title}</p>
        </button>
      ))}
    </div>
  );
};

const SearchBox = ({ posts }) => {
  const [tf, setTf] = useState("");

  const makeAutoCompleteList = () => {
    if (tf.trim() === "")
      return [];
    else
      return posts.reduce((acc, cur, idx) => {
        if (cur.title?.includes(tf))
          acc.push(cur);
        return acc.slice(0, 10);
      }, []);
  };

  return (
    <>
      <div className="search-box" onClick={e => e.stopPropagation()}>
        <div className="icon icon-search"><SearchIcon /></div>
        <input className="search-input" type="text" value={tf} onChange={e => setTf(e.target.value)} autoFocus />
      </div>
      <AutoCompleteList posts={makeAutoCompleteList(posts)} />
    </>
  );
};


const PostSearch = ({ posts }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = e => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="menu search" data-open={open} onClick={() => setOpen(false)}>
      <button className="button search" onClick={e => toggleOpen(e)}>
        <div className="icon">{open ? <CloseIcon /> : <SearchIcon />}</div>
      </button>
      <div className="search-box-wrapper">
        { open && <SearchBox posts={posts} />}
      </div>
    </div>
  );
};

export default PostSearch;
