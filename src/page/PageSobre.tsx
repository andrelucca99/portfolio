import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LayoutBaseDePagina } from "../shared/layouts";
import { medalhas } from "../utils/medalhas";

export const PageSobre: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  // const medalhas = [
  //   {
  //     imagem: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
  //     name: "HTML",
  //   },
  //   {
  //     imagem:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/250px-CSS3_logo.svg.png",
  //     name: "CSS",
  //   },
  //   {
  //     imagem:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  //     name: "JavaScript",
  //   },
  //   {
  //     imagem:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  //     name: "REACT",
  //   },
  //   {
  //     imagem: "https://testing-library.com/img/octopus-128x128.png",
  //     name: "Testing Library",
  //   },
  //   {
  //     imagem:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  //     name: "TypeScript",
  //   },
  // ];

  return (
    <LayoutBaseDePagina titulo="Sobre">
      <Grid container spacing={1} sx={{ padding: 4, color: "#fff" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
            bgcolor: "#025581",
            borderRadius: 1,
          }}
        >
          <Avatar
            sx={{
              height: theme.spacing(20),
              width: theme.spacing(20),
            }}
            src="https://avatars.githubusercontent.com/u/66281231?v=4"
          />
          <Typography variant="h6">Desenvolvedor Front-End</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              padding: 5,
              marginTop: smDown ? 1 : 1 && lgDown ? -1 : -1,
              marginLeft: smDown ? -1 : -1 && mdDown ? -1 : 1,
              lineHeight: 2,
              bgcolor: "#025581",
              borderRadius: 1,
              textAlign: "justify",
            }}
          >
            <Typography variant="subtitle1">
              Me chamo André Lucas, sou Desenvolverdor Front-end. Sou apaixonado
              por Tecnologia e por tudo que ela pode criar em diferentes
              cenários ao meu redor, busco por desenvolver soluções que possam
              gerar um impacto positivo na vida das pessoas, sempre priorizando
              a inovação e a acessibilidade. Agora estudo Desenvolvimento Web na
              Trybe, uma escola que ensina a programar, a aprender e a
              trabalhar.
            </Typography>
            <Typography
              sx={{ textAlign: "center", marginTop: 2, fontSize: 15 }}
            >
              "Sucesso é encontrar aquilo que se tenciona ser e depois fazer o
              que é necessário para isso."
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            sx={{
              bgcolor: "#025581",
              borderRadius: 1,
              padding: 1,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: -1,
            }}
          >
            <Typography variant="h4" sx={{ padding: 2, alignItems: "center" }}>
              Habilidades Técnicas
            </Typography>

            <Grid
              item
              xs={12}
              sm={2}
              md={2}
              lg={2}
              xl={2}
              sx={{
                padding: 1,
                marginLeft: smDown ? 5 : -5 && mdDown ? -5 : -5,
                display: "grid",
                gridTemplateColumns: smDown
                  ? "repeat(2, 1fr)"
                  : "repeat(2, 1fr)" && mdDown
                  ? "repeat(2, 1fr)"
                  : "repeat(3, 2fr)" && lgDown
                  ? "repeat(3, 2fr)"
                  : "repeat(3, 2fr)",
                gridColumnGap: "2em",
                gridRowGap: "2em",
              }}
            >
              {medalhas.map((item) => (
                <Grid key={item.name}>
                  <Avatar sx={{ marginLeft: 1 }} src={item.imagem} />
                  <Typography sx={{ textAlign: "center" }}>
                    {item.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            sx={{
              bgcolor: "#025581",
              borderRadius: 1,
              padding: 1,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: -1,
            }}
          >
            <Typography variant="h4" sx={{ padding: 2, alignItems: "center" }}>
              Formação
            </Typography>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                width: "100%",
                // backgroundColor: "red",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "10px"
              }}
            >
              <Box
                sx={{
                  width: "300px",
                  height: "150px",
                  // backgroundColor: "yellow",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://www.betrybe.com/static/images/logo-negative-green.svg"
                />
              </Box>

              <Box
                sx={{
                  width: "700px",
                  height: "160px",
                  // backgroundColor: "blue",
                }}
              >
                <Typography variant="body1">
                  A Trybe é uma a escola mais orientada para sua carreira em tech.
                  Em 12 meses de estudo torne-se uma pessoa desenvolvedora full-stack pronta para o mercado de trabalho, com a formação exclusiva da Trybe.
                </Typography>

                <Button
                  sx={{ background: "#206c9a", marginTop: "50px" }}
                >
                  <Link
                    href="https://www.betrybe.com/"
                    underline="none"
                    color="white"
                  >Saiba mais</Link>
                </Button>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  height: "280px",
                  // backgroundColor: "green",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Typography variant="h5">Certificados</Typography>

                <Box
                  sx={{
                    width: "100%",
                    height: "250px",
                    // backgroundColor: "pink",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "25%",
                      height: "200px",
                      backgroundColor: "#DFF6DB",
                    }}
                  >modulo 1</Box>

                  <Box
                    sx={{
                      width: "25%",
                      height: "200px",
                      backgroundColor: "#DFF6DB"
                    }}
                  >modulo 2</Box>

                  <Box
                    sx={{
                      width: "25%",
                      height: "200px",
                      backgroundColor: "#DFF6DB"
                    }}
                  >modulo 3</Box>

                  <Box
                    sx={{
                      width: "25%",
                      height: "200px",
                      backgroundColor: "#DFF6DB"
                    }}
                  >modulo 4</Box>
                </Box>
              </Box>
            </Grid>

          </Box>
        </Grid>
      </Grid>
    </LayoutBaseDePagina>
  );
};
