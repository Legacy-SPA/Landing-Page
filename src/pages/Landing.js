import React from "react"
import NavBar from "../components/NavBar"
import MainMenu from "./MainMenu"
import Services from "./Services"

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
    </div>
  )
}

export default Landing
