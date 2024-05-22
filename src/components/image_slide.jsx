import React, { useEffect, useState } from "react";
import { DataLocalStorage } from "../helper";
function Image_slide() {
  const [translateX, setTranslateX] = useState(0);
  const [imageSlide, setImageSlide] = useState([]);

  useEffect(() => {
    const userData = DataLocalStorage();
    if (userData && userData.info) {
      const slideArray = userData?.info?.slide
        ? Object.values(userData?.info?.slide)
        : [];
      setImageSlide(
        slideArray?.length > 0 &&
          slideArray?.filter(img => img?.s_position === 'page_wallet').map((img) => `data:image/jpeg;base64,${img?.s_image}`)
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(
        (prevTranslateX) => (prevTranslateX - 1) % (slide_img.length * 100)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const slide_img = imageSlide.length > 0
    ? imageSlide
    : ["/assets/images/Cardgame/image70.png"];
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
              {slide_img.map((src, index) => (
                <li
                  key={index + slide_img.length}
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
        <div
          className="splide is-active is-initialized"
          id="splide02"
          role="region"
          aria-roledescription="carousel"
        >
          <div
            className="splide__track"
            id="splide02-track"
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
            aria-live="off"
            aria-atomic="true"
          >
            <ul
              className="splide__list"
              id="splide02-list"
              role="presentation"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {slide_img.map((src, index) => (
                <li
                  key={index}
                  className="splide__slide splide__slide--clone is-visible is-active"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1}`}
                  style={{
                    marginRight: "4px",
                    width: "calc(33.3333% - 2.66667px)",
                  }}
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
              {slide_img.map((src, index) => (
                <li
                  key={index + slide_img.length}
                  className="splide__slide splide__slide--clone is-visible is-active"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1}`}
                  style={{
                    marginRight: "4px",
                    width: "calc(33.3333% - 2.66667px)",
                  }}
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
    </div>
  );
}

export default Image_slide;
