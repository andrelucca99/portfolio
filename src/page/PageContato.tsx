import { Box, Container } from '@mui/material';
import { LayoutBaseDePagina } from '../shared/layouts';

export const PageContato: React.FC = () => {

  return(
    <LayoutBaseDePagina
      titulo='Contato'
    >
      <Container fixed>
        <Box sx={{ bgcolor: '#031cfa', height: '100vh', }} />
      </Container>
    </LayoutBaseDePagina>
  );
};
