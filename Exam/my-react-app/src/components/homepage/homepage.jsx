import Top from "./components/homepage/home_top/top.component.jsx"
import Section from './components/homepage/home_section/section.component.jsx';
import Subtext_cotd from "./components/homepage/home_subtext_cotd/subtext_cotd.component.jsx"
import Tools from "./components/homepage/home_tools/tools.component.jsx"

function Homepage() {
    return(
        <>
            <Top></Top>
            <Section></Section>
            <Subtext_cotd></Subtext_cotd>
            <Tools></Tools>
        </> 
    )
}

export default Homepage