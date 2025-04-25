import React from 'react';
import Intro from './Intro';
import '../styles/Home.css';
import Rooms from './Rooms';
import Contact from './Contact';



function Home() {
  return (
    <>
    <div className="sree21">
      <div style={{backgroundColor:'white', fontSize:'30px', color:'red'}}> <marquee behavior="scroll" direction="left">This Website is still under development. Some features may not be available yet....</marquee>
      </div>
    <div id='intro' style={{boxShadow:'0 4px 6px -1px rgba(0, 0, 0, 0.1)',backgroundColor:'white'}}> <Intro/></div>
    <div id='about' className='p-8 my-16 flex flex-row gap-8' style={{ flexWrap:'wrap',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
    <div style={{
      flex:'1 1 55%',backgroundColor:'white'
    }}><p className='text-start text-success bold-text' style={{fontSize:'clamp(0.8rem, 1.5vw, 3rem)',fontWeight:'600'}} >YOUR BOOKING PARTNER</p>
    <p className='text-start text-gray-700 subtag' style={{fontSize:'clamp(1rem, 3vw, 5rem)',fontWeight:'700'}} >Effortless hotel reservations</p>
    <p className='text-gray-500' style={{fontSize:'clamp(0.8rem, 1.5vw, 3rem)',}} >StayEase revolutionizes the way you book hotels in Hyderabad. Our platform allows travelers to easily browse and book available rooms, ensuring a seamless experience from start to finish. Whether you are looking for a luxury stay or a budget-friendly option, StayEase connects you with a wide range of accommodations. Vendors can also list their hotel rooms, giving them the opportunity to reach more guests. Experience the convenience and efficiency of booking with StayEase today!</p>
    <br></br>

    <a href='#contact' className='text-gray-500' >Get in touch</a></div>
    <div style={{
      flex:'1 1 40%'
    }}>
      <img src='https://cdn.b12.io/client_media/T4Szu5o4/52544a68-dfcb-11ef-af44-0242ac110002-jpg-hero_image.jpeg' className='img-fluid' style={{width:'100%',height:'100%'}}></img>  
    </div>
    </div>
     <div id='rooms' className="rooms p-2" style={{backgroundColor:'white'}}>
      <Rooms/> 
       </div>
       <div id='contact' className="contact"><Contact/></div>
      </div>
    
    </>
  );
}

export default Home;
