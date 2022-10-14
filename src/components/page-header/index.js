import React from "react";
import { Link, StaticQuery, graphql, navigate } from "gatsby";

import Post from '../../models/post';
import PostSearch from '../post-search';


import "./style.scoped.scss";
import AuthorIcon from "/src/assets/icons/author-icon";
import MenuIcon from "/src/assets/icons/mui/menu-icon";
import SearchIcon from "/src/assets/icons/mui/search-icon";


const PageHeader = ({ siteTitle }) => {
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
      render={data => (
        <header className="page-header-wrapper">
          <div className="page-header">
            <div className="buttons">
              <button className="button button-arthor">
                <div className="icon" onClick={() => navigate(`/`)}><AuthorIcon /></div>
              </button>
            </div>
            <div className="buttons right">
              <button className="button button-search">
                <div className="icon"><SearchIcon /></div>
              </button>
              <button className="button button-menu">
                <div className="icon"><MenuIcon /></div>
              </button>
              {/*<Link className="link" to="/about">about</Link>*/}
              {/*<Link className="link" to="/posts">posts</Link>*/}
              {/*<PostSearch posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))} />*/}
            </div>
          </div>
        </header>
      )}
    />
  );
};

export default PageHeader;
