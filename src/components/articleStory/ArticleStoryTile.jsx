import "./ArticleStoryTile.css"

function ArticleStoryTile (props) {
    if (props.imageUrl === "null")
    {
        return (
            <>

                <h2>{props.title}</h2>

                <p>
                    {props.paragraph}
                </p>
            </>
        )
    }

    else {
        return (
            <>
                <img src={props.imageUrl} alt={props.imageAlt}/>
            </>
        )
    }
}

export default ArticleStoryTile;