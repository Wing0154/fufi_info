import React, { Component } from "react";
import M from "materialize-css";
import '../assets/css/slider.css'

// import Image1 from "../assets/images/architecture-art-buildings-548094.jpg";
// import Image2 from "../assets/images/architecture-automobile-buildings-950223.jpg";
// import Image3 from "../assets/images/architecture-bridge-city-161853.jpg";
// import Image4 from "../assets/images/beach-clouds-dream-60217.jpg";

class Slider extends Component {
  componentDidMount() {
    const options = {
      indicators: true,
      height: 500,
      interval: 4000,
      duration: 500
    };
    M.Slider.init(this.Slider, options);
  }

  render() {
    return (
      <div
        ref={Slider => {
          this.Slider = Slider;
        }}
        className="slider"
      >
        {/* If you want fullscreen slider then add fullscreen to
      this div */}
        <ul className="slides">
          <li>
            {/* <img src={Image1} /> */}
            <div className="caption center-align">
            <h2><span>Completely Decentralized</span></h2>
              <h3 className="light grey-text text-lighten-3">
              While some of our products like the FuFi Crytpo Exchange is built on a hybrid model - a combination of centralization and decentralization, the core of Future’s Finance is truly decentralized in nature. This essentially means that our DApp is built in a manner that does not require anyone to know or trust anybody else in the network as all the operations, transactions, etc. happen through a distributed ledger and would require the consensus of the majority. Future’s Finance follows this protocol to the core.
              </h3>
            </div>
          </li>
          <li>
            {/* <img src={Image2} /> */}
            <div className="caption left-align">
            <h2><span>Immutable Smart contract</span></h2>
              <h3 className="light grey-text text-lighten-3">
              Future’s Finance is equipped with an immutable smart contract that forms the foundation of all activities within our platform. This essentially means that the smart contract will enable the occurrence of an event on the completion of certain pre-coded activities under any circumstance. It can never be modified or manipulated in any way to do otherwise. So, as the users know and agree to the final eventualities, they will not be at any risk, since the smart contract will execute those eventualities at any cost. This is true for all our products including the crypto exchange and the crypto wallet under Future’s Finance.
              </h3>
            </div>
          </li>
          <li>
            {/* <img src={Image3} /> */}
            <div className="caption right-align">
            <h2><span>Peer to Peer Transactions </span></h2>
              <h3 className="light grey-text text-lighten-3">
              Future’s Finance enables seamless peer to peer transactions without the need for any third-party interference. As we are completely decentralized in nature, the transactions do not depend on anyone apart from the parties involved, thus making it much more secure and low-cost as compared to the non-peer to peer model.
              </h3>
            </div>
          </li>
          <li>
            {/* <img src={Image4} /> */}
            <div className="caption center-align">
              <h2><span>Blockchain as a Service</span></h2>
              <h3 className="light grey-text text-lighten-3">
              Future’s Finance is a service-ready blockchain and is equipped to deliver various practical use cases involving DeFi Smart Contracts, Staking Modules, and NFTs (via the NFTials platform).
              </h3>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;
