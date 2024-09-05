import "./ButtonItem.css";

function buttonItem(props) {
    return (
        // <form action={props.targetUrl}>
            <button onClick={() =>
                console.log(props.title)} className={props.className}>{props.title}</button>
        // </form>
    )
}

export default buttonItem;