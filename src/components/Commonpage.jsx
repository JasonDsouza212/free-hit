import React from 'react';
import Header from './header';
import Sidebar from './sidebar'; 

const Commonpage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar /> 
          </div>
          <div className="col-md-9">
            <div className="errormessage">
              <h1>
                404 <br />
                Page Not Found
              </h1>
              <p>
                The page cannot be found. It may have been moved or deleted. Here are some awesome suggestions:
              </p>
              <ul>
                <li>Double-check the URL for any typos.</li>
                <li>Go back to the previous page and try again.</li>
                <li>Visit our <a href="/">homepage</a> to find what you're looking for.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commonpage;
