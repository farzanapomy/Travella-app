import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Containers/Home/Home';
import Hotels from './pages/Containers/Hotels/Hotels';
import SingleHotel from './pages/Containers/SingleHotel/SingleHotel';
import Login from './pages/Components/Login/Login';
import Register from './pages/Components/Register/Register';
import AdminDashboard from './pages/Components/Admin/AdminDashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
