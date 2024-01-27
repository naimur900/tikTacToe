import React from "react";
import "./box.css";

const Box = ({ value, handleClick, idx }) => {
  const style = value === "X" ? "box x" : "box o";
  return (
    <button
      className={style}
      onClick={() => {
        value === null && handleClick(idx);
      }}
    >
      {value}
    </button>
  );
};
export default Box;
