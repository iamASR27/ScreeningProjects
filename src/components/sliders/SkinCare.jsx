import { useState, useEffect } from "react";
import forwardArrow from '../../assets/forwardArrow.svg';
import "./SkinCare.css";

const items = [
  {
    id: 4,
    src: "https://www.aesop.com/u1nb1km7t5q7/3NERkrIn0dOcjmOMTiqDlv/70be9f433dc806b809b4fa3cd73559b0/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_Large_900x916px.png",
    alt: "Aesop_Skin_Immaculate_Facial_Tonic",
    content: {
      title: "Immaculate Facial Tonic",
      paragraph: "Exfoliating tonic with a light finish",
    },
  },
  {
    id: 5,
    src: "https://www.aesop.com/u1nb1km7t5q7/43LYvjawQFKUfs3jTL7S2o/4724fad4ff0765b02215aa51d188a67b/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Front_Small_700x371px.png",
    alt: "Aesop_Skin_B_Triple_C_Facial_Balancing_Gel",
    content: {
      title: "B Triple C Facial Balancing Gel",
      paragraph: "Embracing, vitamin-rich hydration",
    },
  },
  {
    id: 6,
    src: "https://www.aesop.com/u1nb1km7t5q7/1sLt2FekomlBRwXrD7V7a9/5617742b33b0a86608dc2b3c5f42c0ac/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Small_373x364px.png",
    alt: "Aesop_Skin_Lucent_Facial_Concentrate",
    content: {
      title: "Lucent Facial Concentrate",
      paragraph: "A Vitamin C-rich layering serum",
    },
  },
  {
    id: 7,
    src: "https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png",
    alt: "Aesop_Skin_Exalted_Eye_Serum_",
    content: {
      title: "Exalted Eye Serum",
      paragraph: "lightweight, vitamin-rich serum",
    },
  },
  {
    id: 8,
    src: "https://images.ctfassets.net/u1nb1km7t5q7/13B9g83FKDLbkDNi4NGqwv/e1ab3af38d2f29e9961d2b9670438fe3/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Small_491x261px.png",
    alt: "Aesop_Skin_Sublime_Replenishing_Night_Masque",
    content: {
      title: "Sublime Replenishing Night Masque",
      paragraph: "Richly nourishing hydration for overnight use",
    },
  },
  {
    id: 9,
    src: "https://www.aesop.com/u1nb1km7t5q7/53Q5a81QFoAlk9fqyzPRWi/ff703aa4abdc6d0fa3479da1347a19a7/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.png",
    alt: "Aesop_Skin_Damascan_Rose_Facial_Treatment",
    content: {
      title: "Damascan Rose Facial Treatment",
      paragraph: "A blend of vitamin-rich botanical extracts",
    },
  },
];

const SkinCare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMultipleItems, setShowMultipleItems] = useState(false);
  const indicatorWidth = `${100 / (items.length - 3)}%`;

  useEffect(() => {
    const handleResize = () => {
      setShowMultipleItems(window.innerWidth >= 950);
    };

    
    setShowMultipleItems(window.innerWidth >= 950);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? items.length - 3 : prevIndex - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === items.length - 3 ? 0 : prevIndex + 1
  //   );
  // };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - (showMultipleItems ? 3 : 1) : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - (showMultipleItems ? 3 : 1) ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-header">
            <p>Skin Care +</p>
            <h3>Intensive formulations for complex skin</h3>
            <p>
              Explore products formulated with mature skin and urban dwellers in
              mind, to provide daily hydration and the additional benefit of
              potent vitamins and anti-oxidants.
            </p>
            <p>Browse formulations  <img src={forwardArrow} alt='forward-arrow'/></p>
          </div>
          {items.slice(currentIndex, currentIndex + (showMultipleItems ? 3 : 1)).map((item) => (
            <div key={item.id} className="carousel-item">
              <div>
                <img src={item.src} alt={item.alt} />
              </div>
              <h4>{item.content.title}</h4>
              <p>{item.content.paragraph}</p>
            </div>
            
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="indicator">
        <div className="indicator-bar">
          <div
            className="indicator-highlight"
            style={{
              width: { indicatorWidth },
              transform: `translateX(${
                currentIndex * (100 / (items.length - (showMultipleItems ? 3 : 1)))
              }%)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkinCare;
