import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material';
import { LayoutBaseDePagina } from '../shared/layouts';

export const PageSobre: React.FC = () => {
  const theme = useTheme();

  const medalhas = [
    {
      imagem: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png',
      name: 'HTML',
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/250px-CSS3_logo.svg.png',
      name: 'CSS',
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      name: 'JavaScript',
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      name: 'REACT',
    },
    {
      imagem: 'https://testing-library.com/img/octopus-128x128.png',
      name: 'Testing Library',
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
      name: 'TypeScript',
    },
  ];

  return(
    <LayoutBaseDePagina
      titulo='Sobre'
    >
      <Grid container spacing={5} sx={{ padding: 4, color: "#fff" }}>
        <Grid item xs={6} md={8}>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            padding="15px"
            bgcolor="#45aaf2"
            borderRadius="5px 0 0 5px"
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
            gap: 1,
            bgcolor: "#45aaf2",
            marginTop: 5,
            borderRadius: '0 10px 10px 0',
            height: 226,
          }}>
          <Avatar
            sx={{
              height: theme.spacing(20),
              width: theme.spacing(20),
              borderRadius: '10px',
            }}
            src="https://avatars.githubusercontent.com/u/66281231?v=4" 
          />
          <Typography>Desenvolvedor Front-End</Typography>
        </Grid>
        <Grid item xs={6} md={12}>
          <Box sx={{
              height: 150,
              bgcolor: "#45aaf2",
              borderRadius: 1,
              padding: 1,
            }}
          >
            <Typography variant="h5">Habilidades:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              {medalhas.map(item => (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  padding: 1,
                }}>
                  <Avatar src={item.imagem} />
                  <Typography>{item.name}</Typography>  
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </LayoutBaseDePagina>
  );
};
