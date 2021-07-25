import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './pages/About'
import Demands from './pages/Demands'
import Home from './pages/Home'
import HostHouse from './pages/HostHouse'
import NeedHouse from './pages/NeedHouse'
import Privacy from './pages/Privacy'

const App = ({ lang }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => setMenuOpen(!menuOpen)

  return (
    <div className="h-screen">
      <Header lang={lang} toggle={toggle} open={menuOpen}/>
      <Router>
        {menuOpen ? 
          <Menu lang={lang} /> :
          <Switch >
            <Route exact path="/about">
              <About lang={lang} />
              <Footer />
            </Route>
            <Route exact path="/host-house">
              <HostHouse lang={lang} />
              <Footer />
            </Route>

            <Route exact path="/need-house">
              <NeedHouse lang={lang} />
              <Footer />
            </Route>

            <Route exact path="/privacy">
              <Privacy lang={lang} />
              <Footer />
            </Route>

            <Route exact path="/demands">
              <Demands lang={lang} />
              <Footer />
            </Route>


            <Route path="/">
              <Home lang={lang}/>
              <Footer lang={lang}/>
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        }
      </Router>
    </div>
  )
}
export default App;
