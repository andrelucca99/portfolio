import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material';
import { LayoutBaseDePagina } from '../shared/layouts';

export const PageSobre: React.FC = () => {
  const theme = useTheme();

  return(
    <LayoutBaseDePagina
      titulo='Sobre'
    >
      <Grid container spacing={5} sx={{ padding: 5 }}>
        <Grid item xs={6} md={8}>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            padding="15px"
            bgcolor="#5f70ad"
            borderRadius='5px'
            color="#e7e8eb"
          >
            Olá me chamo André Lucas, sou um jovem padawan na área de desenvolvimento web. Sou uma pessoa que ama Tecnologia e tudo que ela pode proporcionar para o mundo. Comecei essa minha jornada, com um curso de Web Designer em 2015, apesar de não saber muito bem do que se tratava naquela época, com o decorrer do curso fui apredendo e me interessado por essa área. Agora estudo Desenvolvimento Web na Trybe, uma escola que ensina a programar, a aprender e a trabalhar. Trabalho e acredito em ações que possam gerar um impacto positivo na vida das pessoas.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: 5,
            gap: 1,
          }}>
          <Avatar
            sx={{ height: theme.spacing(20), width: theme.spacing(20) }}
            src="https://avatars.githubusercontent.com/u/66281231?v=4" 
          />
          <Typography>Desenvolvedor Front-End</Typography>
        </Grid>
        <Grid item xs={6} md={12}>
          <Box sx={{
              height: 150,
              bgcolor: "#5f70ad",
              borderRadius: 1,
              color: "#fff",
            }}
          >
            teste
          </Box>
        </Grid>
      </Grid>
    </LayoutBaseDePagina>
  );
};
