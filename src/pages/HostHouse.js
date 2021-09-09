const HostHouse = ({ lang: { pages: { haveHouse } } }) =>
<div className="px-6 pt-6 bg-tertiary lg:flex lg:flex-row lg:justify-center">
  <meta name="description" content={`
    Are you a student from Groningen and you have a spare sleeping place available and you don't mind helping out fellow students?
    Sign up for our couch surfing initiative!
  `}/>
  <div className="lg:max-w-4xl">
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

    
    <Stories stories={haveHouse.stories} />
  </div>

</div>

const Stories = ({ stories: { title, text, disclaimer, attribute }}) => {

  return <div className="pt-5 bg-tertiary">
    <h2 className="text-xl font-title">
      { title }
    </h2>

    <div>
      
      <div className="pt-2">
        <div className="float-right pl-2">
          <img width="200" src="/stories_0.jpeg" alt="Anonymized portrait"/>
        </div>
        
        <p>
          { text[0] }
        </p>
      </div>

      <div className="py-2">
        <div className="float-left pr-2">
          <img width="200" src="/stories_1.jpeg" alt="Anonymized portrait"/>
        </div>

        <p>
          { text[1] }
        </p>
      </div>


      <p>
        { text[2] }
      </p>
    </div>

    <div className="pt-2">
      <code>
        { disclaimer }
      </code>
    </div>

    <p className="pt-2 pb-6">
      { attribute }
    </p>
  </div>
}

export default HostHouse