import React from "react";
import VegetableSelectList from "../foodOptions/vegetableSelect/VegetableSelectList"
import MeatSelectList from "../foodOptions/meatSelect/MeatSelectList"
import OtherSelectList from "../foodOptions/otherSelect/OtherSelectList"



const SelectList = () => {

    return (
        <div>
            <VegetableSelectList />
            <MeatSelectList />
            <OtherSelectList />
        </div>
    )
}

export default SelectList;