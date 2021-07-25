
const About = ({ lang }) => {
  const { pages: { about: { whoAreWe, theProblem, toDo, demands } } } = lang

  return (
    <div className="px-6 py-3">
      <div>
        <div className="font-semibold">
          {whoAreWe.title}
        </div>
        <div>
          {whoAreWe.text}
        </div>
      </div>

      <div>
        <div className="font-semibold pt-3">
          {theProblem.title}
        </div>
        <div>
          {theProblem.text}
        </div>
      </div>

      <div>
        <div className="font-semibold pt-3">
          {toDo.title}
        </div>
        <div>
          {toDo.text}
          <br />
          <a href="/host-house">
            {toDo.links.host}
          </a>
          <br />
          <a href="/need-house">
            {toDo.links.need}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About