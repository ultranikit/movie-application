import { useState } from "react";

export const useSearchParams = (initialState = {}) => {
  const [params, setParams] = useState(initialState);

  const changeParams = (event) => {
    const { name, value } = event.target;
    setParams({ ...params, [name]: value });
  };

  return { params, changeParams };
};

export default useSearchParams;
