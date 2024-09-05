import "./ProductItemTile.css"

function ProductItemTile(props) {
    return (
        <>
            <article className={props.classname}>
                <span>{props.tag}</span>
                <img src={props.imageUrl} alt={props.imageAlt}/>
                <p>{props.title}</p>
                <h4>{props.price}</h4>
            </article>
        </>
    )
}

export default ProductItemTile;