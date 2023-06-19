export const BASE_API_URL = 'https://obmng.dbm.guestline.net/api';
export const HOTEL_API_URL = `${BASE_API_URL}/hotels?collection-id=OBMNG`;
export const ROOM_API_BASE_URL = `${BASE_API_URL}/roomRates/OBMNG`;

export const [STEP_BACK, STEP_NEXT] = [-1, 1];

export const INITIAL_DATA = {
  rating: 3,
  setRating: () => {},
  adultsCount: 2,
  setAdultsCount: () => {},
  childrenCount: 0,
  setChildrenCount: () => {},
};
