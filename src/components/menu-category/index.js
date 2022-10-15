import React, { useState } from "react";
import { navigate } from "gatsby";

import "./style.scss";
import MenuIcon from "/src/assets/icons/mui/menu-icon";
import CloseIcon from "/src/assets/icons/mui/close-icon";


const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category, idx) => (
        <button className="category-item" key={idx} onClick={() => navigate(`/posts/${idx === 0 ? "" : category}`)}>
          <p>{category}</p>
        </button>
      ))}
      
      <button className="category-item" onClick={() => navigate(`/about`)}>
        <p>About</p>
      </button>
      {/*<Link className="link" to="/posts">posts</Link>*/}
    </div>
  );
};


const MenuCategory = ({ categories }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = e => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="menu category" data-open={open} onClick={() => setOpen(false)}>
      <button className="button category" onClick={e => toggleOpen(e)}>
        <div className="icon">{open ? <CloseIcon /> : <MenuIcon />}</div>
      </button>
      <div className="categories-wrapper">
        { open && <CategoryList categories={categories} />}
      </div>
    </div>
  );
};

export default MenuCategory;
