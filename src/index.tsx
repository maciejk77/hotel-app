import { useState, createContext, StrictMode, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IDataContext } from './interfaces';
import { INITIAL_DATA } from './constants';
import reportWebVitals from './reportWebVitals';

export const DataContext = createContext<IDataContext>(INITIAL_DATA);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [rating, setRating] = useState<number>(3);
  const [adultsCount, setAdultsCount] = useState<number>(2);
  const [childrenCount, setChildrenCount] = useState<number>(0);

  return (
    <DataContext.Provider
      value={{
        rating,
        setRating,
        adultsCount,
        setAdultsCount,
        childrenCount,
        setChildrenCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

window.addEventListener('DOMContentLoaded', function (e) {
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
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
