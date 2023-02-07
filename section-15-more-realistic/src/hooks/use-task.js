import React, { useState } from "react";

const useTask = (component = "APP", method = "GET") => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchTask(taskText) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-cf8eb-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        {
          method: method,
          body: JSON.stringify({ text: taskText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      return { isLoading: isLoading, error: error, data: data };
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
};

export default useTask;
