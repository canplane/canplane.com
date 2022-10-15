import React from "react";

import "./style.scoped.scss";


const PageFooter = ({ author, githubUrl }) => {
  return (
    <footer className="page-footer-wrap">
      <a href={githubUrl}>
        <p className="page-footer">© {new Date().getFullYear()} {author.toUpperCase()}</p>
      </a>
    </footer>
  );
};

export default PageFooter;
