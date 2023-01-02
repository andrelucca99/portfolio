import { Avatar, Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { LayoutBaseDePagina } from '../shared/layouts';

export const PageSobre: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
      <Grid container item spacing={5} sx={{ padding: 4, color: "#fff" }}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              padding: 4,
              lineHeight: 2,
              bgcolor: "#7158e2",
              borderRadius: "5px 0 0 5px",
            }}
          >
            Olá me chamo André Lucas, sou um jovem padawan na área de desenvolvimento web. Sou uma pessoa que ama Tecnologia e tudo que ela pode proporcionar para o mundo. Comecei essa minha jornada, com um curso de Web Designer em 2015, apesar de não saber muito bem do que se tratava naquela época, com o decorrer do curso fui apredendo e me interessado por essa área. Agora estudo Desenvolvimento Web na Trybe, uma escola que ensina a programar, a aprender e a trabalhar. Trabalho e acredito em ações que possam gerar um impacto positivo na vida das pessoas.
          </Typography>
        </Grid>
        <Grid
          item
          xs={4} sm={4} md={4} lg={4} xl={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            bgcolor: "#7d5fff",
            borderRadius: '0 10px 10px 0',
            marginTop: 5,
            padding: 2,
          }}>
          <Avatar
            sx={{
              height: theme.spacing(15),
              width: theme.spacing(15),
              borderRadius: '10px',
            }}
            src="https://avatars.githubusercontent.com/u/66281231?v=4" 
          />
          <Typography variant="h6">Desenvolvedor Front-End</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box sx={{
              bgcolor: "#7158e2",
              borderRadius: 1,
              padding: 1,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5">Habilidades</Typography>

            <Box>
              <Grid
                item
                xs={12} sm={2} md={2} lg={2} xl={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: smDown ? 'column' : 'row' && mdDown ? 'column' : 'row',
                  gap: 8,
                  padding: 1,
                }}
              >
                {medalhas.map(item => (
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                  >
                    <Avatar src={item.imagem} />
                    <Typography>{item.name}</Typography> 
                  </Box> 
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </LayoutBaseDePagina>
  );
};
