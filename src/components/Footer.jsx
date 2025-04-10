import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="main">
      <footer>
        <div className="top-footer">
          <h2>Hakkımda</h2>
          <h2>
            Email<p>berkaycongal@hotmail.com</p>
          </h2>
          <h2>
            Telefon<p>0541 727 29 18</p>
          </h2>
        </div>
        <div className="mid-footer">
          <h2>Kategori</h2>
          <p> Anasayfa</p>
          <p>Detaylar</p>
        </div>
        <div className="ower-footer">
          <h2>Weekly Newsletter</h2>
          <p>Get blog articles and offers via Email</p>
          <div className="in-email">
            <input type="email" placeholder="E-Posta" />
            <button>Gönder</button>
          </div>
        </div>
      </footer>
      <div className="last-footer">
        <img src="/Union.jpg" alt="" />
        <h3>Berkay Blog</h3>
      </div>
    </div>
  );
};

export default Footer;
