import forwardArrow from '../assets/forwardArrow.svg';

import './Purchase.css';
// import './sliders/GiftFinder.css';

const images = [
    { 
      id: 30, 
      src: 'https://www.aesop.com/u1nb1km7t5q7/40maT6HjV7m3W6O2g1bgVg/1d6cc93d4f5e5e7e019066815fb92c84/Aesop-Other-Digital-Gift-Card-Large.png', 
      alt: 'Image 30', 
      content: { 
        heading: 'Eminently suited to all', 
        paragraph: 'An Aesop Gift Card is the ideal gift for the fussy, the faraway and anyone in between—conveniently delivered with the click of a mouse to conceal last-minute selections. ', 
        buttonContent: 'Purchase now' 
      } 
    },
  ];

function Purchase() {
  return (
    <div className="purchase-container">
        <div className="purchase-image-container">
        <img 
            src={images[0].src} 
            alt={images[0].alt} 
          />
        </div>
        
      <div className="purchase-text-container">
        <div className='purchase-inner'>
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

export default Purchase;
