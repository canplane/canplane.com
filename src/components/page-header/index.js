import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, useCallback } from "react";
import { StaticQuery, graphql, navigate } from "gatsby";

import Post from "../../models/post";
import MenuSearch from "../menu-search";
import MenuNav from "../menu-nav";

import "./style.scss";
import AuthorIcon from "/src/assets/brand/author-icon";
import SearchIcon from "/src/assets/icons/mui/search-icon";
import MenuIcon from "/src/assets/icons/mui/menu-icon";


const ScrollMonitor = forwardRef((_, ref) => {
  const [direction, setScrollDirection] = useState(0);
  const THRESHOLD = 5;
  let lastScrollY = window.pageYOffset;
  const updateScrollDirection = () => {
    const scrollY = window.pageYOffset;   // same as window.scrollY
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    if (scrollY <= 0 || scrollY + windowHeight >= documentHeight)
      setScrollDirection(0);
    else {
      const _direction = scrollY > lastScrollY ? 1 : -1;
      if (_direction !== direction && Math.abs(scrollY - lastScrollY) >= THRESHOLD)
        setScrollDirection(_direction);
    }
    lastScrollY = scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  });
  
  useImperativeHandle(ref, () => ({ direction }));
  return <></>;
});


const PageHeader = ({ siteTitle }) => {
  const getAllCategories = edges => {
    const categorySet = new Set(["All"]);
    edges.forEach(({ node }) => {
      const postCategories = node.frontmatter.categories.split(" ");
      postCategories.forEach((category) => categorySet.add(category));
    });
    const categories = [...categorySet];
    return categories;
  };

  const menuSearchRef = useRef();
  const menuNavRef = useRef();

  const [hidden, setHidden] = useState(false);
  const scrollMonitorRef = useCallback(node => setHidden(node?.direction === 1), []);

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.allMarkdownRemark;
        const categories = getAllCategories(edges);

        return (
          <header className="page-header-wrapper" data-hidden={hidden}>
            <div className="page-header">
              <div className="buttons">
                <button className="button button-logo">
                  <div className="logo" onClick={() => navigate(`/`)}><AuthorIcon /></div>
                </button>
              </div>
              <div className="buttons right">
                <button className="button search" onClick={() => menuSearchRef.current?.show()}>
                  <div className="icon"><SearchIcon /></div>
                </button>
                <button className="button category" onClick={() => menuNavRef.current?.show()}>
                  <div className="icon"><MenuIcon /></div>
                </button>
              </div>
            </div>
            <MenuSearch ref={menuSearchRef} posts={edges.map(({ node }) => new Post(node, true))} />
            <MenuNav ref={menuNavRef} categories={categories} />
            
            <ScrollMonitor ref={scrollMonitorRef} />
          </header>
        );
      }}
    />
  );
};

export default PageHeader;
