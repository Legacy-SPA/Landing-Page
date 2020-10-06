import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Main from "../images/Main.svg"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => {
  return {
    main: {
      width: "100%",
      display: "flex",
      backgroundColor: theme.palette.background.paper,
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "space-around",
      [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
        paddingBottom: "50px",
      },
    },
    text: {
      color: theme.palette.primary.contrastText,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 10% 50px 10%",
      [theme.breakpoints.up("lg")]: {
        padding: "0",
        paddingLeft: "50px",
      },
      [theme.breakpoints.down("lg")]: {
        paddingTop: "50px",
      },
    },
    image: {
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.up("lg")]: {
        padding: "0",
        paddingRight: "50px",
      },
    },
  }
})

const MainMenu = () => {
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <Box className={classes.text}>
        <Typography variant="h1">
          <b>Desarrollo de Software a medida</b>
        </Typography>
        <Typography variant="h2">
          consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium
        </Typography>
      </Box>
      <Box className={classes.image} display={{ xs: "none", md: "block" }}>
        <img src={Main} alt={"sistemas"} />
      </Box>
    </Box>
  )
}

export default MainMenu
