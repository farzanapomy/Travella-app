import { useContext, useState } from 'react';
import { AuthContext } from '../../../reducer/useAuthReducer';
import axios from 'axios';
import { LOGIN } from '../../../urls/urls';

const Login = () => {
  const [auth, setAuth] = useState({
    userName: undefined,
    password: undefined,
  });

  const { user, dispatch, loading, error } = useContext(AuthContext);
  const handleLogin = (e) => {
    setAuth((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
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

  return (
    <div className="">
      Login
      <div>
        <input
          type="text"
          placeholder="userName"
          id="userName"
          onChange={handleLogin}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleLogin}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
