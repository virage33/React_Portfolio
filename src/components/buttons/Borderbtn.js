
import './Borderbtn.css';

function Borderbtn(props){
    return (
        <div className='btn_wrapper'>
            <button className='btn' >{props.label}</button>
        </div>
    );
}
export default Borderbtn;