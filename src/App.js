import './styles/App.scss'
import Navbar from './components/Navbar'

//sticky nav
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App() {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          z-index: 2000;
          width: 100%;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          background: linear-gradient(25deg, #ffba00, #ff6c00);
          width: 100%;
        }
      `}</style>
    )
  }

  return (
    <Router>
      <div className='App'>
        {style()}
        <StickyNav length='40'>
          <Navbar />
        </StickyNav>
        <LandingPage />
      </div>
    </Router>
  )
}

export default App
