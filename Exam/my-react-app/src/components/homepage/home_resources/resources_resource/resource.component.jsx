import classes from "./resource.module.css"


function Resource({ title, description }) {

    return (
        <div className = {classes.card}>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )

}


export default Resource