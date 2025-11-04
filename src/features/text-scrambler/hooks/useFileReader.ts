import { useState, useCallback } from 'react'

interface UseFileReaderResult {
  content: string | null
  fileName: string | null
  isLoading: boolean
  error: string | null
  readFile: (file: File) => void
  reset: () => void
}

export const useFileReader = (): UseFileReaderResult => {
  const [content, setContent] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const readFile = useCallback((file: File) => {
    if (!file) {
      setError('No file selected')
      return
    }

    if (!file.type.includes('text')) {
      setError('Please upload a text file')
      return
    }

    setIsLoading(true)
    setError(null)

    const reader = new FileReader()

    reader.onload = (e) => {
      const text = e.target?.result as string
      setContent(text)
      setFileName(file.name)
      setIsLoading(false)
    }

    reader.onerror = () => {
      setError('Failed to read file')
      setIsLoading(false)
    }

    reader.readAsText(file, 'UTF-8')
  }, [])

  const reset = useCallback(() => {
    setContent(null)
    setFileName(null)
    setError(null)
    setIsLoading(false)
  }, [])

  return {
    content,
    fileName,
    isLoading,
    error,
    readFile,
    reset,
  }
}
