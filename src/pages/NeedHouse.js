const NeedHouse = ({ lang: { pages: { needHouse } } }) =>
<div className="h-5/6 px-6 pt-6">
  <meta name="description" content={`
    Are you an international student from Groningen and need shelter this academic year?
    Join our couchsurfing initiative!
  `}/>
  <h1 className="font-title text-xl">
    { needHouse.title }
  </h1>
  <p className="pt-3">
    { needHouse.explanation }
  </p>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSc57U37lhETv9PMaqISVqPwJYIqIWqeRS1C-L_hqj9P53jvMA/viewform?usp=sf_link">
    <p className="pt-2 underline text-secondary">
      { needHouse.link }
    </p>
  </a>
</div>

export default NeedHouse