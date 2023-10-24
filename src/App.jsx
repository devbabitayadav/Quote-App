import React from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { QuoteProvider } from './context/QuoteContext'


const App = () => {
  return (
    <QuoteProvider>
       <Navbar/>

      <div className="container p-5">

       <Card/>

      </div>

      </QuoteProvider>
  )
}

export default App;
