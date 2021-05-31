import { useState } from "react";
import ApiData from "../../../../data/ApiData";

const Test = (props) => {
  const { recipeData } = ApiData();
  const [recipe, setRecipe] = useState([]);
  const [test, setTest] = useState([]);

  const getRecipe = () => {
    recipeData.map((superObj) => {
      return superObj.recipes.map((subObj) => {
        if (
          subObj.vegetable === props.vegetable &&
          subObj.meat === props.meat &&
          subObj.other === props.other
        ) {
          return setRecipe(subObj);
        }
      });
    });

    const newArray = [];
    newArray.push(recipe);

    setTest(newArray);
    console.log(test);
  };

  return (
    <div>
      <button onClick={() => getRecipe()}>getRecipe</button>

      {test.map((item) => (
        <div>
          <h1>{item.recipeName}</h1>
          <p>Portie: {item.portion}</p>
          <p>Instructies: {item.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
