import React, {useState} from "react"
import { Input, Typography, Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => {
  return {
    container: {
      margin: "36px 0px",
      [theme.breakpoints.up("xs")]: {
        padding: "5px 30px",
        textAlign: "center",
      },
      [theme.breakpoints.up("sm")]: {
        padding: "5px 128px",
        textAlign: "left",
      },
    },
    text: {
      padding: "10px 0px",
      fontSize: "14px",
      color: "#181B32",
    },
    input: {
      width: "80%",
      backgroundColor: "white",
    },
    buttonText: {
      fontSize: "11.2px",
    },
  }
})
const News = () => {
  const classes = useStyles()
  const [datos, setDatos] = useState({})
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({ ...datos, "form-name": "newsletter" })
    }).then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <Grid item xs={12} sm={6} className={classes.container}>
      <Typography variant="h1">
        <b>NewsLetter</b>
      </Typography>
      <Typography className={classes.text} variant="h6">
        Déjanos tu email para enviarte las mejores noticias sobre las TIC, que seguramente te interesaran para que tu área de TI este siempre al día
      </Typography>
      <form style={{ display: "flex" }} name="newsletter" method="POST" >
        <input type="hidden" name="form-name" value="newsletter" />
        <Input className={classes.input} type="email" name="email" />
        <Button variant="contained" color="secondary" type='submit'>
          <Typography className={classes.buttonText}>Suscribirme</Typography>
        </Button>
      </form>
    </Grid>
  )
}

export default News
