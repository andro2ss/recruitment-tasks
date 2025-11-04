export const calculateChecksum = (pesel: string): number => {
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(pesel[i]) * weights[i];
  }
  
  const checksum = (10 - (sum % 10)) % 10;
  return checksum;
};
