import React from "react";

import "./loading.css"

interface LoadingProps {
  type: string;
}

const Loading: React.FC<LoadingProps> = ( {type} ) => {
  return (
    <div className="loading">
      <div className="loading1">
        <div className={"line " + type}></div>
      </div>
    </div>
  );
}

export default Loading;