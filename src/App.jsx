import { useState, useRef, useEffect} from 'react'
import Header from './components/Header'
import Ingredients  from './components/Ingredients'
import Recipe from './components/Recipe'
import { getRecipeFromMistral } from './fetchFromAi'
export default function App() {
  const [ingredients, setIngredients] = useState([])
  const [getRecipe, setGetRecipe] = useState(false);
  const recipe = useRef(null)
  const [recipeMarkdown, setRecipeMarkdown] = useState('');
  let isLoading = false
  //use to scroll
  useEffect(function() {
    if(recipe.current !== null && recipeMarkdown != '')
        recipe.current.scrollIntoView({behaviour: "smooth"})
  },[recipe])

  function handleForm(data) {
    setIngredients(prevIngredients => [...prevIngredients, data.get('ingredient')])
  }
  async function getRecipeToggle() {
    setGetRecipe(pervState => !pervState);
    isLoading = !isLoading
    const recipe = await getRecipeFromMistral(ingredients)
    isLoading = !isLoading
    setRecipeMarkdown(recipe);
  }
  
  return (
    <>
      <Header />
      <main className='main'>
        <form action={handleForm} className='form'>
          <label htmlFor="ingredient" aria-label='Enter an ingredient'></label>
          <input name="ingredient" id="ingredient" className='form-txt' type="text" placeholder='eg: Olive' />
          <button className='form-btn'>Add ingredient</button>
        </form>
        <Ingredients ingredients = {ingredients} getRecipeToggle = {getRecipeToggle} ref = {recipe}/>
        {isLoading && <p>Loading</p>}
        {getRecipe && <Recipe recipeMarkdown = {recipeMarkdown}/>}
      </main>
    </>
  )
}