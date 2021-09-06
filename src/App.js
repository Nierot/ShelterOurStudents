import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { getLang } from './util'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './pages/About'
import Demands from './pages/Demands'
import Home from './pages/Home'
import HostHouse from './pages/HostHouse'
import NeedHouse from './pages/NeedHouse'
import Privacy from './pages/Privacy'
import JoinUs from './pages/JoinUs'
import FAQ from './pages/FAQ'
import Statement from './pages/Statement'

const App = () => {

  const [lang, setLang] = useState({ iso: undefined })

  useEffect(() => {
    getLang().then(setLang)
  }, []);

  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => setMenuOpen(!menuOpen)

  if (!lang.iso) {
    return <div>Loading...</div>
  }
  return (
    <div className="h-screen bg-tertiary">
      <Header lang={lang} toggle={toggle} open={menuOpen}/>
      <Router>
        {menuOpen ? 
          <Menu lang={lang} /> :
          <Switch>
            <Route path="/about">
              <About lang={lang} />
              <Footer lang={lang} />
            </Route>
            <Route path="/host-house">
              <HostHouse lang={lang} />
              <Footer lang={lang} />
            </Route>

            <Route path="/need-house">
              <NeedHouse lang={lang} />
              <Footer lang={lang} />
            </Route>

            <Route path="/join-us">
              <JoinUs lang={lang} />
              <Footer lang={lang} />
            </Route>

            <Route path="/privacy">
              <Privacy lang={lang} />
              <Footer lang={lang} />
            </Route>

            <Route path="/demands">
              <Demands lang={lang} />
              <Footer lang={lang} />
            </Route>

            <Route path="/statement">
              <Statement lang={lang} />
              <Footer lang={lang} />
            </Route>

            <Route path="/faq">
              <FAQ lang={lang} />
              <Footer lang={lang} />
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
