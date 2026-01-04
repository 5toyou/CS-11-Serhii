import classes from "./generator.module.css"


function Generator() {

    return (
        <div className = {classes.container}>
            <div className = {classes.header}>
                <div>Press the spacebar to generate color palettes!</div>
                <div>Save</div>
            </div>
            <div className = {classes.palette}>

            </div>

        </div>
    )

}


export default Generator