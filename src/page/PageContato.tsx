import { Box, Button, Container, TextField } from '@mui/material';
import { LayoutBaseDePagina } from '../shared/layouts';

export const PageContato: React.FC = () => {

  return(
    <LayoutBaseDePagina
      titulo='Contato'
    >
      <Container fixed>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          bgcolor: '#7158e2',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 2,
            width: 400,
          }}>
            <TextField
              sx={{ width: 300, marginBottom: 1, bgcolor: '#f6f6f6', }}
              label="Nome"
            />
            <TextField label="Email" sx={{ width: 300, marginBottom: 1, bgcolor: '#f6f6f6', }} />
            <TextField sx={{ width: 300, bgcolor: '#f6f6f6', }}
              label="Messagem"
              multiline
              rows={5}
            />
            <Button
              sx={{ bgcolor: '#432ea1', color: "#fff", margin: 1, }}
              // disabled
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Container>
    </LayoutBaseDePagina>
  );
};
