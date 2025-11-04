export interface PeselData {
  birthDate: Date
  gender: 'male' | 'female'
  isValid: boolean
}

export const extractPeselData = (pesel: string): PeselData | null => {
  if (pesel.length !== 11) {
    return null
  }

  const year = parseInt(pesel.substring(0, 2))
  const month = parseInt(pesel.substring(2, 4))
  const day = parseInt(pesel.substring(4, 6))
  const genderDigit = parseInt(pesel[9])

  let fullYear: number
  let actualMonth: number

  if (month >= 1 && month <= 12) {
    fullYear = 1900 + year
    actualMonth = month
  } else if (month >= 21 && month <= 32) {
    fullYear = 2000 + year
    actualMonth = month - 20
  } else if (month >= 41 && month <= 52) {
    fullYear = 2100 + year
    actualMonth = month - 40
  } else if (month >= 61 && month <= 72) {
    fullYear = 2200 + year
    actualMonth = month - 60
  } else if (month >= 81 && month <= 92) {
    fullYear = 1800 + year
    actualMonth = month - 80
  } else {
    return null
  }

  const birthDate = new Date(fullYear, actualMonth - 1, day)

  if (
    birthDate.getFullYear() !== fullYear ||
    birthDate.getMonth() !== actualMonth - 1 ||
    birthDate.getDate() !== day
  ) {
    return null
  }

  const gender = genderDigit % 2 === 0 ? 'female' : 'male'

  return {
    birthDate,
    gender,
    isValid: true,
  }
}
