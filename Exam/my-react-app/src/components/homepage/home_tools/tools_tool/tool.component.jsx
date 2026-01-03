import classes from "./tool.module.css"

function Tool({ title, text, link, color, textColor}) {

    const dynamicStyle = {
        "--bg-initial": color,
        "--text-initial": textColor
    };

    return (
        <div className = {classes.card} style={ dynamicStyle }>
            <div>{title}</div>
            <div>{text}</div>
            <div className = {classes.bottom}>
                <div>{link}</div>
                <div>→</div>
            </div>
        </div>
    )

}

export default Tool