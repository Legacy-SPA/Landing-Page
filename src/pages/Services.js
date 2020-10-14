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
    marginTop: 15
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
  paragraph: {
    paddingRight: 20
  }
}))

const Services = (props) => {
  const classes = useStyles()
  return (
    <Grid container {...props}>
      <Grid item xs={12} className={classes.title}>
        <Typography className={`${classes.text} ${classes.lineMedium}`} variant="h1">
          <b>Nuestros Servicios</b>
        </Typography>
        <Typography className={`${classes.text} ${classes.lineHigh}`} variant="h6" style={{marginTop: 20}}>
          Brindamos servicios informáticos integrales, para suministrar la próxima generación de app en la web, dispositivos móviles y de escritorio:{" "}
        </Typography>
      </Grid>
      <Grid container item xs={12} className={classes.contentServices}>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={project} alt={"Proyecto"} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Consultoría y asesoría</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
            Llevamos tu idea de negocio, o tu negocio al siguiente nivel, para ello te prestamos la asesoría en base a consultorías con un equipo de profesionales como mas de 20 años de experiencia.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Software"} src={cms} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Desarrollo de Software a medida</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
          Bien sea que quieras modificar tu sistema o quieras hacer uno, te llevamos de la mano, aportando valor a tu negocio y desarrollando el software que se adapte a tus necesidades. Sin perder calidad ni rendimiento.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Apps"} src={appDevelopment} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Desarrollo de aplicaciones móviles</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
          Contamos con el equipo ideal para conceptualizar tu idea o transformar tu negocio en una app móvil que permitan a tus usuario interactuar contigo desde el mundo de los smart phones. Te brindamos soluciones escalables y transformables en el tiempo.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img alt={"Integración"} src={layers} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Integración de plataformas</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
          Quieres implementar una pasarela de pago ó quieres implementar un servicio de terceros como una chat o un servicio helpdesk y no sabes como integrarlo a tu aplicación actual, confía en nosotros que haremos tu idea de integración posible.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={cms} alt={"Software"} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Gestión de Proyectos</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
            Te apoyamos en el análisis situaciones de tus equipos de desarrollo, analizamos tus procesos y te apoyamos en la construcción de equipo mas solido y eficiente, Coaching, Devops, Planificación, Cálculos de Esfuerzos, entre otras técnicas que harán tu área TI, una equipo TI de clase mundial.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} className={classes.itemService}>
          <img src={appDevelopment} alt={"Apps"} />
          <Typography className={classes.serviceDesc} variant="h2">
            <b>Arquitectura en la Nube</b>
          </Typography>
          <Typography className={`${classes.serviceDesc} ${classes.lineHigh} ${classes.paragraph}`} variant="h6">
          Quieres migrar la arquitectura de tus aplicaciones a una arquitectura robusta, escalable y mas económica, tenemos la solución para ti, con nuestra experiencia tendrás en tus aplicaciones el mejor rendimiento al menor costo.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
