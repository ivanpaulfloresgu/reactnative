export const firstCapitalLetter = (value?: string) => {
  if (value) {
    const words = value.split(' ')
    let capitalLetters = ''
    words.map(str => {
      capitalLetters +=
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + ' '
    })

    return capitalLetters
  }
  return ''
}
