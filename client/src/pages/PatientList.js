import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PatientListResults from 'src/components/patient/PatientListResults';
import PatientListToolbar from 'src/components/patient/PatientListToolbar';
import patients from 'src/__mocks__/patients';

const PatientList = () => (
  <>
    <Helmet>
      <title>Patients | E-Pharmacy</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <PatientListToolbar />
        <Box sx={{ pt: 3 }}>
          <PatientListResults patients={patients} />
        </Box>
      </Container>
    </Box>
  </>
);

export default PatientList;
