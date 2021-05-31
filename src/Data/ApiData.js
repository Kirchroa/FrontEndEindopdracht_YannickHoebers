import { useState, useEffect } from "react";
import axios from "axios";

const ApiData = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9090/api/cooks")
      .then((response) => {
        setRecipeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { recipeData };
};

export default ApiData;
