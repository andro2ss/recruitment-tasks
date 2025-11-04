import { Box } from '@mui/material'
import { PeselForm } from '../features/pesel-validator/components/PeselForm'
import { PageHeader } from '../components/molecules/PageHeader'
import { PageTitle } from '../components/atoms/PageTitle'
import { PageDescription } from '../components/atoms/PageDescription'

export const PeselValidatorPage = () => {
  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', py: { xs: 2, md: 4 } }}>
      <PageHeader>
        <PageTitle>PESEL Validator</PageTitle>
        <PageDescription>
          Validate Polish PESEL identification numbers according to official specification.
        </PageDescription>
      </PageHeader>

      <PeselForm />
    </Box>
  )
}
