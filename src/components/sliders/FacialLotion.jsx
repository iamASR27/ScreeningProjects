
import forwardArrow from '../../assets/forwardArrow.svg';

import './SeasonalOptions.css';

const images = [
    { 
      id: 22, 
      src: 'https://www.aesop.com/u1nb1km7t5q7/6fNN0BAQNyzP9A9eOwmcaE/cb660d194f4078aa1e4e09b2da3983d5/Aesop_SPF50_2023_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg', 
      alt: 'Image 22', 
      content: { 
        title: 'High time for high coverage', 
        heading: 'Protective Facial Lotion SPF50', 
        paragraph: 'Introducing a daily-use formulation offering broad-spectrum UV protection and sustained hydration—come rain or shine.   ', 
        buttonContent: 'Explore Protective Facial Lotion SPF50' 
      } 
    },
  ];

function FacialLotion() {
  

  return (
    <div className="seasonal-container">
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
        <div className="seasonal-image-container">
        <img 
            src={images[0].src} 
            alt={images[0].alt} 
          />
        </div>
    </div>
  );
}

export default FacialLotion;
