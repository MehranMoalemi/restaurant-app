import { useState } from "react";

interface useFetchReturns<T>{
  data: T|any;
  error: Error | null;
}

function useFetch<T>(url: string): useFetchReturns<T> {
    const [data, setData] = useState<T|undefined>();
  const [error, setError] = useState<any>(null);
  const getData = async () => {
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
  }
  getData();
    return {
        data,error
    }
};


export default useFetch