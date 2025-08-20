import { useState } from 'react'
import Header from './components/Header'
import Ingredients  from './components/Ingredients'
import Recipe from './components/Recipe'
import { getRecipeFromMistral } from './fetchFromAi'
export default function App() {
  const [ingredients, setIngredients] = useState([])
  const [getRecipe, setGetRecipe] = useState(false);
  const [recipeMarkdown, setRecipeMarkdown] = useState('');
  function handleForm(data) {
    setIngredients(prevIngredients => [...prevIngredients, data.get('ingredient')])
  }
  async function getRecipeToggle() {
    setGetRecipe(pervState => !pervState);
    const recipe = await getRecipeFromMistral(ingredients)
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
        <Ingredients ingredients = {ingredients} getRecipeToggle = {getRecipeToggle}/>
        {getRecipe && <Recipe recipeMarkdown = {recipeMarkdown}/>}
      </main>
    </>
  )
}