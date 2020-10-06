import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Input, Grid, Button } from "@material-ui/core"

const useStyles = makeStyles(theme => {
  return {
    container: {
      margin: "36px 0px",
      [theme.breakpoints.up("xs")]: {
        padding: "5px 30px",
      },
      [theme.breakpoints.up("sm")]: {
        padding: "5px 128px",
      },
    },
    text: {
      color: theme.palette.primary.main,
    },
    label: {
      fontSize: "12px",
      color: "#37465A",
    },
    labelInput: {
      width: "100%",
      margin: "5px 0px",
    },
    checkInput: {
      width: "100%",
      display: "flex",
      paddingTop: "10px",
    },
    Input: {
      width: "100%",
      backgroundColor: "#E9F3FE",
    },
    labelContent: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      margin: "20px 0px",
    },
    buttonText: {
      fontSize: "11.2px",
    },
  }
})
const ContactForm = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container} item xs={12} sm={6}>
      <Typography className={classes.text} variant="h1">
        <b>Formulario de Contacto</b>
      </Typography>
      <div className={classes.labelContent}>
        <label className={classes.labelInput} htmlFor={'email'}>
          <Typography className={classes.label} variant="h6">
            Email
          </Typography>
        </label>
        <Input className={classes.Input} placeholder={"info@example.com"} type="text" />
        <label className={classes.labelInput} htmlFor={'nombre'}>
          <Typography className={classes.label} variant="h6">
            Nombre
          </Typography>
        </label>
        <Input className={classes.Input} placeholder={"Tu nombre"} type="text" />
        <label className={classes.labelInput} htmlFor={'empresa'}>
          <Typography className={classes.label} variant="h6">
            Empresa
          </Typography>
        </label>
        <Input className={classes.Input} type="text" id={'empresa'} />
        <label className={classes.checkInput}>
          <input type="checkbox" />
          <Typography variant="h6" className={classes.label}>
            Acepto la Política de provacidad y los Terminos y condiciones.
          </Typography>
        </label>
      </div>
      <Button className={classes.button} variant="contained" color="secondary">
        <Typography className={classes.buttonText}>Enviar</Typography>
      </Button>
    </Grid>
  )
}

export default ContactForm
