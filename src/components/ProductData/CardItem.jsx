import React from "react";
import Data from "../../Data";

const CardItem = () => {


    const Cards = (item) => {
        return(

            <div className="card" style={{width: "18rem" }} >
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                {item.desc}
              </p>
              <p className="price-text">
                {item.price}
              </p>
            
            </div>
          </div>
        );
       
        
      };
 

  return (
    <div className="container">
      <div className="row">
          {Data.map(Cards)}
          </div>
    </div>
  );
};
export default CardItem;
