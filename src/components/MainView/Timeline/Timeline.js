import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import * as s from './Timeline.scss';

function Timeline() {
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
      <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna"/>
        <div className="card-img-overlay">
          <a href="#" className="btn btn-light btn-sm">Cooking</a>
        </div>
        <div className="card-body">
          <h4 className="card-title">Pasta with Prosciutto</h4>
          <small className="text-muted cat">
            <i className="far fa-clock text-info"></i> 30 minutes
            <i className="fas fa-users text-info"></i> 4 portions
          </small>
          <p className="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <a href="#" className="btn btn-info">Read Recipe</a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
          <div className="stats">
           	<i className="far fa-eye"></i> 1347
            <i className="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>
  
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna"/>
        <div className="card-img-overlay">
          <a href="#" className="btn btn-light btn-sm">Cooking</a>
        </div>
        <div className="card-body">
          <h4 className="card-title">Pasta with Prosciutto</h4>
          <small className="text-muted cat">
            <i className="far fa-clock text-info"></i> 30 minutes
            <i className="fas fa-users text-info"></i> 4 portions
          </small>
          <p className="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <a href="#" className="btn btn-info">Read Recipe</a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
          <div className="stats">
           	<i className="far fa-eye"></i> 1347
            <i className="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna"/>
        <div className="card-img-overlay">
          <a href="#" className="btn btn-light btn-sm">Cooking</a>
        </div>
        <div className="card-body">
          <h4 className="card-title">Pasta with Prosciutto</h4>
          <small className="text-muted cat">
            <i className="far fa-clock text-info"></i> 30 minutes
            <i className="fas fa-users text-info"></i> 4 portions
          </small>
          <p className="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <a href="#" className="btn btn-info">Read Recipe</a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
          <div className="stats">
           	<i className="far fa-eye"></i> 1347
            <i className="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna"/>
        <div className="card-img-overlay">
          <a href="#" className="btn btn-light btn-sm">Cooking</a>
        </div>
        <div className="card-body">
          <h4 className="card-title">Pasta with Prosciutto</h4>
          <small className="text-muted cat">
            <i className="far fa-clock text-info"></i> 30 minutes
            <i className="fas fa-users text-info"></i> 4 portions
          </small>
          <p className="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <a href="#" className="btn btn-info">Read Recipe</a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
          <div className="stats">
           	<i className="far fa-eye"></i> 1347
            <i className="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna"/>
        <div className="card-img-overlay">
          <a href="#" className="btn btn-light btn-sm">Cooking</a>
        </div>
        <div className="card-body">
          <h4 className="card-title">Pasta with Prosciutto</h4>
          <small className="text-muted cat">
            <i className="far fa-clock text-info"></i> 30 minutes
            <i className="fas fa-users text-info"></i> 4 portions
          </small>
          <p className="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <a href="#" className="btn btn-info">Read Recipe</a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
          <div className="stats">
           	<i className="far fa-eye"></i> 1347
            <i className="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna"/>
        <div className="card-img-overlay">
          <a href="#" className="btn btn-light btn-sm">Cooking</a>
        </div>
        <div className="card-body">
          <h4 className="card-title">Pasta with Prosciutto</h4>
          <small className="text-muted cat">
            <i className="far fa-clock text-info"></i> 30 minutes
            <i className="fas fa-users text-info"></i> 4 portions
          </small>
          <p className="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <a href="#" className="btn btn-info">Read Recipe</a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
          <div className="stats">
           	<i className="far fa-eye"></i> 1347
            <i className="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna"/>
        <div className="card-img-overlay">
          <a href="#" className="btn btn-light btn-sm">Cooking</a>
        </div>
        <div className="card-body">
          <h4 className="card-title">Pasta with Prosciutto</h4>
          <small className="text-muted cat">
            <i className="far fa-clock text-info"></i> 30 minutes
            <i className="fas fa-users text-info"></i> 4 portions
          </small>
          <p className="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <a href="#" className="btn btn-info">Read Recipe</a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
          <div className="stats">
           	<i className="far fa-eye"></i> 1347
            <i className="far fa-comment"></i> 12
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

export default Timeline;
