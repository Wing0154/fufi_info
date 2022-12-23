import React,{useState,useEffect} from "react";

import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/css/blockchain.css'
import '../assets/css/background.css'
import Backgroundjs from './Backgroundjs'
import '../assets/css/movingcanvas.css'
import Testimonials from '../component/testimonials/Testimonials'
import tech11 from '../assets/images/7B823CED.png'
import tech12 from '../assets/images/tech12.png'
import tech13 from '../assets/images/tech13.png'
import Token from "../component/coinmics/Token";
import img21 from '../assets/images/21.png';
import img22 from '../assets/images/22.png';
import img23 from '../assets/images/23.png';
import img24 from '../assets/images/24.png';
import img25 from '../assets/images/25.png';
import img26 from '../assets/images/26.png';
import chartson from '../assets/images/chartdf.svg';
import chartsode from '../assets/images/bars.svg';


import Iframesd from '../component/iframebx';
import Slidersf from '../component/Roadmap/Slidersf'
import Sliderfg from '../component/awsomeslider/Slider'
import '../assets/css/roadmap.css'

import boxed1 from '../assets/images/boxed1.png';
import boxed2 from '../assets/images/boxed2.png';

import whyus from '../assets/images/why-us.png';
import Media from '../component/newsmedia/Media'
import medias from '../assets/images/media.svg'
import '../component/newsmedia/media.css'
import $ from "jquery";

import Newroadmap from '../component/newroadmap/newroadmap'
import ScrollAnimation from 'react-animate-on-scroll'
import newsmedia from '../assets/images/newsmedia.svg'
import whitelogo from '../assets/images/whitelogo.svg'
import fullresolution from '../assets/images/fullresolution.png'
import anilogo from '../assets/images/ani_logo.jpg'


const Dashboard = () => {

 const [enabled, setEnabled] = useState(false);

//  const gotbits=()=>{
//         $('#mobile-menu-offcanvas').removeClass('offcanvas-rightside')
//           $('#mobile-menu-offcanvas').addClass('offcanvas-leftside');
//   };

// const add = () => { 
//     setEnabled(!enabled) 
// }

const sendMessage = () => {
    let menuItems=document.getElementById("mobile-menu-offcanvas");
    menuItems.classList.remove("offcanvas-rightside");
    menuItems.classList.add("offcanvas-leftside");
  }
  

  return (

    <div onClick={sendMessage}>
 <Backgroundjs />

    <section className='section-container one' id="home">
    
  
    <div className="container-main main-zero">
  
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6">
  

<div className='layout-bx futurefin' style={{paddingBottom:'0'}}>
<ScrollAnimation className="bidfyes"
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={1.2}
          >
         <div className='layouthomepagr layoutpagr'>
  <h1 style={{color:'#4b4b4d'}}>
  What is Future Finance ?
  </h1>
</div>
          </ScrollAnimation>


<p>
Future's Finance Is A  Blockchain For The Modern Era. It Combines Cutting-Edge Technologies To Provide Decentralized Applications, Systems, And Communities With Unparalleled Security And Sustainability.<br/>
FutureFi Blockchain Combines Artificial Intelligence And Machine Learning With Proof Of Authority, Proof Of Burned Stakes, And Proof Of Delegated Stakes To Provide A Fair, Transparent, And Scalable Platform Capable Of Hosting A Variety Of Decentralised Applications For Real-World Use Cases.
</p>


</div>
  </div>
    <div class="col-xs-12 col-sm-12 col-md-6">
 
<div className='texhbacks'>
<img src={tech11} style={{position:'relative',maxWidth:'100%'}} /> 
</div>

 

    </div>
</div>
</div>


    </section>














    
    <section className='section-container two'>
 
  
    <div className="container-main main-zero">
   
    <div className="row">
    <div className="order-2 col-xs-12 col-sm-12 col-md-5 order-md-1">
    <img src={tech12} style={{padding:'2rem',maxWidth:'100%',width:'auto',margin: '0 auto' }} />
   </div>
   <div className="order-1 col-xs-12 col-sm-12 col-md-7 order-md-2">
   
    <div className='foxy'>
    <div className='layouthomepagr'>
  <h2>
  FutureFi Technical Framework
  </h2>
  </div>
    <div class="boxed"><span></span><span></span><span></span><span></span></div>

    <p class="header_text technicles">FutureFi is powered by a robust technology framework that makes it highly differentiated and the best blockchain solution for business operations.<ul><li>High transaction speed (250K TPS at the moment with a target of 1 Million TPS).</li><li>Powered by Artificial Intelligence that enables the fragmented and parallel processing of transactions across a multi-chain network.</li><li>Our platform runs on the Proof of Authority Consensus Algorithm.</li><li>Future’s Finance only takes 1 sec to form a new block, thus reducing network congestion.</li><li>It offers the lowest competition as per industry standards at only $0.01 per GB, thus making it an extremely affordable avenue.</li></ul></p>
    </div>
</div>
      </div>

</div>

    </section>





    
    <section className='section-container two'>
 
    <Backgroundjs />
 
    <div className="container-main main-zero">
   
    <div className="row">
 
   <div className="col-xs-12 col-sm-12 col-md-7">
  
    <div className='foxy'>
    <div className='layouthomepagr'>
  <h2>
  The FutureFi Consensus Mechanism
  </h2>
  </div>
    <div class="boxed">
      <span></span><span></span><span></span><span></span>
      </div>

    <p class="header_text">One of the reasons why FutureFi is the most scalable blockchain
     platform is its backend consensus algorithm. Here is a glimpse into how the FutureFi 
     ecosystem works.<ul>
         <li>Every Network is run by its chosen Block Validators and only they have the right 
             to verify and seal transactions.</li><li>FuFI holds the right to add 12 Validators 
                 to the network out of which 7 will be run in - House by our team.</li>
                
                 <li>
                 FuFI holds the right to add 12 Validators to the network out of which 7 will be 
                 run in - House by our team.      
                 </li>

                 <li>FuFi plans to implement its current architecture in two phases - Mainnet 
                     1.0 Named FuFI Edge Node and Mainnet 2.0 FuFi Edge+ Node.</li>
                     
                     </ul></p>
    </div>
</div>

<div className="col-xs-12 col-sm-12 col-md-5">
<img src={tech13} style={{maxWidth:'100%',width:'auto',margin: '0 auto' }}/>
</div>
      </div>

</div>

    </section>








    <section className='section-container two sectioncd'>
    <div class="layouthomepagr" style={{textAlign:'center'}}><h2 style={{textAlign:'center'}}>Why us</h2>
    <div class="coinmics">
    Reasons to choose FutureFi
    </div></div>

  <div className='row'>
    <div className='col-md-8'>
    
 
<Testimonials />
        </div>
        <div className='hidden-xs col-md-4'>
<div className='fufiimgx'>
    <img src={whyus} />
</div>
</div>
</div>

    </section>





    <section className='section-container two' style={{background:'#F8F8F8'}}>
    <Backgroundjs />
    <div className='layouthomepagr'>
  <h2 style={{textAlign:'center',paddingTop:'2rem'}}>
  Features
  </h2>
  <h5>
 <span>
     FutureFi is equipped with simple yet crucial features that make it one of the best 
     blockchain platforms available.
     </span>
  </h5>
  </div>
    <div className="container-main main-six">
    <div class="row">
    <div class="col-md-4">
    <div class="bxshadow">
    <div class="img-box">
    <img src={img21} alt="Fufi" style={{ width: "13rem", padding: '1px', margin: '0px auto' }} />
    </div>
  
            <div class="cardbx first-card border-0">
            
                <div class="card-body">
                    <h3 class="card-title">Secured</h3>
                    <p class="card-text">Multi-layered technical architecture and Proof of Stake (PoS) for a high-level protection layer for DApps.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
    <div class="bxshadow">
    <div class="img-box">
    <img src={img22} alt="Fufi" style={{ width: "13rem", padding: '1px', margin: '0px auto' }} />
    </div>
            <div class="cardbx second-card border-0">
          
                <div class="card-body">
                    <h3 class="card-title">Scalable</h3>
                    <p class="card-text">On Fufi main chain recording only relevant data by verifying itself from the bitcoin blockchain and/or the timestamp. Distributes the core’s power into fragments.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bxshadow">
        <div class="img-box">
        <img src={img23} alt="Fufi" style={{ width: "13rem", padding: '1px', margin: '0px auto' }} />
        </div>
            <div class="cardbx border-0">
               
                <div class="card-body">
                    <h3 class="card-title">Fast</h3>
                    <p class="card-text">With increasing data and nodes to be implemented, the TPS of Fufi main chain goes upwards instead of falling down.</p>
                </div>
            </div>
        </div>
    </div>
</div>




<div class="row">
    <div class="col-md-4">
        <div class="bxshadow">
        <div class="img-box">
        <img src={img24} alt="Fufi" style={{ width: "13rem", padding: '1px', margin: '0px auto' }} />
        </div>
            <div class="cardbx first-card border-0">          
                <div class="card-body">
                    <h3 class="card-title">Transparent</h3>
                    <p class="card-text">We strongly support the data privacy and with the help of the 
                    blockchain in technology,FutureFi confidently keeps the promise.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-4">
        <div class="bxshadow">
        <div class="img-box">
        <img src={img25} alt="Fufi" style={{ width: "13rem", padding: '1px', margin: '0px auto' }} />
        </div>
            <div class="cardbx second-card border-0">       
                <div class="card-body">
                    <h3 class="card-title">Diversity</h3>
                    <p class="card-text">Designed to stay relevant for all business arena and use cases. The versatility of tech framework makes the Fufi blockchain obvious as a perfect business solution.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="bxshadow">
        <div class="img-box">
        <img src={img26} alt="Fufi" style={{ width: "13rem", padding: '1px', margin: '0px auto' }} />
        </div>
            <div class="cardbx border-0">
                <div class="card-body">
                    <h3 class="card-title">Decentralised</h3>
                    <p class="card-text">FutureFi is working an ecosystem which is distributed in nature and non-centralised in functionality.</p>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
</section>



  <section className='section-container one'>


    <Backgroundjs />
    <div className='layouthomepagr'>
  <h4 style={{textAlign:'center'}}>
  Coinomics
  </h4>

 <div className='coinmics'>
 All the operations within the Future’s Finance DApp are fueled by its native
  coin FuFi. Users and participants can use the FuFi coin to execute all the activities
   within the Future’s Finance ecosystem and across all our partner platforms. The total 
   supply is 10000000000 FuFi Coins. 
    </div>
 
  </div>
  <div className="container-main main-three">


  <div class="row">
    <div class="col-md-7">
        <div class="row">
            <div class="col-md-6">
                <div class="colMdrs aos-init aos-animate" data-aos="fade-right">
                    <div class="whyus_text fortokens tok1">
                        <h4 class="whyus_text">For Team</h4>Coins Allocated for Team: 15% (1,500,000,000 FuFi)</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="colMdrs aos-init aos-animate" data-aos="fade-left">
                    <div class="whyus_text fortokens tok2">
                        <h4 class="whyus_text">For Rewards</h4>Coins Allocated for Staking Rewards &amp; Giveaway: 15% (1,500,000,000 FuFi)</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="colMdrs aos-init" data-aos="fade-left">
                    <div class="whyus_text fortokens tok3">
                        <h4 class="whyus_text">For Marketing</h4>Coins Allocated for Marketing Expenses: 5% (500,000,000 FuFi)</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="colMdrs aos-init" data-aos="fade-right">
                    <div class="whyus_text fortokens tok4">
                        <h4 class="whyus_text">For Sale</h4>Coins Allocated for Sale: 45% (4,500,000,000 FuFi)</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="colMdrs aos-init" data-aos="fade-left">
                    <div class="whyus_text fortokens tok5">
                        <h4 class="whyus_text">For Development</h4>Coins Allocated for Development: 12% (1,200,000,000 FuFi)</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="colMdrs aos-init" data-aos="fade-right">
                    <div class="whyus_text fortokens tok6">
                        <h4 class="whyus_text">For Maintenance</h4>Coins Allocated for Maintenance: 8% (800,000,000 FuFi)</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-5">
        <div class="piechart">
        <Token />
            </div>
    
    </div>
</div>

  </div>
  {/* <div class="moving-bg"></div> */}
  </section>
   


  <section className='section-container two newroadmap' style={{background:'#f1f1f1',paddingBottom: '36px'}}>
  <div class="layouthomepagr">
      <h2 style={{textAlign:'center',paddingTop:'3rem',color:'#333'}}>Roadmap</h2>
  <div class="coinmics">
  we have planned wonderful roadmap for you.  
      </div></div>

      <div className='row'>
<div className='offset-md-1 col-md-10' style={{padding:'0'}}>
<Newroadmap />
</div>
</div>
      </section>
 
<section className='section-container two' style={{background:'#f9f9f9',height: 'auto' }}>
<div class="layouthomepagr"><h2 style={{textAlign:'center',paddingTop:'2.5rem'}}>Exchanges Listed on</h2>
  </div>

<div className='row'>
<div className='offset-md-2 col-md-8'>
<ul class="smol-flexbox-grid">
  <li>
  <div className='bifixes'>
    <a href="https://tradekia.com/" target="_blank">
  <img src={boxed1} />
  </a>
    </div>
  </li>
  <li>
  <div className='bifixes'>
<a href="https://m.indoex.io/trade/FUFI_USDT" target="_blank">
<img src={boxed2} /> 
</a>
 </div>   
  </li>

</ul>

</div>



</div>

  </section>




<section className='section-container two' style={{background:'#f9f9f9',height: 'auto' }}>
<div class="layouthomepagr"><h2 style={{textAlign:'center',lineHeight:'10rem'}}>
    News and Media</h2>
  </div>


  <div className='row'>
  <div className='offset-md-1 col-md-2'>
  </div>
<div className='col-6 col-sm-12 col-md-2'>
<div className='colmd3'>
    <a href="https://www.deccanherald.com/brandspot/pr-spot/future-s-finance-a-proof-of-authority-blockchain-platform-forays-into-nfts-and-metaverse-1097479.html" target="_blank">
<img src={whitelogo} />
    </a>
</div>
</div>
<div className='col-6 col-sm-12 col-md-2'>
<div className='colmd3'>
    <a href="https://edtimes.in/futures-finance-a-new-age-blockchain-platform-is-utilizing-the-poa-algorithm-to-deliver-scalable-real-life-solutions/" target="_blank">
    <img src={fullresolution} style={{position: 'relative',top: '-9px'}} />
    </a>   
</div>
</div>
<div className='col-12 col-sm-12 col-md-2'>
<div className='colmd3'>
    <a href="https://www.aninews.in/news/business/business/futures-finance-launches-its-proprietary-crypto-wallet-the-fufi-edge-available-for-download-on-the-android-play-store20220412152908/" target="_blank">
    <img src={anilogo} style={{padding: '15px',position: 'relative', top: '-12px'}}/>
    </a>
</div>
</div>


</div>





<div className='row'>
<div className='col-md-3'>
    <div>
        <img src={newsmedia} className="bbner" style={{filter: 'drop-shadow(1px 4px 6px #ccc)'}} />
    </div>
</div>

<div className='col-md-9'>
<Media />

    </div>
    </div>
  </section> 







    </div>
  )
}

export default Dashboard
