import { useEffect, useState } from "react"

const LATEST_NUMBER = 123

const Statement = ({ lang }) => {
  const { pages: { statement: { title, text, link, peopleSigned } } } = lang

  const [signed, setSigned] = useState(LATEST_NUMBER)

  useEffect(() => {
    fetch(`${window.location.origin}/.netlify/functions/people-signed`)
      .then(data => data.json())
      .then(data => setSigned(data.peopleSigned))
      .catch(() => setSigned(LATEST_NUMBER))
  }, [])

  return (
    <div className="px-6 pt-6 pb-12 bg-tertiary lg:flex lg:flex-row lg:justify-center">
      <div className="lg:max-w-4xl">
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

        <div className="pt-2" >
          <span className="text-secondary text-xl">{ signed }</span>
          &nbsp;{ peopleSigned }
        </div>
      </div>
    </div>
  )
}

const StatementItem = ({ item }) => {
  const makeText = (text) => {
    let jsx = []

    for (const [idx, item] of text.entries()) {
      if (typeof item === 'string') {
        jsx.push(<p className="pb-1" key={idx}>{ item }</p>)
      } else {
        for (const [newIdx, newItem] of item.entries()) {
          jsx.push(<p className="pb-2 px-2" key={idx + newIdx + 100}>{ newItem }</p>)
        }
      }
    }

    return jsx
  }

  return <div className="pt-3" key={item.title}>
    <h2 className="text-lg pb-3 text-secondary">
      { item.title }
    </h2>
    { makeText(item.text) }
  </div>
}

export default Statement