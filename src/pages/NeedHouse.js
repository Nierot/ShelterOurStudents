const NeedHouse = ({ lang: { pages: { needHouse } } }) =>
<div className="h-5/6 px-6 py-3">
  <div>
    { needHouse.explanation }
  </div>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSc57U37lhETv9PMaqISVqPwJYIqIWqeRS1C-L_hqj9P53jvMA/viewform?usp=sf_link">
    { needHouse.link }
  </a>
</div>

export default NeedHouse