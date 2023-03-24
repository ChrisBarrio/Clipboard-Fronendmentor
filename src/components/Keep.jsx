import React from 'react';
import ImgPc from '../images/image-computer.png';

const dataText = [
  {
    title: 'Quick Search',
    text: 'Quick Search Easily search your snippets by content, category, web address, application, and more',
  },
  {
    title: 'iCloud Sync',
    text: 'Instantly saves and syncs snippets across all your devices.',
  },
  {
    title: 'Complete History',
    text: 'Retrieve any snippets from the first moment you started using the app.',
  },
];

const Keep = () => {
  return (
    <section className="mt-40 mb-20 flex flex-col items-center justify-center gap-4 text-center max-md:my-20">
      <h3 className="text-2xl font-bold text-slate-600">
        Keep track of your snippets
      </h3>
      <p className="w-1/3 text-lg text-slate-500 max-md:w-full max-md:px-4">
        Keep track of your snippets Clipboard instantly stores any item you copy
        in the cloud, meaning you can access your snippets immediately on all
        your devices.
      </p>
      <div className="relative mt-14 flex h-[35rem] w-full max-md:h-[42rem] max-md:flex-col">
        <img
          src={ImgPc}
          alt="imagen pc"
          className="absolute -left-20 w-1/2 max-md:relative max-md:-left-0 max-md:w-full max-md:px-4"
        />
        <div className="absolute right-0 flex w-1/2 flex-col gap-8 px-20 pt-20 text-start max-md:relative max-md:w-full max-md:py-8 max-md:px-8 max-md:text-center">
          {dataText.map((e) => (
            <div key={e.title}>
              <h4 className="text-lg font-semibold text-slate-600">
                {e.title}
              </h4>
              <p className=" w-3/4 text-base text-slate-500 max-md:w-full">
                {e.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keep;
