
const FAQ = ({ lang }) => {
  const { pages: { about: { whoAreWe, theProblem, toDo } } } = lang

  return (
    <div className="px-6 pt-6 pb-12 bg-tertiary">
      <h1 className="text-2xl pb-3">
        { lang.menu.about }
      </h1>
      <div>
        <h2 className="font-title text-lg">
          {whoAreWe.title}
        </h2>
        <p>
          {whoAreWe.text}
        </p>
      </div>

      <div>
        <h2 className="font-title text-lg pt-6">
          {theProblem.title}
        </h2>
        <p>
          {theProblem.text}
        </p>
      </div>

      <div>
        <h2 className="font-title text-lg pt-6">
          {toDo.title}
        </h2>
        <p>
          {toDo.text}
          <br />
          <div className="">
            <div className="pt-2 text-secondary underline">
              <a href="/host-house">{toDo.links.host}</a>
            </div>
            <div className="pt-2 text-secondary underline">
              <a href="/need-house">{toDo.links.need}</a>
            </div>
            <div className="pt-2 text-secondary underline">
              <a href="https://forms.gle/7U2ngiKhGrTEFHqv9">{toDo.links.help}</a>
            </div>
          </div>
        </p>
      </div>
    </div>
  )
}
  
export default FAQ