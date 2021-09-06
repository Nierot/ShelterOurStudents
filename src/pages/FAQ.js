
const FAQ = ({ lang }) => {
  const { pages: { faq } } = lang

  return (
    <div className="px-6 pt-6 pb-12 bg-tertiary">
      {faq.map(faq => {
        return <div className="pb-3">
          <h2 className="text-xl">
            { faq.title }
          </h2>
          
          {faq.items.map(item => <QA question={item.q} answer={item.a} link={item.link} />)}
        </div>
      })}
    </div>
  )
}

const QA = ({ question, answer, link }) => {
  return <div>
    <h3 className="text-secondary text-lg pb-1 pt-2">
      {question}
    </h3>
    <p>
      <span>
        {answer}
      </span>
      {typeof link === 'object' ? <a className="underline text-secondary" href={link.to}>
        {link.text}
      </a> : <></>}
    </p>
  </div>
}
  
export default FAQ