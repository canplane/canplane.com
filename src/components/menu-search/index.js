import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { navigate } from "gatsby";

import "./style.scss";
import SearchIcon from "/src/assets/icons/mui/search-icon";
import CloseIcon from "/src/assets/icons/mui/close-icon";


const NoScroll = () => {
  useEffect(() => {
    const bodyDOM = document.body;
    bodyDOM.classList.add("noscroll");
    return () => bodyDOM.classList.remove("noscroll");
  }, []);
  
  return <></>;
};


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
    const a = tf.trim().toLowerCase();
    if (a === "")
      return [];
    else
      return posts.reduce((acc, cur, idx) => {
        let b = cur.title?.trim().toLowerCase();
        if (b.includes(a))
          acc.push(cur);
        return acc.slice(0, 10);
      }, []);
  };
  return (
    <div className="search-wrapper">
      <div className="search-box" onClick={e => e.stopPropagation()}>
        <div className="icon icon-search"><SearchIcon /></div>
        <input className="search-input" type="text" value={tf} onChange={e => setTf(e.target.value)} autoFocus />
      </div>
      <AutoCompleteList posts={makeAutoCompleteList(posts)} />

      <NoScroll />
    </div>
  );
};

const MenuSearch = forwardRef(({ posts }, ref) => {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const hide = () => setOpen(false);
  useImperativeHandle(ref, () => ({ show, hide }));

  return (
    <div className="menu search" data-open={open} onClick={() => setOpen(false)}>
      <button className="button close" onClick={hide}>
        <div className="icon"><CloseIcon /></div>
      </button>
      {open && <SearchBox posts={posts} />}
    </div>
  );
});

export default MenuSearch;
