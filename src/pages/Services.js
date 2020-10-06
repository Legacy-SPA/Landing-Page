import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
import cms from "../images/cms.svg"
import layers from "../images/layers.svg"
import project from "../images/project.svg"
import appDevelopment from "../images/appDevelopment.svg"

const useStyles = makeStyles(theme => ({
  title: {
    padding: "50px 10%",
    [theme.breakpoints.up("lg")]: {
      padding: "auto",
      textAlign: "left",
    },
  },
  text: {
    color: theme.palette.primary.main,
  },
  serviceDesc: {
    color: theme.palette.primary.main,
  },
  contentServices: {
    padding: "0 10% 50px 10%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "auto",
      paddingTop: "0",
      paddingBottom: "50px",
    },
    width: "100%",
  },
  itemService: {
    marginTop: "15px",
    marginBottom: "15px",
  },
}))

const Services = (props) => {
  const classes = useStyles()
  return (
    <Grid container {...props}>
      <Grid item xs={12} className={classes.title}>
        <Typography className={classes.text} variant="h1">
          <b>Nuestros Servicios</b>
        </Typography>
        <Typography className={classes.text} variant="h6">
          Brindamos servicios informáticos integrales, entre los cuales destacan los siguientes:{" "}
        </Typography>
      </Grid>
      <Grid container item xs={12} className={classes.contentServices}>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Software"} src={cms} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Desarrollo de Software a medida</b>
          </Typography>
          <Typography className={classes.serviceDesc} variant="h6">
            consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Apps"} src={appDevelopment} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Desarrollo de aplicaciones móviles</b>
          </Typography>
          <Typography className={classes.serviceDesc} variant="h6">
            consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Integración"} src={layers} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Integración de plataformas</b>
          </Typography>
          <Typography className={classes.serviceDesc} variant="h6">
            consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={project} alt={"Proyecto"} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Consultoría y asesoría</b>
          </Typography>
          <Typography className={classes.serviceDesc} variant="h6">
            consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={cms} alt={"Software"} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Desarrollo de Software a medida</b>
          </Typography>
          <Typography className={classes.serviceDesc} variant="h6">
            consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={appDevelopment} alt={"Apps"} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Desarrollo de aplicaciones móviles</b>
          </Typography>
          <Typography className={classes.serviceDesc} variant="h6">
            consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
