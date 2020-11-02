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
    { label: "Servicios", ref: useRef('services'), Component: Services},
    { label: "Clientes", ref: useRef('client'), Component: Client},
    { label: "Metodología", ref: useRef('methodology'), Component: Methodology},
    { label: "Contacto", ref: useRef('contact'), Component: Contact},
  ]
  return (
    <div>
      <NavBar items={items} />
      <MainMenu contactRef={items[3].ref} />
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
