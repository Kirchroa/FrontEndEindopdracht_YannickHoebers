import ApiData from "../../../../data/ApiData";

const OtherSelectLogic = () => {
  const { recipeData } = ApiData();

  const otherData = recipeData.map((superObj) => {
    return superObj.recipes.map((subObj) => {
      return subObj.other;
    });
  });

  const otherWithNull = Array.prototype.concat.apply([], otherData);
  const otherWithoutNull = otherWithNull.filter((other) => {
    return other !== null;
  });
  const otherselectList = otherWithoutNull.filter(
    (value, index) => otherWithoutNull.indexOf(value) === index
  );

  return { otherselectList };
};

export default OtherSelectLogic;
