import React, { useEffect, useRef, useState } from "react";
import { DataLocalStorage } from "../helper";
function Image_slide() {
  const [imageSlide, setImageSlide] = useState([]);
  const sidebarUseRef = useRef(null);
  const [sliderData, setSliderData] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarAnimation, setSidebarAnimation] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const userData = DataLocalStorage();
    if (userData && userData.info) {
      const slideArray = userData?.info?.slide
        ? Object.values(userData?.info?.slide)
        : [];
      setSliderData(slideArray);
    }
  }, []);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (sidebarUseRef.current !== "") {
        setSidebarAnimation(false);
        setTimeout(() => {
          setSidebarVisible(false);
        }, 500);
      }
    };

    if (sidebarVisible) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [sidebarVisible]);

  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <div>
      <div className="hidden md:block">
      </div>
      <div className="block md:hidden">
        <div className="brand">
          <div className="slideshow-container-after-login">
            <div className="mySlides">
              <div
                className="left-arrow"
                onClick={() => prevSlide()}
                onKeyDown={() => ""}
              >
                ❮
              </div>
              <div
                className="right-arrow"
                onClick={() => nextSlide()}
                onKeyDown={() => ""}
              >
                ❯
              </div>
              {sliderData.length > 0 &&
                sliderData?.map((slide, index) => {
                  return (
                    <div
                      className={index === current ? "slide1 active" : "slide1"}
                      key={slide?.i_index}
                    >
                      {index === current && (
                        <img
                          src={
                            slide?.s_image
                              ? `data:image/jpeg;base64,${slide?.s_image}`
                              : "/assets/images/Cardgame/image70.png"
                          }
                          alt="travel"
                          style={{ width: "100%" }}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image_slide;
