import './styles/App.scss'
import Navbar from './components/Navbar'

import { BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <LandingPage />
      </div>
    </Router>
  )
}

export default App
