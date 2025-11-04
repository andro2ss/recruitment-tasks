import { Button, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useRef, useState } from 'react'

const UploadArea = styled(Paper)<{ isDragging: boolean }>(({ theme, isDragging }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
  border: `2px dashed ${isDragging ? theme.palette.primary.main : theme.palette.divider}`,
  background: isDragging ? 'rgba(25, 118, 210, 0.08)' : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    background: 'rgba(25, 118, 210, 0.08)',
    transform: 'translateY(-2px)',
  },
}))

const HiddenInput = styled('input')({
  display: 'none',
})

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void
  fileName: string | null
}

export const FileUploadZone = ({ onFileSelect, fileName }: FileUploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      onFileSelect(files[0])
    }
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      onFileSelect(files[0])
    }
  }

  return (
    <>
      <HiddenInput
        ref={inputRef}
        type="file"
        accept=".txt,text/plain"
        onChange={handleFileChange}
      />

      <UploadArea
        isDragging={isDragging}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        elevation={isDragging ? 4 : 1}
      >
        <CloudUploadIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          {fileName ? fileName : 'Drop your text file here'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          or click to browse
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Choose File
        </Button>
      </UploadArea>
    </>
  )
}
