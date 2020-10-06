import React from "react"
import { Grid } from "@material-ui/core"
import News from "./News"
import ContactForm from "./ContactForm"

const Contact = (props) => (
  <Grid container xs={12} {...props}>
    <News />
    <ContactForm />
  </Grid>
)

export default Contact
