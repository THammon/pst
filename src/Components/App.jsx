import "../App.css";
import { Routes, Route} from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import CardCont from "./CardCont";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import About from "./About";


export default function App() {
    return(
        <div className="app">
            <Nav/>
            <Routes>
                <Route exact path='/' element={<LandingPage/>}/>
                <Route path='/CardCont' element={<CardCont/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
            <Footer/>

        </div>
    )
}
