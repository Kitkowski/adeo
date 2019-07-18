import React from 'react';


function Footer() {
  return (
    
      <footer className="adeo__footer container">
        <div className="adeo__footer-left">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus, ipsum eget pretium cursus, tortor purus lobortis mi, vel blandit ante sapien sed purus. Vivamus porttitor felis euismod lacus hendrerit dapibus nec non massa. Vivamus dignissim ultricies enim. Praesent nec turpis sed lacus varius convallis in ut libero.</p>
        </div>

        <div className="adeo__footer-right">
       
         

          <nav className="adeo__footer-menu">
            <ul>
            
              <li>
                <a className="adeo__menu-li" href="#" >HOME</a>
              </li>
              <li>
                <a className="adeo__menu-li"  href="#">SERVICE</a>
              </li>
              <li>
                  <a className="adeo__menu-li"  href="#">WORKS</a>
                
              </li>
              
              <li>
                <a className="adeo__menu-li"  href="#">ABOUT ME</a>
              </li>
              <li>
                <a className="adeo__menu-li"  href="#">CONTACT</a>
              </li>
              </ul>
          </nav>
          <div className="adeo__footer-logo">
            <a className="adeo__footer-logo" href="#">© <span>DEMO</span>SITE All right reserved</a>
          </div>
       </div>
        
        
      </footer>
    
  );
}

export default Footer;
