import React, { Component } from 'react';
import '../css/hero.css';
import funsies from "./funsies.mp4";
import test8 from "./test8.jpg";
import  "../css/home.css"



export default class Photo extends Component {
    render() {
        return (
            // <div className="hero">
            //     <div className="row">
            //         <div className="col-sm-4 col-lg-4">
            //         </div>
            //         <div class="col-sm-4 col-lg-4">
            //             <div className="hero_content">
            //             <h1 id="h1">FUNSIES for ONESIES</h1>
            //             <h3 id="h3">Get Cuddly & Youthful with a big collection of Onesies!</h3>
            //             {/* <button id="button" type="button" class="btn ">ORDER NOW</button> */}
            //             </div>
            //         </div>
            //         <div class="col-sm-4 col-lg-4">
                    
            //         </div>
            //     </div>
            // </div>

            <div
      className="jumbotron"
      style={{ marginLeft: "0", marginRight: "0", padding: "0" }}
    >
        <img className="videoHero" src={test8}/>
      {/* <video className="videoHero" autoPlay muted loop>
        <source src={funsies} type="video/mp4" />
      </video>{" "} */}
      <div
        className="container"
        style={{ marginLeft: "0", marginRight: "0", padding: "0" }}
      >
        <div className="heroText">
          <h1 className="head" style={{ fontWeight: "bold", color: "#fff" }}>
          FUNZIES for ONESIES
          </h1>
          <p className="p" style={{ color: "#fff" }}>
          Get Cuddly & Youthful with a big collection of Onesies!
          </p>
         
        </div>
      </div>
    </div>
        )
    }
}
