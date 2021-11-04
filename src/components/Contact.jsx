import { useState } from "react";
import axios from "axios";

//import imageEye from "../assets/img/olho.svg";
import imageMail from "../assets/img/mail.svg";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  const api = axios.create({
    baseURL:
      "https://us-central1-ma-ease4cast-website.cloudfunctions.net/homepage-contact-form",
  });

  const sendFormulary = () => {
    setEnviando(true);

    let dadosFormulario = new FormData();

    dadosFormulario.append("name", nome);
    dadosFormulario.append("email", email);
    dadosFormulario.append("phone", telefone);
    dadosFormulario.append("message", mensagem);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    api
      .post("/", dadosFormulario, config)
      .then((response) => {
        //console.log(response);
        setEnviando(false);
        alert("Sua mensagem foi enviada com sucesso. Obrigado!");
      })
      .catch((error) => {
        //console.log(error);
        setEnviando(false);
        alert(
          "Sua mensagem pode não ter sido enviada. Por favor, tente-novamente em instantes."
        );
      });
  };

  return (
    <section id="contact" className="pt-4 pb-5 container contact">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="contact-title">
            Seja uma empresa <span>Data Driven</span>
          </h2>

          <p className="contact-paragraph mt-4">
            Se você sabe onde quer chegar, nós temos o que você precisa.
            Convidamos sua empresa a conhecer o ease4cast, a ferramenta certa
            para um planejamento coeso e realista, com alta acurácia. Entre em
            contato conosco. Ficaremos felizes em ajudá-los a mergulhar fundo
            nos seus dados e se tornar uma empresa Data Driven.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 offset-lg-1">
          <form>
            <div className="row">
              <div className="form-group col-md-6 d-flex flex-column">
                <label
                  htmlFor="name"
                  className={nome === "" ? false : "active"}
                >
                  nome <span>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6 d-flex flex-column">
                <label
                  htmlFor="email"
                  className={email === "" ? false : "active"}
                >
                  e-mail <span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6 d-flex flex-column">
                <label
                  htmlFor="telephone"
                  className={telefone === "" ? false : "active"}
                >
                  telefone <span>*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  className="form-control"
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6 d-flex flex-column">
                <label
                  htmlFor="subject"
                  className={assunto === "" ? false : "active"}
                >
                  assunto <span>*</span>
                </label>
                <input
                  type="email"
                  id="subject"
                  className="form-control"
                  onChange={(e) => setAssunto(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-12 d-flex flex-column">
                <label
                  htmlFor="message"
                  className={mensagem === "" ? false : "active"}
                >
                  mensagem <span>*</span>
                </label>
                <textarea
                  id="message"
                  rows="7"
                  className="form-control"
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-12 d-flex flex-column">
                <button type="button" onClick={() => sendFormulary()}>
                  {enviando ? "Enviando..." : "Enviar"}
                  <img src={imageMail} alt="Mensagem" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
