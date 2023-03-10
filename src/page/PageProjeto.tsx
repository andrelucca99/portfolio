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
        bgcolor: '#7158e2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 1,
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
                target="_blank"
                size="small"
              >
                Site
              </Button>
              <Button
                href="https://github.com/andrelucca99/Book/"
                target="_blank"
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
                Nesse Projeto, foi constru??do um Dashboard com o tema de Star Wars.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="https://dashboard-star-wars-one.vercel.app/"
                target="_blank"
                size="small"
              >
                Site
              </Button>
              <Button
                href="https://github.com/andrelucca99/Dashboard_Star-Wars"
                target="_blank"
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
                target="_blank"
                size="small"
              >
                Site
              </Button>
              <Button
                href="https://github.com/andrelucca99/projeto-cordel"
                target="_blank"
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
              image="https://github.com/andrelucca99/react-typescript-material-ui/raw/master/src/app.gif"
              title="Cadastros de pessoas"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cadastros
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nessa aplica????o voc?? poder?? criar um CRUD de cadastros de pessoa e cidades.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                disabled
                href="#"
                target="_blank"
                size="small"
              >
                Site
              </Button>
              <Button
                href="https://github.com/andrelucca99/react-typescript-material-ui"
                target="_blank"
                size="small"
              >
                Repositorio
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 220, height: 270 }}>
            <CardMedia
              sx={{ height: 100 }}
              image="https://cdn.dribbble.com/users/1342137/screenshots/9193455/planets_cover_4x.jpg"
              title="Star Wars"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Star Wars Planets
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Foi desenvolvido uma lista com filtros de planetas do universo de Star Wars
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                disabled
                href="#"
                target="_blank"
                size="small"
              >
                Site
              </Button>
              <Button
                href="https://github.com/andrelucca99/star-wars-planets"
                target="_blank"
                size="small"
              >
                Repositorio
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 220, height: 270 }}>
            <CardMedia
              sx={{ height: 100 }}
              image="https://weethub.com/wp-content/uploads/2016/08/erros-no-e-commerce-o-que-nunca-fazer-na-sua-loja-virtual_15320171852530.jpg"
              title="E-commerce"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                E-commerce
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nesse projeto, foi desenvolvido uma p??gina de e-commerce de produtos.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="https://e-commerce-eight-plum.vercel.app/"
                target="_blank"
                size="small"
              >
                Site
              </Button>
              <Button
                href="https://github.com/andrelucca99/E-COMMERCE"
                target="_blank"
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
