export const asyncFetch = (setIsLoading, setData) => {
  setIsLoading(true);
  fetch("http://localhost:8000/data")
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};
