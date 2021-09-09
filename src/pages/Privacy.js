const Privacy = ({ lang: { pages: { privacy } } }) =>
<div className="h-5/6 px-6 py-6 bg-tertiary lg:flex lg:flex-row lg:justify-center">
  <div className="lg:max-w-4xl">
    <p className="">
      { privacy.explanation }
    </p>
    <a href="/privacy_statement_SOS_20210812.pdf" className="pt-2 text-secondary underline">
      { privacy.link }
    </a>
  </div>

</div>

export default Privacy