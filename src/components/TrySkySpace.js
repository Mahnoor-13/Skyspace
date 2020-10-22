import React from "react";
import "./TrySkySpace.css";

const TrySkySpace = (props) => {
  return (
    <>
      <div className="try-back">
          <div>
            <h2 className="heading-try">Try SkySpaces now!</h2>
          </div>
          <div className="tryskyspace-btn">
            {" "}
            <button class="btn get-started" type="submit">
              Get Started
            </button>
          </div>
        </div>
    </>
  );
};

export default TrySkySpace;
