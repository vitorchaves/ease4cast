import imageWaves from "../assets/img/ondas.svg";
import imageFishes from "../assets/img/peixes.svg";
import imageBalls from "../assets/img/bolhas.svg";
import imageWhale from "../assets/img/baleia.svg";
import imageSmallBalls from "../assets/img/minibolhas.svg";

export default function Waves() {
  return (
    <>
      <img
        id="deep"
        src={imageWaves}
        alt="Ondas"
        className="waves-top"
        daggable="false"
      />
      <section className="mb-5 waves submarine">
        <img
          id="fishes"
          src={imageFishes}
          alt="Peixes"
          className="absolute"
          draggable="false"
        />
        <img
          id="balls"
          src={imageBalls}
          alt="Bolhas"
          className="absolute"
          draggable="false"
        />
        <img
          id="whale"
          src={imageWhale}
          alt="Baleia"
          className="absolute"
          draggable="false"
        />
        <img
          id="smallballs"
          src={imageSmallBalls}
          alt="Bolhas"
          className="absolute"
          draggable="false"
        />
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-5">
              <h4 className="submarine-title">
                Mergulhe a fundo nos <span>dados da sua empresa</span>
              </h4>
              <p className="submarine-paragraph">
                Com o mercado cada vez mais competitivo, é indispensável um bom
                planejamento. Conhecer a si mesmo é o primeiro passo para um
                plano de ação eficaz, garantindo bons resultados. E os dados são
                sua melhor fonte
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-5 offset-md-7 text-end">
              <h4 className="submarine-title">
                O que você faria se pudesse estar um{" "}
                <span>passo a frente?</span>
              </h4>
              <p className="submarine-paragraph">
                E você pode estar. O ease4cast cruza inúmeros dados variáveis e
                através de um algoritmo altamente treinado é capaz de prever e
                lhe dar um relatório totalmente customizável e com alta acurácia
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-5">
              <h4 className="submarine-title">
                <span>Simplicidade</span>
              </h4>
              <p className="submarine-paragraph">
                Nossa ferramenta está na web ou seja, não há necessidade de
                instalação e nem ter a suporte por parte da empresa cliente; Seu
                uso foi desenvolvido para que qualquer pessoa consiga fazer o
                forecast de forma rápida e fácil
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-5 offset-md-7 text-end">
              <h4 className="submarine-title">
                Técnicas avançadas <span>de previsões</span>
              </h4>
              <p className="submarine-paragraph">
                o Ease4cast foi desenvolvido utilizando Inteligência Artificial
                e através das mais avançadas técnicas de Machine Learning, busca
                a maior precisão das projeções de vendas e preços melhorando os
                resultados das empresas. Nosso pipeline de modelagem é composta
                desde técnicas clássicas até as técnicas avançadas, estamos
                sempre na fronteira do conhecimento
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-5">
              <h4 className="submarine-title">
                Sem custo <span>inicial</span>
              </h4>
              <p className="submarine-paragraph">
                Não há custo de aquisição da ferramenta, apenas a mensalidade
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-5 offset-md-7 text-end">
              <h4 className="submarine-title">
                <span>POC</span> (Prova de Conceito)
              </h4>
              <p className="submarine-paragraph">
                Quer fazer uma POC para testar nossa solução? Nossa POC é sem
                custo e você já consegue ver qual será o resultado que sua
                empresa terá com o uso do ease4cast
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
