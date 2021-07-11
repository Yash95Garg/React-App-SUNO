import React from 'react'
import * as s from './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Profile() {
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

  const t2 ={
    margin:"0 0 0 -50px",
  }
  const child ={
    position: "relative",
    left: "1px",
    height: "715px",
    width: "690px",
    background: "white",  /* fallback for old browsers */
    background: "white",  /* Chrome 10-25, Safari 5.1-6 */  
    background: "white" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  ,
    overflow: "auto",
    display: "block",
    padding: "20px 0px 20px 0px",
  };

  return (
    <div className="parent-div" style={parentstyle}>
     <div class="container">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card" style={t2}>
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <hr></hr>
                      <button class="btn btn-primary">Follow</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3"  style={t2}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                      <div className="parent-div" style={child}>
                <section id="listings" className="py-4">
                  <div class="row">


                  <div className="col-md-2 col-lg-6 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/15159/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small titile</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-2 col-lg-6 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/15410/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small titile</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-2 col-lg-6 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20620/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small titile</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-2 col-lg-6 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20617/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small titile</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-2 col-lg-6 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/20603/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small titile</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-md-2 col-lg-6 mb-4" >
          <div className="card listing-preview" >
            <img src="https://images.pexels.com/photos/15159/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" data-lightbox="home-images"/>
            <div className="card-body">
              <div className="listing-heading text-center">
              <h4 className="text-primary">This is a small titile</h4>
                <p>
                  <i className="fas fa-map-marker text-secondary"></i> This is a small description</p>
              </div>
            </div>
         
          </div>
        </div>


                  </div>
                  </section>
</div>

                </div>
              </div>
              </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Profile;
