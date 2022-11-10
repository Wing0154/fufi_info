import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel' 


const Media = () => {
  const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 2 },
        { width: 1750, itemsToShow: 2 },
      ]


  return (
    <>
       <Carousel
  breakPoints={breakPoints}
  onResize={currentBreakPoint => console.log(currentBreakPoint)}
>
  <consts>
      <a target="_blank" href='https://content.fufi.info/announcements/press-release/futures-finance-a-proof-of-authority-blockchain-platform-forays-into-nfts-and-metaverse/'>
      <div style={{backgroundColor:'transparent',height:'auto',borderColor:'none',boxShadow:'none'}} class="whyus_text fortokens tok3">
      <h6 class="whyus_text" style={{backgroundColor:'#edecec',height:'auto',borderColor:'none',padding: '22px',textAlign: 'center',minHeight:'170px',borderRadius:'15px'}} >
      Future’s Finance, a Proof of Authority Blockchain Platform Forays into NFTs and Metaverse
          </h6>    
      </div>
      </a>
  </consts>
  <consts>
  <a target="_blank" href='https://content.fufi.info/fufi-burn-event-become-sole-interest-deployer/'>
      <div style={{backgroundColor:'transparent',height:'auto',borderColor:'none',boxShadow:'none'}} class="whyus_text fortokens tok3">
      <h6 class="whyus_text" style={{backgroundColor:'#edecec',height:'auto',borderColor:'none',padding: '22px',textAlign: 'center',minHeight:'170px',borderRadius:'15px'}} >
      FuFi Burn Event- Become Sole Interest Deployer & Earn 70% Of Block Reward For Lifetime
          </h6>
      </div>
      </a>
  </consts>
</Carousel> 
    </>
  )
}

export default Media
