import { ThemeProvider } from "styled-components"
import { theme } from "./utils/Theme"
import { Container, MainBody, FadeImage } from "./styles/Global.styled"

//import components
import Showcase from "./components/Showcase"
import MySkills from "./components/MySkills"
import MyProjects from "./components/MyProjects"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import TopFadeImage from './assets/top.png'
import LeftFadeImage from './assets/left.png'
import BottomFadeImage from './assets/bottom.png'
import RightFadeImage from './assets/right.png'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />

        <Container>
          <Showcase />
          <MySkills />
          <MyProjects />
          <Footer />
        </Container>
        <FadeImage src={TopFadeImage} top="0" />
        <FadeImage src={LeftFadeImage} top="30vh" />
      </MainBody>
    </ThemeProvider>
  )
}

export default App
