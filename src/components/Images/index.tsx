import { useState } from 'react';
import { IImage } from '../../interfaces';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Images = ({ images }: { images: IImage[] }) => {
  const [index, setIndex] = useState<number>(0);

  const lastIndex = images.length - 1;

  const handleClick = (step: number) => {
    if (index === 0 && step === -1) {
      setIndex(lastIndex);
      return;
    }

    if (index === lastIndex && step === 1) {
      setIndex(0);
      return;
    }

    setIndex((preValue) => preValue + step);
  };

  const imageCollection = images.map(({ url }: { url: string }) => (
    <div key={url} className="flex items-center h-[304px] w-[456px]">
      <img alt="hotel" src={url} />
    </div>
  ));

  return (
    <div className="text-6xl flex items-center relative">
      <BiChevronLeft
        className="absolute z-1 text-white"
        onClick={() => handleClick(-1)}
      />
      <div className="border-2 border-black mb-2">{imageCollection[index]}</div>
      <BiChevronRight
        className="absolute z-1 text-white left-[400px]"
        onClick={() => handleClick(1)}
      />
    </div>
  );
};

export default Images;
