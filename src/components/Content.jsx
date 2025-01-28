import React from "react";
import './Content.css';
const Content =() =>{
    return(
     <div className="dis-container">
            <h1>YOUR FEET <br />DESERVE <br /> THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES</p>
            <div className="btn">
                <button className="shop">Shop Now</button>
                <button>Category</button>
            </div>
            <p>Also Available On</p>
            <div className="logo">
                <img src="amazon.png" alt="logo" />
                <img src="flipkart.png" alt="logo" />
            </div>
     </div>  
    )
}

export default Content;