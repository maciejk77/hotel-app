import { useState, createContext, StrictMode, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IDataContext, IHotel } from './interfaces';
import reportWebVitals from './reportWebVitals';

export const DataContext = createContext<IDataContext>({
  rating: 3,
  setRating: () => {},
  adultsCount: 2,
  setAdultsCount: () => {},
  childrenCount: 0,
  setChildrenCount: () => {},
  hotels: [],
  setHotels: () => {},
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [rating, setRating] = useState(3);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [hotels, setHotels] = useState<IHotel[]>([]);

  return (
    <DataContext.Provider
      value={{
        rating,
        setRating,
        adultsCount,
        setAdultsCount,
        childrenCount,
        setChildrenCount,
        hotels,
        setHotels,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
