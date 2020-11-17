import React from "react"
import { Typography, Button } from "@material-ui/core"
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
      backgroundColor: "#E9F3FE",
      margin: '10px 0px',
      width: '80%',
      alignSelf: 'center'
    },
    form: {
      marginTop: '10px',
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: 'rgb(30, 34, 72)',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      [theme.breakpoints.up("xl")]: {
        width: '25%',
        padding: '10px 20px',
      },
      [theme.breakpoints.down("lg")]: {
        width: '40%',
        padding: '10px 35px',
      },
      [theme.breakpoints.down("sm")]: {
        width: '30%',
        padding: '10px 50px',
      },
      [theme.breakpoints.down("xs")]: {
        width: '80%',
        padding: '10px 30px',
      },
    },
    button: {
      marginTop: '0px',
      width: '80%',
      alignSelf: 'center'
    }
  }
})
const scrollToRef = (ref) => window.scrollIntoView({ behavior: 'smooth', top: ref.current.offsetTop - 88 })
const MainMenu = (props) => {
  const {contactRef} = props
  const setText = () => {
    document.getElementById('mailText').focus()
    scrollToRef(contactRef)
  }
  const classes = useStyles()
  return (
    <Box className={`${classes.main} ${classes.pTop100}`}>
      <Box className={classes.text}>
        <Typography variant="h1" className={classes.title}>
          <b>Software Que Empoderan Negocios</b>
        </Typography>
        <Typography variant="h2" className={`${classes.mTop20} ${classes.paragraph}`}>
          Ayudamos a nuestros clientes a crear y mantener la Innovación Digital dentro de sus empresas
        </Typography>
        <Typography variant="h2" className={`${classes.mTop20} ${classes.paragraph}`}>
         Nos efocamos en el desarrollo ágil de aplicaciones Mobile, Web y Cloud.
        </Typography>
        <div className={classes.form}>
            <Button className={classes.button} variant="contained" color="secondary" type='submit' onClick={setText}>
              <Typography className={classes.buttonText}>Cuentanos tu idea</Typography>
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
