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
      action={`https://afegao-backend-yevba.ondigitalocean.app/messages`}
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
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <input
        type="email"
        name="emlMessage"
        id="emlMessage"
        className="textField"
        placeholder="Email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="tel"
        name="phnMessage"
        id="phnMessage"
        className="textField"
        placeholder="Telefone"
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
      <div className="footer-button">
        <span id="messageSent" style={{ color: "#fff" }}></span>
        <input
          style={{
            backgroundColor: "rgba(0,0,0,0.54)",
            border: 0,
            width: "100%",
          }}
          type="submit"
          className="footer-submit-button"
          placeholder="Enviar"
        />
      </div>
    </form>
  );
}
