import React from 'react';
import robot from './robot.jpg';



function Banner() {
  return (
    
      <section className="adeo__body  container">
        <div className="adeo__offer">
          <div className="adeo__offer-left">
              <h1 className="adeo__offer-heading"> WELCOME </h1>
              <div className="adeo__offer-line"></div>
                <p className="adeo__offer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus, ipsum eget pretium cursus, tortor purus lobortis mi, vel blandit ante sapien sed purus. Vivamus porttitor felis euismod lacus hendrerit dapibus nec non massa. Vivamus dignissim ultricies enim. Praesent nec turpis sed lacus varius convallis in ut libero. </p>
                <button className="adeo__offer-btn">LEARN MORE</button>
            </div>

          <div className="adeo__offer-right">

            <div className="adeo__offer-post">
              <img className="adeo__offer-post-img" src={robot} alt={"robot"} width="450px"/>
              <div className="adeo__offer-post-box">
                <h2 className="adeo__offer-post-box-heading">UI/UX DESIGN</h2>
                <p className="adeo__offer-post-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus, ipsum eget pretium cursus, tortor purus lobortis mi, vel blandit ante sapien sed purus. Vivamus porttitor felis euismod lacus hendrerit dapibus nec non massa.</p>
              </div>

            
              </div>
            </div>
          </div>
        </section>
  );
}

export default Banner;
