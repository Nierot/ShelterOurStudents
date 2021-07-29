const Menu = ({ lang }) =>
<div id="menu" className="z-10 h-auto w-full">
  <div className="grid grid-rows-5">
    <MenuItem name={lang.menu.about} to="/about"/>
    <MenuItem name={lang.menu.demands} to="/demands" />
    <MenuItem name={lang.menu.haveHouse} to="/host-house"/>
    <MenuItem name={lang.menu.needHouse} to="/need-house"/>
    <MenuItem name={lang.menu.privacy} to="/privacy"/>
  </div>
</div>

const MenuItem = ({ name, to }) => 
<a href={to}>
  <div className="py-5 border-2 border-t-0 border-l-0 border-r-0">
    <div className="flex justify-start items-center">
      <div className="text-left pl-6 font-medium text-2xl font-title">
        {name}
      </div>
    </div>
  </div>
</a>


export default Menu