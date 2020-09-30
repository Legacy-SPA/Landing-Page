import React from "react"
import NavBar from "../components/NavBar"
import MainMenu from "./MainMenu"
import Services from "./Services"
import Footer from './Footer'
import Methodology from "./Methodology"

const items = [
  'Servicios',
  'Clientes',
  'Metodología',
  'Contacto',
]
const Landing = () => {
  return (
    <div>
      <NavBar items={items}/>
      <MainMenu/>
      <Services/>
      <Methodology/>
      <Footer/>
    </div>
  )
}

export default Landing
