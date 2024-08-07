import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Containers/Home/Home';
import Hotels from './pages/Containers/Hotels/Hotels';
import SingleHotel from './pages/Containers/SingleHotel/SingleHotel';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotels />} />
        <Route path="/hotel/:id" element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
