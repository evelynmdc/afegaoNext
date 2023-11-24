// "use client";

import { ImageList, ImageListItem } from "@mui/material";
import { fetchJson } from "./History";
// import { BreedImagesDialog } from "../components/BreedImagesDialog";
// import { useState } from "react";

interface IBreedImages {
  datBegin: string;
  datUpdate: string | null;
  id: number;
  image: { src: string; title: string };
  indAtivo: boolean;
  pthPhoto: string;
}

export async function BreedImages({ id, title }: TAppProps) {
  let breedImage = await fetchJson(
    `https://afegao-backend-ti87z.ondigitalocean.app/breedImages`
  );
  let breedImageActive = breedImage.filter(
    (item: IBreedImages) => item.indAtivo === true
  );

  // const [open, setOpen] = useState(false);
  // const [src, setSrc] = useState("");

  // function handleClose() {
  //   setOpen(false);
  // }

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        width: "100%",
        backgroundColor: "#a1bdd3",
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
            color: "#AE8B32",
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
            {breedImageActive.map((item: IBreedImages) => {
              return (
                <ImageListItem
                  key={item.pthPhoto}
                  style={{ cursor: "pointer" }}
                  // onClick={() => {
                  //   setOpen(open);
                  //   setSrc(src);
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
          {/* <BreedImagesDialog open={open} onClose={handleClose} src={src} /> */}
        </div>
      </div>
    </section>
  );
}
