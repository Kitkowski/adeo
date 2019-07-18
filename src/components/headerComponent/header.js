import React from 'react';


function Header() {
  return (
    
      <header className="adeo__header  container">
        <div className="adeo__header-top">
        <nav className="adeo__menu-top">
            <ul>
            
              <li>
                <a className="adeo__menu-li" href="#" >MENU</a>
              </li>
              <li>
                <a className="adeo__menu-li"  href="#">SOME TEXT</a>
              </li>
              <li>
                <a className="adeo__menu-li"  href="#">ANOTHER ITEM</a>
              </li>
              <li>
                <a className="adeo__menu-li"  href="#">ONE MORE</a>
              </li>
              <li>
                <a className="adeo__menu-li"  href="#">AND LAST ONE</a>
              </li>
              </ul>
          </nav>
        </div>

        <div className="adeo__header-bottom">
          <div className="adeo__logo">
            <a className="adeo__logo" href="#">DEMO<span>SITE</span></a>
          </div>

          <nav className="adeo__menu">
            <ul>
            <li className="adeo__menu-i">
                <i className="material-icons" >menu</i>
              </li>
              <li>
                <a className="adeo__menu-li" href="#" >HOME</a>
              </li>
              <li>
                <a className="adeo__menu-li"  href="#">SERVICE</a>
              </li>
              <li>
                <div className="dropdown">
                  <a className="adeo__menu-li"  href="#">WORKS</a>
                  
                  <div className="adeo__arrow"></div>
    
                  <div className="dropdown-content">
                    <a href="#">ALL</a>
                    <a href="#">GRAPHIC</a>
                    <a href="#">DESIGN</a>
                    <a href="#">LOGO</a>
                    <a href="#">WEBSITE</a>
                  </div>
                </div>
              </li>
              
              <li>
                <a className="adeo__menu-li"  href="#">ABOUT ME</a>
              </li>
              <li>
                <a className="adeo__menu-li"  href="#">CONTACT</a>
              </li>
              </ul>
          </nav>
       </div>
      </header>
    
  );
}

export default Header;
