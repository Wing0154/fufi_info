import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel' 


import './styles.css'

const Sliderfg = () => {
  return (
    <>
<div className='container-slide' style={{padding:'0 0'}}>
<Carousel itemsToShow={1}>
  <consts>
  <div className="digimnx">
          <h5>Q 2022</h5>
          <ul>

          <li>•	Launch of FUFI Blockchain</li>
          <li>•	Listing of FUFI Coin in Exchanges</li>
          <li>•	Launch of FUFI Proprietary Wallet FUFI Edge</li>
          <li>•	Launch of FUFI Smart Contract</li>
      </ul>
        </div>
  </consts>
  <consts>
  <div className="digimnx">
        <h5>Feb - April 2022</h5>
      <ul>
<li>Launch of FUFI Blockchain</li>
<li>Listing of FUFI Coin in Exchanges</li>
<li>Launch of FUFI Proprietary Wallet FUFI Edge</li>
<li>Launch of FUFI Smart Contract</li>
      </ul>
        </div>
  </consts>
  <consts>
  <div className="digimnx">
        <h5>May 2022</h5>
        Launch of our NFT platform named NFTials in Dubai - NFTials will be a full-fledged operating platform that will have the capability to host all kinds of NFT-related activities and our team will dedicatedly educate relevant users about the ways of using this platform. Moreover, our primary goal with this is to create NFTs that will represent prominent and talented personalities who have achieved laurels in their respective fields. Here, the objective is to uphold their talent and contributions in front of the world through the power of blockchain, crypto, and NFT.
        </div>
  </consts>
  <consts>
  <div className="digimnx">
        <h5>July 2022</h5>
        Launch of the Future’s Finance Decentralized Exchange (DEX) - This will enable our users to swap digital assets like crypto by leveraging various liquidity pools.Listing of FuFi on 15 international exchanges, out of which more than 50% would accredit A-grade exchanges.
      </div>
  </consts>

</Carousel>
</div>  
    </>
  )
}

export default Sliderfg
