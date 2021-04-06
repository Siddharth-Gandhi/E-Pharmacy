import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import MedicineListToolbar from 'src/components/medicine/MedicineListToolbar';
import MedicineCard from 'src/components/medicine//MedicineCard';
import medicines from 'src/__mocks__/medicines';

const MedicineList = () => (
  <>
    <Helmet>
      <title>Medicines | E-Pharmacy</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <MedicineListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {medicines.map((medicine) => (
              <Grid
                item
                key={medicine.id}
                lg={4}
                md={6}
                xs={12}
              >
                <MedicineCard medicine={medicine} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default MedicineList;
