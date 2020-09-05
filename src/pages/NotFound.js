import React from 'react';
import Image_NotFound from '../images/404Error2.svg'
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
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>

  );
}

export default NotFound;
