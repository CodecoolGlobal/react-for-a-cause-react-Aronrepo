import { useEffect, useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = useRef(null);

  useEffect(() => {
    timeOut.current = autoPlay && setTimeout(() => {
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
        clearTimeout(timeOut.current);
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
            </div>
          )
        })}
        <FaAngleLeft className="carouselArrowLeft" onClick={slideLeft} />
        <FaAngleRight className="carouselArrowRight" onClick={slideRight} />
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