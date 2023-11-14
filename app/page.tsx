import { ScrollButton } from "./components/ScrollButton";
import { Banner } from "./sections/Banner";
import { BreedImages } from "./sections/BreedImages";
import { Contact } from "./sections/Contact";
import { Gallery } from "./sections/Gallery";
import { History } from "./sections/History";
import { Nav } from "./sections/Nav";
import { News } from "./sections/News";
import { Partners } from "./sections/Partners";

export const homePage = "http://localhost:3000";

export default function Home() {
  let menuItems = [
    { name: "História", id: "history" },
    { name: "Fotos Antigas", id: "breedImages" },
    { name: "Filhotes", id: "gallery" },
    { name: "Blog", id: "news" },
    { name: "Parceiros", id: "partners" },
    { name: "Contato", id: "contact" },
  ];

  return (
    <>
      <Nav menuItems={menuItems} />
      <Banner />
      <ScrollButton />
      <History id="history" title="História do Galgo Afegão" />
      <BreedImages id="breedImages" title="Fotos Antigas da Raça" />
      <Gallery id="gallery" title="Nossos Filhotes" />
      <News id="news" title="Blog" />
      <Partners id="partners" title="Parceiros" />
      <Contact id="contact" title="Contato" />
    </>
  );
}
