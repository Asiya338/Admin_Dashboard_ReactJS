import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400 font-semibold ">{category}</p>

      <p className="text-black  font-extrabold text-3xl tracking-light ">
        {title}
      </p>
    </div>
  );
};

export default Header;
