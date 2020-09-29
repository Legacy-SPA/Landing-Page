import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import project from '../images/project.svg'
import cms from '../images/cms.svg'
import layers from '../images/layers.svg'
import appDevelopment from '../images/appDevelopment.svg'

const useStyles = makeStyles((theme) => ({
    title: {
      width: '30%',
      paddingLeft: '10%',
      paddingTop: '50px',
      paddingBottom: '25px',
    },
    text: {
      color: theme.palette.primary.main
    },
    contentServices: {
      width: '100%',
    },
    rowServices: {
      width: '100%',
      display: 'flex',
      paddingLeft: '10%',
      marginTop: '50px',
      marginBottom: '50px',
    },
    service: {
      width: '30%',
      padding: 0,
      marginRight: '15%',
    }
 })
)

const Services = () => {
  const classes = useStyles()
  return(
    <div>
    <div className={classes.title}>
      <Typography className={classes.text} variant='h1'><b>Nuestros Servicios</b></Typography>
      <Typography className={classes.text} variant='h6'>Brindamos servicios informáticos integrales, entre los cuales destacan los siguientes: </Typography>
    </div>
    <div className={classes.contentServices}>
      <div className={classes.rowServices}>
        <div className={classes.service}>
          <img src={cms}/>
          <Typography className={classes.text} variant='h2'><b>Desarrollo de Software a medida</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
        <div className={classes.service}>
          <img src={appDevelopment}/>
          <Typography className={classes.text} variant='h2'><b>Desarrollo de aplicaciones móviles</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
        <div className={classes.service}>
          <img src={layers}/>
          <Typography className={classes.text} variant='h2'><b>Integración de plataformas</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
      </div>
      <div className={classes.rowServices}>
        <div className={classes.service}>
          <img src={project}/>
          <Typography className={classes.text} variant='h2'><b>Consultoría y asesoría</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
        <div className={classes.service}>
          <img src={cms}/>
          <Typography className={classes.text} variant='h2'><b>Desarrollo de Software a medida</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
        <div className={classes.service}>
          <img src={appDevelopment}/>
          <Typography className={classes.text} variant='h2'><b>Desarrollo de aplicaciones móviles</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
      </div>
      <div className={classes.rowServices}>
        <div className={classes.service}>
          <img src={cms}/>
          <Typography className={classes.text} variant='h2'><b>Desarrollo de Software a medida</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
        <div className={classes.service}>
          <img src={appDevelopment}/>
          <Typography className={classes.text} variant='h2'><b>Desarrollo de aplicaciones móviles</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
        <div className={classes.service}>
          <img src={layers}/>
          <Typography className={classes.text} variant='h2'><b>Integración de plataformas</b></Typography>
          <Typography className={classes.text} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services
