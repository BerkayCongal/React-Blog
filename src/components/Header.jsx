import { Link } from "react-router-dom";
import "../styles/header.css";
import { useState } from "react";
import { lazy } from "react";

const LoginModal = lazy(() => import("./LoginModal"));

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="logo">
        <img src="/Union.jpg" alt="" />
        Berkay Blog
      </div>
      <nav>
        <Link to="/">Anasayfa</Link>
      </nav>
      <button onClick={handleOpen}>Giriş Yap</button>
      <LoginModal isOpen={open} handleClick={handleOpen} />
    </header>
  );
};

export default Header;
