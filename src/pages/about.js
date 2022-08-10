import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { bio, social } = metaData;
  return (
    <Layout>
      <Seo title="About" />
      <Bio bio={bio} social={social} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        bio {
          name
          description
        }

        social {
          github
          email
        }
      }
    }
  }
`;
