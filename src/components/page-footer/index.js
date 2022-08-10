import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <a href={githubUrl}>
        <p className="page-footer">© {new Date().getFullYear()} {author}</p>
      </a>
    </footer>
  );
}

export default PageFooter;
