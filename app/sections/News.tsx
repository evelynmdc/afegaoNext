import { Card } from "react-bootstrap";
import { fetchJson } from "./History";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

interface INews {
  id: number;
  pthPhoto: string;
  txtNews: string;
  datBegin: string;
  indAtivo: boolean;
  title: string;
  image: { title: string; src: string };
}

export async function News({ id, title }: TAppProps) {
  let newsImage = await fetchJson(
    `https://afegao-backend-i5gce.ondigitalocean.app/news`
  );
  let newsImageActive = newsImage.filter(
    (item: INews) => item.indAtivo === true
  );
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        width: "100%",
        backgroundColor: "#a1bdd3",
        alignItems: "center",
        overflowX: "hidden",
      }}
      id={id}
    >
      <div
        style={{
          padding: 50,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container"
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "80px",
            color: "#AE8B32",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            overflowX: "hidden",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "50vw",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {newsImageActive.map((item: INews, index: number) => {
              let value = item.txtNews;

              if (item.txtNews.includes(".")) {
                let ponto = item.txtNews.indexOf(".") + 1;
                value = item.txtNews.substring(0, ponto);
              }

              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    style={{
                      width: "100%",
                      display: "inline-flex",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                    key={item.title}
                  >
                    <CardMedia
                      sx={{
                        height: 140,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minWidth: "200px",
                        borderRadius: "5px 5px 0 0",
                      }}
                      image={item.image.src}
                      title={item.title}
                    />
                    <CardContent sx={{ height: "40%" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small">Compartilhar</Button> */}
                      <Button size="small" href="#">
                        Saiba Mais
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </section>
  );
}
