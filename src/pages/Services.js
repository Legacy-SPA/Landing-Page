import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
import cms from "../images/cms.svg"
import layers from "../images/layers.svg"
import project from "../images/project.svg"
import cloud from "../images/clients/Cloud.svg"
import proyecto from "../images/clients/Proyecto.svg"
import appDevelopment from "../images/appDevelopment.svg"
import useMediaQuery from "@material-ui/core/useMediaQuery"

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
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center'
    }
  },
  lineHigh: {
    lineHeight: 1.5,
  },
  lineMedium: {
    lineHeight: 1.2,
  },
  serviceDesc: {
    color: theme.palette.primary.main,
    marginTop: 15,
    paddingRight: 10,
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
    margin: "15px 0",
  },
  paragraph: {
    paddingRight: 20
  }
}))

const Services = (props) => {
  const theme = useTheme();
  const classes = useStyles()
  const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container {...props}>
      <Grid item xs={12} className={classes.title}>
        <Typography className={`${classes.text} ${classes.lineMedium}`} variant="h1">
          <b>Nuestros Servicios</b>
        </Typography>
        <Typography className={`${classes.text} ${classes.lineHigh}`} variant="h6" style={{marginTop: 20}}>
          Brindamos servicios informáticos integrales, dando acceso a la próxima generación de aplicaciones Web, Mobile y Cloud:{" "}
        </Typography>
      </Grid>
      <Grid container xs={12} className={classes.contentServices} spacing={isXS ? 0 : isMD ? 3 : 5}>
        <Grid item xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={project} alt={"Proyecto"} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Auditoria e Intervencion de Software</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
            Analizamos la calidad de tu software y de tu área de desarrollo. Evaluamos procesos y metodologías para asegurar un producto de estándar mundial.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Software"} src={cms} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Software a Medida</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
          Escuchamos tus ideas y creamos un software a medida diseñado especificamente para tu negocio. También te ayudamos a desarrollar nuevas funcionalidades a tu software ya existente.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Apps"} src={appDevelopment} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Desarrollo de aplicaciones móviles</b> 
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
          Te ayudamos a llevar tu idea o negocio a una aplicación amigable y fácil de usar.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Integración"} src={layers} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Servicio de Equipo de Desarrollo Dedicado.</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
            Te apoyamos con una célula ágil de desarrollo que te asegurará calidad y transparencia. También te entregamos la facilidad de acelerar proyectos sin la necesidad de contratar gente, nosotros ya la tenemos seleccionada para ti.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={proyecto} alt={"Software"}  style={{width: 52, height: 49}} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Automatizacion Robotica de Procesos (RPA)</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
            Te ayudamos a automatizar procesos mediante robots tecnológicos (RPA). Disminuye costos y errores humanos. Acelera procesos que hoy son fácilmente automatizable. Potencia tu empresa con RPA.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={cloud} alt={"Apps"} style={{width: 52, height: 49}}/>
          <Typography className={classes.serviceDesc} variant="h2">
            <b>DevOps Cloud</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
          Migra la arquitectura de tus aplicaciones a una solución robusta, escalable, económica y más segura.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={cloud} alt={"Apps"} style={{width: 52, height: 49}}/>
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Blockchain</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
          Somos expertos en desarrollos en blockchain y tokenización de activos. 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={cloud} alt={"Apps"} style={{width: 52, height: 49}}/>
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Inteligencia Artificial</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
            Aprovecha la Inteligencia Artificial para optimizar tus procesos internos y externos. # ponerle un poco más
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
