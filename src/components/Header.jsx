import { useState, useEffect } from "react";
import imageLogo from "../assets/img/logo.png";
import imageLogoCompact from "../assets/img/logo-compact.png";
import imageGraph from "../assets/img/grafico.svg";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [menu, setMenu] = useState(false);

  function handleScroll() {
    document.documentElement.scrollTop > 18
      ? setIsFixed(true)
      : setIsFixed(false);
  }

  useEffect(() => {
    window.onscroll = () => handleScroll();
  });

  return (
    <header className="header">
      <div className="container">
        <div
          className={
            "row justify-content-between align-items-center navigation-row" +
            (isFixed ? " fixed" : false)
          }
        >
          <div className="align-it">
            <a href="./">
              <img
                src={imageLogo}
                alt="ease4cast"
                className="header-logo d-none d-md-block"
              />
            </a>
            <a href="./">
              <img
                src={imageLogoCompact}
                alt="ease4cast"
                className="d-md-none header-mobile-logo"
              />
            </a>
            <div className="mobile-menu d-sm-none">
              <p class="mobile-menu-button my-0" onClick={() => setMenu(!menu)}>
                MENU
              </p>
              <div
                className={"mobile-menu-navigation" + (menu ? " d-block" : "")}
              >
                <ul>
                  <li>
                    <a href="#intro">introdução</a>
                  </li>
                  <li>
                    <a href="#whatis">o que é</a>
                  </li>
                  <li>
                    <a href="#deep">aprofunde-se</a>
                  </li>
                  <li>
                    <a href="#contact">contato</a>
                  </li>
                </ul>
              </div>
            </div>
            <nav>
              <menu>
                <ul>
                  <li>
                    <a href="#intro">introdução</a>
                  </li>
                  <li>
                    <a href="#whatis">o que é</a>
                  </li>
                  <li>
                    <a href="#deep">aprofunde-se</a>
                  </li>
                  <li>
                    <a href="#contact">contato</a>
                  </li>
                </ul>
              </menu>
            </nav>
            <div className="header-info">
              <p>luiz@mathanalytics.com.br</p>
              <p>tel: 19 99141-2413</p>
            </div>
          </div>
        </div>

        <div
          id="intro"
          className={
            "row intro align-items-center mt-3" +
            (isFixed ? " padding-plus" : false)
          }
        >
          <div className="col-lg-5 offset-lg-1 mt-5 col-md-6">
            <h1 className="intro-title mt-3">
              Quer <span>melhorar</span> o seu <span>planejamento</span>?
            </h1>
            <p className="mt-4 intro-paragraph">
              O <b>ease4cast</b> é uma ferramenta criada para resolver o
              principal problema de supply chain (S&OP): O planejamento de
              demanda. Quais ganhos você teria se elevasse a acurácia do seu{" "}
              <div className="clickable tooltiped">
                forecast{" "}
                <div class="tooltip-vitorchaves">
                  Do inglês, Forecast significa previsão. Trata-se da
                  previsão/projeção de demandas, vendas, preços de insumos, etc
                  de uma empresa. Com o Forecast empresarial é possível
                  planejar-se para atingir metas previamente estipuladas.
                </div>
              </div>{" "}
              com alguns cliques apenas?
            </p>
            <a href="#contact" className="intro-link">
              Falar conosco
            </a>
          </div>

          <div className="col-lg-4 offset-lg-1 col-md-6 d-none d-md-block">
            <img src={imageGraph} alt="Gráfico" className="img-fluid" />
          </div>
        </div>
      </div>
    </header>
  );
}
