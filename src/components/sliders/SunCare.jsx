import { useState, useEffect } from "react";
import forwardArrow from '../../assets/forwardArrow.svg';
import "./SkinCare.css";

const items = [
  {
    id: 23,
    src: "https://www.aesop.com/u1nb1km7t5q7/46dGwSwW8Mv8OUjHXtIJfq/f3d64e62a92681882197d21a43391b68/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_Medium_800x814px.png",
    alt: "Aesop_Skin_Protective_Facial_Lotion",
    content: {
      title: "Protective Facial Lotion SPF50",
      paragraph: "Offers protection from UVA and UVB rays",
    },
  },
  {
    id: 24,
    src: "https://www.aesop.com/u1nb1km7t5q7/6f2LvrlJxbjB46k2QoaPle/cb61d49c147dd950c9f287655f78ecd3/Aesop_Skin_Protective_Facial_Lotion_SPF25_Asia_EU_Web_Small_426x434px.png",
    alt: "Aesop_Skin_Protective_Facial_Lotion_SPF25",
    content: {
      title: "Protective Facial Lotion SPF25",
      paragraph: "Broad-spectrum protection and hydration",
    },
  },
  {
    id: 25,
    src: "https://www.aesop.com/u1nb1km7t5q7/7wCcHanKTOIJfzk5ntSxNr/70b6d9e029ebc6cec91944aaede4fdd0/Aesop_Body_Protective_Body_Lotion_SPF50_Asia_EU_150mL_Web_Front_Small_700x807px.png",
    alt: "Aesop_Body_Protective_Body_Lotion_SPF50",
    content: {
      title: "Protective Body Lotion SPF50",
      paragraph: "Lightweight broad-spectrum protection",
    },
  },
  {
    id: 26,
    src: "https://images.ctfassets.net/u1nb1km7t5q7/3XZN7mfVhivcSddOWwznMh/4733769002ec0c99cb3368bb8f8851b1/Aesop_Skin_Sage_and_Zinc_Facial_Hydrating_Lotion_SPF15_50mL_Web_Small_426x434px.png",
    alt: "Aesop_Skin_Sage_and_Zinc_Facial_Hydrating_Lotion_SPF15",
    content: {
      title: "Sage and Zinc Facial Hydrating Lotion SPF15",
      paragraph: "Hydrating sun protection",
    },
  },
  {
    id: 27,
    src: "https://www.aesop.com/u1nb1km7t5q7/i3CZwu2fHWTeP6CNdWUvM/df5dbb2bc577cfda1ab6b2818c6e6b6b/Aesop_Body_Petitgrain_Reviving_Body_Gel_150mL_Web_Front_Small_700x807px.png",
    alt: "Aesop_Body_Petitgrain_Reviving_Body_Gel_150mL",
    content: {
      title: "Body Petitgrain Reviving Body Gel",
      paragraph: "Leaves skin feeling cooled, revived",
    },
  },
];

const SunCare = () => {
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
            <p>Sun Care and SPF</p>
            <h3>Pair time in the sun with intelligent care</h3>
            <p>
            Daily protection from damaging UVA and UVB sun rays is key to sustaining healthy, supple skin. In addition to protection, Aesop SPF formulations deliver hydration and skin-softening nourishment.
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

export default SunCare;
