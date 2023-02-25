import { useState } from "react";


export const useFetch = async (url: string) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    try {
      const response = await fetch(
        `${url}`
      );
      const data = await response.json();
      setData(data);
      if (data) {
        console.log(data);
      }
    } catch (error) {
        console.log(error);
        setError(error)
    }
    return {
        data,error,setData
    }
  };