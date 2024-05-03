
import forwardArrow from '../../assets/forwardArrow.svg';

import './SeasonalOptions.css';

const images = [
    { 
      id: 11, 
      src: 'https://www.aesop.com/u1nb1km7t5q7/3UWzrNrjTbNjBomL9WkVaS/4aa0066ec853b88cfc0bd209174785c2/Aesop_Travel_2023_Web_Landing_Page_2_Secondary_Mid_Desktop_2560x1440px.jpg', 
      alt: 'Image 11', 
      content: { 
        title: 'A seasonal offer', 
        heading: 'Experience Karst Eau de Parfum', 
        paragraph: 'In celebration of balmy summer days, receive a complimentary vial of fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible formulations. (Excludes Click and Collect.) ', 
        buttonContent: 'Explore summer formations' 
      } 
    },
  ];

function SeasonalOptions() {
  

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

export default SeasonalOptions;
