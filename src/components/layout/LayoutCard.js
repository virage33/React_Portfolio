import React from 'react'

function LayoutCard(props) {

    var height = props.height;
    var width = props.width;
    var bgColor = props.bgColor;
    var background = props.background;
    var paddingBottom = props.paddingBottom;
    var paddingLeft = props.paddingLeft;
    var paddingRight = props.PaddingRight;
    var paddingTop = props.paddingTop;
    var padding = props.padding;
    

    var containerStyle={
        height:`${height}`,
        width:`${width}`,
        bgColor:`${bgColor}`,
        boxShadow: "0 0 60px 0 #d3d1d1",
        padding:`${padding}`,
        paddingLeft:`${paddingLeft}`,
        paddingRight:`${paddingRight}`,
        paddingTop:`${paddingTop}`,
        paddingBottom:`${paddingBottom}`,
        borderRadius:"20px",
        marginTop:"40px",
        marginBottom:"40px",
        background:`${background}`,
        boxSizing:"border-box"
    }


    return (
        <div className='container' style={containerStyle}>
            {props.children}
            <div className='left-wrapper'></div>
            <div className='right-wrapper'></div>
        </div>
    )
}

export default LayoutCard
