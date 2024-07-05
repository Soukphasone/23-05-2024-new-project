import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GetNews } from "../api/getdatauser";
import Constant from "../constant";

function ImageSlideWallet() {
  const [images, setNewsPromotion] = useState([]);
  const [offset, setOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    _getNews();
  }, []);

  useEffect(() => {
    const container = document.getElementById('auto-scroll-container');
    setContainerWidth(container.clientWidth);

    const interval = setInterval(() => {
      setOffset(prevOffset => {
        if (prevOffset <= -containerWidth) {
          return 0;
        } else {
          return prevOffset - 1;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [50, containerWidth]);
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
        setNewsPromotion(getDataNews);
        // console.log("Final-news", getDataNews)
      }
    } catch (error) {
    } finally {
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    ltl: true,
  };

  return (
    <div data-v-ac0eeeb0="" className="">
      <div className="hidden md:block">
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
            }}
            aria-live="off"
            aria-atomic="true"
            aria-busy="false"
          >
            <ul className="splide__list" id="splide04-list" role="presentation">
              {images.length > 1 ? (
                <li
                  className="splide__slide splide__slide--clone"
                  id="splide04-clone01"
                  role="group"
                  aria-roledescription="slide"
                  style={{
                    marginRight: "3px",
                    width: "calc(100% + 0px)",
                  }}
                  aria-hidden="true"
                >
                  <div className="">
                    <div>
                      <Slider {...settings}>
                        {images.length > 0 &&
                          images.map((image, index) => (
                            <img
                              className="rounded-base h-[63px] w-full md:min-h-[167px] relative cursor-pointer"
                              key={index}
                              src={`${Constant?.SERVER_URL_IMAGE}/images/${image}`}
                              alt="slide"
                            />
                          ))}
                      </Slider>
                    </div>
                  </div>
                </li>
              ) : (
                <li
                  className="splide__slide splide__slide--clone"
                  role="group"
                  aria-roledescription="slide"
                  style={{
                    marginRight: "3px",
                    width: "calc(100% + 0px)",
                  }}
                  aria-hidden="true"
                >
                  <div className="">
                    <div className="h-[63px] w-full md:min-h-[167px] relative cursor-pointer">
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
      <div style={{marginTop:'-35px'}} class="block md:hidden">
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
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
          >
            <ul
              class="splide__list"
              id="auto-scroll-container"
              role="presentation"
            >
              {images.map((image, index) => (
                <li
                  class="splide__slide splide__slide--clone"
                  id="splide08-clone01"
                  role="group"
                  aria-roledescription="slide"
                  style={{
                    marginRight: "4px",
                    width: "calc(33.3333% - 2.66667px)",
                  }}
                  aria-hidden="true"
                >
                  <div class="">
                    <div
                      style={{
                        transform: `translateX(${offset}px)`,
                      }}
                      class="h-[63px] w-full md:min-h-[167px] relative cursor-pointer"
                    >
                      <img
                        key={index}
                        src={`${Constant?.SERVER_URL_IMAGE}/images/${image}`}
                        alt="img-cover"
                        class="rounded-base object-cover z-[9] h-full w-full relative"
                      />

                      <div class="absolute flex flex-col z-10 space-y-1 w-auto min-w-[30px] h-[16px] text-center text-[10px] top-2 left-2"></div>
                    </div>
                  </div>
                </li>
              ))}

              {/* <li
                class="splide__slide splide__slide--clone"
                id="splide08-clone02"
                role="group"
                aria-roledescription="slide"
                aria-label="23 of 27"
                style={{
                  marginRight: "4px",
                  width: "calc(33.3333% - 2.66667px)",
                }}
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
                style={{
                  marginRight: "4px",
                  width: "calc(33.3333% - 2.66667px)",
                }}
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
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlideWallet;
