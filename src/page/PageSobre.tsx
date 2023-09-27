import {
  Avatar,
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LayoutBaseDePagina } from "../shared/layouts";
import { medalhas } from "../utils/medalhas";
import { certificados } from "../utils/certificados";

export const PageSobre: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

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
              gap: 2,
              marginLeft: -1,
            }}
          >
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                alignItems: smDown
                  ? "center"
                  : "space-between" && mdDown
                  ? "center"
                  : "space-between" && lgDown
                  ? "center"
                  : "space-between",
                justifyContent: smDown
                  ? "center"
                  : "space-between" && mdDown
                  ? "center"
                  : "space-between" && lgDown
                  ? "center"
                  : "space-between",
                flexDirection: smDown
                  ? "column"
                  : "row" && mdDown
                  ? "column"
                  : "row" && lgDown
                  ? "column"
                  : "row",
              }}
            >
              <Avatar variant="rounded"
                sx={{ width: 250, height: 56, padding: 10 }}
                src="https://www.betrybe.com/static/images/logo-negative-green.svg"
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: lgDown ? "center" : "start",
                  justifyContent: lgDown ? "center" : "space-between",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5" sx={{ padding: 2, textAlign: "center" }}>
                  Formação acadêmica
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    padding: smDown ? 7 : 2,
                    textAlign: smDown
                     ? "justify"
                     : "start",
                  }}>
                  A Trybe é uma a escola de curso livre, orientada para sua carreira em tech.
                  Em 12 meses de estudo torne-se uma pessoa desenvolvedora full-stack pronta para o mercado de trabalho, com a formação exclusiva da Trybe.
                </Typography>

                <Button
                  sx={{
                    backgroundColor: "#138A0F",
                    color: "#FFFFFF",
                    width: "25%"
                  }}
                  href="https://www.betrybe.com/"
                  target="_blank"
                  size="small"
                >
                  Ver página
                </Button>
              </Box>
            </Box>

            <Box
                sx={{
                  width: "100%",
                  height: "280px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Typography variant="h5">Certificados</Typography>

                <Box
                  sx={{
                    width: "100%",
                    height: "250px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <ImageList
                    sx={{
                      width: "100%",
                      height: "200px",
                      paggind: 5,
                    }}
                    cols={4}
                  >
                    {certificados.map((item) => (
                      <ImageListItem key={item.imagem}>
                        <img
                          srcSet={`${item.imagem}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.imagem}?w=164&h=164&fit=crop&auto=format`}
                          alt={item.alt}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>

                </Box>
              </Box>
          </Box>
        </Grid>
      </Grid>
    </LayoutBaseDePagina>
  );
};
