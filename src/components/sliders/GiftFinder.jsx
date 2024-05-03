
import forwardArrow from '../../assets/forwardArrow.svg';

import './SeasonalOptions.css';

const images = [
    { 
      id: 12, 
      src: 'https://www.aesop.com/u1nb1km7t5q7/33jC1RNNiSeYosSCN0cKiC/1421c9199c986832eb2120251deb0759/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg', 
      alt: 'Image 12', 
      content: { 
        title: 'Options, streamlined', 
        heading: 'The Gift Finder', 
        paragraph: 'This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria.', 
        buttonContent: 'Discover the Gift Finder' 
      } 
    },
  ];

function GiftFinder() {
  return (
    <div className="seasonal-container">
        <div className="seasonal-image-container">
        <img 
            src={images[0].src} 
            alt={images[0].alt} 
          />
        </div>
        
      <div className="seasonal-text-container">
        <div className='inner'>
          <p style={{fontSize: '14px'}}>{images[0].content.title}</p>
          <h2>{images[0].content.heading}</h2>
          <p>{images[0].content.paragraph}</p>
          <div><p>{images[0].content.buttonContent}</p>
          <img src={forwardArrow} alt='forward-arrow'/>
          </div>
          </div>
        </div>   
        
    </div>
  );
}

export default GiftFinder;
