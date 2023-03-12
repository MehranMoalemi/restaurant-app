import { useState, useRef } from "react";
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

function useFetchAfterMount<T>(props: Props): State<T> {
  const { url, dependencies = [] } = props;
  console.log("called")

  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any>(null);
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false)
  const cache = useRef<Cache<T>>({})

  //this hook will ignore first render and doesnt fetch the data
  useEffectAfterMount(() => {
    if (!url) return

    cancelRequest.current = false

    const getData = async () => {

      if (cache.current[url]) {
        setData(cache.current[url]);
        return
      }

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
  }, dependencies)

  return {
    data, error
  }
};


export default useFetchAfterMount