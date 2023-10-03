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
import { projectsHome } from "../mock/projects";

export const Home = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  return (
    <LayoutBaseDePagina titulo="</> André">
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
              Boas-vindas
            </Typography>
            Me chamo André, sou Desenvolverdor Front-end. Apaixonado
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
            display: smDown ? "none" : "flex",
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
              marginRight: mdDown ? 8 : 0,
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingBottom: "50px"
          }}
        >
          <Typography variant="h4" gutterBottom padding={1}>
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

              {projectsHome.map((project) => (
                <Card key={project.id} sx={{ maxWidth: 220, height: 270 }}>
                <CardMedia
                  sx={{ height: 100 }}
                  image={project.image}
                  title={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href={project.site}
                    target="_blank"
                    size="small"
                    disabled={project.site === '' ? true : false }
                  >
                    Site
                  </Button>
                  <Button
                    href={project.repositorio}
                    target="_blank"
                    size="small"
                  >
                    Repositorio
                  </Button>
                </CardActions>
              </Card>
              ))}
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
