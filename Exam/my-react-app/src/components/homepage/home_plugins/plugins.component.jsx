import classes from "./plugins.module.css"
import Plugin from "./plugins_plugin/plugin.component"

function Plugins() {

    return (
        <div className = {classes.style}>
            <div>Plugins and Apps</div>
            <div className = {classes.grider}>
                <Plugin title="iOS App" />
                <Plugin title="Figma Plugin" />
                <Plugin title="Adobe Extension" />
            </div>
        </div>
    )

}


export default Plugins