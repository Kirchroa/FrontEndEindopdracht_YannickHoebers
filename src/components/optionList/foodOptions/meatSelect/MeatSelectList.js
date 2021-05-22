import React from 'react';
import MeatSelectLogic from './MeatSelectListLogic'

const MeatSelectList = () => {

    const {meatSelectList} = MeatSelectLogic()

    return (
        <div>
            <select>
                {meatSelectList.sort().map((meat, index) => {
                    return <option key={index}>{meat}</option>
                })}
            </select>
        </div>
    )
}

export default MeatSelectList