import About from "./Component/About/About"
import Home from "./Component/Home/Home"
import NavBarPage from "./Component/NavBar/NavBarPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Skill from "./Component/Skill/Skill"
import Contact from "./Component/Contact/Contact"
import Work from "./Component/work/Work"
function App() {

  return (
    <>
      <Router>
        <NavBarPage />
        <Routes>
          {/* <Home /> */}
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/skill" element={<Skill/>}></Route>
          <Route exact path="/portfolio" element={<Work/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
