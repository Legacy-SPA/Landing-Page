import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => {
    return {
      content: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '20',
        backgroundColor: 'black',
        opacity: '0.5',
        display: 'flex',
        flexDirection: 'column'
      },  
      alerta: {
        backgroundColor: 'black',
        color: 'white',
        width: '30%',
        alignSelf: 'center'
      }
    }
  })
const Alert = (props) => {
  const {isOpen} = props   
  const classes = useStyles()
  return (
    isOpen &&
      (<div className={classes.content}>
        <div className={classes.alerta}>
            {props.children}
        </div>
      </div>)   
  )
}


export default Alert