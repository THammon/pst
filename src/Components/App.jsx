import "../App.css";
import { Routes, Route} from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import CardCont from "./CardCont";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import About from "./About";
import { useEffect, useState } from "react";


export default function App() {
    const [data, setData] = useState([{}])

    useEffect ( () => {
        fetch("/members").then(
          res => res.json()
        ).then(
          data => {
            setData(data)
            console.log(data)
          }
        )
      }, [])

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
            {(typeof data.members === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                data.members.map((member, i) => (
                <p key={i}>{member}</p>
                ))
            )}
        </div>
    )
}
