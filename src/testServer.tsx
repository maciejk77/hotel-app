// import 'whatwg-fetch'; // not needed for CRA, polyfill for fetch
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { hotelsDataMock, roomsDataMock } from './mockData';
import { ROOM_API_BASE_URL, HOTEL_API_URL, BASE_API_URL } from './constants';

const hotelsUrl = `${BASE_API_URL}/hotels`;
// const roomsUrl = (hotelId: string) => `${ROOM_API_BASE_URL}/${hotelId}`;

const server = setupServer(
  rest.get(hotelsUrl, (req, res, ctx) => {
    const collectionId = req.url.searchParams.get('collection-id');
    if (collectionId === 'OBMNG') {
      return res(ctx.status(200), ctx.json(hotelsDataMock));
    }
  }),

  // rest.get(roomsUrl, (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(roomsDataMock));
  // }),

  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: 'Please add request handler' })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export {
  server,
  rest,
  hotelsUrl,
  // roomsUrl
};
