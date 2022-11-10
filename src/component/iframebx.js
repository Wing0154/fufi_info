import React from "react";
import '../assets/css/iframe.css'

// import "./styles.css";
const demos = {
  soundcloud:
    '<iframe width="100%" height="100%" scrolling="no" frameborder="no" id="innerIframe" src="https://content.fufi.info/announcements/"></iframe>'
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
function Iframesd() {
    return (
      <div className="apsdf" id="my-div" style={{width:'100%'}}>
       
        <Iframe iframe={demos["soundcloud"]} />
      </div>
    );
  }

export default Iframesd;
