import ApiData from "../../../../data/ApiData";

const MeatSelectLogic = () => {
  const { recipeData } = ApiData();

  const meatData = recipeData.map((superObj) => {
    return superObj.recipes.map((subObj) => {
      return subObj.meat;
    });
  });

  const meatWithNull = Array.prototype.concat.apply([], meatData);
  const meatWithoutNull = meatWithNull.filter((meat) => {
    return meat !== null;
  });
  const meatSelectList = meatWithoutNull.filter(
    (value, index) => meatWithoutNull.indexOf(value) === index
  );

  return { meatSelectList };
};

export default MeatSelectLogic;
