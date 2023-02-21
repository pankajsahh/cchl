import React from "react";
import "./BestDealCard.css";
function BestDealCard({description,shop_name,image_url}) {
  return (
    <div>
      <div class="BestDealCard">
        <img src={image_url} />
        <div>
          <h3>{shop_name}</h3>
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
}

export default BestDealCard;
