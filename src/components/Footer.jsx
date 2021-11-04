import imageLogo from '../assets/img/logo-verde.png';
import imageLinkedIn from '../assets/img/linkedin.svg';

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between align-items-center mobile-correction">
          <img id="ease4cast" src={imageLogo} alt="ease4cast" />

          {/* <div className="footer-tree">
            <ul>
              <li><a href="#">Conheça a MathAnalytics</a></li>
              <li><a href="">Math Solutions</a></li>
              <li><a href="">Outros Produtos</a></li>
            </ul>
          </div> */}

          <div className="footer-info">
            <ul>
              <li>19 99141-2413</li>
              <li>luiz@mathanalytics.com.br</li>
              <li>CNPJ: 30.554.959/0001-30</li>
            </ul>
          </div>

          <a href="https://www.linkedin.com/company/math-analytics/" className="fit-content"><img id="linkedin" src={imageLinkedIn} alt="Linked In" /></a>
        </div>
      </div>
      
      {/* <p className="copyright">Todos os direitos reservados. <span>project lead by: <a href="https://www.linkedin.com/in/vhchaves/" target="_blank" title="Vítor Chaves">Vítor Chaves</a></span></p> */}
    </footer>
  );
}
