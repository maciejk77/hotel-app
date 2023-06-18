import { IImage } from '../../interfaces';

const Images = ({ images }: { images: IImage[] }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {images.map(({ url }: { url: string }) => (
      <div key={url}>
        <img
          alt="hotel"
          src={url}
          style={{ marginRight: 5 }}
          width={240}
          height={160}
        />
      </div>
    ))}
  </div>
);

export default Images;
