const Home = ({ lang }) => {
  const { pages: { home }} = lang
  return (
    <div className="h-5/6 px-6 pt-6">
      <div className="text-center text-4xl text-bold pb-10">
        {lang.title}!
      </div>
      <div className="text-center">
        {home.text}
      </div>
      <div className="grid">
        <div>
          {home.help}
        </div>
        <div>
          {home.need}
        </div>
      </div>
    </div>
  )
}


export default Home