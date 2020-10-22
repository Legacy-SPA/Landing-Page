import React from "react"
import { Typography, Input, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Main from "../images/Main.svg"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => {
  return {
    main: {
      width: "100%",
      display: "flex",
      backgroundColor: theme.palette.background.paper,
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "space-around",
      [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
        paddingBottom: "50px",
      },
    },
    text: {
      color: theme.palette.primary.contrastText,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 10% 50px 10%",
      [theme.breakpoints.up("lg")]: {
        padding: "0",
        paddingLeft: "50px",
      },
      [theme.breakpoints.down("lg")]: {
        paddingTop: "50px",
      },
    },
    image: {
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.up("lg")]: {
        padding: "0",
        paddingRight: "50px",
      },
    },
    title: {
      [theme.breakpoints.down("sm")]: {
        textAlign: 'center'
      }
    },
    mTop20: {
      marginTop: 20,      
    },
    mTop15: {
      marginTop: 15,
    },
    paragraph: {
      lineHeight: 1.5,
      [theme.breakpoints.down("md")]: {
        textAlign: 'center'
      }
    },
    pTop150: {
      paddingTop: 150,
      [theme.breakpoints.down("md")]: {
        paddingTop: 0
      }
    }, 
    input: {
      backgroundColor: "white",
      margin: '10px 0px'
    },
    form: {
      marginTop: '10px',
      width: '50%', 
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: 'rgb(30, 34, 72)',
      padding: '10px 0px',
      borderRadius: '10px',
    },
  }
})

const MainMenu = (props) => {
  const {contactRef} = props
  const setText = () => {
    document.getElementById("mailText").value = document.getElementById("mainMailText").value
    document.getElementById("nameText").value = document.getElementById("mainNameText").value
    window.scrollTo(0, contactRef.current.offsetTop - 88)
  }
  const classes = useStyles()
  return (
    <Box className={`${classes.main} ${classes.pTop100}`}>
      <Box className={classes.text}>
        <Typography variant="h1" className={classes.title}>
          <b>Desarrollo de Software a medida</b>
        </Typography>
        <Typography variant="h2" className={`${classes.mTop20} ${classes.paragraph}`}>
          Te llevamos de la mano en el desarrollo de tu idea, desde la conceptualización hasta tu producto final.
        </Typography>
        <Typography variant="h2" className={`${classes.mTop20} ${classes.paragraph}`}>
          En el camino le agregaremos el máximo valor a tu idea basados en nuestra experiencia, te facilitaremos múltiples soluciones y un plan para llevarlas a buen puerto.
        </Typography>
        <div className={classes.form}>
            <label className={classes.labelInput}>
              <Typography className={classes.label} variant="h6">
                Cotiza tu proyecto
              </Typography>
            </label>
            <Input className={classes.input} type="email" name="email" id={'mainMailText'} placeholder={'  ¿Cuál es tu email?'} />
            <Input className={classes.input} type="text" name="nombre" id={'mainNameText'} placeholder={'  ¿Cuál es tu nombre?'} />
            <br/>
            <Button variant="contained" color="secondary" type='submit' style={{marginTop: '10px'}} onClick={setText}>
              <Typography className={classes.buttonText}>Enviar</Typography>
            </Button>
        </div>
      </Box>
      <Box className={classes.image} display={{ xs: "none", md: "block" }} style={{paddingBottom: 50}}>
        <img src={Main} alt={"sistemas"} />
      </Box>
    </Box>
  )
}

export default MainMenu
