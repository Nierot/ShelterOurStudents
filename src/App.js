import { MenuIcon } from '@heroicons/react/solid'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

const App = ({ lang }) =>
  <div className="h-screen">
    <header className="w-full h-16 grid grid-cols-6">
      <div className="col-span-1">
        Logo
      </div>
      <div className="col-span-4">
        {lang.title}
      </div>
      <div className="col-span-1 flex justify-center">
        <MenuIcon className="w-12 "/>
      </div>
    </header>
    <Router>
      <Switch>
        <Route exact path="/about">
          About
          <Footer />
        </Route>

        <Route path="/">
          Home
          <Footer lang={lang}/>
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>


  </div>

const Footer = lang => 
  <footer className="w-full">
    footer
  </footer>

export default App;
