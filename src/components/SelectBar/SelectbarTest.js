import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';


const SelectbarTest = () => {
 //maak voor iedere keuze een apparte usestate aan
 const [RecipeData, setRecipeData] = useState([]);
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
     
     return (
     <div>
      <section className="select-container">
          //groente
        <select>
            {RecipeData.map((superObj)=> {
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
            //overig
        <select>
            
        </select>
      </section>
     </div>
 )
}

export default SelectbarTest

