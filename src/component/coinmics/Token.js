import React , {useState,useEffect} from "react";
//import { PieChart } from 'react-minimal-pie-chart';
//import Chart from './Chart'
import './Token.css';

import { Pie } from "react-chartjs-2";

function Token() {
 
 


  var options = {
    Offset:50,
    legend:true,
    legend: {
      position: "absolute",
      labels: {
        position: "bottom",
        boxWidth: 10,
        fontSize: 25,
        fontColor: '#fc0'
      }
    },
    scales: {
      xAxes: [
        {
          ticks: { display: true }
        }
      ]
    }
  };

const pieData = {
  showInLegend: true,
	datasets: [{
    data: [45,15,15,5,12,8],
		backgroundColor: [
      'rgba(167, 0, 0, 0.8)',
      'rgba(255,0,0, 0.8)',
      'rgba(255,82,82, 0.8)',

      'rgba(255,123,123, 0.8)',
      'rgba(197, 122, 122, 0.9)',
      'rgba(226, 57, 57, 0.8)'
		],
    hoverOffset:50,
    startAngle:  90,
    transformStyle: '2d'
	}],
  labels: [
    'Sale 45%',
		'Team 15%',
		'Rew 15%',
		'Exp 5%',
    'Dev 12%',
    'Main 8%',
	]
  
};
     
    return (
 
                <>
                <Pie data={pieData} options={options} />
                </>
 
    )

    
}
// const Button = props => (
//     <>

    
//      <button
//      className="borbutmn"
//      style={{
//        marginTop: "32px",
//        marginLeft: "24px",
//        outline: "none",
//        borderColor: props.options.isVisible
//          ? props.options.borderColor
//          : "#bfbfbf",
//        backgroundColor: props.options.isVisible
//          ? props.options.bgColor
//          : "#efefef",
//        color: props.options.isVisible ? "#444" : "#666",
//        transitionDuration: ".2s",
//        transitionProperty: "box-shadow"
//      }}
//    //   onClick={() => props.handleToggleBars(props.options.caption)}
//      onFocus={event => {
//        event.target.style.boxShadow = `0 0 0 2px ${props.options.borderColor}`;
//      }}
//      onBlur={event => {
//        event.target.style.boxShadow = "initial";
//      }}
//    >
   
//    </button>
//    <div className="flexifd">
//        <div>
//        {props.options.caption}
//        </div>
//        <div>
//        {props.options.label}  
//        </div>
      
//     </div>
//     </>
   
    
//   );
  
export default Token;