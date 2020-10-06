import React from "react"
import { Input, Typography, Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => {
  debugger;
  return {
    container:{
      margin: '36px 0px',
      [theme.breakpoints.up('xs')]: {
        padding: '5px 30px',
        textAlign: 'center',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '5px 128px',
        textAlign: 'left',
      },
    },
    text: {
      padding: '10px 0px',
      fontSize: '14px',
      color: '#181B32'
    },
    input: {
      width: '80%',
      backgroundColor: 'white',
    },
    buttonText: {
      fontSize: '11.2px'
    }
  }}
)
const News = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} className={classes.container}>
      <Typography variant='h1'><b>News</b></Typography>
      <Typography className={classes.text} variant='h6'>
          Bridamos servicios informáticos integrales, entre
          los cuales destacan los siguientes:Bridamos servicios
          informáticos integrales, entre los cuales destacan los
          siguientes:Bridamos servicios informáticos integrales,
          entre los cuales destacan los siguientes:
      </Typography>
      <div style={{display: 'flex'}}>
        <Input className={classes.input} type="text"/>
        <Button variant="contained" color="secondary">
          <Typography className={classes.buttonText}>
            Conversemos
          </Typography>
        </Button>
      </div>
    </Grid>
  )
}

export default News
