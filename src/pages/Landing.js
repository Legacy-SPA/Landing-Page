import React, { useRef } from "react"
import NavBar from "../components/NavBar"
import MainMenu from "./MainMenu"
import Services from "./Services"
import Footer from "./Footer"
import Methodology from "./Methodology"
import Client from "./Client"
import Contact from "./Contact"


const Landing = () => {
  const items = [
    { label: "Servicios", ref: useRef(null), Component: Services},
    { label: "Clientes", ref: useRef(null), Component: Client},
    { label: "Metodología", ref: useRef(null), Component: Methodology},
    { label: "Contacto", ref: useRef(null), Component: Contact},
  ]
  return (
    <div>
      <NavBar items={items} />
      <MainMenu />
      {
        items.map((item) => {
          const { Component } = item
          return <div ref={item.ref}><Component/></div>
        })
      }
      <Footer />
    </div>
  )
}

export default Landing
