import React, { useEffect,useState }  from 'react'
import './home.css'
import { Link } from "react-router-dom";
import blob1 from '../images/blob1.png'
import blob2 from '../images/blob2.png'


export default function Home() {
    const [check,setcheck] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 0
});

useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
            const updatedTimeLeft = { ...prevTimeLeft };

            if (updatedTimeLeft.seconds > 0) {
                updatedTimeLeft.seconds -= 1;
            } else {
                if (updatedTimeLeft.minutes === 0 && updatedTimeLeft.hours === 0) {
                    clearInterval(timer);
                } else {
                    if (updatedTimeLeft.minutes === 0) {
                        updatedTimeLeft.hours -= 1;
                        updatedTimeLeft.minutes = 59;
                    } else {
                        updatedTimeLeft.minutes -= 1;
                    }
                    updatedTimeLeft.seconds = 59;
                }
            }
            return updatedTimeLeft;
        });
    }, 1000);

    return () => clearInterval(timer); 
}, []);
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};
    const [email, setEmail] = useState('');
    const [valid, setValid] = useState('');
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleValidation() {
        if (validateEmail(email)) {
            setcheck(false);
            setValid("");
        } else {
            setValid('Invalid email');
        }
    }
  return (
    <div>
        {/* <div>
            <img src={blob1} className='blb1'></img>
           <img src={blob2} className='blb2'></img>
        </div> 
        <div className='blb1'>
        </div> */}
        <div className='main'>
        <div className='navbar'>
          <p className='tit'>THE <span className='pro'>PRODUCT</span> PLATFORM</p>
        </div>
        <div className='head'>
            <p className='line1'>Launching New Module Soon!</p>
            <p className='line2'>Exciting things are in the works! We're currently <span className='cra'>Crafting a new feature</span> for you. </p>
            <p className='line3'>Keep an eye out for updates - We're working to make it available soon!</p>
            <p className='line4'>GET READY FOR THE REVEAL!</p>
            <div className='timebox'>
                <p id='hor'>{formatTime(timeLeft.hours)}</p>
                <p className='colon1'>:</p>
                <p id='minu'>{formatTime(timeLeft.minutes)}</p>
                <p className='colon2'>:</p>
                <p id='seco'>{formatTime(timeLeft.seconds)}</p>
                <p className='hrn'>Hours</p>
                <p className='minn'>Minutes</p>
                <p className='secn'>Seconds</p>
            </div>
            <p className='line5'>Be the first to know! Share your email and We'll notify you when it's live</p>
            <div className='last'>
              <input type='email' className='em' placeholder=' Please enter your email id' onChange={e => setEmail(e.target.value)}>
              </input>
              {check && <button className='btn' onClick={handleValidation}>Notify me</button>}
              {!check && <Link to="/live"><button className='btn1' onClick={handleValidation}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
              </svg>
              </button></Link>}
            </div>
        </div>
        <p className='inv'>{valid}</p>
        </div>
    </div>
  )
}

