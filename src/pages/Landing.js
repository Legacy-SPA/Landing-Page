import React from "react"
import NavBar from "../components/NavBar"
import MainMenu from "./MainMenu"
import Services from "./Services"
import Footer from './Footer'
import Methodology from "./Methodology"
import Client from "./Client"
import ContactForm from './ContactForm'
import News from './News'
import { Grid } from "@material-ui/core"

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
      <Grid container xs={12}>
        <News/>
        <ContactForm/>
      </Grid>
      <Footer/>
    </div>
  )
}

export default Landing
