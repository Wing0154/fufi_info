import React from "react";
import footerlogo from '../../assets/images/footerlogo.png'
import footerlogobit from '../../assets/images/footerlogo2.png'
import discord from '../../assets/images/Discord.png'

import telegram from '../../assets/images/telegram.png';
import { NavLink,Link } from "react-router-dom";
import privacypolicy from '../../assets/images/FuFi PRIVACY POLICY.pdf'
import './footer.css';

function Footer() {
    return (

        <div className="section-footer">
            <div className="containerd">
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                    <Link className="nsf" to="/">  
                        <img className="boxeds" src={footerlogobit} alt="fufi"/>
                    </Link>
                    <div className="aboutfts" style={{padding:'1px 9px 1px 0'}}>
                    Future's Finance is a high-end blockchain platform that incorporates 
                    artificial intelligence and other cutting-edge technologies to optimize 
                    a wide range of financial and non-financial use cases.
                    </div>
                    
                     
                    </div>

                    <div className="col-xs-12 col-md-9">
                    <div className="row">
                    <div className="col-xs-12 col-md-3">
                      <div className="footerbx">
                          <h6>The FutureFi Ecosystem</h6>
                         <ul>
                             <li><a href="https://fufi.info/TradeKia" target="_blank">TradeKia</a></li>
                             <li><a href="https://fufi.info/TradeBRO" target="_blank">TradeBRO</a></li>
                             <li><a href="https://fufi.info/FufiedgeWallet" target="_blank">FUFIEDGE</a></li>
                             <li><a href="https://fufi.info/Trade0x" target="_blank">Trade0X</a></li>
                             <li><a href="https://fufi.info/CryptoxIN" target="_blank">CryptoxIN</a></li>
                             <li><a href="https://fufi.info/metaverse" target="_blank">Metaverse & NFTials</a></li>
                         </ul>
                      </div>
                        </div>

                       <div className="col-xs-12 col-md-3">
                      <div className="footerbx">
                      <h6>Updates</h6>
                      <ul>
                             <li><a href="https://content.fufi.info/announcements/" target="_blank">Announcement</a></li>
                             <li><a href="https://content.fufi.info/announcements/press-release/" target="_blank">Press Release</a></li>
                             <li><a href="https://fufi.info/team" target="_blank">Team</a></li>
                             <li>
                             <a href={privacypolicy} download="FuFi info Privacy Policy" target="_blank">
                                 Privacy Policy
                                 </a>   
                             </li>
                         </ul>
                      </div>
                        </div>

                        <div className="col-xs-12 col-md-3">
                      <div className="footerbx">
                      <h6>Glossary</h6>
                      <ul>
                      <li><a href="https://coinmarketcap.com/currencies/futurefi/" target="_blank">CoinMarketCap</a></li>
                             <li><a href="https://www.coingecko.com/en/coins/futurefi" target="_blank">Coingecko</a></li>
                             <li><a href="https://www.binance.com/en/price/futurefi" target="_blank">Binance</a></li>
                             <li><a href="https://www.coinbase.com/price/futurefi" target="_blank">Coinbase</a></li>
                             <li><a href="https://crypto.com/price/futurefi" target="_blank">Crypto.com</a></li>
                             <li><a href="https://tradekia.com/" target="_blank">TradeKia</a></li>
                             <li><a href="https://international.indoex.io/trade/FUFI_USDT" target="_blank">Indoex</a></li>
                         </ul>
                      </div>
                        </div>

                        <div className="col-xs-12 col-md-3">
                      <div className="footerbx">
                      <h6>Listing</h6>
                      <ul>
                             <li><a href="https://tradekia.com/" target="_blank">TradeKia</a></li>
                             <li><a href="https://international.indoex.io/trade/FUFI_USDT" target="_blank">Indoex</a></li>
                         </ul>
                      </div>
                        </div>
                        </div>
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   <div className="social-menu">
                    <ul>
                    <li style={{top: '26px'}}>
                        <a href="https://discord.gg/UAcKuUPSh2" target="_blank">
                           
                            <img src={discord} style={{width: '2.1rem',position: 'relative',top: '18px',left: '13px'}} />
                            </a>
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>



                        <li>
                        <a href="https://www.instagram.com/futuresfinance_fufi/" target="_blank">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>



                        <li>
                        <a href="https://www.facebook.com/futuresfinance.fufi" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>




                        <li>
                        <a href="https://twitter.com/futuresfinance" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                        <li>
                        <a href="https://www.youtube.com/channel/UC8t6N4uzi_CjA54oKCyWG0Q" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                       <li>
                       <a href="https://medium.com/@futuresfinance.fufi" target="_blank"><i class="fa fa-medium" aria-hidden="true"></i></a>
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>

                        <li>
                        <a href="https://www.linkedin.com/company/futuresfinance-fufi" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>

                        <li className="telegram">
                        <a href="https://t.me/futuresfinance" target="_blank">
                        <img src={telegram} alt="Fufi"/>
                            </a>
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                        
                       
                 </ul>
                 </div>


                        

                        {/* <ul className="boxify boxeds">

                            <li><a href="https://www.instagram.com/futuresfinance.fufi" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.facebook.com/Futures-Finance-102120829004468" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                            <li><a href="https://twitter.com/futuresfinance" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UC8t6N4uzi_CjA54oKCyWG0Q" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                            <li><a href="https://medium.com/@futuresfinance.fufi" target="_blank"><i class="fa fa-medium" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/futures-finance/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul> */}

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <div className="knoDfgsw">Copyright © 2021. All rights reserved by Future's Finance
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Footer;