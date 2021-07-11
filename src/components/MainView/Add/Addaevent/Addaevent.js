import React from 'react';
import * as s from './add_event.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Addaevent() {
    const parentstyle = {
        position: "relative",
        left: "15px",
        height: "715px",
        width: "1150px",
        background: "#A1FFCE",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #FAFFD1, #A1FFCE)",  /* Chrome 10-25, Safari 5.1-6 */  
        background: "linear-gradient(to right, #FAFFD1, #A1FFCE)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
    };

    const f1 ={
        height:"400px",
        width:"600px",
        margin:"-290px 0 0 0px",
      }
      const d1 ={
        height:"100px",
        width:"570px",
      }

      const d2 ={
        height:"50px",
        width:"570px",
      }

      const b1 ={
        margin:"0 0 0 250px",
        width:"200px",
      }

      const f3 ={
        margin:"0 0 0 200px",
      }

      const t1 ={
        height:"50px",
        width:"570px",
      }

    

    return (
        <div className="parent-div" style={parentstyle}>
        <div className="form-body">
       <div className="row">
           <div className="form-holder">
               <div className="form-content">
                   
                   <div className="form-items">
                     
                      
                       <form className="requires-validation" novalidate style={f1}>
                       <h5 className="h5">Add a event</h5>
                           <div className="col-md-12">
                              <input className="form-control" type="text" name="title" placeholder="Title" required style={t1}/>
                           </div>
                           <hr></hr>

                           <div className="col-md-12">
                               <input className="form-control" type="text" name="description" placeholder="Description" required style={d1}/>
                           </div>
                           <hr></hr>

                           <div className="col-md-12">
                               <input className="form-control" type="text" name="tag" placeholder="tags" required style={t1}/>
                           </div>
                           <hr></hr>
                 
                           <div className="col-md-12">
                               <input className="form-control" type="file" name="document" required style={d2}/>
                           </div>

                           <hr></hr>
                           <div className="col-md-12">
                               <input className="form-control" type="datetime-local" name="date" required style={t1}/>
                           </div> 
                           <hr></hr>
                           <hr></hr>

                           <div className="form-button mt-3">
                               <button id="submit" type="submit" className="btn btn-primary" style={b1}>Add Event</button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>
   </div>

       </div>
    )
}

export default Addaevent;