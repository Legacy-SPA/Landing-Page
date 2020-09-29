import React from "react"
import NavBar from "../components/NavBar"

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
    </div>
  )
}

export default Landing
