import React from "react"
import NavBar from "../components/NavBar"
import MainMenu from "./MainMenu"
import Services from "./Services"
import Footer from './Footer'
import Methodology from "./Methodology"
import Client from "./Client"

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
      <Client/>
      <Footer/>
    </div>
  )
}

export default Landing
