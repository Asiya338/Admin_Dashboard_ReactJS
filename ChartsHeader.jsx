import React from "react";

const ChartsHeader = ({ category, title }) => (
  <div className=" mb-10">
    <div>
      <p
        className="text-2xl font-semibold dark:text-gray-300 
      text-gray-400"
      >
        Chart
      </p>
      <p
        className="text-4xl font-extrabold tracking-tight
       dark:text-gray-200 text-slate-900 mt-2"
      >
        {category}
      </p>
    </div>
    <p
      className="text-center dark:text-gray-200
    font-semibold text-3xl mb-2 mt-3"
    >
      {title}
    </p>
  </div>
);

export default ChartsHeader;
