import React from "react"
import Homepage from "./pages/Homepage"
import { BrowserRouter, Route, Routes } from "react-router"
import Landing from "./pages/Landing"


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/976844" element={<Homepage/>} />

    </Routes>
    </BrowserRouter>
    <Homepage/>
    </>
  )
}

export default App
