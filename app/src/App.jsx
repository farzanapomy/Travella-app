import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Containers/Home/Home';
import Hotels from './pages/Containers/Hotels/Hotels';
import SingleHotel from './pages/Containers/SingleHotel/SingleHotel';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
