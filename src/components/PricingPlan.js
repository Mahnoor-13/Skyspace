import React from "react";
import "./PricingPlan.css";

const PricingPln = (props) => {
  return (
    <>
      <div className="pricing-bg">
        <div>
          <h2 className="pricing-heading">Choose a pricing plan for you</h2>
        </div>
        <div className="all-cards-pricing">
          <div class=" card-pricing card1-pricing">
            <div class="card-body-pricing">
             <h5>Basic</h5>
             <h1>$0<span className="month">/month</span></h1>
             <p className="pricing-para">SkySpce provides simple and intuitive interface to store & manage your data, services and interactions</p>
            </div>
          </div>

          <div class="card-pricing card2-pricing">
          <div class="card-body-pricing">
          <h5>Standard</h5>
          <h1>$10<span className="month">/month</span></h1>
          <p className="pricing-para">SkySpce provides simple and intuitive interface to store & manage your data, services and interactions</p>
         </div>
          </div>

          <div class="card-pricing card3-pricing">
          <div class="card-body-pricing">
          <h5>Premiun</h5>
          <h1>$99<span className="month">/month</span></h1>
          <p className="pricing-para">SkySpce provides simple and intuitive interface to store & manage your data, services and interactions</p>
         </div>
          </div>

         
        </div>

      </div>
    </>
  );
};

export default PricingPln;
