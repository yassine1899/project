import { useEffect, useState } from "react";

function Slider() {
  const images = [
    "https://assets.zanimo.tn/produits/8015912511690.jpg",
    "https://assets.zanimo.tn/produits/8015912511683.jpg",
    "https://assets.zanimo.tn/produits/8429037013012.jpg",
    "https://assets.zanimo.tn/produits/8009470009522.jpg",
    "https://assets.zanimo.tn/produits/4014355222471.jpg",
    "https://assets.zanimo.tn/produits/8009470060974.jpg",
    "https://assets.zanimo.tn/produits/8023222196681.jpg",
    "https://assets.zanimo.tn/produits/8595602529278.jpg",
    "https://assets.zanimo.tn/produits/6191335100177.jpg",
  ];
  const firstindex = 0;
  const lasindex = images.length - 1;

  const [carrent, setCarrent] = useState(firstindex);

  const styleSliderContainer = {
    position: "relative",
    width: "80vw",
    height: "70vh",
    borderRadius: "10px",

    overflow: "hidden",
    margin: "auto",
  };

  const image = {
    position: "relative",

    height: "70vh",
  };

  const styleSlider = {
    position: "relative",
    display: "flex",
    height: "70vh",
    borderRadius: "10px",

    transform: `translateX(${carrent * -80}vw)`,
    transition: "all 0.5s ease",
  };

  function increase(e) {
    if (carrent === lasindex) {
      setCarrent(0);
    } else {
      setCarrent(carrent + 1);
    }
  }

  function decrease(e) {
    if (carrent === firstindex) {
      setCarrent(lasindex);
    } else {
      setCarrent(carrent - 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      increase();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [carrent]);

  return (
    <>
      <div className="-container" style={styleSliderContainer}>
        <div className="sliderslider" style={styleSlider}>
          {images.map((img) => {
            return (
              <div style={{ minWidth: "80vw", display: "flex" }}>
                {" "}
                <img style={image} src={img} />
                <div>
                  <h1>jskjdsfsdfsdfsdfsdfs</h1>
                </div>
                
              </div>
            );
          })}
        </div>
        <div
          className="arrow"
          style={{
            fontSize: "3rem",
            color: "whitesmoke",
            position: "absolute",
            left: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={decrease}
        >
          {" "}
          ↢
        </div>
        <div
          className="arrow"
          style={{
            fontSize: "3rem",
            color: "white",
            position: "absolute",
            right: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={increase}
        >
          {" "}
          ↣
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "red",
            zIndex: "999",
          }}
        >
          {images.map((e, index) => (
            <div
              key={index}
              style={{ fontSize: "5rem", cursor: "pointer" }}
              onClick={() => setCarrent(index)}
            >
              .
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
