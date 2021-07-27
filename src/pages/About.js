
const About = ({ lang }) => {
  const { pages: { about: { whoAreWe, theProblem, toDo } } } = lang

  return (
    <div className="px-6 pt-6 pb-12 bg-tertiary">
      <div>
        <div className="font-semibold">
          {whoAreWe.title}
        </div>
        <div>
          {whoAreWe.text}
        </div>
      </div>

      <div>
        <div className="font-semibold pt-6">
          {theProblem.title}
        </div>
        <div>
          {theProblem.text}
        </div>
      </div>

      <div>
        <div className="font-semibold pt-6">
          {toDo.title}
        </div>
        <div>
          {toDo.text}
          <br />
          <div className="">
            <div className="pt-2 text-secondary underline">
              <a href="/host-house">{toDo.links.host}</a>
            </div>
            <div className="pt-2 text-secondary underline">
              <a href="/need-house">{toDo.links.need}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About