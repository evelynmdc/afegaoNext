import { ImageList, ImageListItem } from "@mui/material";
import { fetchJson } from "./History";
import { BreedImagesDialog } from "../components/BreedImagesDialog";
import { useState } from "react";

interface IGallery {
  id: string;
  pthPhoto: string;
  datBegin: string;
  datUpdate: string | null;
  indAtivo: boolean;
  image: { title: string; src: string };
}

export async function Gallery({ id, title }: TAppProps) {
  let gallery = await fetchJson(
    `https://afegao-backend-jqxr4.ondigitalocean.app/gallery`
  );
  let galleryActive = gallery.filter(
    (item: IGallery) => item.indAtivo === true
  );

  // const [open, setOpen] = useState(false);
  // const [src, setSrc] = useState("");

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        width: "100%",
        backgroundColor: "#efd79b",
        alignItems: "center",
      }}
      id={id}
    >
      <div
        style={{
          padding: 50,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
        className="container"
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "80px",
            color: "#2f5579",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          <ImageList
            variant="masonry"
            cols={4}
            gap={10}
            style={{
              boxSizing: "border-box",
            }}
          >
            {galleryActive.map((item: IGallery) => {
              return (
                <ImageListItem
                  key={item.pthPhoto}
                  style={{ cursor: "pointer" }}
                  // onClick={() => {
                  //   setOpen(true);
                  //   setSrc(item.image.src);
                  // }}
                >
                  <img
                    srcSet={`${item.image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.image.src}?w=248&fit=crop&auto=format`}
                    alt="dog"
                    loading="lazy"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
          {/* <BreedImagesDialog
            open={open}
            onClose={() => setOpen(false)}
            src={src}
          /> */}
        </div>
      </div>
    </section>
  );
}
