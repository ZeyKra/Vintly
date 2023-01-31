import React from 'react';
import './css/style.css';
import logo from './assets/logo.png';
import img from './assets/sneakers.png';
//ICONS
import Bookmark from './assets/bookmark.png';
import Settings from './assets/settings.png';
import Home from './assets/home.png';
import Next from './assets/angle-right.png';
import Previous from './assets/angle-left.png';

function MyComponent() {
  return (
    <div className="top">
      <nav>
         <ul>
            <li><a href="html/favorites.html">
               <span className="material-symbols-rounded"><img src={Bookmark} className="navbar-icons"/></span>
            </a></li>
            <li><a href="#">
               <span className="material-symbols-rounded"><img src={Home} className="navbar-icons"/></span>
            </a></li>
            <li><a href="html/settings.html">
               <span className="material-symbols-rounded"><img src={Settings} className="navbar-icons"/></span>
            </a></li>
         </ul>
      </nav>
      <main className="main">
         <h2 className="item-title" id="ITEM_TITLE">Example: Air Jordan 1 Retro High OG SP Travis Scott Fragment Military Blue</h2>
         <div className="container">
            <img src={img} alt="IMG" className="container-img"/>
         </div>
         <div className="navigate">
            <button className="previous">
               <span className="material-symbols-rounded previous"><img src={Previous} className="previous"/></span>
            </button>
            <button className="next">
               <span className="material-symbols-rounded next"><img src={Next} className="next"/></span>
            </button>
         </div>
         <div className="slide">
            <ul>
               <li><div className="slide-circle"></div></li>
               <li><div className="slide-circle"></div></li>
               <li><div className="slide-circle"></div></li>
               <li><div className="slide-circle"></div></li>
               <li><div className="slide-circle"></div></li>
            </ul>
         </div>
      </main>
      <footer className="footer"><h4>Description</h4>
         <div className="text">
            <p className="text-in">Paire de chaussures portées donc un peut abîmé à certains endroits comme sur le haut de la paire de chaussures, mais en bonne état général .</p>
         </div>
         <img src={logo} alt="Logo" className="pfp"/>
         <div className="fav-icon">
            <span className="material-symbols-rounded fav-icon"><img src={Bookmark} className="fav-icon"/></span>
         </div>
      </footer>
   </div>
   
  );
}

export default MyComponent;