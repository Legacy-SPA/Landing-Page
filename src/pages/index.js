import React from "react"
import { Router } from "@reach/router"

import MuiLayout from "../layouts/MuiLayout"
import Landing from "./Landing"
import NotFoundPage from "./404"

const Index = () => {

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
