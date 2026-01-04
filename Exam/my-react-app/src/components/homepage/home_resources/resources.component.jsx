import classes from "./resources.module.css"
import Resource from "./resources_resource/resource.component.jsx"

function Resources() {

    return (
        <div className = {classes.style}>
            <div>More useful resources</div>
            <div className = {classes.grider}>
                <Resource title="Color Names" description="Browse and search through a comprehensive list of color names." />
                <Resource title="Free Fonts" description="Discover and collect beautiful free fonts for your designs from our curated list of typography resources." />
                <Resource title="Collage Maker" description="Create stylish collages by combining your photos and palettes in seconds." />
                <Resource title="Browse Gradients" description="Explore beautiful gradients for your projects or create your own gradient with the Gradient Maker." />
                <Resource title="Gradient Palette" description="Create a gradient palette between two colors and export it in various formats." />
                <Resource title="Image Converter" description="Convert images to different formats with ease." />
            </div>
        </div>
    )

}

export default Resources