"use client";

import { useState } from "react";

export function ContactForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [textValue, setTextValue] = useState("");
  return (
    <form
      method="POST"
      action={`https://afegao-backend-ti87z.ondigitalocean.app/messages`}
      onSubmit={() => {
        document.getElementById("messageSent")!.innerText =
          "Agradecemos pela mensagem!";
        setTimeout(() => {
          document.getElementById("messageSent")!.innerHTML = "";
        }, 5000);
      }}
    >
      <input
        type="text"
        name="nmeMessage"
        id="nmeMessage"
        className="textField"
        placeholder="Nome"
        // variant="outlined"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <input
        type="email"
        name="emlMessage"
        id="emlMessage"
        className="textField"
        placeholder="Email"
        // variant="outlined"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="tel"
        name="phnMessage"
        id="phnMessage"
        className="textField"
        placeholder="Telefone"
        // variant="outlined"
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
      />
      <textarea
        name="txtMessage"
        id="txtMessage"
        placeholder="Digite sua mensagem aqui..."
        className="textField"
        rows={3}
        style={{
          outline: "0px none transparent",
          resize: "none",
          height: "fit-content",
        }}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span id="messageSent" style={{ color: "#fff" }}></span>
        <input
          style={{
            backgroundColor: "rgba(0,0,0,0.54)",
            border: 0,
            width: "30%",
          }}
          type="submit"
          className="footer-submit-button"
          placeholder="Enviar"
        />
      </div>
    </form>
  );
}
