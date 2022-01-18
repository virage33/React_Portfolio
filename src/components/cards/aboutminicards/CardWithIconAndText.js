import React from 'react'
import './AboutMiniCardsGeneralStyle.css';

function CardWithIconAndText(props) {
    const color1 = props.color1;
    const color2 = props.color2;
    const direction = props.gradientDirection
    const skCardStyle={
        width:`${props.width}`,
        height:`${props.height}`,
        borderRadius:"20px",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:"0 0 60px 0 #d3d1d1",
        lineHeight:"0px",
        letterSpacing:"6px",
        cursor:"pointer",     
        background: `linear-gradient(to ${direction},  ${color1} 0%,${color2} 100%)`,
        transition:".3s"
        
    }

   var h2Style={
        color:"#fafafa",
        fontSize:`${props.fontSize}`,
    }
    return (
    <div className='playlist-wrapper card-hover' style={skCardStyle}>
         <div> {props.icon}</div>
          
         <h2 style={h2Style}>{props.title}</h2>
    </div>);
}

export default CardWithIconAndText
