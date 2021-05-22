import React from 'react';
import VegetableSelectLogic from './VegetableSelectLogic';

const VegetableSelectList = () => {

    const {vegetableSelectList} = VegetableSelectLogic()

    return (
        <select>
        {vegetableSelectList.sort().map((vegetable, index) => {
            return <option key={index}>{vegetable}</option>
        })}
    </select>
    )
}

export default VegetableSelectList