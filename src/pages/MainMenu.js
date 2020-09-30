import React from 'react'
import {Typography, Button} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import Main from '../images/Main.svg'
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => {
  return ({
  main: {
    width: '100%',
    paddingBottom: '50px',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    padding: '100px',
    paddingLeft: '10%',
    color: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    padding: '0px',
    paddingRight: '50px',
    color: theme.palette.primary.contrastText
  },
  }
  )}
)

const MainMenu = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Box className={classes.text}>
        <Typography variant='h1'><b>Desarrollo de Software a medida</b></Typography>
        <Typography variant='h2'>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium</Typography>
        <div>
          <Button color='secondary'>Botón</Button>
          <Button color='secondary'>Botón</Button>
        </div>
      </Box>
      <Box className={classes.image} display={{xs: 'none', lg: 'block'}}>
        <img src={Main} />
      </Box>
    </div>
  )
}

export default MainMenu
