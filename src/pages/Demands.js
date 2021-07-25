const Demands = ({ lang: { pages: { demands }}}) =>
<div className="px-6 py-3">
  <div className="font-bold text-left pb-1">
    { demands.title }
  </div>

  <div className="pb-3">
    { demands.text.preface }
  </div>

  <ul className="list-disc list-inside pl-2">
    { demands.text.list.map(demand => (
      <li key={demand} className="">
        { demand }
      </ li>
    ))}
  </ul>

</div>

export default Demands