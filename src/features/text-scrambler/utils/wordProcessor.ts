const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const scrambleWord = (word: string): string => {
  if (word.length <= 3) {
    return word
  }

  const chars = word.split('')
  const firstChar = chars[0]
  const lastChar = chars[chars.length - 1]
  const middleChars = chars.slice(1, -1)

  const scrambledMiddle = shuffleArray(middleChars)

  return firstChar + scrambledMiddle.join('') + lastChar
}

export const processWord = (word: string): string => {
  const punctuationMatch = word.match(
    /^([^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*)([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)([^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*)$/
  )

  if (!punctuationMatch) {
    return word
  }

  const [, leadingPunct, actualWord, trailingPunct] = punctuationMatch
  const scrambled = scrambleWord(actualWord)

  return leadingPunct + scrambled + trailingPunct
}
