import React, {useState} from "react"
import { Input, Typography, Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import emailjs from 'emailjs-com'

const useStyles = makeStyles(theme => {
  return {
    container: {
      margin: "36px 0px",
      [theme.breakpoints.up("xs")]: {
        padding: "5px 30px",
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        padding: "5px 128px",
        textAlign: "left",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "5px 90px",
        textAlign: "left",
      },
    },
    text: {
      padding: "10px 0px",
      fontSize: "14px",
      color: "#181B32",
    },
    input: {
      width: "80%",
      backgroundColor: "white",
    },
    buttonText: {
      fontSize: "11.2px",
    },
    alert: {
      margin: '20px 0px',
      backgroundColor: 'rgb(232, 240, 254)',
      textAlign: 'center',
    },
  }
})

const News = () => {
  const classes = useStyles()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const resetInput = () => {
    document.getElementById('newMailText').value = null
  }
  const onSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_m2xhfj5', 'template_89fa41k', e.target,'user_FSensVSZLEhow6fx4g104')
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
    <Grid item xs={12} sm={6} className={classes.container}>
      <Typography variant="h1">
        <b>NewsLetter</b>
      </Typography>
      <Typography className={classes.text} variant="h6">
        Déjanos tu email para enviarte las mejores noticias sobre las TIC, que seguramente te interesaran para que tu área de TI este siempre al día
      </Typography>
      <form onSubmit={onSubmit} style={{ display: "flex" }} name="newsletter" method="POST" data-netlify="true" enctype="application/x-www-form-urlencoded" >
        <input type="hidden" name="form-name" value="newsletter" />
        <Input className={classes.input} id={'newMailText'} type="email" name="email" />
        <Button variant="contained" color="secondary" type='submit'>
          <Typography className={classes.buttonText}>Suscribirme</Typography>
        </Button>
      </form>
      {
        success ? 
        <Typography variant="h6" className={classes.alert}>¡Enviado con Exito!</Typography> : 
        error ? <Typography variant="h6" className={classes.alert}>¡Error al enviar!</Typography> : null
      }
    </Grid>
  )
}

export default News
