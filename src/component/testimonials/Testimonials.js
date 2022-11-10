import React from 'react'
import {Carousel} from '3d-react-carousal';
import '../testimonials/testimonial.css'

const Testimonials = () => {

    let x1 = [
       'This Essentially Means That Our DApp Is Built In A Manner That Does Not Require Anyone To Know Or Trust Anybody Else In The Network As All The Operations, Transactions, Etc. Happen Through A Distributed Ledger And Would Require The Consensus Of The Majority. Future’s Finance Follows This Protocol To The Core.' ,
    ];
    let x2 = [
        'Completely Decentralized' ,
     ];
     let x3 = [
        'Future’s Finance Is Equipped With An Immutable Smart Contract That Forms The Foundation Of All Activities Within Our Platform. This Essentially Means That The Smart Contract Will Enable The Occurrence Of An Event On The Completion Of Certain Pre-Coded Activities Under Any Circumstance.' ,
     ];
     let x4 = [
         'Immutable Smart contract' ,
      ];
      let x5 = [
        'Future’s Finance Enables Seamless Peer To Peer Transactions Without The Need For Any Third-Party Interference. As We Are Completely Decentralized In Nature, The Transactions Do Not Depend On Anyone Apart From The Parties Involved, Thus Making It Much More Secure And Low-Cost As Compared To The Non-Peer To Peer Model.' ,
     ];
     let x6 = [
         'Peer to Peer Transactions' ,
      ];
      let x7 = [
        'Future’s Finance Is A Service-Ready Blockchain And Is Equipped To Deliver Various Practical Use Cases Involving DeFi Smart Contracts, Staking Modules, And NFTs (Via The NFTials Platform).' ,
     ];
     let x8 = [
         'Blockchain as a Service' ,
      ];
let slides = [
    <div>
        <span>{x2}</span>
        <span>{x1}</span>
        </div> , 
        <div>
        <span>{x4}</span>
        <span>{x3}</span>
        </div> , 
        <div>
        <span>{x6}</span>
        <span>{x5}</span>
        </div> ,  
        <div>
        <span>{x8}</span>
        <span>{x7}</span>
        </div>
];

  

  return (
    <>

    <Carousel slides={slides} autoplay={true} interval={40000} />

    </>
  )
}

export default Testimonials
