import classes from "./plugin.module.css"

function Plugin({title}) {

    return (
        <div className = {classes.card}>
            <div>↗</div>
            <div>{title}</div>
        </div>
    )

}


export default Plugin