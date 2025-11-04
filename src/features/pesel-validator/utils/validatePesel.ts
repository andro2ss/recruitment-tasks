import { calculateChecksum } from './peselChecksum'
import { extractPeselData } from './extractPeselData'

export const validatePesel = (pesel: string): boolean => {
  if (!pesel || pesel.length !== 11) {
    return false
  }

  if (!/^\d{11}$/.test(pesel)) {
    return false
  }

  const checksum = calculateChecksum(pesel)
  const lastDigit = parseInt(pesel[10])

  if (checksum !== lastDigit) {
    return false
  }

  const data = extractPeselData(pesel)
  if (!data) {
    return false
  }

  return true
}
