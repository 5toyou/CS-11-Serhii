import classes from "./resources.module.css"
import Resource from "./resources_resource/resource.component.jsx"

function Resources() {

    return (
        <div className = {classes.style}>
            <div>More useful resources</div>
            <div className = {classes.grider}>
                <Resource></Resource>
                <Resource></Resource>
                <Resource></Resource>
                <Resource></Resource>
                <Resource></Resource>
                <Resource></Resource>
            </div>
        </div>
    )

}

export default Resources