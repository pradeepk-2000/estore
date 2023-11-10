import React, {useEffect, useState} from "react";

const NotFound =()=>{
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(()=>{
    setInterval(()=>{
      setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );  
    },2000);
  },[]);
    return(
        // <div className="not-found">
        //     <h1>Not Found!!!</h1>
        //     <p>Sorry, the page you are looking for does not exist.</p>
        // </div>
        <div>
             <header className="App-header">
        <h1>Image Carousel using React and Framer Motion</h1>
      </header>
        <div className="carousel">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="imageslides"
        /><div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
    
    </div>

    )
}
export default NotFound;

const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    "https://www.pinterest.com/pin/650770214932385506/",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1w15C7WXj5e3S74SHaGa03vPeO1-3Q4Qzcg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcZ10UEQpiXGm4k1v8fs9f7RiE5l22OAqT-3QkDn5HXLJO97cge1rbKoyzjcVq1ybJD8&usqp=CAU",
];
