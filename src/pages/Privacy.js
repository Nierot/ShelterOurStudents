const Privacy = ({ lang: { pages: { privacy } } }) =>
<div className="h-5/6 px-6 py-6 bg-tertiary">
  <p className="">
    { privacy.explanation }
  </p>
  <a href="/privacy_statement_SOS_20210728.pdf" className="pt-2 text-secondary underline">
    { privacy.link }
  </a>
</div>

export default Privacy