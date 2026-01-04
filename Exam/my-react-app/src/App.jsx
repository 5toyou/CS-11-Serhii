import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/header/header.component.jsx"
import Homepage from "./components/homepage/homepage.jsx"
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
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App
