import React from 'react';

import GoogleLogo from '../images/logo-google.png';
import IbmLogo from '../images/logo-ibm.png';
import MicrosoftLogo from '../images/logo-microsoft.png';
import HpLogo from '../images/logo-hp.png';
import VectorLogo from '../images/logo-vector-graphics.png';

const Partners = () => {
  return (
    <section className="flex justify-center my-40">
      <div className="grid w-3/4  grid-cols-5 gap-28 max-md:w-1/2 max-md:grid-cols-1 ">
        <img src={GoogleLogo} alt="logo google" />
        <img src={IbmLogo} alt="logo IBM" />
        <img src={MicrosoftLogo} alt="logo microsoft" />
        <img src={HpLogo} alt="logo hp" />
        <img src={VectorLogo} alt="logo vector" />
      </div>
    </section>
  );
};

export default Partners;
