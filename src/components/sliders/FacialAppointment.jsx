
import forwardArrow from '../../assets/forwardArrow.svg';

import './SeasonalOptions.css';

const images = [
    { 
      id: 28, 
      src: 'https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg', 
      alt: 'Image 12', 
      content: { 
        title: 'Facial Appointments', 
        heading: 'Composure for the skin and senses', 
        paragraph: 'For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.', 
        buttonContent: 'Learn more' 
      } 
    },
  ];

function FacialAppointment() {
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

export default FacialAppointment;
