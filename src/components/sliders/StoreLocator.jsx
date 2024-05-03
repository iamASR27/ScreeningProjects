import { useState, useEffect } from 'react';
import forwardArrow from '../../assets/forwardArrow.svg'
import './SeasonalOptions.css';
import './StoreLocator.css';

const images = [
  { 
    id: 29, 
    src: [
      'https://www.aesop.com/u1nb1km7t5q7/1X72jMZUmaahSQZvTtL9ta/646146092302d12fcedca05dcb4dc328/Aesop_Hollywood_Road_II_Hero_Bleed_Mobile_640x640px.jpg',
      'https://www.aesop.com/u1nb1km7t5q7/v9GU27nk8rTsw1I0PNlbf/b7a3852a8ec0ef0d800b13771302929a/Aesop_MO_Stores_DFS_Macau_Four_Seasons_Hero_Bleed_Mobile_640x640px.jpg',
      'https://www.aesop.com/u1nb1km7t5q7/36mANZ3T0TuOEQP9zUXYlW/562ac3200f02484213f0c3b042405509/Aesop_Fashion_Walk_II_Hero_Bleed_Mobile_640x640px.jpg',
    ],
    alt: 'Image 22', 
    content: { 
      heading: 'Store locator', 
      paragraph: 'Our consultants are available to host you in-store and provide tailored guidance on gift purchases.', 
      buttonContent: 'Find a nearby store' 
    } 
  },
];

function StoreLocator() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex === images[0].src.length - 1 ? 0 : prevIndex + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="seasonal-container">
      <div className="seasonal-text-container">
        <div className='inner'>
          <h2>{images[0].content.heading}</h2>
          <p>{images[0].content.paragraph}</p>
          <div>
            <p>{images[0].content.buttonContent}</p>
            <img src={forwardArrow} alt='forward-arrow'/>
          </div>
        </div>
      </div>
      <div className="seasonal-image-container">
        <img 
          src={images[0].src[currentImageIndex]} 
          alt={images[0].alt} 
        />
      </div>
    </div>
  );
}

export default StoreLocator;
