import { useState, useEffect } from "react";
import useEffectAfterMount from "./useEffectAfterMount";

interface useFetchReturns<T> {
  data: T | any;
  error: Error | null;
}

interface Props {
  url: string;
  dependencies: any[];
}

function useFetchAfterMount<T>(props: Props): useFetchReturns<T> {
  const { url, dependencies = [] } = props;
  console.log("called")

  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any>(null);
  
    //this hook will ignore first render and doesnt fetch the data
    useEffectAfterMount(() => {
      const getData = async () => {
        try {
          const response = await fetch(
            `${url}`
          );
          const data = await response.json();
          setData(data);
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


export default useFetchAfterMount