import { useState, useRef, useEffect} from 'react'
import Header from './components/Header'
import Ingredients  from './components/Ingredients'
import Recipe from './components/Recipe'
import { getRecipeFromMistral } from './fetchFromAi'
export default function App() {
  const [ingredients, setIngredients] = useState([])
  const[isLoading, setIsLoading] = useState(false)
  const [getRecipe, setGetRecipe] = useState(false);
  const recipe = useRef(null)
  const [recipeMarkdown, setRecipeMarkdown] = useState('');

  //use to scroll
  useEffect(function() {
    if(recipe.current !== null && recipeMarkdown !== '')
        recipe.current.scrollIntoView({behavior: "smooth"})
  },[recipeMarkdown])

  function handleForm(data) {
    setIngredients(prevIngredients => [...prevIngredients, data.get('ingredient')])
  }
  async function getRecipeToggle() {
    setGetRecipe(pervState => !pervState);
    setIsLoading(true)
    const recipe = await getRecipeFromMistral(ingredients)
    setIsLoading(false)
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
        {getRecipe && <Recipe recipeMarkdown = {recipeMarkdown} isLoading = {isLoading}/>}
      </main>
    </>
  )
}