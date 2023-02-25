export const fetcher= async (url:string,setData:(data:any)=>void) => {
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
    }
  };