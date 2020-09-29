import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import svg from '../images/Logo.svg'
import {AppBar, Toolbar, Button, IconButton} from "@material-ui/core"
import MainMenu from './MainMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    height: '64px',
  },
  navLink: {
    margin: '0px 22px',
  },
  flex: {
    flexGrow: 1,
  },
}))

const Landing = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar color='primary' position="sticky">
        <Toolbar >
          <IconButton color="inherit" aria-label="menu" edge="start" >
            <img src={svg} alt="Logo" className={classes.icon}/>
          </IconButton>
          <span className={classes.flex}></span>
          <Button color="inherit" className={classes.navLink}>Servicios</Button>
          <Button color="inherit" className={classes.navLink}>Clientes</Button>
          <Button color="inherit" className={classes.navLink}>Metodología</Button>
          <Button color="inherit" className={classes.navLink}>Contacto</Button>
        </Toolbar>
      </AppBar>
      <MainMenu/>
    </div>
  )
}

export default Landing
