import React, {useState, useEffect} from 'react'
import { womenswareArray } from './data'

// not quite working

export default function Womensware() {

  const [index, setIndex] = React.useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const next = () => {
    setIndex(nextIndex => {
      nextIndex++;
      if (nextIndex > womenswareArray.length - 1) {
        nextIndex = 0;
      }
      return nextIndex;
    })
  };

  const previous = () => {
    setIndex(y => {
      y--;
      if (y < 0) {
        y = womenswareArray.length - 1;
      }
      return y;
    }
    );
  };

  React.useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const interval = setTimeout(nextImage, 2000);
  }, [imageIndex]);

  const nextImage = () => {
    setImageIndex(nextIndex => {
      nextIndex++;
      if (nextIndex > 3) {
        nextIndex = 0;
      }
      return nextIndex;
    })
  };

  const previousImage = () => {
    setImageIndex(y => {
      y--;
      if (y < 0) {
        y = 3;
      }
      return y;
    }
    );
  };

  function imageDisplay(){

    switch (imageIndex){
      case 0 :
        return womenswareArray[index].mainImage;
      case 1 :
        return womenswareArray[index].imageA;
      case 2 :
        return womenswareArray[index].imageB;
      case 3 :
        return womenswareArray[index].imageC;
      default:
        return womenswareArray[index].mainImage;
    }
  }

  return (
    <>
      <div>

        <div className="carousel">
          <div className="image">
            <img src={womenswareArray[index].mainImage} />
          </div>
          <div className="buttons">
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
          </div>
        </div>

        <div className="thumbnails">
          {womenswareArray.map((image, thumbnailIndex) => (
            <div
              className={
                thumbnailIndex === index ? 'thumbnail active' : 'thumbnail '
              }
            >
              <img src={imageDisplay()} />
              <button onClick={previousImage}>Previous</button>
              <button onClick={nextImage}>Next</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}