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
    <div key={url} className="border-4 border-black">
      <img alt="hotel" src={url} width={340} height={260} />
    </div>
  ));

  return (
    <div className="flex align-center text-3xl">
      <BiChevronLeft
        className="w-8 bg-black text-white"
        onClick={() => handleClick(-1)}
      />
      <div> {imageCollection[index]}</div>
      <BiChevronRight
        className="w-8 bg-black text-white"
        onClick={() => handleClick(1)}
      />
    </div>
  );
};

export default Images;
