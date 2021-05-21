import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';


const SelectbarTest = () => {
 //maak voor iedere keuze een apparte usestate aan
 const [recipeData, setRecipeData] = useState([]);
 const [x, setX] = useState([]);
 

 useEffect(()=>{
     axios.get('http://localhost:9090/api/cooks')
     .then(response => {
         setRecipeData(response.data)
         setX(response.data)
     })
     .catch(error => {
         console.log(error)
     })
 },[])

    // [] map over data van array
    // [] maak van een multidemensionale array een enkele
    // [] filter null;
    // [] map de enkele array naar jsx

    const getVegetables = () => {
        const vegetableData = recipeData.map((superObj) => {
            return superObj.recipes.map((subObj) => {
                return subObj.vegetable
            })
        })

        const vegetablesWithNull = Array.prototype.concat.apply([], vegetableData);
        const vegetableWithoutNull = vegetablesWithNull.filter((vegetable) => {
            return vegetable !== null;
        })
        
        return (
                <select>
                    {vegetableWithoutNull.sort().map((vegetable, index) => {
                        return <option key={index}>{vegetable}</option>
                    })}
                </select>
        )
    }
     
     
     return (
     <div>
      <section className="select-container">
          //groente
        <select>
            {recipeData.map((superObj)=> {
                return superObj.recipes.map((subObj)=> {
                    return (
                        <option>{subObj.vegetable}</option>
                    )
                })
            })}
        </select>
            //vlees
        <select>
            
        </select>
            //test
        {getVegetables()}
      </section>
     </div>
 )
}

export default SelectbarTest


 /*
     // map over object to safe vegetable propperties
     const getSelectList = () => {
         
         const meatSelect = RecipeData.map((superObj) => {
            return superObj.recipes.map((subObj) => {
                const v = [];
                v.push(subObj.meat);
                console.log(v)
                return v;
            })
        });

        const otherSelect = RecipeData.map((superObj) => {
            return superObj.recipes.map((subObj) => {
                return subObj.other;
            })
        });

          
          const v = RecipeData.map((superObj) => {
            return superObj.recipes.map((subObj) => {
                return (
                    <div>
                        <select>
                            <option>{subObj.vegetable}</option>
                        </select>
                    </div>
                )
            })
        });


         //put data in select JSX element
         return (
             <div>
            <select>
                {meatSelect.map((item, index) => 
                <option key={index}>{item}</option>
                )}
            </select>
            <select>
                {otherSelect.map((item) => 
                <option>{item}</option>
                )}
            </select>
            <div className="test">
                <select>
                    {RecipeData.map((superObj) => {
                        return superObj.recipes.map((subObj) => {
                            return (
                                <option>{subObj.vegetable}</option>
                            )
                        })
                    })}
                </select>
            </div>
         </div>
         )
     }
     */
