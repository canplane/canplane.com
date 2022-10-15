import React, { createRef, useEffect, useRef } from "react";

import "./style.scss";


const src = "https://utteranc.es/client.js";
const branch = "master";

const Utterances = ({ repo, path }) => {
  const rootElm = createRef();
  const isUtterancesLoaded = useRef(false);

  useEffect(() => {
    if (!rootElm.current || isUtterancesLoaded.current) return;
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const utterances = document.createElement("script");
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: isDarkMode ? "photon-dark" : "github-light",
      label: "comment",
      async: true,
      "issue-term": "pathname",
      crossorigin: "anonymous",
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
    isUtterancesLoaded.current = true;
  }, [repo, rootElm, path]);

  return (
    <div className="utterances-wrap grid">
      <div className="utterances grid-24" ref={rootElm} />
    </div>
  );
};

export default Utterances;
