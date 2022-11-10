import React from 'react'
import tradebro from '../../assets/images/tradebro.gif'


const TradeBRO = () => {
  return (
    <>
       <section className='section-about'>
 

 <div className="container-about margintopsd">

 <div className="row">
 <div className="col-xs-12 col-sm-12 col-md-7">
 <div className='foxysid'>
 <div className='layouthomepagr'>
 <h2 style={{paddingTop:'0'}}>
TradeBRO
</h2>
</div>


 <p class="header_text technicles">
 A Substitute of MarketMakers, TradeBRO will serve as an alternative to the existing market 
 makers offered by traditional exchanges, thus solving issues related to price manipulation 
 and supply-demand economics. In other words, it solves the pain points of traditional crypto 
 exchanges. It is currently in the Beta testing phase. Once live, TradeBRO will have 
 the following features:
<ul>
    <li>
    Single Trade Window for multiple exchanges and accounts.
    </li>
    <li>
    Ability to connect trades and create volume as per the 
    needs using one single platform or application.
    </li>
    <li>
    Multiple exchanges are supported with multiple private keys.
    </li>
    <li>
    Mobile Kiosks for 'Market Making' Needs.
    </li>
    <li>
    One-Stop Hub for professional traders and arbitragers.
    </li>
    <li>
    Equipped with advanced trading techniques and signals.
    </li>
    <li>
    Equipped with arbitraging bots and techniques within one single application.
    </li>
</ul>
</p>
<div className='buttontrd'>
<a href="https://tradebro.fufi.info/" target="_blank">Trade Bro</a>
</div>
 </div>
</div>
 <div className="col-xs-12 col-sm-12 col-md-5">
     <div className='imgcontainer' style={{padding:'6rem 4rem'}}>
     <img src={tradebro} />
     </div>
 
</div>

   </div>

</div>

 </section> 
    </>
  )
}

export default TradeBRO
