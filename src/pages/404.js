import React from "react";

import Layout from "../layout";
import Seo from "../components/seo";


const NotFoundPage = () => {
  const PIC_TEXT = `(╯°□°）╯︵ ┻━┻`;
  const DESCRIPTION = `Page not found!`;

  return (
    <Layout>
      <Seo title="404" />
      <div className="not-found">
        <p className="pic-text" >{PIC_TEXT}</p>
        <p className="description">{DESCRIPTION}</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
