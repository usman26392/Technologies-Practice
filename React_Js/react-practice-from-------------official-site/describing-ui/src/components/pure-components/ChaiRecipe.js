

function ChaiRecipeList() {
    return (
        <ol>
            <li>Boil 1 cups of milk.</li>
            <li>Add 2 spoons of masala spices.</li>
            <li>Remove from heat, and add 1 spoons of tea.</li>
        </ol>
    )
}



const ChaiRecipe = () => {
  return (
    <div>
        <h1>Spiced chai recipe</h1>
        <h3>For one Person</h3>
        <ChaiRecipeList/>
    </div>
  )
}

export default ChaiRecipe




