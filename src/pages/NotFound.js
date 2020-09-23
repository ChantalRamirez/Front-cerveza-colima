import React from 'react';
import Image_NotFound from '../images/error_robot.png'
import './styles/Home.css';

function NotFound() {
  return (
    <div className='Home'>
        <div className="container">
          <div className="row">
          
            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={Image_NotFound}
                alt="Page_NotFound"
                className="img-fluid p-6"
              />
            </div>
          </div>
        </div>
      </div>

  );
}

export default NotFound;
