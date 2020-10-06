import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Logo from "../images/cms.svg"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => {
  return ({
      main: {
        width: '100%',
        padding: '5% 10%',
      },
      logos: {
        padding: '0% 10%',
      }
    }
  )}
)
const Client = () => {
  const classes = useStyles()
  return (
  <Grid container xs={12} md={12} className={classes.main}>
    <Grid container xs={12} md={4}>
      <Typography variant='h1'><b>Clientes que han confiado en nosotros</b></Typography>
      <Typography variant='h2'>
        <small>
          Bridamos servicios informáticos integrales, entre los cuales destacan los siguientes:Bridamos servicios informáticos integrales, entre los cuales destacan los siguientes:Bridamos servicios informáticos integrales, entre los cuales destacan los siguientes:
        </small>
      </Typography>
    </Grid>
    <Grid container xs={12} md={8} className={classes.logos} >
      <Grid container xs={12} md={12} >
        <Grid xs={12} md={4}>
          <img alt={''} src={Logo} size={30}/>
        </Grid>
        <Grid xs={12} md={4}>
          <img alt={''} src={Logo}/>
        </Grid>
        <Grid xs={12} md={4}>
          <img alt={''} src={Logo}/>
        </Grid>
      </Grid>
      <Grid container xs={12} md={12} >
        <Grid xs={12} md={4}>
          <img alt={''} src={Logo}/>
        </Grid>
        <Grid xs={12} md={4}>
          <img alt={''} src={Logo}/>
        </Grid>
        <Grid xs={12} md={4}>
          <img alt={''} src={Logo}/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)}

export default Client
