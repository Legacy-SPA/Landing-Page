import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
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
      color: theme.palette.primary.main,
    },
    serviceDesc: {
      color: theme.palette.primary.main,
      paddingRight: '100px'
    },
    contentServices: {
      width: '100%',
      paddingLeft: '10%',
    },
    rowServices: {
      width: '100%',
      marginTop: '30px',
      marginBottom: '30px'
    },
    service: {
      width: '30%',
      padding: 0,
      margin: 0,
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
     <Grid container spacing={1} className={classes.contentServices} >
       <Grid container xs={12} md={12} className={classes.rowServices} >
           <Grid xs={12} md={4}>
             <img src={cms}/>
             <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de Software a medida</b></Typography>
             <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
           </Grid>
           <Grid xs={12} md={4}>
             <img src={appDevelopment}/>
             <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de aplicaciones móviles</b></Typography>
             <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
           </Grid>
           <Grid xs={12} md={4}>
             <img src={layers}/>
             <Typography className={classes.serviceDesc} variant='h2'><b>Integración de plataformas</b></Typography>
             <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
           </Grid>
       </Grid>
       <Grid container xs={12} md={12} className={classes.rowServices} >
         <Grid xs={12} md={4}>
           <img src={project}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Consultoría y asesoría</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
         <Grid xs={12} md={4}>
           <img src={cms}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de Software a medida</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
         <Grid xs={12} md={4}>
           <img src={appDevelopment}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de aplicaciones móviles</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
       </Grid>
       <Grid container xs={12} md={12} className={classes.rowServices} >
         <Grid xs={12} md={4}>
           <img src={cms}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de Software a medida</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
         <Grid xs={12} md={4}>
           <img src={appDevelopment}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de aplicaciones móviles</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
         <Grid xs={12} md={4}>
           <img src={layers}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Integración de plataformas</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
       </Grid>
     </Grid>
    </div>
  )
}

export default Services
