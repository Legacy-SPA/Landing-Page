import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Logo from "../images/cms.svg"
import Dreamit from "../images/clients/dreamit.png"
import Orionx from "../images/clients/orionx.png"
import Zinkerz from "../images/clients/zinkerz.png"
import Ulmen from "../images/clients/ulmen.png"
import Laroche from "../images/clients/laroche.png"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
const useStyles = makeStyles(theme => {
  return {
    main: {
      width: "100%",
      [theme.breakpoints.up("md")]: {
        padding: "50px 0",
        display: "flex",
      },
    },
    text: {
      padding: "50px 10%",
      [theme.breakpoints.up("md")]: {
        padding: "0",
        paddingLeft: "10%",
      },
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "auto",
      },
    },
    logos: {
      padding: "25px 10% 50px 10%",
      [theme.breakpoints.up("md")]: {
        padding: "0",
        paddingRight: "10%",
      },
      [theme.breakpoints.up("lg")]: {
        paddingRight: "auto",
      },
    },
    singleLogo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "15px",
      marginBottom: "15px",    
    },
    title: {
      [theme.breakpoints.down("sm")]: {
        textAlign: 'center'
      }
    },
    logo: {
      maxWidth: 100,
      maxWidth: 100
    }
  }
})
const Client = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.main} {...props}>
      <Grid container xs={12} md={5} className={classes.text}>
        <Typography variant="h1" className={classes.title}>
          <b>Clientes que han confiado en nosotros</b>
        </Typography>
        <Typography variant="h2" style={{marginTop: 20}} className={classes.title}>
          <small>
            El éxito de nuestro clientes, es sin duda nuestro éxito, por eso en retribución de su confianza en nosotros a parte de brindarles lo mejor de nosotros, le brindamos una relación de confianza y trabajo a lo largo del tiempo, con los mejores planes de desarrollo y seguimiento, para crecer junto a ellos:
          </small>
        </Typography>
      </Grid>
      <Grid container xs={12} md={7} className={classes.logos}>
            <Grid xs={6} md={3} className={classes.singleLogo}>
              {/* <img src={Ulmen} alt={"logo"} className={classes.logo} /> */}
            </Grid>
            <Grid xs={6} md={3} className={classes.singleLogo}>
              <img src={Zinkerz} alt={"logo"} className={classes.logo} />
            </Grid>
            <Grid xs={6} md={3} className={classes.singleLogo}>
              <img src={Dreamit} alt={"logo"} className={classes.logo} />
            </Grid>
            <Grid xs={6} md={3} className={classes.singleLogo}>
              <img src={Laroche} alt={"logo"} className={classes.logo} />
            </Grid>
            <Grid xs={6} md={3} className={classes.singleLogo}>
              
            </Grid>
            <Grid xs={6} md={3} className={classes.singleLogo}>
              <img src={Orionx} alt={"logo"} className={classes.logo} />
            </Grid>
            <Grid xs={6} md={3} className={classes.singleLogo}>
              <img src={Ulmen} alt={"logo"} className={classes.logo} />
            </Grid>
            <Grid xs={6} md={3} className={classes.singleLogo}>
              
            </Grid>
      </Grid>
    </Box>
  )
}

export default Client
