import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Tvshow from './Component/Tvshow';
import Movie from './Component/Movie';
import Action from './Component/Action';
import Sport from './Component/Sport';
import Bollywood from './Component/Bollywood';
import Horror from './Component/Horror';
import Drama from './Component/Drama';
import Comedies from './Component/Comedies';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshow" element={<Tvshow />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/action" element={<Action />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/comedies" element={<Comedies />} />
      </Routes>
    </>
  );
}

export default App;
