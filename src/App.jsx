import React from 'react'
import HomePage from './pages/HomePage'
import { AreaValueProvider } from './context/AreaValueContext'

function App() {

  return (
      <AreaValueProvider>
        <HomePage />
      </AreaValueProvider>
  )
}
App.whyDidYouRender = true;

export default App
