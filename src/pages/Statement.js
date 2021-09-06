
const Statement = ({ lang }) => {
  const { pages: { statement: { title, text, link } } } = lang

  return (
    <div className="px-6 pt-6 pb-12 bg-tertiary">
      <h1 className="text-2xl pb-3">
        { title }
      </h1>
      <p>
        { text.preface }
      </p>

      {text.list.map(item => <StatementItem item={item} />)}

      <div className="pt-2 text-secondary underline">
        <a className="pt-2 text-secondary underline" href="https://docs.google.com/forms/d/1s-bF434Sov2uEFMxprJcunnTgAtPqQMS8Uqk3VLr1JA/edit?chromeless=1">
          { link }
        </a>
      </div>

    </div>
  )
}

const StatementItem = ({ item }) => {
  console.log(item)

  const makeText = (text) => {
    let jsx = []

    for (const [idx, item] of text.entries()) {
      if (typeof item === 'string') {
        jsx.push(<p className="pb-1" key={idx}>{ item }</p>)
      } else {
        for (const [newIdx, newItem] of item.entries()) {
          jsx.push(<p className="pb-2" key={idx + newIdx + 10}>{ newItem }</p>)
        }
      }
    }

    return jsx
  }

  return <div className="pt-3" key={item.title}>
    <h2 className="text-lg pb-3">
      { item.title }
    </h2>
    { makeText(item.text) }
  </div>
}

export default Statement