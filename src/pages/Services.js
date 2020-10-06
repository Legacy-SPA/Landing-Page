import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
import project from '../images/project.svg'
import cms from '../images/cms.svg'
import layers from '../images/layers.svg'
import appDevelopment from '../images/appDevelopment.svg'

const useStyles = makeStyles((theme) => ({
    title: {
      [theme.breakpoints.up('xs')]: {
        padding: '25px 30px 25px 30px',
        textAlign: 'center',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '45px 128px 25px 128px',
        textAlign: 'left',
      },
    },
    text: {
      color: theme.palette.primary.main,
    },
    serviceDesc: {
      color: theme.palette.primary.main,
    },
    contentServices: {
      [theme.breakpoints.up('xs')]: {
        padding: '5px 50px',
        textAlign: 'center',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '5px 128px',
        textAlign: 'left',
      },
      width: '100%',
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
    <Grid container>
      <Grid item xs={12} sm={6} className={classes.title}>
        <Typography className={classes.text} variant='h1'><b>Nuestros Servicios</b></Typography>
        <Typography className={classes.text} variant='h6'>Brindamos servicios informáticos integrales, entre los cuales destacan los siguientes: </Typography>
      </Grid>
       <Grid container item xs={12} className={classes.contentServices} >
         <Grid container item xs={12} md={12} className={classes.rowServices} >
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
         <Grid container item xs={12} md={12} className={classes.rowServices} >
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
         <Grid container item xs={12} md={12} className={classes.rowServices} >
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
    </Grid>
  )
}

export default Services
