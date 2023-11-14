import background from "../images/abdul-wali-totakhail-gHT4cqg9vYI-unsplash.jpg";

export const Banner = () => {
  return (
    <section
      id="banner"
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    ></section>
  );
};
