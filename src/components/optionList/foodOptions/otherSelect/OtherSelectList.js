import React from "react";
import OtherSelectLogic from "./OtherSelectLogic";

const OtherSelectList = () => {
    
    const {otherselectList} = OtherSelectLogic();

    return (
        <select>
            {otherselectList.sort().map((other, index) => {
                        return <option key={index}>{other}</option>
                    })}
        </select>
    )
}

export default OtherSelectList