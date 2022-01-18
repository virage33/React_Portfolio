import React from 'react'
import"./aboutminicards/AboutMiniCardsGeneralStyle.css";


function SkillCards(props) {

    var containerStyle={
        width:`${props.width}`,
        height:`${props.height}`,
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:`${props.background}`,
        borderRadius:"10px"
    }
    var imageStyle={
        width:"100%",
        height:"100%",
        position:"absolute",
        borderRadius:"10px 10px 0 0",
    }
    var imgWrapperStyle={
        width:"100%",
        height:"45%",
        position:"relative",
        
    }
    var textWrapperStyle={
        height:"55%",
        width:"100%",
        textAlign:"center"
    }

    return (
        <div className="container box-shadow card-hover" style={containerStyle}>
            <div className='img-wrapper' style={imgWrapperStyle}>
                <img src={props.img} alt="" style={imageStyle}/>
            </div>
            <div className='text-wrapper' style={textWrapperStyle}>
                <h3>{props.title}</h3>
                <p>{props.subtext}</p>
            </div>
        </div>
    );
}

export default SkillCards
