import React from 'react';



function Contact() {
  return (
    
      <section className="adeo__body  container">
        <div className="adeo__contact">
          <div className="adeo__contact-left">
              <h1 className="adeo__contact-heading"> CONTACT </h1>
              <div className="adeo__contact-line"></div>
                <p className="adeo__contact-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus, ipsum eget pretium cursus, tortor purus lobortis mi, vel blandit ante sapien sed purus. Vivamus porttitor felis euismod lacus hendrerit dapibus nec non massa. Vivamus dignissim ultricies enim. Praesent nec turpis sed lacus varius convallis in ut libero. </p>
                
            </div>

            <div className="adeo__contact-right">

              <div className="adeo__contact-form">
              <form>
                <label>
                  NAME:
                  < br/>
                  <input type="text" name="name" />
                </label>
                < br/>
                <label>
                  EMAIL:
                  < br/>
                  <input type="text" name="name" />
                </label>
                < br/>
                <label>
                  MESSAGE:
                  < br/>
                  <input type="text" name="name" />
                </label>
                < br/>
                <input type="submit" value="SEND" />
                </form>           
              </div>
            </div>
          </div>
        </section>
  );
}

export default Contact;
