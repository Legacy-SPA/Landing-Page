import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Input, Grid, Button, TextareaAutosize } from "@material-ui/core"

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
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="email" name="correo" />
        <input type="text" name="nombre" />
        <input type="text" name="empresa" />
        <textarea name="proyecto"></textarea>
      </form>
      <Typography className={classes.text} variant="h1">
        <b>Cuentanos tu idea o problema</b>
      </Typography>
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div className={classes.labelContent}>
        <label className={classes.labelInput} htmlFor={'email'}>
          <Typography className={classes.label} variant="h6">
            Email
          </Typography>
        </label>
        <Input className={classes.Input} placeholder={"info@example.com"} type="text" name="correo"/>
        <label className={classes.labelInput} htmlFor={'nombre'}>
          <Typography className={classes.label} variant="h6" style={{marginTop: 10}}>
            Nombre
          </Typography>
        </label>
        <Input className={classes.Input} placeholder={"Tu nombre"} type="text" name="nombre"/>
        <label className={classes.labelInput} htmlFor={'empresa'}>
          <Typography className={classes.label} variant="h6" style={{marginTop: 10}}>
            Empresa
          </Typography>
        </label>
        <Input className={classes.Input} type="text" id={'empresa'} name="empresa"/>
        <label className={classes.labelInput} htmlFor={'proyecto'}>
          <Typography className={classes.label} variant="h6" style={{marginTop: 10}}>
            Proyecto
          </Typography>
        </label>
        <textarea className={classes.Input} type="text" rows="4" cols="50" name="proyecto"></textarea>
        </div>
        <Button className={classes.button} variant="contained" color="secondary" type='submit'>
          <Typography className={classes.buttonText}>Enviar</Typography>
        </Button>
      </form>
    </Grid>
  )
}

export default ContactForm
