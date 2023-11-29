import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

export function fetchJson(url: string) {
  return fetch(url).then((r) => {
    return r.json();
  });
}

interface IDogHistory {
  id: number;
  pthPhoto: string;
  txtHistory: string;
  datBegin: string;
  indAtivo: boolean;
  image: { title: string; src: string };
}

export async function History({ id, title }: TAppProps) {
  let dogHistory = await fetchJson(
    `https://afegao-backend-yevba.ondigitalocean.app/dogHistory`
  );
  let dogHistoryActive = dogHistory.filter(
    (item: IDogHistory) => item.indAtivo === true
  );
  return (
    <div
      style={{
        backgroundColor: "#efd79b",
        zIndex: 10,
        borderTop: "1px solid #c4a75e",
        boxShadow: "0 -1px 3px #c4a75e",
      }}
      id={id}
      className="sections"
    >
      <div
        className="container"
        style={{
          display: "block",
          margin: "0 auto",
        }}
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

        <Carousel
          fade
          style={{
            backgroundColor: "#fff",
            borderRadius: "4px",
            height: "100%",
            width: "100%",
          }}
          id="carousel-lg"
        >
          {dogHistoryActive.map((element: IDogHistory) => {
            return (
              <CarouselItem
                interval={5000}
                key={element.pthPhoto}
                style={{ overflowY: "hidden", height: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "100%",
                    }}
                  >
                    <img
                      alt="dog"
                      className="d-block w-100"
                      src={`https://afegao-backend-yevba.ondigitalocean.app/files/${element.pthPhoto}`}
                      style={{ height: "400px" }}
                    />
                  </div>
                  <div
                    style={{
                      width: "50%",
                      height: "100%",
                      padding: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        padding: "50px",
                        paddingLeft: "70px",
                        width: "50%",
                        height: "70%",
                        border: "7px solid #7198FA",
                        textAlign: "center",
                        position: "absolute",
                        left: "30vw",
                        color: "blue",
                      }}
                    >
                      {element.txtHistory}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </Carousel>

        <Carousel
          fade
          style={{
            backgroundColor: "lightgray",
            borderRadius: "4px",
            height: "100%",
            width: "100%",
          }}
          id="carousel-sm"
        >
          {dogHistoryActive.map((element: IDogHistory) => {
            return (
              <CarouselItem
                interval={5000}
                key={element.pthPhoto}
                style={{ overflowY: "hidden", height: "fit-content" }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      alt="dog"
                      className="d-block w-100"
                      src={`https://afegao-backend-yevba.ondigitalocean.app/files/${element.pthPhoto}`}
                      style={{ height: "400px" }}
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "0",
                      display: "flex",
                      alignItems: "center",
                      position: "absolute",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        height: "100%",
                        width: "100%",
                        textAlign: "center",
                        backgroundColor: "rgba(113,152,250,0.3)",
                        left: "30vw",
                        color: "white",
                        margin: "0 auto",
                      }}
                    >
                      {element.txtHistory}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
