import React from "react";

const scroll = ({ id = "" }) => {
  const handleClick = (id) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return <div>scroll</div>;
};

export default scroll;
