import React from 'react'
import Input from './components/Input'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import { Toaster } from 'react-hot-toast'
const App = () => {


  return (
    <>
    <Toaster position="top-center" />
     <Header/>
     <Hero/>
     <Input/>
     <Card/>
    </>
  )
}

export default App
