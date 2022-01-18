import React from "react";
import MainCard from "../../components/cards/MainCard";
import ExpCard from "../../components/cards/aboutminicards/ExpCard";

import "./Home.css";
import LangCard from "../../components/cards/aboutminicards/LangCard";

import CardWithIconAndText from "../../components/cards/aboutminicards/CardWithIconAndText";
import LayoutCard from "../../components/layout/LayoutCard";
import TwoColumnsLayout from "../../components/layout/TwoColumnsLayout";
import Layout from "../../components/layout/Layout";
import SkillCards from "../../components/cards/SkillCards";
import ski1 from "../../asset/img/ld_img.png";

function Home() {
    return (
        <div className="home" id="home">
            <MainCard />

            {/*About skills*/}
            <div className="skill_cards">
                <ExpCard title="2 YEARS" subtitle="EXPERIENCE" />

                <LangCard
                    height="200px"
                    width="200px"
                    title="LANGUAGES"
                    subtitle="FRAMEWORKS"
                />

                {/*Interests Card */}
                <CardWithIconAndText
                    width="250px"
                    height="200px"
                    fontSize="25px"
                    color1="#16a085"
                    color2="#f4d03f"
                    gradientDirection="left"
                    title="Interests"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="70"
                            height="70"
                            fill="#fafafa"
                            class="bi bi-controller"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                        </svg>
                    }
                />

                {/*playlist card*/}
                <CardWithIconAndText
                    width="300px"
                    height="200px"
                    fontSize="25px"
                    color1="#fa709a"
                    color2="#fee140"
                    gradientDirection="right"
                    title="Playlist"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="70"
                            height="70"
                            fill="#fafafa"
                            class="bi bi-music-note-beamed"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                        </svg>
                    }
                />
            </div>

            
                    
            <div className="abount-main-card">
                <LayoutCard height='60vh' width='100%' bgColor='#fafafa' padding='0'>
                    <TwoColumnsLayout width='100%' height='100%'  column1BgColor='blue' column2BgColor='green'>
                        
                        <div style={{width:"40%",height:"100%"}} className="about-left">
                            <img src=""/>
                        </div>
                        <div style={{backgroundColor:"transparent",width:"60%",height:"100%"}} className="about-right">

                        </div>
                    </TwoColumnsLayout>
                </LayoutCard>
            </div>


            {/*skills*/}
            <div className="skills-container">
                <SkillCards height='350px' width='25%' background='#fafafa' title='FrontEnd' subtext='this is my bad ass' img={ski1} />

            </div>


            {/*Contact section  */}

            <div className="contact-section">
                <LayoutCard height='60vh' width='100%' bgColor='#fafafa'>
                    
                </LayoutCard>
            </div>
        </div>
    );
}

export default Home;
