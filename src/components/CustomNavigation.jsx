import React from "react";
const ButtonThree = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    const carouselItems = [1 ,2,3];
    
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "active bg-green-500" : "inactive"}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };


 export const ButtonTwo = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="bg-gradient-to-l from-black to-transparent h-full   text-[#44D62C]  right-0 absolute" onClick={() => onClick()} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 ">
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
  </svg>
  
  </button>;
  };
  export const ButtonOne = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className=" bg-gradient-to-r from-black to-transparent  h-full   text-[#44D62C]  left-0  absolute" onClick={() => onClick()} >

<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 ">
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
</svg>

    </button>;
  };


  export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
   
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group absolute w-full h-full opacity-0 hover:opacity-100 "> 
      {/* remember to give it position:absolute */}
        <ButtonOne className={currentSlide === 0 ? 'disable bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-black to-transparent'} onClick={() => previous()} {...rest}/>
        <ButtonTwo  onClick={() => next() } {...rest}/>
     
       
        <ButtonThree onClick={() => goToSlide(currentSlide + 1)} {...rest}> Go to any slide </ButtonThree>
      </div>
    );
  };