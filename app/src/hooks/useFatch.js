import { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = (url) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        console.log('hello world', url);
        const res = await axios.get(url);
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.log(error.message);
        setError(error);
      }
      setLoading(false);
    };
    getData();
  }, [url]);
  const reloadData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return { data, loading, error, reloadData };
};
export default useFetch;
