import React from 'react';

import DownloadBtn from '../components/BtnDownload';

const Clipboard = () => {
  return (
    <section className="my-20 flex flex-col items-center gap-8 text-center max-md:my-10">
      <h3 className="text-2xl font-bold text-slate-600 max-md:px-20">
        Clipboard for iOS and Mac OS
      </h3>
      <p className="w-1/3 text-lg text-slate-500 max-md:w-full max-md:px-10">
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.
      </p>
      <div className="flex gap-4 max-md:flex-col max-md:w-2/3">
        <DownloadBtn name='Download for iOS' props='bg-teal-400 text-white' />
        <DownloadBtn name='Download for Mac' props='bg-blue-500 text-white'/>
      </div>
    </section>
  );
};

export default Clipboard;
