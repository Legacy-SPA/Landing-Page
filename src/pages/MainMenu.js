import React from 'react'
import {Typography, Button} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import Group from '../images/Group.svg'


const useStyles = makeStyles((theme) => {
  console.log(theme)
  return ({
  main: {
    width: '100%',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    width: '50%',
    padding: '100px',
    paddingLeft: '150px',
    color: theme.palette.primary.contrastText,
  },
  image: {
    width: '50%',
    padding: '100px',
    color: theme.palette.primary.contrastText
  },
  button: {

  }
  }
  )}
)

const MainMenu = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <Typography variant='h1'><b>Desarrollo de Software a medida</b></Typography>
        <Typography variant='h2'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium</Typography>
        <div>
          <Button color='secondary'>Botón</Button>
          <Button color='secondary'>Botón</Button>
        </div>
      </div>
      <div className={classes.image}>
        <Typography variant='h1'><b>Imagen</b></Typography>
      </div>
    </div>
  )
}

export default MainMenu
