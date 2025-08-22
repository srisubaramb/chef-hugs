export default function Ingredients(props)  {
    const listOfIngredients = props.ingredients.map((ingredient,index) => (
        <li key = {index} className="ingredients-list-item">{ingredient}</li>
    ))
    return(
        <section className="ingredients">
            <h2 className="ingredients-title">Ingredients on hand:</h2>
            <ul className="ingredients-list">
                {listOfIngredients}
            </ul>
            {props.ingredients.length > 3 &&
                <div className="get-recipe" ref={props.recipe}>
                    <div className="get-recipe-txt">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button className="get-recipe-btn" onClick={() => props.getRecipeToggle()}>Get a recipe</button>
                </div> 
            }
        </section>
    )
}