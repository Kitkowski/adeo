import React from 'react';
import Listjson from './listjson';

function List() {
  return (
    
      <section className="adeo__body  container">
        <div className="adeo__list">
          <div className="adeo__list-left">
              <h2 className="adeo__list-heading"> WEB DEVELOPMENT </h2>

              <p className="adeo__list-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus, ipsum eget pretium cursus, tortor purus lobortis mi, vel blandit ante sapien sed purus. Vivamus porttitor felis euismod lacus hendrerit dapibus nec non massa. Vivamus dignissim ultricies enim. Praesent nec turpis sed lacus varius convallis in ut libero. </p>
               
            </div>

          <div className="adeo__list-right">

            <div className="adeo__list-post">
            
                <div className="adeo__list-post-box">
                  <h2 className="adeo__list-post-box-heading">WIREFRAME</h2>
                  <p className="adeo__list-post-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>

              </div>
              <div className="adeo__list-list">
                <div className="adeo__list-list1">
                  <h2>Custom List</h2>
                  <p>Some Heading</p>
                  {/* <ul>
                    <li>Item1</li>
                    <li>Item1</li>
                    <li>Item1</li>
                    <li>Item1</li>
                  </ul> */}
                  <Listjson />
                </div>
                <div className="adeo__list-list2">
                  <h3>Web Development</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
              </div>

            </div>

          </div>
        </section>
  );
}

export default List;