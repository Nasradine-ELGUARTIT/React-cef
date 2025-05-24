import "../styles/footer.css";

const Footer = () => {
  return (
    <section class="footer">
      <footer className="footer-contenu">
        <section>
          <h3>John Doe</h3>
          <p>
            <a href="https://maps.app.goo.gl/YXYu5vobsjNEgE1U8">
              40 rue Laure Diebold
            </a>
          </p>
          <p>
            <a href="https://maps.app.goo.gl/YXYu5vobsjNEgE1U8">
              69009 Lyon,France
            </a>
          </p>
          <p>
            <a href="tel:+1020304050">10 20 30 40 50</a>
          </p>
          <p>
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
          </p>
          <ul>
            <li>
              <a class="icons" href="https://github.com">
                <img src="/icons/github.svg" alt="github" />
              </a>
            </li>
            <li>
              <a class="icons" href="https://x.com/?lang=fr">
                <img src="/icons/twitter-x.svg" alt="X" />
              </a>
            </li>
            <li>
              <a
                class="icons"
                href="www.linkedin.com/home?originalSubdomain=fr"
              >
                <img src="/icons/linkedin.svg" alt="linkedin" />
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Liens utiles</h3>
          <p>
            <a href="../Index.html">Acceuil</a>
          </p>
          <p>
            <a href="./assets/service.html">Services</a>
          </p>
          <p>
            <a href="./assets/portfolio.html">Portfolio</a>
          </p>
          <p>
            <a href="./assets/contact.HTML">Me contacter</a>
          </p>
          <p>
            <a href="./assets/mention.html">Mentions légales</a>
          </p>
        </section>
        <section>
          <h3>Mes derniéres réalisations</h3>
          <p>
            <a href="#">Fresh Food</a>
          </p>
          <p>
            <a href="#">Restaurant Akira</a>
          </p>
          <p>
            <a href="#">Espace bien-être</a>
          </p>
          <p>
            <a href="#">SEO</a>
          </p>
          <p>
            <a href="#">Création d'une API</a>
          </p>
          <p>
            <a href="#">Maquette d'un site</a>
          </p>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
