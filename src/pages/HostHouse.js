const HostHouse = ({ lang: { pages: { haveHouse } } }) =>
<div className="h-5/6 px-6 py-3">
  <div>
    { haveHouse.explanation }
  </div>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSc57U37lhETv9PMaqISVqPwJYIqIWqeRS1C-L_hqj9P53jvMA/viewform?usp=sf_link">
    { haveHouse.link }
  </a>
</div>

export default HostHouse