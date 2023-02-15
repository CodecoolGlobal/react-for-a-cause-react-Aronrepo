import { useEffect, useState } from "react";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = autoPlay && setTimeout(() => {
      slideRight();
    }, 3000)
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="carousel" 
    onMouseEnter={() => {
      setAutoPlay(false);
      clearTimeout(timeOut);
    }} 
    onMouseLeave={() => {
      setAutoPlay(true);
      }}>
      <div className="carouselWrapper">
        {images.map((img, index) => {
          return (
            <div key={index} 
            className={index === current ? "carouselCard carouselCard_active" : "carouselCard"}>
              <img className="cardImage" src={img.image} alt="" />
              <div className="cardOverlay">
                <h2 className="cardTitle">{img.title}</h2>
              </div>
            </div>
          )
        })}
        <div className="carouselArrowLeft" onClick={slideLeft}>&lsaquo;</div>
        <div className="carouselArrowRight" onClick={slideRight}>&rsaquo;</div>
        <div className="carouselPagination">
          {images.map((_, index) => {
            return (
              <div key={index}
                className={index === current ? "paginationDot paginationDot_active" : "paginationDot"}
                onClick={() => setCurrent(index)}>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  )
}

export default Carousel;