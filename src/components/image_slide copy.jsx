import React, { useEffect, useRef, useState } from "react";
import { DataLocalStorage } from "../helper";
function Image_slide() {
  const [translateX, setTranslateX] = useState(0);
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
      setImageSlide(
        slideArray?.length > 0 &&
          slideArray
            ?.filter((img) => img?.s_position === "page_wallet")
            .map((img) => `data:image/jpeg;base64,${img?.s_image}`)
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(
        (prevTranslateX) => (prevTranslateX - 1) % (slide_img.length * 100)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
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
  const slide_img =
    imageSlide.length > 0
      ? imageSlide
      : ["/assets/images/Cardgame/image70.png"];

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
        <div
          className="splide is-active is-initialized"
          id="splide01"
          role="region"
          aria-roledescription="carousel"
        >
          <div
            className="splide__track"
            id="splide01-track"
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
            aria-live="polite"
            aria-atomic="true"
          >
            <ul
              className="splide__list"
              id="splide01-list"
              role="presentation"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {slide_img.map((src, index) => (
                <li
                  key={index}
                  className="splide__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1}`}
                  style={{ marginRight: "3px", width: "calc(100% + 0px)" }}
                >
                  <div className="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                    <img
                      src={src}
                      alt={`Slide ${index}`}
                      className="rounded-base object-cover z-[9] h-full w-full relative"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
