const getRecipe = vegetable.map((outer)=> {
    return outer.recipes.map((inner)=> {
        if ((inner.vegetable === "tomaat") || (inner.vegetable === "paprika")) {
            return inner.instructions;
        }
    })
})