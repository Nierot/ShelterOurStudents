/**
 * Figures out what language the user has set and returns the appropriate
 * language object.
 * @returns an object, as specified in ./lang/scheme.json, containing all
 * website text in the correct language
 */
export const getLang = () => {
  const locales = navigator.languages === undefined 
    ? [navigator.language]
    : navigator.languages

  // if for some reason the above did not work then set the language to
  // be english
  if (!locales) {
    return require('./lang/en-GB.json')
  }

  // check if there is a language that is any form of dutch
  if (locales.filter(local => local.includes('nl')).length > 0) {
    return require('./lang/nl-NL.json')
  // else the preferred language is english
  } else {
    return require('./lang/en-GB.json')
  } 

}