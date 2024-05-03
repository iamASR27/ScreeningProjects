import { useState, useEffect } from "react";
// import forwardArrow from '../../assets/forwardArrow.svg';
import "./TonicList.css";

const items = [
  {
    id: 13,
    src: "https://www.aesop.com/u1nb1km7t5q7/3NERkrIn0dOcjmOMTiqDlv/70be9f433dc806b809b4fa3cd73559b0/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_Large_900x916px.png",
    alt: "Aesop_Skin_Immaculate_Facial_Tonic",
    content: {
      title: "Immaculate Facial Tonic",
      paragraph: "Exfoliating tonic with a light finish",
    },
},
{
  id: 14,
  src: "https://www.aesop.com/u1nb1km7t5q7/1sLt2FekomlBRwXrD7V7a9/5617742b33b0a86608dc2b3c5f42c0ac/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Small_373x364px.png",
  alt: "Aesop_Skin_Lucent_Facial_Concentrate",
  content: {
    title: "Lucent Facial Concentrate",
    paragraph: "A Vitamin C-rich layering serum",
  },
},
  {
    id: 15,
    src: "https://www.aesop.com/u1nb1km7t5q7/46dGwSwW8Mv8OUjHXtIJfq/f3d64e62a92681882197d21a43391b68/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_Medium_800x814px.png",
    alt: "Aesop_Skin_Protective_Facial_Lotion",
    content: {
      title: "Protective Facial Lotion SPF50",
      paragraph: "Offers protection from UVA and UVB rays",
    },
  },
  {
    id: 16,
    src: "https://www.aesop.com/u1nb1km7t5q7/18h4yOHBrRO3DxCwT968ow/38676b007abb4034911b4fa3618a8547/Aesop-Geranium-Leaf-Duet-with-Product-Small-863x524px.png",
    alt: "Aesop-Geranium-Leaf-Duet-with-Product",
    content: {
      title: "Geranium Leaf Duet",
      paragraph: "A gentle cleanser and aromatic balm",
    },
  },
  {
    id: 17,
    src: "https://www.aesop.com/u1nb1km7t5q7/3z9CrApk86QNCHIKAUCSCQ/f3657b4fdafe14d5943d7bfa7902bb75/Aesop_Fragrance_Rozu_Eau_de_Parfum_50mL_Web_Front_Small_700x684px.png",
    alt: "Aesop_Fragrance_Rozu_Eau_de_Parfum",
    content: {
      title: "Rozu Eau de Parfum",
      paragraph: "Floral, green and woody",
    },
  },
  {
    id: 18,
    src: "https://www.aesop.com/u1nb1km7t5q7/7j6Zzbhdh0z7g7To9iOQrc/033f732692f35772b3810065d609a511/Aesop_Home_Aganice_Aromatique_Candle_Web_Front_A_Small_700x609px.png",
    alt: "Aesop_Home_Aganice_Aromatique_Candle",
    content: {
      title: "Aganice Aromatique Candle",
      paragraph: "Cardamom, Mimosa, Tobacco",
    },
  },
  {
    id: 19,
    src: "https://www.aesop.com/u1nb1km7t5q7/4kQsdvX1GAAt3yC0OcmwcP/77ce10139b06ff97e48005eab2ba6f36/Aesop_Bundle_Cleansing_and_Hydration_for_Dry_Skin_Web_Small_523x594px.png",
    alt: "Aesop_Bundle_Cleansing_and_Hydration_for_Dry_Skin",
    content: {
      title: "Cleansing and Hydration for Dry Skin",
      paragraph: "Ideal for those who favour cream-based formulations",
    },
  },
  {
    id: 20,
    src: "https://www.aesop.com/u1nb1km7t5q7/501Wfodgvi8ui4VJiiAnsj/8a2bfb9535ae7fbaa28ade8c7f8c6982/Aesop_Bundle_Resurrection_Hand_Care_Duo_Web_Small_523x594px.png",
    alt: "Aesop_Bundle_Resurrection_Hand_Care_Duo",
    content: {
      title: "Resurrection Hand Care Duo",
      paragraph: "Two staples for deserving hands",
    },
  },
  {
    id: 21,
    src: "https://www.aesop.com/u1nb1km7t5q7/5ff9soBje19EkoLKgwudGC/ecc085e13533e3eae0b7b372ec90b3c3/Aesop_Bundle_Tacit_Ensemble_Web_Small_523x594px.png",
    alt: "Aesop_Bundle_Tacit_Ensemble",
    content: {
      title: "Tacit Ensemble",
      paragraph: "For those who enjoy citrus aromas",
    },
  },
];

const TonicList = () => {
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
                currentIndex * (100 / (items.length - 3))
              }%)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TonicList;
