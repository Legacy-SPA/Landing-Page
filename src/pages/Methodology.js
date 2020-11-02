import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Group from "../images/Group.svg"

const useStyles = makeStyles(theme => {
  return {
    main: {
      width: "80%",
      padding: "5% 10%",
      margin: "10px 0px",
      display: "flex",
      backgroundColor: theme.palette.background.paper,
    },
    text: {
      padding: "20px 20px",
      color: theme.palette.primary.contrastText,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        textAlign: 'center'
      }
    },
    image: {
      padding: "0px",
      paddingRight: "50px",
      color: theme.palette.primary.contrastText,
    },
  }
})

const Methodology = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.main} {...props}>
      <Box className={classes.image} display={{ xs: "none", lg: "block" }}>
        <img alt={"Metodologias"} src={Group} />
      </Box>
      <Box className={classes.text}>
        <Typography variant="h1">
          <b>Nuestra metodología</b>
        </Typography>
        <Typography variant="h2" style={{marginTop: 50}}>
          <small>
            Es entender tu negocio para proponerte las mejores soluciones que se adapten a los cambios propios de tu modelo, comenzamos con una completa consultoría y asesoría, gestionamos tu proyecto para el cumplimiento de los plazos, organizamos tu infraestructura, orquestamos todos tus procesos y equipos de desarrollo y los que mas nos gusta aseguramos la seguridad y calidad de tus productos, hasta entregarte las llaves de tu auto nuevo.
          </small>
        </Typography>
      </Box>
    </div>
  )
}

export default Methodology
