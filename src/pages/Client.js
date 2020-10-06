import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Logo from "../images/cms.svg"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
const useStyles = makeStyles(theme => {
  return {
    main: {
      width: "100%",
      [theme.breakpoints.up("md")]: {
        padding: "50px 0",
        display: "flex",
      },
    },
    text: {
      padding: "50px 10%",
      [theme.breakpoints.up("md")]: {
        padding: "0",
        paddingLeft: "10%",
      },
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "auto",
      },
    },
    logos: {
      padding: "25px 10% 50px 10%",
      [theme.breakpoints.up("md")]: {
        padding: "0",
        paddingRight: "10%",
      },
      [theme.breakpoints.up("lg")]: {
        paddingRight: "auto",
      },
    },
    singleLogo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "15px",
      marginBottom: "15px",
    },
  }
})
const Client = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.main} {...props}>
      <Grid container xs={12} md={5} className={classes.text}>
        <Typography variant="h1">
          <b>Clientes que han confiado en nosotros</b>
        </Typography>
        <Typography variant="h2">
          <small>
            Brindamos servicios informáticos integrales, entre los cuales destacan los
            siguientes:Bridamos servicios informáticos integrales, entre los cuales destacan los
            siguientes:Bridamos servicios informáticos integrales, entre los cuales destacan los
            siguientes:
          </small>
        </Typography>
      </Grid>
      <Grid container xs={12} md={7} className={classes.logos}>
        {new Array(8).fill(Logo).map(item => {
          return (
            <Grid xs={6} md={3} className={classes.singleLogo}>
              <img src={item} alt={"logo"} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Client
