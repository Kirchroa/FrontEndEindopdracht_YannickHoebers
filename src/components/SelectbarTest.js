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

     
     const getSelectList = () => {
         const vegetableJson = vegetable.map((outer) => {
             return outer.recipes.map((inner) => {
                console.log(inner.vegetable)
                console.log(typeof(inner.vegetable))
                 return inner.vegetable;
             })
         });
        
         return (
             <div>
            <select>
                {vegetableJson.map((item) => 
                <option>{item}</option>
                )}
            </select>

         </div>
         )
     }



     return (
     <div>
      {getSelectList()}
     </div>
 )
}

export default SelectbarTest

