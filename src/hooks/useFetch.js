import { useState,useEffect } from "react";
export const useFetch = (url) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.results);
    }
    fetchdata();
  }, [url])

  return {data};
}
