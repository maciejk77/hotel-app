import { Dispatch, SetStateAction } from 'react';

// Data Context

type TDispatch = Dispatch<SetStateAction<number>>;

export interface IDataContext {
  rating: number;
  setRating: TDispatch;
  adultsCount: number;
  setAdultsCount: TDispatch;
  childrenCount: number;
  setChildrenCount: TDispatch;
}

// Hotel API data

export interface IFacility {
  code: string;
}

export interface IImage {
  url: string;
  alt?: string;
}

export interface IPosition {
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

// Room API data

export interface IOccupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}

export interface IFacility {
  code: string;
  name: string;
}

export interface IRoom {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: IOccupancy;
  disabledAccess: boolean;
  bedConfiguration: string;
  images: IImage[];
  facilities: IFacility[];
}

export interface IRatePlan {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: string;
}

export interface IRooms {
  rooms: IRoom[];
  ratePlans: IRatePlan[];
}
