import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/api";

export default function useCustomFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    // 부수 효과 발생.
    (async (url) => {
      try {
        const response = await axiosInstance.get(url);

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })(url);
  }, [url]);
  // []를 의존성 배열이라고 부름.

  return { isLoading, data, error };
}