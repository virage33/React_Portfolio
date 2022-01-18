
import Header from '../Header';
import Borderbtn from '../buttons/Borderbtn';
import './MainCard.css'
import bg from '../../asset/img/ld_img.png';


function MainCard(){
    return <div className="landing_card">
        
        <div className='header'>
            <Header/>
        </div>
        
        <div className='main_content_container'>
                <div className='main_content_left'>
                    <div className='ld_title_container'>
                        <div className='ld_title_container_design'>

                        </div>
                        <div className='ld_title_container_text'>
                            <h2 className='ld_h2_title'>SULEIMAN SANI</h2>
                            <p className='ld_subtitle'>SOFTWARE ENGINEER</p>
                        </div>
                    
                    </div>
                    
                    <p className='ld_subtext'>
                        Hi, I'm Suleiman. This is my portfolio site showing
                        what I can do as a Software Engineer.
                        So if you're intrigued by any of my
                        work or have any questions be sure
                        to contact me.
                    </p>
                    <div className='ld_btn'>
                    <Borderbtn label='Learn More'/>
                    </div>
                    

                </div>


                <div className='main_content_right'>
                    {/* <img src={bg} alt='' className='ld_bg'/> */}
                </div>
            </div>
            

    </div> 
}

export default MainCard;