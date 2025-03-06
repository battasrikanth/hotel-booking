import React from "react";

function Intro() {
  return (
    <div 
      className="my-0 py-16 px-8 flex justify-center items-center text-white" 
      style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))',
        backgroundImage: "url('https://cdn.b12.io/client_media/T4Szu5o4/52544a68-dfcb-11ef-af44-0242ac110002-jpg-hero_image.jpeg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        minHeight: "70vh" 
      }}
    >
      <div className="text-left">
        <h1 className=" font-bold " style={{fontSize:'clamp(1.1rem, 6vw, 5rem)'}}>Find your perfect stay</h1>
        <p className="" style={{fontSize:'clamp(0.7rem, 3vw, 2.8rem)'}}>Explore the best accommodations nearby.</p>
        <a href="#rooms" className="text-decoration-none">
        
<button className="ebutton">
   <svg className="esvgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  Explore
</button>

        </a>
      </div>
    </div>
  );
}

export default Intro;

