import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = ({ lang, toggle, open }) => {
  return (
    <div>
      <header id="header" className="w-full h-16 grid grid-cols-6 bg-primary">
        <a className="col-span-5" href="/">
          Logo
        </a>
        <div className="col-span-1 flex flex-row-reverse justify-start space-x-1" onClick={() => toggle()}>
          <div className="w-3"></div>
          {open ?
              <XIcon className="w-10" /> :
              <MenuIcon className="w-12"/>
          }
        </div>
      </header>
    </div>

  ) 
}


export default Header