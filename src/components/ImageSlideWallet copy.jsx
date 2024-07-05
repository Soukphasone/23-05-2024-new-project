import React, { useState, useEffect } from "react";
import { GetNews } from "../api/getdatauser";
import Constant from "../constant";
const images = [
  "/assets/slide_files/1711624469914",
  "/assets/slide_files/1718207194411",
  "/assets/slide_files/1715439494023",
  "/assets/slide_files/1715439548039",
];

function ImageSlideWallet() {
  // const [images, setNewsPromotion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  

  useEffect(() => {
    _getNews();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === images.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);
  const _getNews = async () => {
    try {
      const data = await GetNews();
      if (data) {
        // console.log("DATA-News", data);
        const getData = data.map((item) => ({
          news: item?.wallet?.[0],
        }));
        const getDataNews = getData
          .map((item) => item?.news?.image)
          .filter((news) => news !== undefined);
        // setNewsPromotion(getDataNews);
        // console.log("Final-news", getDataNews)
      }
    } catch (error) {
    } finally {
    }
  };
  return (
    <div data-v-ac0eeeb0="" className="">
      <div 
      className="hidden md:block">
        <div
          className="splide splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized"
          id="splide04"
          role="region"
          aria-roledescription="carousel"
        >
          <div
            className="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
            id="splide04-track"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              // position: "relative",
              // overflow: "hidden",
            }}
            aria-live="off"
            aria-atomic="true"
            aria-busy="false"
          >
            <ul className="splide__list" id="splide04-list" role="presentation">
              {images.length > 0 ? (
                <li
                  className="splide__slide splide__slide--clone"
                  id="splide04-clone01"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="17 of 18"
                  style={{
                    marginRight: "3px",
                    width: "calc(100% + 0px)",
                  }}
                  aria-hidden="true"
                >
                  <div className="">
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        transition: isTransitioning
                          ? "transform 1s ease-in-out"
                          : "none",
                        transform: `translateX(-${
                          (currentIndex % (images.length + 1)) * 100
                        }%)`,
                      }}
                      className="h-[63px] w-full md:min-h-[167px] relative cursor-pointer"
                    >
                      {images.length > 0 &&
                        images.map((image, index) => (
                          <img
                            // style={{ width: "100%" }}
                            className="rounded-base object-cover z-[9] h-full w-full relative"
                            key={index}
                            src={image}
                            // src={`${Constant?.SERVER_URL_IMAGE}/images/${image}`}
                            alt={`Slide ${index}`}
                          />
                        ))}
                      <img
                        src={images[0]}
                        // src={`${Constant?.SERVER_URL_IMAGE}/images/${images[0]}`}
                        alt="Slide 0"
                      />
                    </div>
                  </div>
                </li>
              ) : (
                <li
                  className="splide__slide splide__slide--clone"
                  id="splide04-clone01"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="17 of 18"
                  style={{
                    marginRight: "3px",
                    width: "calc(100% + 0px)",
                  }}
                  aria-hidden="true"
                >
                  <div className="">
                    <div
                      style={{
                        display: "flex",
                        transition: isTransitioning
                          ? "transform 1s ease-in-out"
                          : "none",
                        transform: `translateX(-${
                          (currentIndex % (images.length + 1)) * 100
                        }%)`,
                      }}
                      className="h-[63px] w-full md:min-h-[167px] relative cursor-pointer"
                    >
                      <img
                        src="https://via.placeholder.com/1000x400/cbcbd2/808080?text=Image-Slide"
                        alt="img-cover"
                        loading="lazy"
                        draggable="false"
                        className="rounded-base object-cover z-[9] h-full w-full relative"
                      />
                      <div className="absolute flex flex-col z-10 space-y-1 w-auto min-w-[30px] h-[16px] text-center text-[10px] top-2 left-2"></div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div class="block md:hidden">
        <div
          class="splide splide--loop splide--ltr splide--draggable is-active is-initialized is-overflow"
          id="splide08"
          role="region"
          aria-roledescription="carousel"
        >
          <div
            class="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
            id="splide08-track"
            aria-live="off"
            aria-atomic="true"
            style={{paddingLeft: '0px', paddingRight: '0px'}}
          >
            <ul
              class="splide__list"
              id="splide08-list"
              role="presentation" 
              // style={{transform: 'translateX(-1224.98px)'}}
            >
              <li
                class="splide__slide splide__slide--clone"
                id="splide08-clone01"
                role="group"
                aria-roledescription="slide"
                aria-label="22 of 27"
                style={{marginRight: '4px', width: 'calc(33.3333% - 2.66667px)'}}
                aria-hidden="true"
              >
                <div class="">
                  <div class="h-[63px] w-full md:min-h-[167px] relative cursor-pointer">
                    <img
                      src="/assets/slide_files/1711624469914"
                      alt="img-cover"
                      loading="lazy"
                      draggable="false"
                      class="rounded-base object-cover z-[9] h-full w-full relative"
                    />
                    <div class="absolute flex flex-col z-10 space-y-1 w-auto min-w-[30px] h-[16px] text-center text-[10px] top-2 left-2"></div>
                  </div>
                </div>
              </li>
              <li
                class="splide__slide splide__slide--clone"
                id="splide08-clone02"
                role="group"
                aria-roledescription="slide"
                aria-label="23 of 27"
                style={{marginRight: '4px', width: 'calc(33.3333% - 2.66667px)'}}
                aria-hidden="true"
              >
                <div class="">
                  <div class="h-[63px] w-full md:min-h-[167px] relative cursor-pointer">
                    <img
                      src="/assets/slide_files/1718207194411"
                      alt="img-cover"
                      loading="lazy"
                      draggable="false"
                      class="rounded-base object-cover z-[9] h-full w-full relative"
                    />
                    <div class="absolute flex flex-col z-10 space-y-1 w-auto min-w-[30px] h-[16px] text-center text-[10px] top-2 left-2"></div>
                  </div>
                </div>
              </li>
              <li
                class="splide__slide splide__slide--clone"
                id="splide08-clone03"
                role="group"
                aria-roledescription="slide"
                aria-label="24 of 27"
                style={{marginRight: '4px', width: 'calc(33.3333% - 2.66667px)'}}
                aria-hidden="true"
              >
                <div class="">
                  <div class="h-[63px] w-full md:min-h-[167px] relative cursor-pointer">
                    <img
                      src="/assets/slide_files/1715439548039"
                      alt="img-cover"
                      loading="lazy"
                      draggable="false"
                      class="rounded-base object-cover z-[9] h-full w-full relative"
                    />
                    <div class="absolute flex flex-col z-10 space-y-1 w-auto min-w-[30px] h-[16px] text-center text-[10px] top-2 left-2"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlideWallet;
