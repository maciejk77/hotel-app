import { useState } from 'react';
import { IImage } from '../../interfaces';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Images = ({ images }: { images: IImage[] }) => {
  const [index, setIndex] = useState<number>(0);

  const length = images.length - 1;

  const handleClick = (step: number) => {
    if (index === 0 && step === -1) {
      setIndex(length);
      return;
    }

    if (index === length && step === 1) {
      setIndex(0);
      return;
    }

    setIndex((preValue) => preValue + step);
  };

  const imageCollection = images.map(({ url }: { url: string }) => (
    <div key={url}>
      <img
        alt="hotel"
        src={url}
        style={{ margin: '0 5px' }}
        width={340}
        height={260}
      />
    </div>
  ));

  return (
    <div
      style={{
        display: 'flex',
        fontSize: 50,
        alignItems: 'center',
        // border: '1px solid red',
        // width: 420,
      }}
    >
      <BiChevronLeft
        onClick={() => handleClick(-1)}
        style={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 25,
          width: 50,
        }}
      />
      <div> {imageCollection[index]}</div>
      <BiChevronRight
        onClick={() => handleClick(1)}
        style={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 25,
          width: 50,
        }}
      />
    </div>
  );
};

export default Images;
