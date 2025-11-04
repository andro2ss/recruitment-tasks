import { describe, it, expect } from 'vitest'
import { validatePesel } from '../utils/validatePesel'

describe('validatePesel', () => {
  it('should return true for valid PESEL number', () => {
    expect(validatePesel('44051401458')).toBe(true)
    expect(validatePesel('02070803628')).toBe(true)
  })

  it('should return false for PESEL with invalid checksum', () => {
    expect(validatePesel('44051401459')).toBe(false)
    expect(validatePesel('12345678901')).toBe(false)
  })

  it('should return false for PESEL with wrong length', () => {
    expect(validatePesel('440514014')).toBe(false)
    expect(validatePesel('440514014588')).toBe(false)
    expect(validatePesel('')).toBe(false)
  })

  it('should return false for PESEL with non-numeric characters', () => {
    expect(validatePesel('4405140145A')).toBe(false)
    expect(validatePesel('44051401-58')).toBe(false)
    expect(validatePesel('44 05 14 01458')).toBe(false)
  })

  it('should return false for PESEL with invalid date', () => {
    expect(validatePesel('99999999999')).toBe(false)
    expect(validatePesel('44132001458')).toBe(false)
  })

  it('should return false for all zeros', () => {
    expect(validatePesel('00000000000')).toBe(false)
  })
})
