import './App.css';
import Chaparrita from './components/Chaparrita/Chaparrita';
import { Routes, Route } from 'react-router-dom';
import usePageTracking from './lib/gtag';

function App() {
  usePageTracking();
  return (
    <Routes>
      <Route path='/chaparrita' element={<Chaparrita />} />
    </Routes>
   
  );
}

export default App;
