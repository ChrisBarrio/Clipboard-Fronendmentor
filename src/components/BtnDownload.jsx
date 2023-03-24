import React from 'react';

const DownloadBtn = ({ props, name }) => {
  return (
    <div
      className={` cursor-pointer rounded-3xl p-2 text-sm font-thin shadow-lg hover:-translate-y-1 hover:transition-all hover:duration-500  ${props} `}
    >
      {name}
    </div>
  );
};

export default DownloadBtn;

