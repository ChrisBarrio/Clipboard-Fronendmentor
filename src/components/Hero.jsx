import React from 'react';

import LogoSvg from '../components/icons/LogoSvg';

import DownloadBtn from '../components/BtnDownload';

const Hero = () => {
  return (
    <section
      className={`flex h-[28rem] flex-col items-center justify-end gap-4 bg-opacity-20 bg-hero-pattern bg-cover bg-no-repeat max-md:h-[40rem] max-md:justify-center max-md:gap-8`}
    >
      <LogoSvg />
      <div className="grid w-1/3 gap-4 text-center max-md:w-full max-md:px-10">
        <h2 className="text-3xl font-bold text-slate-600">
          A history of everything you copy
        </h2>
        <p className="text-lg text-slate-500 ">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div className="flex gap-4 max-md:flex-col max-md:w-2/3">
        <DownloadBtn name="Download for iOS" props="bg-teal-400 text-white text-center" />
        <DownloadBtn name="Download for Mac" props="bg-blue-500 text-white text-center" />
      </div>
    </section>
  );
};

export default Hero;
