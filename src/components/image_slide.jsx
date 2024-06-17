import React, { useEffect, useRef, useState } from "react";
import { DataLocalStorage } from "../helper";
import axios from "axios";
import Constant from "../constant";
import { SlideDemo } from "../constant/demoSlide"

function Image_slide() {
  const [imageSlide, setImageSlide] = useState([]);
  const sidebarUseRef = useRef(null);
  const [sliderData, setSliderData] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarAnimation, setSidebarAnimation] = useState(true);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const userData = DataLocalStorage();
    const _slide = JSON.parse(localStorage.getItem(Constant.SLIDE));

    // if (userData) {
    //   const slideArray = _slide
    //     ? Object.values(_slide)
    //     : [];
    //   setSliderData(slideArray);
    // }
    getDataBackOffice()
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [sliderData.length]);

  const getDataBackOffice = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${Constant.SERVER_URL}/agent/${Constant?.AGENT_CODE}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.data) {
          if (response?.data?.data?.slide?.wallet?.length > 0) {
            setSliderData(response?.data?.data?.slide?.wallet);
          } else {
            setSliderData(SlideDemo);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <div className="brand">
          <div className="slideshow-container-after-login-pc">
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
                sliderData.map((slide, index) => {
                  return (
                    <div
                      className={index === current ? "slide1 active" : "slide1"}
                      key={slide?.i_index}
                    >
                      {index === current && (
                        <img
                          src={`${Constant?.SERVER_URL_IMAGE}/images/${slide?.name}`}
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
                sliderData.map((slide, index) => {
                  return (
                    <div
                      className={index === current ? "slide1 active" : "slide1"}
                      key={slide?.i_index}
                    >
                      {index === current && (
                        <img
                          src={`${Constant?.SERVER_URL_IMAGE}/images/${slide?.name}`}
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
