import React from 'react'

import '../newroadmap/testimonial.css'
//import mapsd from '../../assets/images/location.gif'
import mapsd from '../../assets/images/placeholder.png'


const Newroadmap = () => {

    return (
        <>

            <section class="ps-timeline-sec">
                <div class="container">
                    <ol class="ps-timeline">
                        <li>
                            <div class="img-handler-top">
                                <img src={mapsd} />
                            </div>
                            <div class="ps-bot">
                                <div class="whyus_text fortokens tok6" style={{ backgroundColor: 'tranparent' }}>
                                    <ul className='bilsimg'>
                                        <li style={{ height: 'auto' }}>Launch of FUFI Blockchain</li>
                                        <li style={{ height: 'auto' }}>Listing of FUFI Coin on Exchange</li>
                                        <li style={{ height: 'auto' }}>Launch Of AMM TradeBRO</li>
                                        <li style={{ height: 'auto' }}>Launch Of FUFI Smart Contract</li>
                                    </ul>
                                </div>
                            </div>
                            <span class="ps-sp-top">Q1-2022</span>
                        </li>
                        <li>
                            <div class="img-handler-bot">
                                <img src={mapsd} />
                            </div>
                            <div class="ps-top">
                                <div class="whyus_text fortokens tok6" style={{ backgroundColor: 'tranparent' }}>
                                    <ul className='bilsimg'>
                                        <li style={{ height: 'auto' }}>Launch Of FUFI Proprietary Wallet “FUFIEdge”</li>
                                        <li style={{ height: 'auto' }}>Development Of Derivative Exchange Platform “TradeKIA”</li>
                                        <li style={{ height: 'auto' }}>Development of CryptoxIN</li>	
                                    </ul>
                                    </div>
                            </div>
                            <span class="ps-sp-bot">Q2-2022</span>
                        </li>
                        <li>
                            <div class="img-handler-top">
                                <img src={mapsd} />
                            </div>
                            <div class="ps-bot">
                                <div class="whyus_text fortokens tok6" style={{ backgroundColor: 'tranparent' }}>
                                    <ul className='bilsimg'>
                                        <li style={{ height: 'auto' }}>Launch Of SID Module</li>
                                        <li style={{ height: 'auto' }}>Launch Of Derivative Exchange Platform “TradeKIA”</li>
                                        <li style={{ height: 'auto' }}>Development of Decentralized Exchange “TradeOX”</li>
                                        <li style={{ height: 'auto' }}>Launch Of Decentralized Exchange“TradeOX”</li>
                                        <li style={{ height: 'auto' }}>Launch of CryptoxIN (An Exclusive Social Community App)</li>
                                    </ul></div>
                            </div>
                            <span class="ps-sp-top">Q3-2022</span>
                        </li>
                        <li>
                            <div class="img-handler-bot">
                                <img src={mapsd} />
                            </div>
                            <div class="ps-top">
                                <div class="whyus_text fortokens tok6" style={{ backgroundColor: 'tranparent' }}>
                                    <ul className='bilsimg'>
                                        <li style={{ height: 'auto' }}>Development Of Staking Module</li>                                    
                                        <li style={{ height: 'auto' }}>Liquidity Protocol Launch</li>
                                        <li style={{ height: 'auto' }}>Launching Of Staking Module</li>
                                        <li style={{ height: 'auto' }}>Development & Launch Of NFT Platform</li>
                                        <li style={{ height: 'auto' }}>Launch Of NFT Marketplace NFTials In  Dubai</li>

                                    </ul></div>
                            </div>
                            <span class="ps-sp-bot">Q4-2022</span>
                        </li>
                    </ol>
                </div>
            </section>
        </>
    )
}

export default Newroadmap
