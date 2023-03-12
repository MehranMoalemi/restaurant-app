import { useState, useEffect, useRef } from "react";
import useEffectAfterMount from "./useEffectAfterMount";

interface State<T> {
  data: T | any;
  error: Error | null;
}

interface Props {
  url: string;
  dependencies: any[];
}

type Cache<T> = { [url: string]: T }

function useFetch<T>(props: Props): State<T> {
  const { url, dependencies = [] } = props;
  
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any>(null);
    // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false)
  const cache = useRef<Cache<T>>({})

  useEffect(() => {

    if (!url) return

    cancelRequest.current = false

    const getData = async () => {
      
      if (cache.current[url]) {
        setData(cache.current[url]);
        return
      }
      console.log("useFetch called")
      try {
        const response = await fetch(
            `${url}`
          );
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          
          const data = await response.json();

          if (cancelRequest.current) return

          setData(data);
        } catch (error) {
          if (cancelRequest.current) return
          console.log(error);
          setError(error)
        }
      }

    url && getData();
    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
      return () => {
        cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

    }, dependencies)
 

  return {
    data, error
  }
};


export default useFetch