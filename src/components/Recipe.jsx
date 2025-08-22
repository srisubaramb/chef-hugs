import ReactMarkdown from 'react-markdown'
export default function Recipe(props) {
    return (
        <section className="recipe">
            <h2 className="recipe-title">{props.isLoading ? "Cooking up something tasty..." : "Bon appétit! Try this:"}</h2>
            <ReactMarkdown>{props.recipeMarkdown}</ReactMarkdown>
        </section>
    )
}