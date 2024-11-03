import './App.css';
import Chaparrita from './components/Chaparrita/Chaparrita';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Routes, Route } from 'react-router-dom';
import usePageTracking from './lib/gtag';

function App() {
  useEffect(() => {

    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

  }, []);

  usePageTracking();

  return (
    <Routes>
      <Route path='/chaparrita' element={<Chaparrita />} />
    </Routes>
   
  );
}

export default App;
