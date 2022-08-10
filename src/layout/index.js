import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import './style.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          bio {
            name
          }
          social {
            github
          }
        }
      }
    }
  `);
  const { title, author, social } = data.site.siteMetadata;

  return (
    <div className="page-wrapper">
      <PageHeader siteTitle={title || `Title`} />
      <main className="page-content">{children}</main>
      <PageFooter
        author={author || `Author`}
        githubUrl={social?.github || `https://www.github.com`}
      />
    </div>
  );
};

export default Layout;
