import React from "react"
import { Router } from "@reach/router"

import MuiLayout from "../layouts/MuiLayout"
import Landing from "./Landing"

const App = () => {
  return (
    <Router>
      <MuiLayout path="/">
        <Landing path="/"/>
      </MuiLayout>
    </Router>
  )
}
export default App
