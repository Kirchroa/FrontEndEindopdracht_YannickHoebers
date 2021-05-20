import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';


const SelectbarTest = () => {
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
     
         return (
             <div>
            <select>
                {vegetableArray.map((item) => 
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

export default SelectbarTest


/*
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
*/