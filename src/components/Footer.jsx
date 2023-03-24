import React from 'react';

import LogoSvg from '../components/icons/LogoSvg';
import IconFacebook from '../components/icons/IconFacebook';
import IconTwitter from '../components/icons/IconTwitter';
import IconInstagram from '../components/icons/IconInstagram';

const Footer = () => {
  return (
    <footer className="flex bg-gray-200 max-md:flex-col max-md:items-center max-md:py-10 ">
      <div className="w-1/4 border-2 max-md:w-full max-md:flex max-md:justify-center">
        <LogoSvg className='max-md:scale-50 scale-[.3]' />
      </div>
      <div className="grid w-2/4 max-md:font-semibold max-md:gap-8 grid-cols-3 gap-4 p-10 max-md:w-full max-md:grid-cols-1 text-center max-md:mb-10">
        <a href="#" className="hover:text-teal-400">
          FAQs
        </a>
        <a href="#" className="hover:text-teal-400">
          Contact Us
        </a>
        <a href="#" className="hover:text-teal-400">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-teal-400">
          Press Kit
        </a>
        <a href="#" className="hover:text-teal-400">
          Install Guide
        </a>
      </div>
      <div className="ml-auto mr-10 flex items-center gap-4 max-md:mx-0 max-md:gap-10 ">
        <a href="#facebook" className='hover:-translate-y-0.5 hover:transition-all hover:duration-500'>
          <IconFacebook />
        </a>
        <a href="#twitter" className='hover:-translate-y-0.5 hover:transition-all hover:duration-500'>
          <IconTwitter />
        </a>
        <a href="#instagram" className='hover:-translate-y-0.5 hover:transition-all hover:duration-500'>
          <IconInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
