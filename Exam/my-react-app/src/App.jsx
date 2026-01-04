import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/header/header.component.jsx"
import Homepage from "./components/homepage/homepage.jsx"
import Generator from "./components/generatorpage/generator.component.jsx"
import Cotd from "./components/cotdpage/cotd.component.jsx"
import Login from "./components/loginpage/login.component.jsx"
import Register from "./components/registerpage/register.component.jsx"
import Footer from "./components/footer/footer.component.jsx"

function App() {
  return(
    <BrowserRouter>


      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Homepage />
            <Footer />
          </>
        } />
        <Route path="/generator" element={
          <>
            <Header />
            <Generator />
          </>
        } />
        <Route path="/colors/:colorHex" element={
          <>
            <Header />
            <Cotd />
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App
