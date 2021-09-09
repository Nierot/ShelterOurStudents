const Home = ({ lang }) => {
  const { pages: { home }} = lang
  return (
    <div className="h-5/6 px-6 pt-6 lg:flex lg:flex-row lg:justify-center">
      <meta name="description" content={`
        Shelter Our Students is an initiative for better and more student housing.
        We also organize a couch surfing initiative,
        so international students in Groningen do not have to be homeless at the start of the academic year.
      `} />
      <div className="lg:max-w-4xl">
        <h1 className="text-left font-title text-4xl pb-6 max-w-0 uppercase">
          {lang.title}
        </h1>
        <p className="">
          {home.text}
        </p>
        <div className="grid grid-cols-2 pt-6 gap-x-6">
          <Button text={ home.help } to="/host-house" />
          <Button text={ home.need } to="/need-house" />
        </div>
      </div>
    </div>
  )
}

const Button = ({ text, to }) =>
<div className="h-full py-1 rounded-lg bg-primary text-xl text-white font-title">
  <div className="h-full flex flex-col justify-center text-center">
    <a href={ to }>{ text }</a>
  </div>
</div>



export default Home