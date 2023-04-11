import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const useSendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        header: requestConfig.header || {},
        body: JSON.stringify(requestConfig.body) || null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      applyData(responseData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    useSendRequest,
  };
};

export default useHttp;
