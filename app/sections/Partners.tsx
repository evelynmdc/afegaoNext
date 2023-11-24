import { Grid } from "@mui/material";
import { fetchJson } from "./History";

interface IPartner {
  id: number;
  pthPhoto: string;
  datBegin: string;
  datUpdate: string | null;
  indAtivo: boolean;
  image: { title: string; src: string };
}

export async function Partners({ id, title }: TAppProps) {
  let partnersImage = await fetchJson(
    `https://afegao-backend-ti87z.ondigitalocean.app/partners`
  );
  let partnersImageActive = partnersImage.filter(
    (item: IPartner) => item.indAtivo === true
  );
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        width: "100%",
        backgroundColor: "#efd79b",
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
        }}
        className="container"
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "65px",
            color: "#2f5579",
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
            height: "fit-content",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{
              width: "60vw",
            }}
          >
            {partnersImageActive.map((item: IPartner, index: number) => (
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
                <img
                  style={{
                    height: "75px",
                  }}
                  key={item.pthPhoto}
                  src={item.image.src}
                  alt={item.pthPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
}
