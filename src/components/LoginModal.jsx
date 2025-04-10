import React, { useState } from 'react';
import '../styles/modal.css';



const LoginModal = ({ isOpen, handleClick }) => {
    const [isLogin, setisLogin] = useState(false);
    
    const Handlebtn = (x) => {
        setisLogin( x )
    }


  return (
      <div className={`modal-overlay ${isOpen ? 'open' : 'closed'}`} onClick={handleClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="logo">
        </div>
        <div className='auth'>
            <button onClick={()=> Handlebtn(true)} className={isLogin ? "selected": null }>Girişyap</button>
            <button onClick={()=> Handlebtn(false)} className={!isLogin ? "selected": null }> Üye Ol</button>
        </div>
        <div className="modal-body">
          {!isLogin && (<>
            <input type="email" placeholder="İsim" />
            <input type="password" placeholder="Soyisim" />
          </>)}
          <input type="email" placeholder="E-Posta" />
          <input type="password" placeholder="Şifre" />
          <button onClick={handleClick}>{isLogin ? "Giriş Yap" :"Kayıt ol" }</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;