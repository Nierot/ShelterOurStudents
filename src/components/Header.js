import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Menu from './Menu'

const Header = ({ lang, toggle, open }) => {
  return (
    <div>
      <header id="header" className="w-full h-16 grid grid-cols-6 bg-gray-300">
        <div className="col-span-1">
          Logo
        </div>
        <a href="/" className="col-span-4 text-left text-xl flex justify-center flex-col font-semibold">
          {lang.title}
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