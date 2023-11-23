// "use client";

import "../assets/css/styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";
// import { fetchJson } from "./History";

// interface IContactActive {
//   Email: string;
//   Endereco: string;
//   Profiles: { Facebook: string; Instagram: string };
//   Telefone: number;
//   id: number;
//   indAtivo: boolean;
// }

export async function Contact({ id, title }: TAppProps) {
  // let contact = await fetchJson(`https://afegao-backend-i5gce.ondigitalocean.app/contact`);
  // let contactActive = contact.filter(
  //   (item: IContactActive) => item.indAtivo === true
  // );
  // let profiles = Object.values(contactActive[0].Profiles);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#B58B4C",
        alignItems: "center",
        overflowX: "hidden",
      }}
      id={id}
    >
      <div
        style={{
          padding: "50px 0",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          width: "50vw",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "65px",
            color: "#f6e3c6",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            overflowX: "hidden",
            display: "flex",
            flexWrap: "wrap",
            height: "fit-content",
          }}
        >
          <div className="footer">
            <div className="footer-info">
              <HomeIcon
                style={{
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "large",
                }}
              />
              <span key="endereco" className="footer-span">
                rua tal numero 69
              </span>
            </div>

            <div className="footer-info">
              <LocalPhoneIcon
                style={{
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "large",
                }}
              />
              <span className="footer-span" key="telefone">
                22222222
              </span>
            </div>

            <div className="footer-info" style={{ marginBottom: "10px" }}>
              <EmailIcon
                style={{
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "large",
                }}
              />
              <span
                style={{
                  display: "block",
                }}
                key="email"
                className="footer-span"
              >
                contact@eml.com
              </span>
            </div>

            <div>
              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`https://www.instagram.com/roierr/`}
                >
                  <IconButton size="large" style={{ paddingLeft: 0 }}>
                    <InstagramIcon />
                  </IconButton>
                </a>
              </span>

              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`https://www.facebook.com/evelynmartinsdecarvalho`}
                >
                  <IconButton size="large" style={{ paddingLeft: 5 }}>
                    <FacebookIcon />
                  </IconButton>
                </a>
              </span>
            </div>
          </div>
          <div className="footer">
            <div style={{ marginBottom: "20px" }}>
              <h5
                style={{
                  marginBottom: 15,
                  color: "rgba(0, 0, 0, 0.54)",
                  fontSize: "21px",
                }}
              >
                Fale Conosco:
              </h5>
              <p style={{ marginBottom: 0 }}>Preencha o formulário abaixo</p>
              <p>e um de nossos consultores entrará em contato</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
