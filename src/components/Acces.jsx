import React from 'react';

import ImgTablet from '../images/image-devices.png'

const Acces = () => {
  return (
    <section className="my-20 flex flex-col items-center justify-center gap-4 text-center">
      <h3 className="text-2xl font-bold text-slate-600 max-md:px-20">
        Acces Clipboard anywhere
      </h3>
      <p className="w-1/3 text-lg text-slate-500 max-md:w-full max-md:px-6">
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <img src={ImgTablet} alt='tablet y celular' className='w-1/2 mt-10 max-md:w-full' />
    </section>
  );
};

export default Acces;
