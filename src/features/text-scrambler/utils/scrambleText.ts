import { processWord } from './wordProcessor';

export const scrambleText = (text: string): string => {
  const lines = text.split('\n');
  
  const scrambledLines = lines.map((line) => {
    const words = line.split(/(\s+)/);
    
    const scrambledWords = words.map((word) => {
      if (/^\s+$/.test(word)) {
        return word;
      }
      return processWord(word);
    });
    
    return scrambledWords.join('');
  });
  
  return scrambledLines.join('\n');
};
