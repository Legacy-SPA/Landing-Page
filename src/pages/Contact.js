import React from "react"
import { Grid } from "@material-ui/core"
import ContactForm from "./ContactForm"
import Box from "@material-ui/core/Box"

const Contact = (props) => (
  <Grid container xs={12} {...props}>
    <Box flexGrow={1} display="flex" justifyContent="center">
      <ContactForm />
    </Box>
  </Grid>
)

export default Contact
