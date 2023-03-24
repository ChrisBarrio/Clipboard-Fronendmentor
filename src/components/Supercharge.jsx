import React from 'react';

import BlacklistSvg from './icons/BlacklistSvg';
import TextSvg from './icons/TextSvg';
import SneakSvg from './icons/SneakSvg';

const cards = [
  {
    img: <BlacklistSvg />,
    title: 'Create blacklists',
    text: ' Ensure sensitive information never makes its way to your clipboard by excluding certain sources. ',
  },
  {
    img: <TextSvg />,
    title: 'Plain text snippets',
    text: ' Remove unwanted formatting from copied text for a consistent look. ',
  },
  {
    img: <SneakSvg />,
    title: 'Sneak preview',
    text: ' Quick preview of all snippets on your Clipboard for easy access. ',
  },
];

const Supercharge = () => {
  return (
    <section className="my-20 flex flex-col items-center justify-center gap-4 text-center">
      <h3 className="text-2xl font-bold text-slate-600 max-md:px-10">
        Supercharge your workflow
      </h3>
      <p className="w-1/3 text-lg text-slate-500 max-md:w-full max-md:px-2">
        We’ve got the tools to boost your productivity.
      </p>
      <div className="mt-20 grid w-3/4  grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-14">
        {cards.map((e) => (
          <div key={e.title} className="flex flex-col items-center gap-4">
            {e.img}
            <h4 className="text-xl font-semibold text-stone-900">{e.title}</h4>
            <p className="text-lg text-slate-500">{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Supercharge;
