import React from "react";
import { StaticQuery, graphql, navigate } from "gatsby";

import Post from "../../models/post";
import MenuCategory from "../menu-category";
import MenuSearch from "../menu-search";


import "./style.scss";
import BrandIcon from "/src/assets/icons/brand-icon";


const PageHeader = ({ siteTitle }) => {
  const getAllCategories = edges => {
    const categorySet = new Set(['All']);
    edges.forEach(({ node }) => {
      const postCategories = node.frontmatter.categories.split(' ');
      postCategories.forEach((category) => categorySet.add(category));
    });
    const categories = [...categorySet];
    return categories;
  };


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
          <header className="page-header-wrapper">
            <div className="page-header">
              <div className="buttons">
                <button className="button button-brand">
                  <div className="brand" onClick={() => navigate(`/`)}><BrandIcon /></div>
                </button>
              </div>
              <div className="right">
                <MenuSearch posts={edges.map(({ node }) => new Post(node, true))} />
                <MenuCategory categories={categories} />
              </div>
            </div>
          </header>
        );
      }}
    />
  );
};

export default PageHeader;
