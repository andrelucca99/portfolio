import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { LayoutBaseDePagina } from '../shared/layouts';

export const PageProjeto: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <LayoutBaseDePagina
      titulo='Projetos'
    >
      <Container fixed sx={{
        bgcolor: '#45aaf2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 5,
      }}>
        <Box sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: smDown ? 'column' : 'row' && mdDown ? 'column' : 'row',
          gap: 1,
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

          <Card sx={{ maxWidth: 220, height: 270 }}>
            <CardMedia
              sx={{ height: 100 }}
              image="https://ckstudiodabeleza.files.wordpress.com/2018/03/em-breve.gif"
              title="Lorem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                disabled
                href="#"
                size="small"
              >
                Site
              </Button>
              <Button
                disabled
                href="#"
                size="small"
              >
                Repositorio
              </Button>
            </CardActions>
          </Card>

        </Box>

        <Box sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: smDown ? 'column' : 'row' && mdDown ? 'column' : 'row',
          gap: 1,
          padding: 1,
        }}>

          <Card sx={{ maxWidth: 220, height: 270 }}>
            <CardMedia
              sx={{ height: 100 }}
              image="https://ckstudiodabeleza.files.wordpress.com/2018/03/em-breve.gif"
              title="Lorem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                disabled
                href="#"
                size="small"
              >
                Site
              </Button>
              <Button
                disabled
                href="#"
                size="small"
              >
                Repositorio
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 220, height: 270 }}>
            <CardMedia
              sx={{ height: 100 }}
              image="https://ckstudiodabeleza.files.wordpress.com/2018/03/em-breve.gif"
              title="Lorem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                disabled
                href="#"
                size="small"
              >
                Site
              </Button>
              <Button
                disabled
                href="#"
                size="small"
              >
                Repositorio
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 220, height: 270 }}>
            <CardMedia
              sx={{ height: 100 }}
              image="https://ckstudiodabeleza.files.wordpress.com/2018/03/em-breve.gif"
              title="Lorem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                disabled
                href="#"
                size="small"
              >
                Site
              </Button>
              <Button
                disabled
                href="#"
                size="small"
              >
                Repositorio
              </Button>
            </CardActions>
          </Card>

        </Box>

      </Container>
    </LayoutBaseDePagina>
  );
};
