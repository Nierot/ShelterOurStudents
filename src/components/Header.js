import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = ({ lang, toggle, open }) => {
  return (
    <div>
      <header id="header" className="w-full h-16 grid grid-cols-6 bg-secondary">
        <div className="col-span-5">
          <a href="/">
            <img className="h-16" src="/logo_text.svg" alt="Shelter Our Students" />
          </a>
        </div>
        <div className="col-span-1 flex flex-row-reverse justify-start space-x-1" onClick={() => toggle()}>
          <div className="w-3"></div>
          {open ?
              <XIcon className="w-10 fill-current text-primary" /> :
              <MenuIcon className="w-12 fill-current text-primary" />
          }
        </div>
      </header>
    </div>

  ) 
}


export default Header