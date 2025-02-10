import React from "react";

import { RowProps } from "./Row.types";

import "./Row.css";

const Row: React.FC<RowProps> = ({ style, children, className, gap }) => {
  const classNames = ["oakd", "row"];
  if (gap) {
    classNames.push("gap");
  }
  if (className) {
    classNames.push(className);
  }
  return (
    <div data-testid="Row" className={classNames.join(" ")} style={style}>
      {children}
    </div>
  );
};

export default Row;
