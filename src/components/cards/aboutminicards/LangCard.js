import React from 'react'
import './LangCard.css'
import './AboutMiniCardsGeneralStyle.css';

function LangCard(props) {
    
    
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
        transition:".3s",
        cursor:'pointer'

    }
   
    const h5 = {
        fontSize:"15px",
        lineHeight:"0px"
    }
    return (
        <div className='lang_wrapper card-hover' style={skCardStyle}>
            <h2 className='lang_h2'>{props.title}</h2>
            <p>&</p>
            <h5 style={h5}>{props.subtitle}</h5>
        </div>
    )
}

export default LangCard