const JoinUs = ({ lang: { pages: { joinUs } } }) =>
<div className="h-5/6 px-6 pt-6">
  <meta name="description" content={`
    Do you want to help out Shelter our Students?
  `}/>
  <h1 className="font-title text-xl">
    { joinUs.title }
  </h1>
  <p className="pt-3">
    { joinUs.explanation }
  </p>
  <a href="https://forms.gle/rqRMh46nt9yC5b9h8">
    <p className="pt-2 text-secondary underline">
      { joinUs.link }
    </p>
  </a>
</div>

export default JoinUs