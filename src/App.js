import './App.css';
import Chaparrita from './components/Chaparrita/Chaparrita';
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

<GoogleAnalytics GA_MEASUREMENT_ID={process.env.REACT_APP_GA_MEASUREMENT_ID} />
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/chaparrita' element={<Chaparrita />} />
        </Routes>
      </div>
    </Router> 
   
  );
}

export default App;
