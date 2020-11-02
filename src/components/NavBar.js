import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import MenuIcon from "@material-ui/icons/Menu"
import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core"
import svg from "../images/Logo.svg"
import Box from "@material-ui/core/Box"
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined"
import Collapse from "@material-ui/core/Collapse"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    height: "64px",
  },
  navLink: {
    margin: "0px 22px",
    color: "#fff",
  },
  flex: {
    flexGrow: 1,
  },
}))

const scrollToRef = (ref) => window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 88 })

const NavBar = props => {
  const { items } = props
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(prev => !prev)
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <IconButton color="inherit" aria-label="menu" edge="start">
          <img src={svg} alt="Logo" className={classes.icon} />
        </IconButton>
        <span className={classes.flex} />
        <Box component="div" display={{ xs: "none", md: "block" }}>
          {items.map(item => {
            return (
              <Button
                key={item}
                color="inherit"
                onClick={() => scrollToRef(item.ref)}
                className={classes.navLink}>
                {item.label}
              </Button>
            )
          })}
        </Box>
        <Box component="div" display={{ xs: "block", md: "none" }}>
          <IconButton onClick={toggle} color="inherit" aria-label="menu" edge="start">
            {isOpen ? <CloseOutlinedIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>
      <Collapse in={isOpen}>
        <Box display={"flex"} flexDirection={"column"}>
          {items.map(item => {
            return (
              <Button
                key={item}
                onClick={() => window.scrollTo(0, item.ref.current.offsetTop - 88)}
                color="inherit"
                className={classes.navLink}>
                {item.label}
              </Button>
            )
          })}
        </Box>
      </Collapse>
    </AppBar>
  )
}
NavBar.defaultProps = {
  items: [],
}
export default NavBar
