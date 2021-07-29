const HostHouse = ({ lang: { pages: { haveHouse } } }) =>
<div className="h-5/6 px-6 pt-6">
  <meta name="description" content={`
    Are you a student from Groningen and you have a spare sleeping place available and you don't mind helping out fellow students?
    Sign up for our couch surfing initiative!
  `}/>
  <h1 className="font-title text-xl">
    { haveHouse.title }
  </h1>
  <p className="pt-3">
    { haveHouse.explanation }
  </p>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSc57U37lhETv9PMaqISVqPwJYIqIWqeRS1C-L_hqj9P53jvMA/viewform?usp=sf_link">
    <p className="pt-2 text-secondary underline">
      { haveHouse.link }
    </p>
  </a>
</div>

export default HostHouse