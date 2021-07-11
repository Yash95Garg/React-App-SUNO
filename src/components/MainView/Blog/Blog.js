import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";

function Blog() {
  const parentstyle = {
    position: "relative",
    left: "15px",
    height: "715px",
    width: "1250px",
    background: "#A1FFCE",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #FAFFD1, #A1FFCE)",  /* Chrome 10-25, Safari 5.1-6 */  
    background: "linear-gradient(to right,#134E5E ,#71B280 )" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  ,
    overflow: "auto",
    display: "block",
    padding: "20px 0px 20px 0px",
  };

  const card ={
    position: "relative",
  
  }

  return (
    <div className="container" style={parentstyle}>
      <section id="listings" className="py-4">
    <div className="container">
      <div className="row">
      <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/15159/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/15410/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20620/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20617/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20603/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20790/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20600/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small title</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>

        
     
      </div>
    </div>
  </section>
      </div>
  )
}

export default Blog;
