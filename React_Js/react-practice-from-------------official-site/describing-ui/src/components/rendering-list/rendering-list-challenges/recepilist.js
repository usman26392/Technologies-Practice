
import { recipes } from "../../../api/data"


/**
 * Challenge 2
 */

// const Recepilist = () => {
//   return (
//     <div>
//         <h1>Recipes</h1>
//         {
//             recipes.map(function(recipe) {
//                 return (
//                     <div  key={recipe.id} >
//                         <h2>{recipe.name}</h2>
//                         <ul>
//                             {
//                                 recipe.ingredients.map(function(ing) {
//                                     return (
//                                         <li key={ing}> {ing} </li>
//                                     )
//                                 })
//                             }
//                         </ul>
//                     </div>
//                 )
//             })
//         }
        
//     </div>
//   )
// }

// export default Recepilist


/**
 * Challenge 3: Extracting a list item component
 * This RecipeList component contains two nested map calls. To simplify it,
 *  extract a Recipe component from it which will accept id, name, and ingredients
 *  props. Where do you place the outer key and why?
 */


function Recipe({id, name, ingredients}) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {
                    ingredients.map(function(ing) {
                        return (
                            <li key={ing}> {ing} </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

 const Recepilist = () => {
    return (
      <div>
          <h1>Recipes</h1>
          {
              recipes.map(function(recipe, idx) {
                  return (
                    //   components' iteration
                    // console.log(idx)
                      <Recipe {...recipe} key={recipe.id} />

                  )
              })
          }
          
      </div>
    )
  }
  
  export default Recepilist