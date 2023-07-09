import './App.css';
import { Country } from './pages/Country';
import { Home } from './pages/Home';
import { PlaceDetail } from './pages/PlaceDetail';
import { Places } from './pages/Places';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="/places/:countryId/:placesId" element={<Places />} />
        <Route path="/placeDetail/:countryId/:placesId/:placeDetailId" element={<PlaceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
