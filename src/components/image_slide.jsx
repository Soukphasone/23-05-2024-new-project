import React, { useEffect, useState } from "react";
const images_PC = [
  'https://lucabet88.electrikora.com/_nuxt/PC_Huaydragon.b79f7f78.webp?text=Image+1',
  'https://lucabet88.electrikora.com/_nuxt/PC_Huaydragon.b79f7f78.webp?text=Image+2',
  'https://lucabet88.electrikora.com/_nuxt/PC_Huaydragon.b79f7f78.webp?text=Image+3',
  'https://lucabet88.electrikora.com/_nuxt/PC_Huaydragon.b79f7f78.webp?text=Image+4',
];
const images_mobile = [
  '/assets/home_files/1692872972710.png?text=Image+1',
  'https://d29xpgmn3rqne6.cloudfront.net/goatbet-whitelabel/cms/1706252751597?text=Image+2',
  '/assets/home_files/1692872972710.png?text=Image+3',
  '/assets/home_files/1692872972710.png?text=Image+4',
];

function Image_slide() {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prevTranslateX) => prevTranslateX - 1);
    }, 20);

    return () => clearInterval(interval);
  }, []);
  return (
    <div class="">
      <div class="hidden md:block">
        <div
          class="splide splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized"
          id="splide01"
          role="region"
          aria-roledescription="carousel"
        >
          <div
            class="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
            id="splide01-track"
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
            aria-live="polite"
            aria-atomic="true"
          >
            <ul
              class="splide__list"
              id="splide01-list"
              role="presentation"
              style={{ transform: "translateX(-2160px)" }}
            >
              <li
                class="splide__slide splide__slide--clone"
                id="splide01-clone01"
                role="group"
                aria-roledescription="slide"
                aria-label="23 of 24"
                style={{
                  marginRight: "3px",
                  width: "calc(100% + 0px)",
                }}
                aria-hidden="true"
              >
                <div class="">
                  <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                      <div
                        className="slider-track-pc"
                        style={{ transform: `translateX(${translateX}px)` }}
                      >
                        {images_PC.map((src, index) => (
                          <img key={index} src={src} alt={`Slide ${index}`} 
                          />
                        ))}
                        {images_PC.map((src, index) => (
                          <img
                            key={index + images_PC.length}
                            src={src}
                            alt={`Slide ${index}`}
                          />
                        ))}
                      </div>
                    <div class="absolute flex flex-col z-10 space-y-1 w-auto min-w-[30px] h-[16px] text-center text-[10px] top-2 left-2"></div>
                  </div>
                </div>
              </li>
              {/* <li
                class="splide__slide is-active is-visible"
                id="splide01-slide01"
                role="group"
                aria-roledescription="slide"
                aria-label="1 of 24"
                style={{
                  marginRight: "3px",
                  width: "calc(100% + 0px)",
                }}
              >
                <div class="">
                  <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">

                    <img
                    src="https://lucabet88.electrikora.com/_nuxt/PC_Huaydragon.b79f7f78.webp"
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
      <div class="block md:hidden">
        <div
          class="splide splide--loop splide--ltr splide--draggable is-active is-initialized"
          id="splide02"
          role="region"
          aria-roledescription="carousel"
        >
          <div
            class="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
            id="splide02-track"
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
            aria-live="off"
            aria-atomic="true"
          >
            <ul
              class="splide__list"
              id="splide02-list"
              role="presentation"
              style={{ transform: "translateX(-4.3px)" }}
            >
              <li
                class="splide__slide splide__slide--clone is-visible is-active"
                id="splide02-clone01"
                role="group"
                aria-roledescription="slide"
                aria-label="19 of 24"
                style={{
                  marginRight: "4px",
                  width: "calc(33.3333% - 2.66667px)",
                }}
              >
                <div class="">
                  <div 
                  class="h-[63px] w-full md:h-[167px] relative cursor-pointer"
                  >
                    
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(${translateX}px)` }}
                      >
                        {images_mobile.map((src, index) => (
                          <img key={index} src={src} alt={`Slide ${index}`} 
                          />
                        ))}
                        {images_mobile.map((src, index) => (
                          <img
                            key={index + images_mobile.length}
                            src={src}
                            alt={`Slide ${index}`}
                          />
                        ))}
                      </div>
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

export default Image_slide;
