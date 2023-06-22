import { useState } from 'react';
import { IImage } from '../../interfaces';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { STEP_BACK, STEP_NEXT } from '../../constants';

const Images = ({ images }: { images: IImage[] }) => {
  const [index, setIndex] = useState<number>(0);

  const lastIndex = images.length - 1;

  const handleClick = (step: number) => {
    if (!index && step === STEP_BACK) {
      setIndex(lastIndex);
      return;
    }

    if (index === lastIndex && step === STEP_NEXT) {
      setIndex(0);
      return;
    }

    setIndex((preValue) => preValue + step);
  };

  const imageCollection = images.map(({ url }: { url: string }) => (
    <div
      key={url}
      data-testid="image"
      className="flex items-center h-[200px] w-[300px]"
    >
      <img alt="hotel" src={url} />
    </div>
  ));

  return (
    <div data-testid="images" className="text-5xl flex items-center relative">
      <BiChevronLeft
        className="absolute text-white z-1"
        onClick={() => handleClick(STEP_BACK)}
      />
      <div className="border-2 border-black mb-2">{imageCollection[index]}</div>
      <BiChevronRight
        className="absolute text-white left-[255px] z-1"
        onClick={() => handleClick(STEP_NEXT)}
      />
    </div>
  );
};

export default Images;
