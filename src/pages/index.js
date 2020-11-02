import React from "react"
import { Router } from "@reach/router"

import MuiLayout from "../layouts/MuiLayout"
import Landing from "./Landing"
import NotFoundPage from "./404"
/*
  Theme guide: https://material-ui.com/customization/default-theme/
*/
import smoothscroll from 'smoothscroll-polyfill';

const Index = () => {

  smoothscroll.polyfill();
  return (
    <Router>
      <MuiLayout path="/">
        <Landing path="/" />
        <NotFoundPage path='*' />
      </MuiLayout>
    </Router>
  )
}
export default Index
