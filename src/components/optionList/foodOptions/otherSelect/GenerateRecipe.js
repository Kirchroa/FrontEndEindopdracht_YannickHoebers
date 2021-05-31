import React, { useState } from "react";
import MeatSelectLogic from "./MeatSelectListLogic";
import VegetableSelectLogic from "./VegetableSelectLogic";
import OtherSelectLogic from "./OtherSelectLogic";
import Test from "./Test";

const OtherSelectList = () => {
  const { otherselectList } = OtherSelectLogic();
  const { meatSelectList } = MeatSelectLogic();
  const { vegetableSelectList } = VegetableSelectLogic();

  const [vegetable, setVegetable] = useState("");
  const [meat, setMeat] = useState("");
  const [other, setOther] = useState("");

  return (
    <div>
      <select
        onChange={(event) => {
          const otherSelect = event.target.value;
          setOther(otherSelect);
        }}
      >
        <option disabled selected value>
          {" "}
          -- select an option --{" "}
        </option>
        {otherselectList.sort().map((other, index) => {
          return <option key={index}>{other}</option>;
        })}
      </select>
      <select
        onChange={(event) => {
          const meatSelect = event.target.value;
          setMeat(meatSelect);
        }}
      >
        <option disabled selected value>
          {" "}
          -- select an option --{" "}
        </option>
        {meatSelectList.sort().map((other, index) => {
          return <option key={index}>{other}</option>;
        })}
      </select>
      <select
        onChange={(event) => {
          const vegetableSelection = event.target.value;
          setVegetable(vegetableSelection);
        }}
      >
        <option disabled selected value>
          {" "}
          -- select an option --{" "}
        </option>
        {vegetableSelectList.sort().map((other, index) => {
          return <option key={index}>{other}</option>;
        })}
      </select>

      <Test vegetable={vegetable} meat={meat} other={other} />
    </div>
  );
};

export default OtherSelectList;
