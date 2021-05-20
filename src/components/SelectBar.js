import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectBar = () => {
    
    //maak voor iedere keuze een apparte usestate aan
    const [vegetable, setVegetable] = useState([]);
    const [meat, setMeat] = useState([]);
    const [other, setOther] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9090/api/cooks')
        .then(response => {
            setVegetable(response.data)
            setMeat(response.data)
            setOther(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

        
        const getSelectList = (vegResponse, meatResponse, otherResponse) => {
            const vegetableJson = vegetable.map((outer) => {
                return outer.recipes.map((inner) => {
                    return inner.vegetable;
                })
            });

            const meatJson = meat.map((outer) => {
                return outer.recipes.map((inner) => {
                    return inner.meat;
                })
            });

            const otherJson = other.map((outer) => {
                return outer.recipes.map((inner) => {
                    return inner.other;
                })
            });

            const vegetableString = JSON.stringify(vegetableJson)
            const vegetableFormatted = vegetableString.replace(/[\[\]\"\']+/g,'')
            const vegetableArray = vegetableFormatted.split(",");


            const meatString = JSON.stringify(meatJson)
            const meatFormatted = meatString.replace(/[\[\]\"\']+/g,'')
            const meatArray = meatFormatted.split(",");

            const otherString = JSON.stringify(otherJson)
            const otherFormatted = otherString.replace(/[\[\]\"\']+/g,'')
            const otherArray = otherFormatted.split(",");

            /////////////////////////////////////////////////////////////////////////////////////

            const newData = vegetable.map((object) =>{
                return object.name
            })
            console.log(newData)
            
            
            ////////////////////////////////////////////////////////////////////////////////////
        
            return (
                <div>
               <select>
                   {vegetableArray.map((item) => 
                   <option>{item}</option>
                   )}
               </select>
               <select>
                   {meatArray.map((item) => 
                   <option>{item}</option>
                   )}
               </select>
               <select>
                   {otherArray.map((item) => 
                   <option>{item}</option>
                   )}
               </select>
            </div>
            )
        }



        return (
        <div>
         {getSelectList(vegetable, meat, other)}
        </div>
    )

    
}






export default SelectBar
