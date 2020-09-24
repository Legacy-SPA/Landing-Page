import React from "react"
import { Router } from "@reach/router"

import MuiLayout from "../layouts/MuiLayout"
import Dashboard from "../routes/Dashboard"

const App = () => {
  return (
    <Router>
      <MuiLayout path="/">
        <Dashboard path="dashboard" />
      </MuiLayout>
    </Router>
  )
}
export default App
