import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
import cms from '../images/cms.svg'
import layers from '../images/layers.svg'
import appDevelopment from '../images/appDevelopment.svg'
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
    main: {
      width: '100%',
    },
    titleBox: {
      display: 'flex',
      alignItems: 'center',
      padding: '50px 10% 25px 10%',
      [theme.breakpoints.up('md')]: {
        padding: '50px 0 25px 10%',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '50px 5% 25px 5%',
      },
    },
    text: {
      color: theme.palette.primary.main,
    },
    serviceDesc: {
      color: theme.palette.primary.main,
      paddingRight: '100px'
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
    <Box className={classes.main}>
      <Grid xs={12} className={classes.titleBox}>
        <Box>
          <Typography className={classes.text} variant='h1'><b>Nuestros Servicios</b></Typography>
          <Typography className={classes.text} variant='h6'>Brindamos servicios informáticos integrales, entre los cuales destacan los siguientes: </Typography>
        </Box>
      </Grid>
      <Grid xs={12} >
       <Grid container xs={12} md={12} className={classes.rowServices} >
           <Grid xs={12} md={4}>
             <img src={cms} alt={'Software'}/>
             <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de Software a medida</b></Typography>
             <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
           </Grid>
           <Grid xs={12} md={4}>
             <img src={appDevelopment} alt={'Apps'}/>
             <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de aplicaciones móviles</b></Typography>
             <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
           </Grid>
           <Grid xs={12} md={4}>
            <img src={layers} alt={'Integración'}/>
             <Typography className={classes.serviceDesc} variant='h2'><b>Integración de plataformas</b></Typography>
             <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
           </Grid>
       </Grid>
       <Grid container xs={12} md={12} className={classes.rowServices} >
         <Grid xs={12} md={4}>
           <img src={cms} alt={'Software'}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Consultoría y asesoría</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
         <Grid xs={12} md={4}>
           <img src={appDevelopment} alt={'Apps'}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de Software a medida</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
         <Grid xs={12} md={4}>
           <img src={layers} alt={'Integración'}/>
           <Typography className={classes.serviceDesc} variant='h2'><b>Desarrollo de aplicaciones móviles</b></Typography>
           <Typography className={classes.serviceDesc} variant='h6'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</Typography>
         </Grid>
       </Grid>
      </Grid>
    </Box>
  )
}

export default Services
