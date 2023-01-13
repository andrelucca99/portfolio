import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { LayoutBaseDePagina } from '../shared/layouts';

export const PageContato: React.FC = () => {

  return(
    <LayoutBaseDePagina
      titulo='Contato'
    >
      <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 5,
          bgcolor: '#7158e2',
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, }}>
          <Button
              href="https://www.linkedin.com/in/andre-lucas20/"
              target="_blank"
              size="small"
              sx={{ color: "#fff" }}
            >
              Linkedin
          </Button>

          <Button
              href="https://github.com/andrelucca99"
              target="_blank"
              size="small"
              sx={{ color: "#fff" }}
            >
              GitHub
          </Button>
        </Box>
        </Box>
    </LayoutBaseDePagina>
  );
};
