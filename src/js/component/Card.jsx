import React from "react";
import peakpx from "../../img/peakpx.jpg";

const Card = () => {
  return (
    <div>
    <div className="card text-center" style={{ width: "15.5rem", margin:"20px"}}>
      <img src={peakpx} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse necessitatibus neque.
        </p>
        <a href="#" className="btn btn-primary">
         Find Out More!
        </a>
      </div>
    </div>
    </div>
  );
};

export default Card;
