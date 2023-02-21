import React from "react";
import "./SpaItem.css";
function SpaItem({image_url,description}) {

  return (
      <div class="slider2Container">
        <img src={image_url } />
        <p>{description}</p>
      </div>
  );
}

export default SpaItem;
