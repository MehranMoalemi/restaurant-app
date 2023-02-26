import { useState, useEffect } from "react";

interface useFetchReturns<T> {
  data: T | any;
  error: Error | null;
}

interface Props{
  url: string;
  dependencies: any[];
}

function useFetch<T>(props: Props): useFetchReturns<T> {
  const { url, dependencies=[] } = props;

  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any>(null);
  useEffect(() => {

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

    url && getData();

  }, dependencies)

  return {
    data, error
  }
};


export default useFetch