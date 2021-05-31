import ApiData from "../../../../data/ApiData";

const VegetableSelectLogic = () => {
  const { recipeData } = ApiData();

  const vegetableData = recipeData.map((superObj) => {
    return superObj.recipes.map((subObj) => {
      return subObj.vegetable;
    });
  });

  const vegetablesWithNull = Array.prototype.concat.apply([], vegetableData);
  const vegetableWithoutNull = vegetablesWithNull.filter((vegetable) => {
    return vegetable !== null;
  });
  const vegetableSelectList = vegetableWithoutNull.filter(
    (value, index) => vegetableWithoutNull.indexOf(value) === index
  );

  return { vegetableSelectList };
};

export default VegetableSelectLogic;
