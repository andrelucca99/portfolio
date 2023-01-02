import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LayoutBaseDePagina } from '../shared/layouts';

export const Home = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate();

  return (
    <LayoutBaseDePagina
      titulo="</>"
    >
      <Grid container spacing={2} sx={{padding: 4}}>
        <Grid item xs={8} sx={{bgcolor: "#7158e2", padding: 1, marginBottom: 5}}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              bgcolor: "#7158e2",
              lineHeight: 2,
              padding: 3,
              color: "#fff",
            }}
          >
            Olá, seja bem vindo! me chamo André Lucas, sou um jovem padawan na área de desenvolvimento web. Sou uma pessoa que ama Tecnologia e tudo que ela pode proporcionar para o mundo. Comecei essa minha jornada, com um curso de Web Designer em 2015, apesar de não saber muito bem do que se tratava naquela época, com o decorrer do curso fui apredendo e me interessado por essa área...
          </Typography>

          <Button
            onClick={() => navigate('/sobre')}
            sx={{ bgcolor: '#432ea1', marginTop: 1, color: "#fff", padding: 1 }}
          >
            Saiba mais
          </Button>
        </Grid>

        <Grid item xs={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 5,
            bgcolor: "#7158e2",
          }}>
          <Avatar
            sx={{ bgcolor: "#faf8f3", height: theme.spacing(15), width: theme.spacing(15) }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Antu_text-x-dtd.svg/1024px-Antu_text-x-dtd.svg.png" 
          />
        </Grid>

        <Grid
          item
          xs={12} sm={12} md={12} lg={12} xl={12}
          sx={{
            padding: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: '0 auto',
          }}
          >
          <Typography
            variant="h5"
            gutterBottom
            padding={1}
          >
            Projetos
          </Typography>

          <Container fixed>
            <Box sx={{
              bgcolor: '#7158e2',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: smDown ? 'column' : 'row' && mdDown ? 'column' : 'row',
              gap: 5,
              padding: 1,
            }}>
              <Card sx={{ maxWidth: 220, height: 270 }}>
                <CardMedia
                  sx={{ height: 100 }}
                  image="https://andrelucca99.github.io/img/livro.gif"
                  title="Os 3 porquinhos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Os 3 porquinhos
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Projeto, para treinar meu HTML e CSS e com uma ajudinha de JavaScript.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href="https://book-orpin.vercel.app/"
                    size="small"
                  >
                    Site
                  </Button>
                  <Button
                    href="https://github.com/andrelucca99/Book/"
                    size="small"
                  >
                    Repositorio
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 220, height: 270 }}>
                <CardMedia
                  sx={{ height: 100 }}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6ouqex9e1euKj52RpTEKTpePVPBKcvHOSQ&usqp=CAU"
                  title="Corderl Moderno"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cordel Moderno
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Esse projeto foi desenvolvido para treino de HTML e CSS.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href="https://projeto-cordel-psi.vercel.app/"
                    size="small"
                  >
                    Site
                  </Button>
                  <Button
                    href="https://github.com/andrelucca99/projeto-cordel"
                    size="small"
                  >
                    Repositorio
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 220, height: 270 }}>
                <CardMedia
                  sx={{ height: 100 }}
                  image="https://andrelucca99.github.io/img/star.gif"
                  title="Star Wars"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Star Wars
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Projeto, para treinar meu HTML e CSS e com uma ajudinha de JavaScript.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href="https://dashboard-star-wars-one.vercel.app/"
                    size="small"
                  >
                    Site
                  </Button>
                  <Button
                    href="https://github.com/andrelucca99/Dashboard_Star-Wars"
                    size="small"
                  >
                    Repositorio
                  </Button>
                </CardActions>
              </Card>

            </Box>
          </Container>

          <Button
            onClick={() => navigate('/projetos')}
            sx={{ background: '#7158e2', marginTop: '30px' }}
          >
            <Icon
              fontSize="large"
            >
              add
            </Icon>
          </Button>

        </Grid>
        
      </Grid>
      
    </LayoutBaseDePagina>
  );
};
