export const hotelsDataMock = [
  {
    id: '1',
    name: 'Waldorf Astoria',
    address1: 'Sesame Street 123',
    address2: 'Floor 99',
    images: [
      { url: 'http://imagestockx/img1.png', alt: 'Image 1' },
      { url: 'http://imagestockx/img2.png', alt: 'Image 2' },
      { url: 'http://imagestockx/img3.png', alt: 'Image 3' },
    ],
    starRating: '5',
  },
  {
    id: '2',
    name: 'Hilton NYC',
    address1: '55th Street',
    address2: 'Floor 12',
    images: [
      { url: 'http://imagestockx/imgNyc1.png', alt: 'Image NYC 1' },
      { url: 'http://imagestockx/imgNyc2.png', alt: 'Image NYC 2' },
      { url: 'http://imagestockx/imgNyc3.png', alt: 'Image NYC 3' },
      { url: 'http://imagestockx/imgNyc4.png', alt: 'Image NYC 4' },
    ],
    starRating: '4',
  },
  {
    id: '3',
    name: 'Barcelo Hotel',
    address1: 'Via Garibaldi',
    address2: 'Numero 23',
    images: [
      { url: 'http://imagestockx/imgRoma-1.png', alt: 'Image 1' },
      { url: 'http://imagestockx/imgRoma-22.png', alt: 'Image 2' },
      { url: 'http://imagestockx/imgRoma-333.png', alt: 'Image 3' },
    ],
    starRating: '3',
  },
  {
    id: '4',
    name: 'Hotel Radisson Blue Sobieski',
    address1: 'Plac Zawiszy',
    address2: 'Numer 1',
    images: [
      { url: 'http://imagestockx/imgWawa-5.png', alt: 'Image 1' },
      { url: 'http://imagestockx/imgWawa-10.png', alt: 'Image 2' },
    ],
    starRating: '3',
  },
];

export const roomsDataMock = [
  {
    id: '1',
    name: 'Standard',
    longDescription: '',
    occupancy: {
      maxAdults: '2',
      maxChildren: '0',
    },
  },
];
