const Demands = ({ lang: { pages: { demands }}}) =>
<div className="px-6 py-6 h-5/6">
  <meta name="description" content={`
    The Rijksuniversiteit Groningen (RUG) is not taking good enough measures against the student housing problem!
    We demand extra student housing, no more homeless students and better communication about housing for international students!
  `} />
  <h1 className="font-title text-xl text-left pb-3">
    { demands.title }
  </h1>

  <p className="pb-3">
    { demands.text.preface }
  </p>

  <ul className="list-disc list-inside pl-2">
    { demands.text.list.map(demand => (
      <li key={demand} className="">
        { demand }
      </ li>
    ))}
  </ul>

</div>

export default Demands