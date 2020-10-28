import React from "react";
import "./PricingPlan.css";

const PricingPln = (props) => {
  return (
    <>
      <div className="pricing-bg">
        <div>
          <h1 className="pricing-heading">Choose a pricing plan for you</h1>
        </div>
        <div className="all-cards-pricing">
          <div class=" card-pricing card1-pricing">
            <div class="card-body-pricing">
              <h3 className="basic">Basic</h3>
              <h1 className="dollor">
                $0<span className="month">/month</span>
              </h1>
              <p className="pricing-para">
                1 GB of Storage & Bandwidth <br />
                Full End-to-End Encryption
                <br />
                Unlimited Local Storage
                <br />
                Peer to Peer (P2P) Transfers
              </p>
            </div>
          </div>

          <div class=" card-pricing card2-pricing">
          <div class="card-body-pricing">
            <h3 className="basic">Standard</h3>
            <h1 className="dollor">
              $10<span className="month">/month</span>
            </h1>
            <p className="pricing-para">
              1 GB of Storage & Bandwidth <br />
              Full End-to-End Encryption
              <br />
              Unlimited Local Storage
              <br />
              Peer to Peer (P2P) Transfers
            </p>
          </div>
        </div>

        <div class=" card-pricing card3-pricing">
        <div class="card-body-pricing">
          <h3 className="basic">Premium</h3>
          <h1 className="dollor">
            $99<span className="month">/year</span>
          </h1>
          <p className="pricing-para">
            1 GB of Storage & Bandwidth <br />
            Full End-to-End Encryption
            <br />
            Unlimited Local Storage
            <br />
            Peer to Peer (P2P) Transfers
          </p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default PricingPln;
