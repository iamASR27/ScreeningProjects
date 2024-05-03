import { useState, useEffect } from 'react';
import forwardArrow from '../../assets/forwardArrow.svg';
import pause from '../../assets/pause.svg';
import play from '../../assets/play.svg';

import './ImageSlider.css';

const images = [
    { 
      id: 1, 
      src: '/Aesop_Mothers_Day.jpg', 
      alt: 'Image 1', 
      content: { 
        title: 'Mother\'s day', 
        heading: 'For the discerning', 
        paragraph: 'Our range of products provides ample options for even the most particular of gift-givers and recipients—fitting choices to reciprocate maternal guidance.', 
        buttonContent: 'Discover Mother\'s day gift' 
      } 
    },
    { 
      id: 2, 
      src: '/Aesop_Duo.avif', 
      alt: 'Image 2', 
      content: { 
        title: 'Warm weather companions', 
        heading: 'Exfoliating and Replenishing Duo', 
        paragraph: 'Support the skin as humidity rises by polishing away dead skin cells with a cream exfoliant and following with a hydrating, refreshing gel-based masque twice weekly.', 
        buttonContent: 'Discover the duo' 
      } 
    },
    { 
      id: 3, 
      src: '/Aesop_Discover_Range.avif', 
      alt: 'Image 3', 
      content: { 
        title: 'Skin Care+', 
        heading: 'Vitamin-enriched skin care', 
        paragraph: 'With generous measures of efficacious botanicals and skin-supportive ingredients, the Skin Care+ range was designed to provide optimal replenishment.', 
        buttonContent: 'Discover the range' 
      } 
    }
  ];
  

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 5000); // Change image every 5 seconds
    }
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="slider-container">
      <div className="content-image-container">
        <div className='logo-text-container'>
            <div className='logo'><img src='/Aesop_snip.PNG' alt='logo-image'/></div>
            
        <div className="text-container">
          <p style={{fontSize: '14px'}}>{currentImage.content.title}</p>
          <h2>{currentImage.content.heading}</h2>
          <p>{currentImage.content.paragraph}</p>
          <div><p>{currentImage.content.buttonContent}</p>
          <img src={forwardArrow} alt='forward-arrow'/>
          </div>
        </div>
        </div>
        
        <div className="image-container">
        <img 
            src={currentImage.src} 
            alt={currentImage.alt} 
            className={`slider-image ${isPaused ? 'paused' : 'play'}`}
          />
        </div>
      </div>

     <div className='navi-pause'>
      <div className="navigation-numbers">
        <button onClick={previousImage}>&lt;</button>
        <span>{currentImageIndex + 1}/{images.length}</span>
        <button onClick={nextImage}>&gt;</button>
      </div>

      <div className="pause-play-button" onClick={togglePause}>
        <img src={isPaused ? play : pause} alt={isPaused ? 'Play' : 'Pause'} />
      </div>
      </div>

    </div>
  );
}

export default ImageSlider;
