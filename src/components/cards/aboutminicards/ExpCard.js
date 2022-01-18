import React from 'react'

function ExpCard(props) {
    const skCardStyle={
        width:"350px",
        height:"200px",
        borderRadius:"20px",
        background: "linear-gradient(to top, #9e78fb 0%,#e481c6 100%)", 
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:"0 0 60px 0 #d3d1d1",
        lineHeight:"0px",
        letterSpacing:"6px",

    }
    const h1={
        fontSize:"40px",
        fontWeight:"600",
        color:"#fff",
        lineHeight:"0px"
    }
    const h5 = {
        fontSize:"15px",
        color:"#fff",
        lineHeight:"0px"
    }

    return (
        <div className='exp_wrapper' style={skCardStyle}>
            <h1 style={h1}>{props.title}</h1>
            <h5 style={h5}>{props.subtitle}</h5>
        </div>
    )
}

export default ExpCard
