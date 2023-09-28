import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LayoutBaseDePagina } from "../shared/layouts";
import { pageProjects } from "../mock/projects";

export const PageProjeto: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <LayoutBaseDePagina titulo="</> Projetos">
      <Container
        fixed
        sx={{
          bgcolor: "#025581",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            padding: 1,
            display: "grid",
            gridTemplateColumns: smDown
              ? "repeat(2, 1fr)"
              : "repeat(2, 1fr)" && mdDown
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)" && lgDown
              ? "repeat(3, 1fr)"
              : "repeat(3, 1fr)",
            gridColumnGap: "1em",
            gridRowGap: "5em",
          }}
        >
          {pageProjects.map((project) => (
            <Card key={project.id} sx={{ maxWidth: 220, height: 270 }}>
              <CardMedia
                sx={{ height: 100 }}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: smDown
                      ? "15px"
                      : "15px" && mdDown
                      ? "15px"
                      : "18px" && lgDown
                      ? "18px"
                      : "20px",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {project.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: smDown
                      ? "12px"
                      : "12px" && mdDown
                      ? "12px"
                      : "12px" && lgDown
                      ? "12px"
                      : "12px",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    fontSize: smDown
                      ? "8px"
                      : "12px" && mdDown
                      ? "12px"
                      : "12px" && lgDown
                      ? "12px"
                      : "15px",
                  }}
                  href={project.site}
                  target="_blank"
                  size="small"
                  disabled={project.site === '' ? true : false }
                >
                  Site
                </Button>
                <Button
                  sx={{
                    fontSize: smDown
                      ? "8px"
                      : "12px" && mdDown
                      ? "12px"
                      : "12px" && lgDown
                      ? "12px"
                      : "15px",
                  }}
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
    </LayoutBaseDePagina>
  );
};
