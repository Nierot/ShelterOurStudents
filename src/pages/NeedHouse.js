const NeedHouse = ({ lang: { pages: { needHouse } } }) =>
<div className="h-5/6 px-6 pt-6 lg:flex lg:flex-row lg:justify-center">
  <meta name="description" content={`
    Are you an international student from Groningen and need shelter this academic year?
    Join our couchsurfing initiative!
  `}/>
  <div className="lg:max-w-4xl">
    <h1 className="font-title text-xl">
      { needHouse.title }
    </h1>
    <p className="pt-3">
      { needHouse.explanation }
    </p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeS771akg4xewbjmpAa6KyiEcDqsvYuO3sxOb1H-VSnoj5JEw/viewform?usp=sf_link">
      <p className="pt-2 underline text-secondary">
        { needHouse.link }
      </p>
    </a>
  </div>
</div>

export default NeedHouse