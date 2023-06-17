import { Dispatch, SetStateAction } from 'react';

type TDispatch = Dispatch<SetStateAction<number>>;

export interface IDataContext {
  rating: number;
  setRating: TDispatch;
  adultsCount: number;
  setAdultsCount: TDispatch;
  childrenCount: number;
  setChildrenCount: TDispatch;
  hotels: [] | IHotel[];
  setHotels: Dispatch<SetStateAction<IHotel[]>>;
}

interface IFacility {
  code: string;
}

interface IImage {
  url: string;
}

interface IPosition {
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface IHotel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  countryCode: string;
  country: string;
  facilities: IFacility[];
  telephone: string;
  email: string;
  images: IImage[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: IPosition;
  starRating: string;
}
