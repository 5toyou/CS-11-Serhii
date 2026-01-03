import classes from "./tools.module.css"
import Tool from "./tools_tool/tool.component"

function Tools() {

    const cardData = 
    [
        { title: "Palette Generator", text: "Create beautiful color schemes...", link: "START THE GENERATOR", color: "#D1F9FF", textColor: "#007B8C" },
        { title: "Explore Palettes", text: "Get inspired by thousands...", link: "EXPLORE 10M+ PALETTES", color: "#DDEBFF", textColor: "#2D5BFF" },
        { title: "Image Picker", text: "Extract beautiful colors...", link: "LAUNCH THE IMAGE PICKER", color: "#F0E9FF", textColor: "#8A3FFC" },
        { title: "Contrast Checker", text: "Calculate the contrast ratio...", link: "TRY THE CONTRAST CHECKER", color: "#FCE7F3", textColor: "#DB2777" },
        { title: "Palette Visualizer", text: "Preview your colors on real designs...", link: "OPEN THE VISUALIZER", color: "#FFE4E1", textColor: "#E11D48" },
        { title: "Color Picker", text: "Get useful color information...", link: "LAUNCH THE COLOR PICKER", color: "#FFEDD5", textColor: "#D97706" },
        { title: "Tailwind Colors", text: "Preview Tailwind CSS colors on real designs to see how they look in context before using them in your projects.", link: "Get your Tailwind colors", color: "#fffee1ff", textColor: "#e1bd1dff" },
        { title: "Color Bot", text: "Chat with our AI-powered Color Bot, ask questions and get color suggestions for your projects.", link: "Chat with Color Bot", color: "#e1ffe2ff", textColor: "#20e11dff" }
    ];

    return (
        <div className = {classes.style}>
            <div>our tools, loved by millions</div>
            <div className = {classes.grider}>
                {cardData.map((data, index) => (
                    <Tool 
                        key={index}
                        title={data.title}
                        text={data.text}
                        link={data.link}
                        color={data.color}
                        textColor={data.textColor}
                    />
                ))}
            </div>
        </div>
    )

}

export default Tools