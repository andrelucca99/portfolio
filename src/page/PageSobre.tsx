import { Box, Container } from '@mui/material';
import { LayoutBaseDePagina } from '../shared/layouts';

export const PageSobre: React.FC = () => {

  return(
    <LayoutBaseDePagina
      titulo='Sobre'
    >
      <Container fixed>
        <Box sx={{ bgcolor: '#fffb11', height: '100vh', }}>
        </Box>
      </Container>
    </LayoutBaseDePagina>
  );
};
