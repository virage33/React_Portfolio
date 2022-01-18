import React from 'react'

function TwoColumnsLayout(props) {
    var containerWidth = props.width;
    var containerHeight = props.height;
    var column1Width = props.column1Width;
    var flexDirection = props.flexDirection;
    var column1BgColor = props.column1BgColor;
    var column2BgColor = props.column2BgColor;

    var containerStyle={
        width:`${containerWidth}`,
        height:`${containerHeight}`,
        display:"flex",
        flexDirection:`${flexDirection}`,
    }
    var column1Style={
        width:`${column1Width}`,
        height:"100%",
        background:`${column1BgColor}`,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
    var column2Style={
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:`${column2BgColor}`
    }
    
    return (
        
        <div className='container' style={containerStyle}>
           {
               props.children.map((x)=>{
                   return x;
               })
           }
            {/* <div className='column1' style={column1Style}>
                {props.child}
            </div>
            <div className='column2' style={column2Style}>
                {props.child}
            </div> */}
            
        </div>
    )
}

export default TwoColumnsLayout


