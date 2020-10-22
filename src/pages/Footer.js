import React from "react"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import udd from "../images/clients/uddventures.svg"
import corfo from "../images/clients/corfo.png"
import linkedin from "../images/clients/linkedin.svg"
import instagram from "../images/clients/instagram.svg"

const useStyles = makeStyles(theme => {
  return {
    main: {
      width: "100%",
      padding: "50px 0px",
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
            <small>Amunategui N°232, Oficina 1904, Santiago</small>
          </Typography>
        </Grid>
        <Grid xs={12} md={4} className={classes.contentText}>
          <Typography variant="h2" className={classes.text}>
            <b>Somos parte de</b>
          </Typography>
          <img src={udd} alt={"Apps"} style={{width: 100, height: 49}}/>
          <img src={corfo} alt={"Apps"} style={{maxWidth: 100, height: 'auto', marginLeft: 20}}/>
        </Grid>
        <Grid xs={12} md={4} className={classes.contentText}>
          <Typography variant="h2" className={classes.text}>
            <b>Redes Sociales</b>
          </Typography>
          <img src={linkedin} alt={"Apps"} style={{width: 40, height: 40, marginTop: 10}}/>
          <img src={instagram} alt={"Apps"} style={{width: 40, height: 40, marginLeft: 20}}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainMenu
