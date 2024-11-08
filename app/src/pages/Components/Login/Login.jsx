import { useContext, useState } from 'react';
import { AuthContext } from '../../../reducer/useAuthReducer';
import axios from 'axios';
import { LOGIN } from '../../../urls/urls';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Login = () => {
  const [auth, setAuth] = useState({
    userName: '',
    password: '',
  });

  const { user, dispatch, loading, error } = useContext(AuthContext);

  const handleLogin = (e) => {
    const { id, value } = e.target;
    setAuth((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(LOGIN, auth);
      console.log('Login successful:', res.data);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      console.error('Login failed:', error);
      dispatch({
        type: 'LOGIN_ERROR',
        payload: error.response?.data || error.message,
      });
    }
  };
  console.log(user);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://www.elgouna.com/images/hotels/the-three-corners-ocean-view-hotel-thumbnail.jpg')]">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Link to={'/'}>
              <Logo />
            </Link>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                id="userName"
                placeholder="Username"
                value={auth.userName}
                onChange={handleLogin}
                required
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                id="password"
                placeholder="Password"
                value={auth.password}
                onChange={handleLogin}
                required
              />
            </div>

            {error && (
              <p className="text-center text-red-500 text-sm mb-4">{error}</p>
            )}
            {loading && (
              <p className="text-center text-yellow-400 text-sm mb-4">
                Logging in...
              </p>
            )}

            <div className="mt-8 flex justify-center text-lg">
              <button
                type="submit"
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
            <div className="mt-8 flex justify-center text-lg">
              New User ? <Link to={'/register'}> Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
