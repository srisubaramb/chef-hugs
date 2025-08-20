import ReactMarkdown from 'react-markdown'
export default function Recipe(props) {
    return (
        <section className="recipe">
            <h2 className="recipe-title">Suggested recipe:</h2>
            
            <ReactMarkdown>{props.recipeMarkdown}</ReactMarkdown>
        </section>
    )
}