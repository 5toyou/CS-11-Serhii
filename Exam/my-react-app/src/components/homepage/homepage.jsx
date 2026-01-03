import Top from "./home_top/top.component.jsx"
import Section from './home_section/section.component.jsx'
import Subtext_cotd from "./home_subtext_cotd/subtext_cotd.component.jsx"
import Tools from "./home_tools/tools.component.jsx"
import Colorful from "./home_colorful/colorful.component.jsx"
import Resources from "./home_resources/resources.component.jsx"


function Homepage() {
    return(
        <>
            <Top></Top>
            <Section></Section>
            <Subtext_cotd></Subtext_cotd>
            <Tools></Tools>
            <Resources></Resources>
            <Colorful></Colorful>
        </> 
    )
}

export default Homepage