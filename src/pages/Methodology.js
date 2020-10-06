import React from 'react'
import { Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Group from "../images/Group.svg"

const useStyles = makeStyles((theme) => {
  return ({
      main: {
        width: '80%',
        padding: '5% 10%',
        margin: '10px 0px',
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
      },
      text: {
        padding: '20px 20px',
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

const Methodology = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Box className={classes.image} display={{xs: 'none', lg: 'block'}}>
        <img style={{margin: '-100px 0px'}} src={Group} />
      </Box>
      <Box className={classes.text}>
        <Typography variant='h1'><b>Nuestra metodología</b></Typography>
        <Typography variant='h2'>
          <small>
            consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium consectetur adipiscing elit. Nulla egestas augue vitae lacinia pretium consectetur adip.
          </small>
        </Typography>
      </Box>
    </div>
  )
}

export default Methodology
