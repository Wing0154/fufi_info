import React,{useState,useEffect} from "react";
import { Link,useNavigate} from "react-router-dom";
//import '../assets/css/navigation.css'
import '../assets/css/offcanvas.css'
import '../assets/css/bootstrap.css'
import whitePaper from '../assets/images/FuFi-Whitepaper.pdf';

import Dashboard from '../component/Dashboard'

import Headerlogo from '../assets/images/footerlogo.png'
const Navigation = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [enabled, setEnabled] = useState(false);
    const [enab, setEnab] = useState(false);
    const [enabs, setEnabs] = useState(false);

    //className={enabled ? "offcanvas offcanvas-rightside" : "offcanvas offcanvas-leftside offcanvas-mobile-menu-section"}


//   const hideModal = (event) => {
// useEffect(() => {
//     document.body.classList.remove('offcanvas-rightside');
//   }


  return (
    <>
    <header class="header-section d-lg-block d-none">
      
        <div class="header-bottom sticky-header">
            <div class="container-fluid newcontaiber">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="mobile-header--left">
                    <a className="mobile-logo-link" href="/">
                    <img src={Headerlogo} style={{maxWidth:'100%'}} />
                    </a>
                     </div>
                        
                        
                        
                        <div class="main-menu">
                            <nav>
                                <ul>
                                    <li class="has-dropdown">
                                    <a href="/">Home</a>
                                    {/* <Link to="/">Home Page</Link> */}
                                    </li>
                                    <li class="has-dropdown">
                                    <a href="/aboutus">About</a>                             
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#">
                                            Eco System <i class="fa fa-angle-down"></i></a>
                                
                                        <ul class="sub-menu">
										
                            <li><Link to="/TradeKia">TradeKia</Link></li>
                            <li><Link to="/FufiedgeWallet">Fufi Edge</Link></li>
                            <li><Link to="/Trade0x">Trade0x</Link></li>
                            <li><Link to="/CryptoxIN">CryptoxIN</Link></li>
                            <li><Link to="/TradeBRO">TradeBRO</Link></li>
                                        </ul>
                                    </li>





                                    <li class="has-dropdown">
                                        <a href="#">Updates <i class="fa fa-angle-down"></i></a>                                       
                                        <ul class="sub-menu">
                                        <li><a target="_blank" href="https://content.fufi.info/announcements/press-release/">Press Release</a></li>
                                        <li><a target="_blank" href="https://content.fufi.info/announcements/">Announcements</a></li>
                                        <li><a target="_blank" href="https://www.youtube.com/channel/UC8t6N4uzi_CjA54oKCyWG0Q">Videos</a></li>
                                        <li><a href="/Timeline">Timeline</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                    <a href={whitePaper} download="FuFi White Paper">White Paper</a>   
                                    </li>
                                    <li>
                                    <a href="/metaverse">
                                    Metaverse and NFTials                                 
                                </a>
                                      
                                    </li>
                                    <li>
                                    <a target="_blank" href="https://content.fufi.info/">                          
                                    Blog
                                   </a>                                  
                                    </li>  
                                    <li>
                                    <a target="_blank" href="https://fufiscan.com/">                          
                                    FUFI Explorer
                                </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> 
                    </div>


                </div>
            </div>
        </div>
    </header>

 
    <div class="mobile-header-section d-block d-lg-none">
      
        <div class="mobile-header-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between align-items-center">
                        <div class="mobile-header--left">
                          
                            <Link to="/">
                    <img src={Headerlogo} style={{width:'auto'}} />
                    </Link>
                           
                        </div>
                        <div class="mobile-header--right">
                            <a href="#mobile-menu-offcanvas" class="mobile-menu offcanvas-toggle">
                            <div onClick={() => setEnabled(!enabled)}>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                            </div>

                                {/* <span class="mobile-menu-dash"></span>
                                <span class="mobile-menu-dash"></span>
                                <span class="mobile-menu-dash"></span> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>


    {/* <div id="mobile-menu-offcanvas" class="offcanvas offcanvas-leftside offcanvas-mobile-menu-section"> */}
   
    <div id="mobile-menu-offcanvas" className={enabled ? "offcanvas offcanvas-rightside" : "offcanvas offcanvas-leftside offcanvas-mobile-menu-section"}>
    


        <div class="offcanvas-header text-right" style={{visibility:'hidden'}}>
            <button class="offcanvas-close"><i class="fa fa-times"></i></button>
        </div> 
     
        <div class="offcanvas-mobile-menu-wrapper">
      
        
    
            <div class="mobile-menu-center">
        
                <div class="offcanvas-menu">
                <ul>
                                    <li class="has-dropdown" onClick={() => setEnabled(!enabled)}>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li class="has-dropdown" onClick={() => setEnabled(!enabled)}>
                                    <Link to="/aboutus">About</Link>                             
                                    </li>
                                    <li class="has-dropdown">
                                        {/* <a href="blog-single-sidebar-left.html">
                                            Eco System <i class="fa fa-angle-down"></i></a> */}
                                 <div onClick={() => setEnab(!enab)}>Eco System
                                 <i class="fa fa-angle-down"></i>
                                 </div>
                                        {/* <ul class="sub-menu"> */}
							<ul  className={enab ? "sub-menu sub-menu-mob" : "sub-menu"}>			
                            <li onClick={() => setEnabled(!enabled)}><Link to="/TradeKia">TradeKia</Link></li>
                            <li onClick={() => setEnabled(!enabled)}><Link to="/FufiedgeWallet">Fufi Edge</Link></li>
                            <li onClick={() => setEnabled(!enabled)}><Link to="/Trade0x">Trade0x</Link></li>
                            <li onClick={() => setEnabled(!enabled)}><Link to="/CryptoxIN">CryptoxIN</Link></li>
                            <li onClick={() => setEnabled(!enabled)}><Link to="/TradeBRO">TradeBRO</Link></li>
                                        </ul>
                                    </li>





                                    <li class="has-dropdown">
                                    <div onClick={() => setEnabs(!enabs)}>Updates
                                 <i class="fa fa-angle-down"></i>
                                 </div>                                      
                                 <ul  className={enabs ? "sub-menu sub-menu-mob" : "sub-menu"}>	
                                        <li><a target="_blank" href="https://medium.com/fesschain/fess-chain-rebranding-statement-transition-into-futures-finance-e0c07588de31">Press Release</a></li>
                                        <li><a target="_blank" href="https://medium.com/fesschain">Announcements</a></li>
                                        <li><a target="_blank" href="https://www.youtube.com/channel/UC8t6N4uzi_CjA54oKCyWG0Q">Videos</a></li>
                                        <li onClick={() => setEnabled(!enabled)}><Link to="/Timeline">Timeline</Link></li>
                                    
                                        </ul>
                                    </li>
                                    <li>
                                    <a href={whitePaper} download="FuFi White Paper">White Paper</a>   
                                    </li>
                                    <li onClick={() => setEnabled(!enabled)}>
                                    <Link to="/metaverse">
                                    Metaverse and NFTials                                 
                                </Link>
                                      
                                    </li>

                                    <li onClick={() => setEnabled(!enabled)}>
                                    <a target="_blank" href="https://content.fufi.info/">                          
                                    Blog
                                   </a>                                  
                                    </li>   
                                    <li>
                                    <a target="_blank" href="https://fufiscan.com/">                          
                                    FUFI Explorer
                                </a>
                                    </li>
                                </ul>
                </div>

               
            </div>
            {/* <div class="mobile-menu-bottom">
               
                <a class="mobile-menu-email icon-text-right" href="mailto:info@yourdomain.com"><i class="fa fa-envelope-o"> info@yourdomain.com</i></a>

               
                <ul class="mobile-menu-social">
                    <li><a href="" class="facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="" class="twitter"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="" class="youtube"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="" class="instagram"><i class="fa fa-instagram"></i></a></li>
                </ul>
            </div>  */}
        </div>
    </div> 

<div>

</div>


    </>
  )
}

export default Navigation
