import { useState } from "react";

interface useFetchReturns{
  data: any; error: any;
}

async function useFetch<T>(url: string): useFetchReturns {
    const [data, setData] = useState<T|undefined>();
    const [error, setError] = useState<Error|null>(null);
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
        data,error
    }
};


export default useFetch