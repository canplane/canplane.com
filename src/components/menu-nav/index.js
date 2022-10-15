import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { navigate } from "gatsby";

import "./style.scss";
import CloseIcon from "/src/assets/icons/mui/close-icon";


const NoScroll = () => {
  useEffect(() => {
    const bodyDOM = document.body;
    bodyDOM.classList.add("noscroll");
    return () => bodyDOM.classList.remove("noscroll");
  }, []);
  
  return <></>;
};


const NavList = ({ categories }) => {
  return (
    <div className="nav-wrapper" onClick={e => e.stopPropagation()}>
      <div className="nav-list">
        {categories.map((category, idx) => (
          <button className="nav-item" key={idx} onClick={() => navigate(`/posts/${idx === 0 ? "" : category}`)}>
            <p>{category}</p>
          </button>
        ))}
        
        <button className="nav-item" onClick={() => navigate(`/about`)}>
          <p>About</p>
        </button>
      </div>

      <NoScroll />
    </div>
  );
};

const MenuNav = forwardRef(({ categories }, ref) => {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const hide = () => setOpen(false);
  useImperativeHandle(ref, () => ({ show, hide }));

  return (
    <div className="menu nav" data-open={open} onClick={hide}>
      <button className="button close" onClick={hide}>
        <div className="icon"><CloseIcon /></div>
      </button>
      {open && <NavList categories={categories} />}
    </div>
  );
});

export default MenuNav;
