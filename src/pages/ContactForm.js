import React, {useState} from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Input, Grid, Button } from "@material-ui/core"
import emailjs from 'emailjs-com'

const useStyles = makeStyles(theme => {
  return {
    container: {
      margin: "36px 0px",
      [theme.breakpoints.up("xs")]: {
        padding: "5px 30px",
      },
      [theme.breakpoints.up("md")]: {
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
      fontFamily: "'Spartan', sans-serif"
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
    alert: {
      margin: '20px 0px',
      backgroundColor: 'rgb(112, 78, 246)',
      textAlign: 'center',
      color: 'white',
      borderRadius: '0px',
      opacity: '0.8'
    },
  }
})


const ContactForm = (props) => {
  const classes = useStyles()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const resetInput = () => {
    document.getElementById('mailText').value = null
    document.getElementById('nameText').value = null
    document.getElementById('companyText').value = null
    document.getElementById('projectText').value = null
  }

  const onSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_m2xhfj5', 'template_enndpah', e.target, 'user_FSensVSZLEhow6fx4g104')
    .then(() => {
      setError(false)
      setSuccess(true)
      resetInput()
      setTimeout(function(){ 
        setSuccess(false)
       }, 5000)
    }, (err) => {
      setSuccess(false)
      setError(true)
      setTimeout(function(){ 
        setError(false)
       }, 5000)
    })	 
  }
  
  return (
    <Grid className={classes.container} item xs={12} sm={6}>
      <Typography className={classes.text} variant="h1">
        <b>Cuentanos tu idea o problema</b>
      </Typography>
      <form onSubmit={onSubmit} name="contact" method="POST" data-netlify="true" enctype="application/x-www-form-urlencoded">
        <input type="hidden" name="form-name" value="contact" />
        <div className={classes.labelContent}>
          <label className={classes.labelInput} htmlFor={'reply_to'}>
            <Typography className={classes.label} variant="h6">
              Email
            </Typography>
          </label>
          <Input required className={classes.Input} placeholder={"info@example.com"} id={'mailText'} type="email" name="reply_to"/>
          <label className={classes.labelInput} htmlFor={'nombre'}>
            <Typography className={classes.label} variant="h6" style={{marginTop: 10}}>
              Nombre
            </Typography>
          </label>
          <Input required className={classes.Input} placeholder={"Tu nombre"} id={'nameText'} type="text" name="nombre"/>
          <label className={classes.labelInput} htmlFor={'empresa'}>
            <Typography className={classes.label} variant="h6" style={{marginTop: 10}}>
              Empresa
            </Typography>
          </label>
          <Input required className={classes.Input} type="text" id={'companyText'} name="empresa"/>
          <label className={classes.labelInput} htmlFor={'proyecto'}>
            <Typography className={classes.label} variant="h6" style={{marginTop: 10}}>
              Proyecto
            </Typography>
          </label>
          <textarea required className={classes.Input} id={'projectText'} name="proyecto"></textarea>
        </div>
        {
          success ? 
          <Typography variant="h6" className={`${classes.alert}`}>¡Enviado con Exito!</Typography> : 
          error ? <Typography variant="h6" className={classes.alert}>¡Error al enviar!</Typography> : null
        }
        <Button className={classes.button} variant="contained" color="secondary" type="submit">
          <Typography className={classes.buttonText}>Enviar</Typography>
        </Button>
      </form>
    </Grid>
  )
}

export default ContactForm
