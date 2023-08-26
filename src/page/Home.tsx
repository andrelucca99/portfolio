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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LayoutBaseDePagina } from "../shared/layouts";

export const Home = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  return (
    <LayoutBaseDePagina titulo="Olá, Seja bem vindo! ">
      <Grid
        container
        spacing={10}
        sx={{
          display: "flex",
          alignItens: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={8}
          sx={{
            bgcolor: "#025581",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              padding: 5,
              lineHeight: 2,
              color: "#fff",
              textAlign: "justify",
            }}
          >
            <Typography
              sx={{
                marginBottom: 2,
              }}
            >
              Olá, Seja bem vindo!
            </Typography>
            Me chamo André Lucas, sou Desenvolverdor Front-end. Sou apaixonado
            por Tecnologia e por tudo que ela pode criar em diferentes cenários
            ao meu redor, busco por desenvolver soluções que possam gerar um
            impacto positivo na vida das pessoas, sempre priorizando a
            inovação...
            <br />
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate("/sobre")}
              sx={{
                color: "#fff",
                bgcolor: "#5d9acb",
                padding: 1,
                border: "none",
                marginTop: 1,
              }}
            >
              Saiba mais
            </Button>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#025581",
          }}
        >
          <Avatar
            sx={{
              height: theme.spacing(20),
              width: theme.spacing(20),
              border: "2px solid #206c9a",
            }}
            src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47oz1ey4dlvjq9lkh4g9u5tprizv0rw4oh0fzxxybm&rid=giphy.gif&ct=g"
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            padding: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <Typography variant="h5" gutterBottom padding={1}>
            Projetos
          </Typography>

          <Container fixed>
            <Box
              sx={{
                bgcolor: "#025581",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: smDown
                  ? "column"
                  : "row" && mdDown
                  ? "column"
                  : "row",
                gap: 5,
                padding: 2,
                borderRadius: 2,
              }}
            >
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
                    Nesse projeto, foi desenvolvido uma página de e-commerce de
                    produtos.
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
                    Nessa aplicação você poderá criar um CRUD de cadastros de
                    pessoa e cidades.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button disabled href="#" target="_blank" size="small">
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
                  image="https://andrelucca99.github.io/img/star.gif"
                  title="Star Wars"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Star Wars
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nesse Projeto, foi construído um Dashboard com o tema de
                    Star Wars.
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
            </Box>
          </Container>

          <Button
            onClick={() => navigate("/projetos")}
            sx={{ background: "#206c9a", marginTop: "50px" }}
          >
            <Icon fontSize="large">add</Icon>
          </Button>
        </Grid>
      </Grid>
    </LayoutBaseDePagina>
  );
};
