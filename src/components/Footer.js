const Footer = ({ lang }) =>
<footer className="w-full h-auto bg-secondary pt-6">
  <div className="px-6">
    <div className="text-primary uppercase">
      { lang.footer.info }
    </div>
    <div className="text-tertiary py-1">
      <div className="py-2">
        <a href="/about">{ lang.menu.about }</a>      
      </div>

      <div className="py-2">
        <a href="/statement">{ lang.menu.statement }</a>
      </div>

      <div className="py-2">
        <a href="/demands">{ lang.menu.demands }</a>
      </div>

      <div className="pt-2">
        <a href="/privacy">{ lang.menu.privacy }</a>
      </div>
    </div>
  </div>

  <div className="px-6 pt-6">
    <div className="text-primary uppercase">
      { lang.footer.collaborate }
    </div>
    
    <div className="text-tertiary py-1">
      <div className="py-2">
        <a href="/need-house">{ lang.menu.needHouse }</a>
      </div>
      
      <div className="py-2">
        <a href="/have-house">{ lang.menu.haveHouse }</a>
      </div>
      
      <div className="py-2">
        <a href="/join-us">{ lang.menu.joinUs }</a>
      </div>
      
      <div className="py-2">
        <a href="/faq">{ lang.menu.faq }</a>
      </div>
    </div>
  </div>

  <div className="px-6 pt-6">
    <div className="text-primary uppercase">
      { lang.footer.social }
    </div>

    <div className="text-tertiary py-3">
      <a href="https://www.instagram.com/shelterourstudents">
        Instagram
      </a>
    </div>
  </div>

  <div className="px-6 pt-6 h-20 text-tertiary">
    <a href="https://nierot.com/">
      Website made by 
      <span className="text-primary">&nbsp;Nierot</span>
    </a>
  </div>
</footer>

export default Footer