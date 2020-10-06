import React from "react"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => {
  return {
    main: {
      width: "80%",
      padding: "5% 10%",
      display: "flex",
      backgroundColor: theme.palette.background.paper,
    },
    text: {
      color: theme.palette.primary.contrastText,
    },
    textLabel: {
      color: theme.palette.primary.contrastText,
      width: "80%",
      alingSelf: "center",
      padding: "0px 10%",
    },
    contentText: {
      textAlign: "center",
      margin: "0px",
    },
  }
})

const MainMenu = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Grid container xs={12} md={12}>
        <Grid xs={12} md={4} className={classes.contentText}>
          <Typography variant="h2" className={classes.text}>
            <b>Dirección</b>
          </Typography>
          <Typography variant="h6" className={classes.textLabel}>
            <small>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</small>
          </Typography>
        </Grid>
        <Grid xs={12} md={4} className={classes.contentText}>
          <Typography variant="h2" className={classes.text}>
            <b>Información</b>
          </Typography>
          <Typography variant="h6" className={classes.textLabel}>
            <small>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</small>
          </Typography>
        </Grid>
        <Grid xs={12} md={4} className={classes.contentText}>
          <Typography variant="h2" className={classes.text}>
            <b>Redes Sociales</b>
          </Typography>
          <Typography variant="h6" className={classes.textLabel}>
            <small>consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium.</small>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainMenu
