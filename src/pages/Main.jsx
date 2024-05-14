import React from "react";

function Main() {
  const customStyle = {
    "--duration": "20s",
    "--delay": "0s",
    "--direction": "normal",
    "--pauseOnHover": "running",
    "--pauseOnClick": "running",
    "--pauseAnimation": "running",
    "--loops": "infinite",
    "--gradient-color": "rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)",
    "--gradient-length": "200px",
    "--min-width": "100%",
    "--min-height": "auto",
    "--orientation": "scrollX",
  };
  return (
    <main data-v-3c88d514="" class="min-h-screen overflow-scroll pb-[80px]">
      <div data-v-3c88d514="" class="w-full mx-auto base-container pb-2">
        <div
          data-v-3c88d514=""
          class="vue3-marquee horizontal"
          style={{ customStyle }}
        >
          <div class="transparent-overlay" aria-hidden="true"></div>
          <div class="marquee">
            <div class="ml-4">
              LUCABET88 เว็บไซต์อันดับ 1 ในเอเชีย ระบบฝาก-ถอนออโต้
              รองรับทุกธนาคาร
            </div>
          </div>
          <div class="marquee" aria-hidden="true">
            <div class="ml-4">
              LUCABET88 เว็บไซต์อันดับ 1 ในเอเชีย ระบบฝาก-ถอนออโต้
              รองรับทุกธนาคาร
            </div>
          </div>
        </div>
        <div
          class="nuxt-loading-indicator"
          style={{
            position: "fixed",
            top: "0px",
            right: "0px",
            left: "0px",
            pointerEvents: "none",
            width: "auto",
            height: "3px",
            opacity: "0",
            background: "var(--primary)",
            transform: "scaleX(0)",
            transformOrigin: "left center 0px",
            transition: "transform 0.1s, height 0.4s, opacity 0.4s",
            zIndex: "999999",
          }}
        ></div>
        <div class="flex flex-col gap-y-2">
          <div class="">
            <div class="">
              <div
                class="splide splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized"
                id="splide01"
                role="region"
                aria-roledescription="carousel"
              >
                <div
                  class="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
                  id="splide01-track"
                  style={{ paddingLeft: '0px', paddingRight: '0px' }}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <ul
                    class="splide__list"
                    id="splide01-list"
                    role="presentation"
                    style={{}}
                  >
                    <li
                      class="splide__slide splide__slide--clone"
                      id="splide01-clone01"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="23 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704208977.webp"
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
                      class="splide__slide splide__slide--clone is-prev"
                      id="splide01-clone02"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="24 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704335445.webp"
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
                      class="splide__slide is-active is-visible"
                      id="splide01-slide01"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="1 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/PC_Huaydragon.b79f7f78.webp"
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
                      class="splide__slide is-next"
                      id="splide01-slide02"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="2 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/Happy_Fishing.66cf837a.webp"
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
                      class="splide__slide"
                      id="splide01-slide03"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="3 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/PC_Slot%20Roma.b0caa4e0.webp"
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
                      class="splide__slide"
                      id="splide01-slide04"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="4 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/Hall_of_God.31d96cff.webp"
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
                      class="splide__slide"
                      id="splide01-slide05"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="5 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/Hilo_Island.5f5d991a.webp"
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
                      class="splide__slide"
                      id="splide01-slide06"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="6 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711337946232.webp"
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
                      class="splide__slide"
                      id="splide01-slide07"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="7 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1708944100058.webp"
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
                      class="splide__slide"
                      id="splide01-slide08"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="8 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252696243.webp"
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
                      class="splide__slide"
                      id="splide01-slide09"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="9 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1705331482504.webp"
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
                      class="splide__slide"
                      id="splide01-slide10"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="10 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252580904.webp"
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
                      class="splide__slide"
                      id="splide01-slide11"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="11 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1699347090991.webp"
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
                      class="splide__slide"
                      id="splide01-slide12"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="12 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1699347168724.webp"
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
                      class="splide__slide"
                      id="splide01-slide13"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="13 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1699347120315.webp"
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
                      class="splide__slide"
                      id="splide01-slide14"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="14 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252532418.webp"
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
                      class="splide__slide"
                      id="splide01-slide15"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="15 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252505985.webp"
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
                      class="splide__slide"
                      id="splide01-slide16"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="16 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252545648.webp"
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
                      class="splide__slide"
                      id="splide01-slide17"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="17 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252553976.webp"
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
                      class="splide__slide"
                      id="splide01-slide18"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="18 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1692872953868.webp"
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
                      class="splide__slide"
                      id="splide01-slide19"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="19 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1699347056905.webp"
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
                      class="splide__slide"
                      id="splide01-slide20"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="20 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711620750488.webp"
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
                      class="splide__slide"
                      id="splide01-slide21"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="21 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711624469914.webp"
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
                      class="splide__slide"
                      id="splide01-slide22"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="22 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704185165.webp"
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
                      class="splide__slide"
                      id="splide01-slide23"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="23 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704208977.webp"
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
                      class="splide__slide"
                      id="splide01-slide24"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="24 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704335445.webp"
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
                      class="splide__slide splide__slide--clone is-active"
                      id="splide01-clone03"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="1 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/PC_Huaydragon.b79f7f78.webp"
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
                      id="splide01-clone04"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="2 of 24"
                      style={{ marginRight: '3px', width: 'calc(100% + 0px)' }}
                      aria-hidden="true"
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/Happy_Fishing.66cf837a.webp"
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
                  style={{ paddingLeft: '0px', paddingRight: '0px' }}
                  aria-live="off"
                  aria-atomic="true"
                >
                  <ul
                    class="splide__list"
                    id="splide02-list"
                    role="presentation"
                   style={{ transform: 'translateX(-4.3px)' }}
                  >
                    <li
                      class="splide__slide splide__slide--clone is-visible is-active"
                      id="splide02-clone01"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="19 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1692872972710.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone02"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="20 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711620779678.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone03"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="21 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711624418759.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone04"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="22 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704482048.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone05"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="23 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704490058.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone06"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="24 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704496098.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide01"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="1 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb1.a020cd91.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide02"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="2 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb2.237131b8.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide03"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="3 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb3.8bdae25a.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide04"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="4 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb4.7adedce6.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide05"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="5 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb5.b0af3029.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide06"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="6 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711337962151.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide07"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="7 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1708944047617.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide08"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="8 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252751597.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide09"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="9 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1705330942435.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide10"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="10 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252807906.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide11"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="11 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1699347321268.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide12"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="12 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1699347330569.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide13"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="13 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1699347311964.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide14"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="14 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1699347340794.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide15"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="15 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252773398.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide16"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="16 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252780123.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide17"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="17 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252786365.webp"
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
                      class="splide__slide is-visible is-prev"
                      id="splide02-slide18"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="18 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1706252794702.webp"
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
                      class="splide__slide is-visible is-active"
                      id="splide02-slide19"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="19 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1692872972710.webp"
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
                      class="splide__slide is-visible is-next"
                      id="splide02-slide20"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="20 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711620779678.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide21"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="21 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711624418759.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide22"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="22 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704482048.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide23"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="23 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704490058.webp"
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
                      class="splide__slide is-visible"
                      id="splide02-slide24"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="24 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711704496098.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone07"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="1 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb1.a020cd91.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone08"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="2 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb2.237131b8.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone09"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="3 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb3.8bdae25a.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone10"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="4 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb4.7adedce6.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone11"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="5 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/mb5.b0af3029.webp"
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
                      class="splide__slide splide__slide--clone is-visible"
                      id="splide02-clone12"
                      role="group"
                      aria-roledescription="slide"
                      aria-label="6 of 24"
                      style={{ marginRight: '4px',
                      width: `calc(33.3333% - 2.66667px)`}}
                    >
                      <div class="">
                        <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                          <img
                            src="home_files/1711337962151.webp"
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
          <div class="text-[red] flex space-x-2">
            <div class="relative w-full">
              <select
                class="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12"
                id="nuid-1"
              >
                <option value="" selected="selected">
                  หมวดหมู่เกม
                </option>
                <option value="new">เกมใหม่</option>
                <option value="hits">เกมฮิต</option>
                <option value="fav">เกมโปรด</option>
                <option value="last">เล่นล่าสุด</option>
              </select>
              <span class="absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5 pe-3.5">
                <span
                  class="i-heroicons-chevron-down-20-solid flex-shrink-0 dark:text-gray-500 flex-shrink-0 text-gray-400 dark:text-primary-400 text-primary-500 h-6 w-6"
                  aria-hidden="true"
                ></span>
              </span>
            </div>
            <div class="!w-full relative">
              <div
                data-v-d0ca5c5c=""
                class="input-sm base-input-wrapper w-full mb-1 input-primary !w-full"
                id="username"
              >
                <span data-v-d0ca5c5c="" class="text-sm mb-1 relative"></span>
                <div
                  data-v-d0ca5c5c=""
                  class="main-input !bg-[var(--input-bg)] text-[var(--primary)] w-full rounded-[10px] flex items-center"
                >
                  <div
                    data-v-d0ca5c5c=""
                    class="flex justify-center -mt-2 items-center pointer-events-none mr-2"
                  >
                    <span
                      data-v-d0ca5c5c=""
                      class="nuxt-icon text-5xl mt-2 text-[var(--input-password-icon)] cursor-pointer icon-search"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.77802 1.125C4.10953 1.125 1.125 4.10953 1.125 7.77802C1.125 11.4465 4.10953 14.431 7.77802 14.431C9.40324 14.431 10.8942 13.8453 12.0509 12.8738L15.8817 16.7045C15.9953 16.8182 16.1441 16.875 16.2931 16.875C16.4421 16.875 16.5908 16.8182 16.7045 16.7045C16.9318 16.4774 16.9318 16.1088 16.7045 15.8817L12.8737 12.051C13.8453 10.8943 14.431 9.40326 14.431 7.77802C14.431 4.10953 11.4465 1.125 7.77802 1.125ZM11.7151 11.5994C12.6753 10.6105 13.2672 9.26209 13.2672 7.77802C13.2672 4.75119 10.8047 2.28881 7.77802 2.28881C4.75119 2.28881 2.28881 4.75119 2.28881 7.77802C2.28881 10.8048 4.75119 13.2672 7.77802 13.2672C9.26201 13.2672 10.6103 12.6753 11.5993 11.7152C11.6156 11.6936 11.6335 11.6729 11.6532 11.6533C11.6728 11.6336 11.6935 11.6157 11.7151 11.5994ZM5.47368 4.7093C5.24654 4.48197 4.87801 4.48197 4.65087 4.7093C3.8075 5.55266 3.39299 6.72751 3.51345 7.93282C3.54351 8.23309 3.79646 8.45691 4.09186 8.45691C4.11127 8.45691 4.13084 8.45592 4.15025 8.45398C4.47011 8.42199 4.70344 8.13665 4.67145 7.817C4.58571 6.96044 4.87823 6.12757 5.47368 5.53208C5.70101 5.30497 5.70101 4.93641 5.47368 4.7093Z"
                          fill="url(#paint0_linear_6270_7508)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_6270_7508"
                            x1="3.225"
                            y1="3.75"
                            x2="14.3812"
                            y2="14.9062"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="var(--main-icon-1)"></stop>
                            <stop
                              offset="0.5"
                              stop-color="var(--main-icon-2)"
                            ></stop>
                            <stop
                              offset="1"
                              stop-color="var(--main-icon-3)"
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <input
                    data-v-d0ca5c5c=""
                    class="w-full h-full text-base !bg-[var(--input-bg)] text-primary outline-none placeholder-[var(--input-placeholder)]"
                    type="text"
                    placeholder="ค้นหาเกม"
                    autocomplete=""
                    maxlength="false"
                  />
                </div>
                <div data-v-d0ca5c5c="" class=""></div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex-row flex">
              <div class="block">
                <div class="space-y-2 mr-2">
                  <div
                    data-v-d320b445=""
                    class="borderGradient w-full gradient-border"
                  >
                    <a
                      aria-current="page"
                      href="https://lucabet88.electrikora.com/home/providers"
                      class="router-link-active router-link-exact-active gradient-box rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_5932_3335)">
                            <g filter="url(#filter0_d_5932_3335)">
                              <path
                                d="M18.1824 11.6372H17.8284C17.6072 11.6372 17.4744 11.8142 17.4744 11.9911V12.5221H16.6337V11.9911C16.6337 11.7699 16.4567 11.6372 16.2797 11.6372H15.9258C15.7045 11.6372 15.5718 11.8142 15.5718 11.9911V12.5221H14.6426V11.9911C14.6426 11.7699 14.4656 11.6372 14.2886 11.6372H13.5364V9.0708H14.3771C14.5541 9.0708 14.7311 8.9823 14.7754 8.80531C14.8639 8.62832 14.8196 8.45133 14.6869 8.31858L10.4391 4.15929C10.3949 4.11504 10.3064 4.0708 10.2179 4.02655V2.38938H13.1825C13.4479 2.38938 13.6249 2.16814 13.6249 1.9469V0.707965C13.6249 0.442478 13.4037 0.265487 13.1825 0.265487H10.2179V0.176991C10.2179 0.0884956 10.1294 0 10.0409 0H9.90813C9.81963 0 9.73114 0.0884956 9.73114 0.176991V4.02655C9.64264 4.0708 9.59839 4.11504 9.55414 4.15929L5.39478 8.31858C5.26204 8.45133 5.21779 8.62832 5.30629 8.80531C5.39478 8.9823 5.52753 9.0708 5.70452 9.0708H6.54522V11.6372H5.83726C5.61602 11.6372 5.48328 11.8142 5.48328 11.9911V12.5221H4.55407V11.9911C4.55407 11.7699 4.37708 11.6372 4.20009 11.6372H3.80186C3.58062 11.6372 3.44788 11.8142 3.44788 11.9911V12.5221H2.56292V11.9911C2.56292 11.7699 2.38593 11.6372 2.20894 11.6372H1.85496C1.63372 11.6372 1.50098 11.8142 1.50098 11.9911V14.5575C1.50098 14.7787 1.67797 14.9115 1.85496 14.9115H2.69567V19.646C2.69567 19.8673 2.87266 20 3.04965 20H7.60717V15.885C7.60717 15 8.31514 14.2921 9.20009 14.2921H10.8373C11.7222 14.2921 12.4302 15 12.4302 15.885V20H16.9435C17.1647 20 17.2974 19.823 17.2974 19.646V14.9115H18.1381C18.3594 14.9115 18.4921 14.7345 18.4921 14.5575V11.9912C18.5364 11.7699 18.3594 11.6372 18.1824 11.6372Z"
                                fill="url(#paint0_linear_5932_3335)"
                              ></path>
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_5932_3335"
                              x="-2.49902"
                              y="0"
                              width="24.998"
                              height="28"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="4"></feOffset>
                              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_5932_3335"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_5932_3335"
                                result="shape"
                              ></feBlend>
                            </filter>
                            <linearGradient
                              id="paint0_linear_5932_3335"
                              x1="3.76738"
                              y1="3.33333"
                              x2="17.7487"
                              y2="15.2161"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <clipPath id="clip0_5932_3335">
                              <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">หน้าหลัก</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/slot"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="17"
                          viewBox="0 0 20 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.07031 3.51562V12.8906H12.9297V3.51562H7.07031ZM11.7578 7.8598L11.5862 8.03146C10.9505 8.66714 10.5859 9.54727 10.5859 10.4462V11.1328H9.41406V10.4462C9.41406 9.32236 9.83856 8.22037 10.5859 7.38434V7.03125H9.41406V7.61719H8.24219V5.85938H11.7578V7.8598Z"
                            fill="url(#paint0_linear_5932_3497)"
                          ></path>
                          <path
                            d="M0 0H20V2.34375H0V0Z"
                            fill="url(#paint1_linear_5932_3497)"
                          ></path>
                          <path
                            d="M0 14.0625H20V16.4062H0V14.0625Z"
                            fill="url(#paint2_linear_5932_3497)"
                          ></path>
                          <path
                            d="M5.89844 3.51562H0V12.8906H5.89844V3.51562ZM4.72656 7.8598L4.5549 8.03146C3.91922 8.66714 3.55469 9.54727 3.55469 10.4462V11.1328H2.38281V10.4462C2.38281 9.32236 2.80731 8.22037 3.55469 7.38434V7.03125H2.38281V7.61719H1.21094V5.85938H4.72656V7.8598Z"
                            fill="url(#paint3_linear_5932_3497)"
                          ></path>
                          <path
                            d="M14.1016 12.8906H20V3.51562H14.1016V12.8906ZM15.2734 5.85938H18.7891V7.8598L18.6174 8.03146C17.9817 8.66714 17.6172 9.54727 17.6172 10.4462V11.1328H16.4453V10.4462C16.4453 9.32236 16.8698 8.22037 17.6172 7.38434V7.03125H16.4453V7.61719H15.2734V5.85938Z"
                            fill="url(#paint4_linear_5932_3497)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3497"
                              x1="7.85156"
                              y1="5.07812"
                              x2="13.8207"
                              y2="8.80881"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3497"
                              x1="2.66667"
                              y1="0.390625"
                              x2="3.05049"
                              y2="3.66596"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_5932_3497"
                              x1="2.66667"
                              y1="14.4531"
                              x2="3.05049"
                              y2="17.7285"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_5932_3497"
                              x1="0.786458"
                              y1="5.07812"
                              x2="6.77286"
                              y2="8.84457"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_5932_3497"
                              x1="14.888"
                              y1="5.07812"
                              x2="20.8744"
                              y2="8.84457"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">สล็อต</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/casino"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0C4.48601 0 0 4.48601 0 10C0 15.514 4.48601 20 9.99991 20C15.5139 20 19.9999 15.514 19.9999 10C19.9999 4.48601 15.514 0 10 0ZM9.19567 0.778565H10.7469V2.32983H9.19567V0.778565ZM16.9838 10C16.9838 13.8509 13.8509 16.9838 10 16.9838C6.14915 16.9838 3.01627 13.8509 3.01627 10C3.01627 6.14915 6.14923 3.01619 10 3.01619C13.8509 3.01619 16.9838 6.14915 16.9838 10ZM4.02796 2.93104L5.12488 4.02796L4.02796 5.12488L2.93104 4.02796L4.02796 2.93104ZM2.30114 10.7756H0.749866V9.22437H2.30114V10.7756ZM4.02796 17.069L2.93104 15.9721L4.02796 14.8752L5.12488 15.9721L4.02796 17.069ZM10.7469 19.2214H9.19567V17.6702H10.7469V19.2214ZM15.972 17.069L14.8751 15.9721L15.972 14.8752L17.069 15.9721L15.972 17.069ZM15.972 5.12488L14.8751 4.02796L15.972 2.93104L17.069 4.02796L15.972 5.12488ZM17.6415 10.7756V9.22437H19.1927V10.7756H17.6415Z"
                            fill="url(#paint0_linear_5932_3514)"
                          ></path>
                          <path
                            d="M4.30908 10C4.30908 13.1381 6.86204 15.6911 10.0001 15.6911C13.1381 15.6911 15.6912 13.1381 15.6912 10C15.6912 6.86196 13.1381 4.30891 10.0001 4.30891C6.86204 4.30891 4.30908 6.86196 4.30908 10ZM12.7214 9.51756C12.9898 9.95416 13.0763 10.3425 13.0763 10.8038C13.0763 11.944 12.2717 12.557 11.357 12.557C10.7331 12.557 10.3777 12.2622 10.1839 12.0169L10.5147 13.1887H9.47498L9.79842 12.0438C9.59857 12.2817 9.24867 12.5799 8.64747 12.5799C7.73273 12.5799 6.92375 11.9556 6.92375 10.8153C6.92375 10.3539 7.00812 9.95407 7.27649 9.51747C7.69499 8.83655 10.0061 6.87661 10.0061 6.87661C10.0061 6.87661 12.3029 8.83664 12.7214 9.51756Z"
                            fill="url(#paint1_linear_5932_3514)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3514"
                              x1="2.66666"
                              y1="3.33333"
                              x2="16.8333"
                              y2="17.4999"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3514"
                              x1="5.82669"
                              y1="6.20594"
                              x2="13.8891"
                              y2="14.2683"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">คาสิโน</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/sport"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_5932_3539)">
                            <path
                              d="M19.1867 5.04081V9.54156C17.9379 8.17574 16.1428 7.31718 14.1461 7.31718C10.3804 7.31718 7.31694 10.3806 7.31694 14.1464C7.31694 15.2586 7.58356 16.3122 8.05838 17.2357H1.78856C0.799938 17.2357 0 16.4357 0 15.4472V5.04081C0 4.05218 0.8 3.25224 1.78856 3.25224H17.3981C18.3867 3.25224 19.1867 4.05224 19.1867 5.04081Z"
                              fill="url(#paint0_linear_5932_3539)"
                            ></path>
                            <path
                              d="M9.59331 4.22781C9.486 4.22781 9.37863 4.19287 9.28844 4.12081C9.07819 3.9525 9.04388 3.64568 9.21225 3.43518L11.8138 0.183184C11.9834 -0.0276906 12.2896 -0.0606906 12.4997 0.107309C12.71 0.275622 12.7443 0.582434 12.5759 0.792934L9.97438 4.04493C9.87781 4.16531 9.73619 4.22781 9.59331 4.22781Z"
                              fill="url(#paint1_linear_5932_3539)"
                            ></path>
                            <path
                              d="M9.59327 4.22781C9.45033 4.22781 9.3087 4.16525 9.2122 4.04487L6.61064 0.792934C6.44233 0.582372 6.47664 0.275622 6.68683 0.107309C6.8977 -0.0606906 7.20383 -0.0276906 7.37277 0.183184L9.97433 3.43518C10.1426 3.64575 10.1083 3.9525 9.89814 4.12081C9.80795 4.19287 9.70058 4.22781 9.59327 4.22781Z"
                              fill="url(#paint2_linear_5932_3539)"
                            ></path>
                            <path
                              d="M14.1467 10.2262L15.8155 8.53738C15.2862 8.38007 14.7268 8.29263 14.1464 8.29263C13.566 8.29263 13.0066 8.38007 12.4773 8.53738L14.1467 10.2262Z"
                              fill="url(#paint3_linear_5932_3539)"
                            ></path>
                            <path
                              d="M16.6721 9.0585L14.6345 11.1204V11.9932L16.2999 13.6586H17.1723L19.2343 11.6207C19.2762 11.5793 19.3255 11.5509 19.3761 11.5277C18.8102 10.3999 17.8929 9.48244 16.7651 8.91656C16.7419 8.96731 16.7135 9.0165 16.6721 9.0585Z"
                              fill="url(#paint4_linear_5932_3539)"
                            ></path>
                            <path
                              d="M12.8828 14.1464L14.1441 12.8851L15.4054 14.1464L14.1441 15.4077L12.8828 14.1464Z"
                              fill="url(#paint5_linear_5932_3539)"
                            ></path>
                            <path
                              d="M18.0669 14.1464L19.7553 15.8149C19.9125 15.2857 20 14.7264 20 14.1462C20 13.5659 19.9125 13.0066 19.7553 12.4773L18.0669 14.1464Z"
                              fill="url(#paint6_linear_5932_3539)"
                            ></path>
                            <path
                              d="M9.05856 11.6207L11.1205 13.6586H11.9936L13.659 11.9932V11.1204L11.6208 9.05844C11.5794 9.01644 11.551 8.96719 11.5278 8.9165C10.4 9.48244 9.48269 10.3998 8.91675 11.5276C8.96744 11.5508 9.01662 11.5793 9.05856 11.6207Z"
                              fill="url(#paint7_linear_5932_3539)"
                            ></path>
                            <path
                              d="M14.1467 18.0662L12.4773 19.755C13.0065 19.9123 13.566 19.9998 14.1464 19.9998C14.7268 19.9998 15.2862 19.9123 15.8155 19.755L14.1467 18.0662Z"
                              fill="url(#paint8_linear_5932_3539)"
                            ></path>
                            <path
                              d="M19.2343 16.6721L17.172 14.6342H16.2999L14.6345 16.2996V17.172L16.6721 19.2339C16.7135 19.2759 16.7419 19.3251 16.7651 19.3759C17.8928 18.81 18.8101 17.8927 19.376 16.7651C19.3254 16.7419 19.2762 16.7134 19.2343 16.6721Z"
                              fill="url(#paint9_linear_5932_3539)"
                            ></path>
                            <path
                              d="M11.6207 19.2339L13.6589 17.1719V16.2995L11.9936 14.6341H11.1208L9.05856 16.672C9.01656 16.7133 8.9675 16.7418 8.91687 16.765C9.48281 17.8927 10.4001 18.8099 11.5278 19.3758C11.551 19.3251 11.5793 19.2759 11.6207 19.2339Z"
                              fill="url(#paint10_linear_5932_3539)"
                            ></path>
                            <path
                              d="M8.53753 12.4774C8.38028 13.0066 8.29285 13.5659 8.29285 14.1462C8.29285 14.7266 8.38028 15.2857 8.53747 15.8149L10.2259 14.1464L8.53753 12.4774Z"
                              fill="url(#paint11_linear_5932_3539)"
                            ></path>
                            <path
                              d="M10.3803 19.8373H2.90723C2.37391 19.8373 1.91866 19.4731 1.7951 18.9528L1.62598 18.2048C1.67804 18.2113 1.73004 18.2113 1.7886 18.2113H8.66329C9.13804 18.8487 9.71685 19.4016 10.3803 19.8373Z"
                              fill="url(#paint12_linear_5932_3539)"
                            ></path>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3539"
                              x1="2.55822"
                              y1="5.58283"
                              x2="11.9875"
                              y2="18.5206"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3539"
                              x1="9.58235"
                              y1="0.704849"
                              x2="12.5356"
                              y2="3.20399"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_5932_3539"
                              x1="6.98077"
                              y1="0.704838"
                              x2="9.93402"
                              y2="3.20391"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_5932_3539"
                              x1="12.9224"
                              y1="8.61489"
                              x2="14.1104"
                              y2="10.666"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_5932_3539"
                              x1="15.2667"
                              y1="9.7069"
                              x2="18.6257"
                              y2="13.0655"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint5_linear_5932_3539"
                              x1="13.2612"
                              y1="14.1885"
                              x2="15.048"
                              y2="14.1885"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint6_linear_5932_3539"
                              x1="18.3246"
                              y1="13.0336"
                              x2="20.3753"
                              y2="14.2213"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint7_linear_5932_3539"
                              x1="9.54905"
                              y1="9.70685"
                              x2="12.908"
                              y2="13.0659"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint8_linear_5932_3539"
                              x1="12.9224"
                              y1="18.3885"
                              x2="14.1104"
                              y2="20.4395"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint9_linear_5932_3539"
                              x1="15.2667"
                              y1="15.4245"
                              x2="18.6254"
                              y2="18.783"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint10_linear_5932_3539"
                              x1="9.54915"
                              y1="15.4244"
                              x2="12.9078"
                              y2="18.7834"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint11_linear_5932_3539"
                              x1="8.55059"
                              y1="13.0336"
                              x2="10.6012"
                              y2="14.2213"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint12_linear_5932_3539"
                              x1="2.79323"
                              y1="18.4769"
                              x2="3.21"
                              y2="20.7119"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <clipPath id="clip0_5932_3539">
                              <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">กีฬา</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/table"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.31696 2.26562L7.49921 0.36252C7.28304 0.136117 6.9916 0.00748535 6.67864 0.000336998C6.36501 -0.00708479 6.06868 0.108304 5.84236 0.324513L0.362458 5.55871C0.136094 5.77492 0.00746234 6.06632 0.000313985 6.37929C-0.00683437 6.69225 0.108281 6.98924 0.32449 7.21553L3.86711 10.9245V4.60935C3.86711 3.31702 4.9185 2.26562 6.21083 2.26562H9.31696Z"
                            fill="url(#paint0_linear_5932_3565)"
                          ></path>
                          <path
                            d="M19.1161 2.4007L11.7706 0.538026C11.4672 0.460956 11.152 0.506854 10.883 0.667009C10.614 0.827163 10.4235 1.08247 10.3466 1.38583L10.1235 2.26562H13.7892C15.0815 2.26562 16.1329 3.31702 16.1329 4.60935V16.2696C16.257 16.2432 16.3773 16.1966 16.4894 16.1298C16.7584 15.9696 16.9489 15.7143 17.0258 15.4109L19.964 3.82467C20.1228 3.19831 19.7424 2.55953 19.1161 2.4007Z"
                            fill="url(#paint1_linear_5932_3565)"
                          ></path>
                          <path
                            d="M13.788 3.43748H6.20995C5.56378 3.43748 5.03809 3.96318 5.03809 4.60935V16.5623C5.03809 17.2085 5.56378 17.7342 6.20995 17.7342H13.788C14.4341 17.7342 14.9598 17.2085 14.9598 16.5623V4.60935C14.9598 3.96318 14.4341 3.43748 13.788 3.43748ZM7.81149 5.625C8.13508 5.625 8.39742 5.88734 8.39742 6.21093C8.39742 6.53452 8.13508 6.79686 7.81149 6.79686C7.4879 6.79686 7.22556 6.53452 7.22556 6.21093C7.22556 5.88734 7.4879 5.625 7.81149 5.625ZM9.99897 13.3592C9.85924 13.3592 9.71955 13.3095 9.60831 13.21L7.8611 11.6471C7.85715 11.6436 7.85333 11.64 7.84946 11.6364C7.41107 11.2224 7.20021 10.5964 7.28533 9.96175C7.36626 9.35812 7.71005 8.84008 8.205 8.57594C8.44543 8.44794 8.69937 8.38313 8.96027 8.38313C9.35604 8.38313 9.7178 8.53391 9.99897 8.78652C10.2801 8.53391 10.6419 8.38313 11.0377 8.38313C11.2986 8.38313 11.5525 8.4479 11.7925 8.57571C12.2879 8.84008 12.6316 9.35808 12.7126 9.96171C12.7977 10.5963 12.5868 11.2224 12.1485 11.6364C12.1446 11.64 12.1408 11.6436 12.1368 11.647L10.3896 13.21C10.2784 13.3095 10.1387 13.3592 9.99897 13.3592ZM12.1864 15.5466C11.8629 15.5466 11.6005 15.2843 11.6005 14.9607C11.6005 14.6371 11.8629 14.3748 12.1864 14.3748C12.51 14.3748 12.7724 14.6371 12.7724 14.9607C12.7724 15.2843 12.51 15.5466 12.1864 15.5466Z"
                            fill="url(#paint2_linear_5932_3565)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3565"
                              x1="1.24226"
                              y1="1.82075"
                              x2="8.88345"
                              y2="8.33754"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3565"
                              x1="11.4404"
                              y1="3.12954"
                              x2="21.4896"
                              y2="9.42395"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_5932_3565"
                              x1="6.36099"
                              y1="5.82027"
                              x2="15.8478"
                              y2="12.404"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">ไพ่</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/arcade"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4034 13.1225H4.59961C4.77641 12.5712 5.29584 12.1921 5.88701 12.1921H12.116C12.7071 12.1921 13.2266 12.5712 13.4034 13.1225Z"
                            fill="url(#paint0_linear_5932_3586)"
                          ></path>
                          <path
                            d="M8.99948 0C6.91627 0 5.22168 1.67333 5.22168 3.73042C5.22168 5.78754 6.91627 7.46083 8.99948 7.46083C11.0827 7.46083 12.7773 5.78754 12.7773 3.73042C12.7773 1.67333 11.0827 0 8.99948 0ZM8.99948 2.36542C8.237 2.36542 7.61672 2.9775 7.61672 3.73042C7.61672 3.91458 7.46566 4.06375 7.27915 4.06375C7.09307 4.06375 6.94158 3.91458 6.94158 3.73042C6.94158 2.61 7.86483 1.69875 8.99948 1.69875C9.18598 1.69875 9.33705 1.84792 9.33705 2.03208C9.33705 2.21583 9.18598 2.36542 8.99948 2.36542Z"
                            fill="url(#paint1_linear_5932_3586)"
                          ></path>
                          <path
                            d="M10.4095 7.90167V11.5255H7.59167V7.90167C8.47703 8.19592 9.48458 8.20909 10.4095 7.90167Z"
                            fill="url(#paint2_linear_5932_3586)"
                          ></path>
                          <path
                            d="M16.8109 20H1.18912C-0.395592 20 -0.397153 17.6438 1.18912 17.6438H16.8109C18.3956 17.6438 18.3972 20 16.8109 20Z"
                            fill="url(#paint3_linear_5932_3586)"
                          ></path>
                          <path
                            d="M6.35234 15.8804H11.6477C12.4015 15.8804 12.8194 16.4143 12.871 16.9771H16.6911C16.356 15.4692 15.0616 13.7892 13.5597 13.7892H4.44032C2.92586 13.7892 1.64032 15.4852 1.30896 16.9771H5.129C5.18031 16.4144 5.59822 15.8804 6.35234 15.8804Z"
                            fill="url(#paint4_linear_5932_3586)"
                          ></path>
                          <path
                            d="M11.6494 16.5471H6.35408C6.00807 16.5471 5.85153 16.7588 5.81152 16.9771H12.1919C12.1518 16.7587 11.9952 16.5471 11.6494 16.5471Z"
                            fill="url(#paint5_linear_5932_3586)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3586"
                              x1="5.77344"
                              y1="12.3471"
                              x2="5.91121"
                              y2="13.6507"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3586"
                              x1="6.22909"
                              y1="1.24347"
                              x2="11.5134"
                              y2="6.59493"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_5932_3586"
                              x1="7.96739"
                              y1="8.50564"
                              x2="10.4551"
                              y2="10.4401"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_5932_3586"
                              x1="2.4"
                              y1="18.0365"
                              x2="2.82959"
                              y2="21.3182"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_5932_3586"
                              x1="3.35991"
                              y1="14.3205"
                              x2="4.25734"
                              y2="18.6507"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint5_linear_5932_3586"
                              x1="6.66224"
                              y1="16.6188"
                              x2="6.70311"
                              y2="17.2252"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">อาร์เคด</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/pvp"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5655 14.6577C19.3446 14.3184 19.229 13.9242 19.2307 13.5185L18.0589 13.5156C18.0571 13.9328 18.1344 14.3396 18.286 14.7218C17.5919 15.163 17.161 15.8542 16.9556 16.6502C16.5179 16.6221 16.0807 16.6845 15.6619 16.8338L16.0567 17.937C16.4544 17.7951 16.8812 17.778 17.2909 17.8873L17.9901 18.075L18.0279 17.3517C18.0703 16.5346 18.52 15.8176 19.2839 15.5246L19.9608 15.2654L19.5655 14.6577Z"
                            fill="url(#paint0_linear_5932_3612)"
                          ></path>
                          <path
                            d="M0.76918 8.86719L1.94105 8.82469C1.93875 8.41957 1.86094 8.02133 1.71391 7.64937C2.40801 7.2082 2.83887 6.51699 3.0443 5.72047C3.48031 5.74906 3.91805 5.68726 4.33746 5.53734L3.94379 4.43414C3.54555 4.57605 3.11926 4.59437 2.70953 4.48336L2.00973 4.29512L1.97195 5.01894C1.92961 5.83664 1.47984 6.55359 0.715977 6.84598L0.0390625 7.10465L0.433867 7.71234C0.651328 8.04594 0.766914 8.46895 0.76918 8.86719Z"
                            fill="url(#paint1_linear_5932_3612)"
                          ></path>
                          <path
                            d="M9.41406 17.6562C9.41406 18.9507 10.4634 20 11.7578 20C13.0522 20 14.1016 18.9507 14.1016 17.6562V12.9297C14.1016 11.6352 13.0522 10.5859 11.7578 10.5859H9.98504C10.3568 11.0771 10.5859 11.6817 10.5859 12.3438C10.5859 13.297 10.1213 14.1372 9.41406 14.6725V17.6562Z"
                            fill="url(#paint2_linear_5932_3612)"
                          ></path>
                          <path
                            d="M3.51562 19.398C4.1982 19.7805 5.00945 20 5.79773 20H9.16793C8.59867 19.3751 8.24219 18.5525 8.24219 17.6425V15.2734H5.89844V14.1016H7.65625C8.62707 14.1016 9.41406 13.3146 9.41406 12.3438C9.41406 11.3729 8.62707 10.5859 7.65625 10.5859H5.79773C5.00945 10.5859 4.1982 10.8054 3.51562 11.188V19.398Z"
                            fill="url(#paint3_linear_5932_3612)"
                          ></path>
                          <path
                            d="M0 11.7578H2.34375V18.8281H0V11.7578Z"
                            fill="url(#paint4_linear_5932_3612)"
                          ></path>
                          <path
                            d="M5.89844 2.34375V7.07031C5.89844 8.36473 6.94777 9.41406 8.24219 9.41406C9.5366 9.41406 10.5859 8.36473 10.5859 7.07031V4.0866C9.87875 3.55125 9.41406 2.71109 9.41406 1.75781C9.41406 1.09578 9.64316 0.491172 10.015 0H8.24219C6.94777 0 5.89844 1.0493 5.89844 2.34375Z"
                            fill="url(#paint5_linear_5932_3612)"
                          ></path>
                          <path
                            d="M11.7578 4.6875V7.05656C11.7578 7.9666 11.4013 8.78914 10.8321 9.41406H14.2023C14.9905 9.41406 15.8018 9.19461 16.4844 8.81203V0.602031C15.8018 0.219453 14.9905 0 14.2023 0H12.3438C11.3729 0 10.5859 0.786992 10.5859 1.75781C10.5859 2.72863 11.3729 3.51562 12.3438 3.51562H14.1016V4.6875H11.7578Z"
                            fill="url(#paint6_linear_5932_3612)"
                          ></path>
                          <path
                            d="M17.6562 1.17188H20V8.24219H17.6562V1.17188Z"
                            fill="url(#paint7_linear_5932_3612)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3612"
                              x1="16.2351"
                              y1="14.2755"
                              x2="19.459"
                              y2="17.3154"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3612"
                              x1="0.612182"
                              y1="5.05713"
                              x2="3.84457"
                              y2="8.09604"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_5932_3612"
                              x1="10.0391"
                              y1="12.1549"
                              x2="15.3604"
                              y2="14.8046"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_5932_3612"
                              x1="4.30208"
                              y1="12.1549"
                              x2="10.3026"
                              y2="15.9146"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_5932_3612"
                              x1="0.3125"
                              y1="12.9362"
                              x2="3.30408"
                              y2="13.9279"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint5_linear_5932_3612"
                              x1="6.52344"
                              y1="1.56901"
                              x2="11.8448"
                              y2="4.21863"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint6_linear_5932_3612"
                              x1="11.3724"
                              y1="1.56901"
                              x2="17.3729"
                              y2="5.32865"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint7_linear_5932_3612"
                              x1="17.9687"
                              y1="2.35026"
                              x2="20.9603"
                              y2="3.34194"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">ต่อสู้</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/crash"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 18.8281H18.8281V7.03125H15.2734V18.8281H14.1016V11.7188H10.5859V18.8281H9.41406V9.375H5.89844V18.8281H4.72656V12.8906H1.17188V18.8281H0V20H20V18.8281Z"
                            fill="url(#paint0_linear_5932_3646)"
                          ></path>
                          <path
                            d="M19.9987 4.6875V0H15.2722V1.17188H17.9983L12.3425 6.78863L7.65498 2.10113L0.17041 9.54668L0.998926 10.3752L7.65498 3.75824L12.3425 8.44574L18.8269 2.00043V4.6875H19.9987Z"
                            fill="url(#paint1_linear_5932_3646)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3646"
                              x1="2.66667"
                              y1="9.19271"
                              x2="11.0536"
                              y2="22.1267"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3646"
                              x1="2.81419"
                              y1="1.7292"
                              x2="8.85195"
                              y2="13.2681"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">แครช</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/fishing"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.31248 5.8594C5.63634 5.8594 5.89841 6.12147 5.89841 6.44533C5.89841 6.7692 5.63634 7.03127 5.31248 7.03127H2.13347C3.52018 8.47279 5.50283 9.37501 7.65622 9.37501H8.63813C9.29789 10.7597 10.7107 11.7578 12.3437 11.7578C12.6676 11.7578 12.9296 11.4957 12.9296 11.1719V9.68856C13.6369 10.0988 14.1015 10.9052 14.1015 11.7578C14.1015 13.0504 13.0504 14.1016 11.7578 14.1016H11.3475C10.6728 12.6842 9.23836 11.7578 7.65622 11.7578C7.43993 11.7578 7.24137 11.8768 7.1395 12.0674C7.03763 12.2579 7.04911 12.4891 7.16868 12.6688C8.4607 14.6068 8.4607 17.151 7.16868 19.089C7.04907 19.2687 7.03766 19.4999 7.1395 19.6904C7.24134 19.881 7.43989 20 7.65622 20C9.23836 20 10.6729 19.0736 11.3475 17.6563H11.7578C16.281 17.6563 19.9999 13.8983 19.9999 9.37505C19.9999 4.85179 16.281 1.17196 11.7578 1.17196H0.585935C0.262069 1.17196 0 1.43403 0 1.75789C0 3.26836 0.447381 4.67398 1.20886 5.85944H5.31248V5.8594ZM9.5857 4.51585C9.35683 4.28698 9.35683 3.91617 9.5857 3.6873C9.81457 3.45843 10.1854 3.45843 10.4143 3.6873C11.2891 4.56163 11.2891 5.98526 10.4143 6.85959C10.1854 7.08846 9.81457 7.08846 9.5857 6.85959C9.35683 6.63072 9.35683 6.25991 9.5857 6.03104C10.0034 5.61335 10.0034 4.93354 9.5857 4.51585ZM7.24196 4.51585C7.01309 4.28698 7.01309 3.91617 7.24196 3.6873C7.47083 3.45843 7.84165 3.45843 8.07051 3.6873C8.94539 4.56163 8.94539 5.98526 8.07051 6.85959C7.84165 7.08846 7.47083 7.08846 7.24196 6.85959C7.01309 6.63072 7.01309 6.25991 7.24196 6.03104C7.65965 5.61335 7.65965 4.93354 7.24196 4.51585ZM5.31248 3.51566C5.63607 3.51566 5.89841 3.778 5.89841 4.10159C5.89841 4.42519 5.63607 4.68753 5.31248 4.68753C4.98888 4.68753 4.72654 4.42519 4.72654 4.10159C4.72654 3.778 4.98888 3.51566 5.31248 3.51566Z"
                            fill="url(#paint0_linear_5932_3632)"
                          ></path>
                          <path
                            d="M18.8463 3.21668C18.8959 2.38828 19.2381 1.58875 19.8266 1.00024C19.9943 0.832579 20.0446 0.580821 19.9536 0.361641C19.8633 0.1425 19.6492 0 19.4124 0H17.5538C16.7306 0 15.8884 0.242813 15.1847 0.658321C16.5904 1.2134 17.8672 2.09707 18.8463 3.21668Z"
                            fill="url(#paint1_linear_5932_3632)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3632"
                              x1="2.66665"
                              y1="4.30997"
                              x2="15.9789"
                              y2="18.4508"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3632"
                              x1="15.8265"
                              y1="0.536114"
                              x2="17.9316"
                              y2="3.68638"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">ยิงปลา</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/lotto"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4.6875C10.3236 4.6875 10.5859 4.42517 10.5859 4.10156C10.5859 3.77796 10.3236 3.51562 10 3.51562C9.6764 3.51562 9.41406 3.77796 9.41406 4.10156C9.41406 4.42517 9.6764 4.6875 10 4.6875Z"
                            fill="url(#paint0_linear_5932_3666)"
                          ></path>
                          <path
                            d="M10 9.375C10.3236 9.375 10.5859 9.11267 10.5859 8.78906C10.5859 8.46546 10.3236 8.20312 10 8.20312C9.6764 8.20312 9.41406 8.46546 9.41406 8.78906C9.41406 9.11267 9.6764 9.375 10 9.375Z"
                            fill="url(#paint1_linear_5932_3666)"
                          ></path>
                          <path
                            d="M13.9062 6.64062C14.2299 6.64062 14.4922 6.37829 14.4922 6.05469C14.4922 5.73108 14.2299 5.46875 13.9062 5.46875C13.5826 5.46875 13.3203 5.73108 13.3203 6.05469C13.3203 6.37829 13.5826 6.64062 13.9062 6.64062Z"
                            fill="url(#paint2_linear_5932_3666)"
                          ></path>
                          <path
                            d="M5.3125 10.9375C5.6361 10.9375 5.89844 10.6752 5.89844 10.3516C5.89844 10.028 5.6361 9.76562 5.3125 9.76562C4.9889 9.76562 4.72656 10.028 4.72656 10.3516C4.72656 10.6752 4.9889 10.9375 5.3125 10.9375Z"
                            fill="url(#paint3_linear_5932_3666)"
                          ></path>
                          <path
                            d="M8.24219 8.78906C8.24219 7.8198 9.03074 7.03125 10 7.03125C10.9693 7.03125 11.7578 7.8198 11.7578 8.78906C11.7578 9.23672 11.5893 9.64562 11.3128 9.95629L14.7484 16.1861C17.179 14.6226 18.7891 11.8939 18.7891 8.78906C18.7891 3.935 14.8541 0 10 0C5.14594 0 1.21094 3.935 1.21094 8.78906C1.21094 11.8939 2.82098 14.6226 5.2516 16.1861L8.68715 9.95629C8.41066 9.64562 8.24219 9.23672 8.24219 8.78906ZM16.4453 10.3516C16.4453 11.3208 15.6568 12.1094 14.6875 12.1094C13.7182 12.1094 12.9297 11.3208 12.9297 10.3516C12.9297 9.3823 13.7182 8.59375 14.6875 8.59375C15.6568 8.59375 16.4453 9.3823 16.4453 10.3516ZM13.9062 4.29687C14.8755 4.29687 15.6641 5.08543 15.6641 6.05469C15.6641 7.02394 14.8755 7.8125 13.9062 7.8125C12.937 7.8125 12.1484 7.02394 12.1484 6.05469C12.1484 5.08543 12.937 4.29687 13.9062 4.29687ZM10 2.34375C10.9693 2.34375 11.7578 3.1323 11.7578 4.10156C11.7578 5.07082 10.9693 5.85937 10 5.85937C9.03074 5.85937 8.24219 5.07082 8.24219 4.10156C8.24219 3.1323 9.03074 2.34375 10 2.34375ZM5.3125 12.1094C4.34324 12.1094 3.55469 11.3208 3.55469 10.3516C3.55469 9.3823 4.34324 8.59375 5.3125 8.59375C6.28176 8.59375 7.07031 9.3823 7.07031 10.3516C7.07031 11.3208 6.28176 12.1094 5.3125 12.1094ZM7.11387 5.34902C6.51363 5.85324 6.05348 6.51211 5.78316 7.25434C5.69652 7.49223 5.4718 7.63992 5.23254 7.63992C5.16594 7.63992 5.09824 7.62852 5.03207 7.60441C4.72801 7.49367 4.57125 7.15738 4.68199 6.85332C5.02254 5.91832 5.60281 5.08789 6.36008 4.45172C6.60789 4.24359 6.9775 4.27566 7.18563 4.52348C7.39375 4.77129 7.36164 5.14082 7.11387 5.34902Z"
                            fill="url(#paint4_linear_5932_3666)"
                          ></path>
                          <path
                            d="M10.0009 10.5469C9.90313 10.5469 9.80731 10.5385 9.71379 10.5231L6.27844 16.7525C7.40887 17.2819 8.67024 17.5781 10.0009 17.5781C11.3316 17.5781 12.593 17.2819 13.7234 16.7525L10.2881 10.5231C10.1946 10.5385 10.0988 10.5469 10.0009 10.5469Z"
                            fill="url(#paint5_linear_5932_3666)"
                          ></path>
                          <path
                            d="M14.6875 10.9375C15.0111 10.9375 15.2734 10.6752 15.2734 10.3516C15.2734 10.028 15.0111 9.76562 14.6875 9.76562C14.3639 9.76562 14.1016 10.028 14.1016 10.3516C14.1016 10.6752 14.3639 10.9375 14.6875 10.9375Z"
                            fill="url(#paint6_linear_5932_3666)"
                          ></path>
                          <path
                            d="M19.4141 18.8281H16.2054L14.7484 16.1861C14.4207 16.3969 14.078 16.586 13.7225 16.7525L14.8671 18.8281H5.13285L6.2775 16.7525C5.92199 16.586 5.57922 16.3969 5.2516 16.1862L3.79465 18.8281H0.585938C0.262344 18.8281 0 19.0905 0 19.4141C0 19.7377 0.262344 20 0.585938 20H19.4141C19.7377 20 20 19.7377 20 19.4141C20 19.0905 19.7377 18.8281 19.4141 18.8281Z"
                            fill="url(#paint7_linear_5932_3666)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3666"
                              x1="9.57031"
                              y1="3.71094"
                              x2="10.4004"
                              y2="4.54102"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3666"
                              x1="9.57031"
                              y1="8.39844"
                              x2="10.4004"
                              y2="9.22852"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_5932_3666"
                              x1="13.4766"
                              y1="5.66406"
                              x2="14.3066"
                              y2="6.49414"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_5932_3666"
                              x1="4.88281"
                              y1="9.96094"
                              x2="5.71289"
                              y2="10.791"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_5932_3666"
                              x1="3.55469"
                              y1="2.69769"
                              x2="14.981"
                              y2="15.1066"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint5_linear_5932_3666"
                              x1="7.27111"
                              y1="11.6989"
                              x2="12.2612"
                              y2="16.9648"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint6_linear_5932_3666"
                              x1="14.2578"
                              y1="9.96094"
                              x2="15.0879"
                              y2="10.791"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint7_linear_5932_3666"
                              x1="2.66667"
                              y1="16.8218"
                              x2="3.66083"
                              y2="22.0352"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">หวย</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/crypto"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4375 5H11.875V6.25H13.4375C13.6033 6.25 13.7622 6.18415 13.8794 6.06694C13.9967 5.94973 14.0625 5.79076 14.0625 5.625C14.0625 5.45924 13.9967 5.30027 13.8794 5.18306C13.7622 5.06585 13.6033 5 13.4375 5Z"
                            fill="url(#paint0_linear_5932_3699)"
                          ></path>
                          <path
                            d="M13.4375 6.875H11.875V8.125H13.4375C13.6033 8.125 13.7622 8.05915 13.8794 7.94194C13.9967 7.82473 14.0625 7.66576 14.0625 7.5C14.0625 7.33424 13.9967 7.17527 13.8794 7.05806C13.7622 6.94085 13.6033 6.875 13.4375 6.875Z"
                            fill="url(#paint1_linear_5932_3699)"
                          ></path>
                          <path
                            d="M5.625 16.5625C5.97018 16.5625 6.25 16.2827 6.25 15.9375C6.25 15.5923 5.97018 15.3125 5.625 15.3125C5.27982 15.3125 5 15.5923 5 15.9375C5 16.2827 5.27982 16.5625 5.625 16.5625Z"
                            fill="url(#paint2_linear_5932_3699)"
                          ></path>
                          <path
                            d="M11.875 11.875V11.25H14.2513C14.1923 11.1416 14.1311 11.0343 14.0677 10.9284C14.0122 10.8358 13.9336 10.7592 13.8396 10.706C13.7457 10.6528 13.6396 10.6249 13.5316 10.625H11.982C11.8426 10.6249 11.7072 10.6714 11.5973 10.7572C11.4874 10.843 11.4094 10.9631 11.3758 11.0984L11.2406 11.6384C11.2254 11.6995 11.1919 11.7547 11.1447 11.7965C11.0975 11.8383 11.0388 11.8649 10.9762 11.8727L10.5793 11.9224L10.3004 12.8984C10.2847 12.9536 10.254 13.0034 10.2118 13.0423C10.1696 13.0813 10.1176 13.1078 10.0613 13.1191L8.49877 13.4316C8.45831 13.4396 8.41665 13.4396 8.37619 13.4316L6.81369 13.1191C6.75741 13.1078 6.70531 13.0813 6.66312 13.0423C6.62093 13.0034 6.59027 12.9536 6.57451 12.8984L6.29564 11.9223L5.89873 11.8727C5.83615 11.8649 5.77741 11.8383 5.73022 11.7965C5.68303 11.7546 5.64959 11.6995 5.63432 11.6383L5.49916 11.0985C5.46553 10.9632 5.38755 10.843 5.27768 10.7572C5.16781 10.6714 5.03236 10.6249 4.89295 10.625H3.34334C3.23547 10.6253 3.12949 10.6534 3.03562 10.7065C2.94175 10.7597 2.86314 10.8361 2.80736 10.9284C2.74377 11.0344 2.68257 11.1416 2.62377 11.25H4.99998V11.875H2.3142C1.66627 13.324 1.41688 14.9197 1.59178 16.4973L1.74846 17.9077C1.77082 18.108 1.85644 18.2958 1.99286 18.4441C2.12929 18.5923 2.30943 18.6932 2.50711 18.7321C2.70479 18.771 2.90972 18.7458 3.09212 18.6603C3.27452 18.5747 3.42491 18.4332 3.52142 18.2564L4.49506 16.4715C4.42273 16.3207 4.3814 16.1569 4.37352 15.9898C4.36563 15.8228 4.39136 15.6558 4.44916 15.4989C4.50696 15.342 4.59568 15.1982 4.71004 15.0762C4.8244 14.9541 4.96209 14.8563 5.11496 14.7884C5.26782 14.7206 5.43274 14.6841 5.59997 14.6811C5.76719 14.6782 5.9333 14.7088 6.08848 14.7712C6.24365 14.8336 6.38472 14.9265 6.50334 15.0444C6.62196 15.1623 6.71571 15.3028 6.77904 15.4576L8.43748 15.6234L10.0959 15.4576C10.1592 15.3028 10.253 15.1623 10.3716 15.0444C10.4902 14.9265 10.6313 14.8336 10.7865 14.7712C10.9417 14.7088 11.1078 14.6782 11.275 14.6811C11.4422 14.6841 11.6071 14.7206 11.76 14.7884C11.9129 14.8563 12.0506 14.9541 12.1649 15.0762C12.2793 15.1982 12.368 15.342 12.4258 15.4989C12.4836 15.6558 12.5093 15.8228 12.5014 15.9898C12.4936 16.1569 12.4522 16.3207 12.3799 16.4715L13.3537 18.2566C13.4502 18.4334 13.6006 18.5748 13.783 18.6603C13.9655 18.7458 14.1704 18.7709 14.368 18.7319C14.5657 18.693 14.7457 18.5921 14.8821 18.4439C15.0185 18.2957 15.1041 18.1078 15.1265 17.9076L15.2831 16.4975C15.4552 14.9198 15.2055 13.3247 14.5597 11.875H11.875ZM4.99998 14.0625H4.06248V15H3.43748V14.0625H2.49998V13.4375H3.43748V12.5H4.06248V13.4375H4.99998V14.0625ZM8.12498 15H7.49998V14.375H8.12498V15ZM9.37498 15H8.74998V14.375H9.37498V15ZM12.5 14.0625H11.875V13.4375H12.5V14.0625ZM13.4375 15H12.8125V14.375H13.4375V15ZM13.4375 13.125H12.8125V12.5H13.4375V13.125ZM14.375 14.0625H13.75V13.4375H14.375V14.0625Z"
                            fill="url(#paint3_linear_5932_3699)"
                          ></path>
                          <path
                            d="M8.43746 12.8063L9.7518 12.5434L9.9052 12.0065L8.47621 12.1851C8.45048 12.1883 8.42444 12.1883 8.39871 12.1851L6.96973 12.0065L7.12313 12.5434L8.43746 12.8063Z"
                            fill="url(#paint4_linear_5932_3699)"
                          ></path>
                          <path
                            d="M11.25 16.5625C11.5952 16.5625 11.875 16.2827 11.875 15.9375C11.875 15.5923 11.5952 15.3125 11.25 15.3125C10.9048 15.3125 10.625 15.5923 10.625 15.9375C10.625 16.2827 10.9048 16.5625 11.25 16.5625Z"
                            fill="url(#paint5_linear_5932_3699)"
                          ></path>
                          <path
                            d="M12.8125 1.25C9.71094 1.25 7.1875 3.77344 7.1875 6.875C7.1887 7.76268 7.39942 8.63753 7.80253 9.4284C8.20564 10.2193 8.78975 10.9038 9.50734 11.4263L10.6863 11.2789L10.7695 10.9469C10.8368 10.6763 10.9928 10.4361 11.2125 10.2644C11.4323 10.0928 11.7032 9.99971 11.982 10H13.5316C13.7475 9.99995 13.9596 10.0558 14.1474 10.1621C14.3353 10.2684 14.4923 10.4215 14.6034 10.6066C14.8586 11.0326 15.0798 11.4781 15.2651 11.9389C16.216 11.4778 17.0179 10.7583 17.579 9.86279C18.14 8.96723 18.4375 7.93179 18.4375 6.875C18.4375 3.77344 15.9141 1.25 12.8125 1.25ZM17.6421 5.58082C17.6709 5.68816 17.6963 5.7973 17.7178 5.90539L17.1048 6.02734C17.0859 5.93258 17.0636 5.83684 17.0384 5.74273C17.0131 5.64863 16.9846 5.55461 16.9536 5.46324L17.5453 5.26215C17.5808 5.36629 17.6133 5.47355 17.6421 5.58082ZM16.9666 4.09199C17.028 4.18375 17.0872 4.27898 17.1427 4.37504C17.1981 4.47109 17.2508 4.56969 17.2997 4.66891L16.739 4.94531C16.6961 4.8584 16.6499 4.77172 16.6014 4.68773C16.5529 4.60375 16.5009 4.52008 16.4471 4.43969L16.9666 4.09199ZM16.1049 3.11176C16.1883 3.18488 16.2701 3.26152 16.3481 3.33953C16.4261 3.41754 16.5026 3.49918 16.5757 3.58262L16.1059 3.99469C16.0417 3.92156 15.9745 3.8498 15.9061 3.78148C15.8378 3.71316 15.7659 3.64582 15.6928 3.58164L16.1049 3.11176ZM13.7821 1.96973C13.8902 1.99121 13.9993 2.0166 14.1066 2.04535C14.2138 2.0741 14.3206 2.10652 14.4255 2.14215L14.2244 2.73387C14.1325 2.70262 14.0385 2.67414 13.9449 2.64906C13.8513 2.62398 13.755 2.60156 13.6603 2.58266L13.7821 1.96973ZM13.1454 1.88594L13.1045 2.50957C12.91 2.49691 12.7149 2.49691 12.5204 2.50957L12.4795 1.88594C12.7013 1.87137 12.9237 1.87137 13.1455 1.88594H13.1454ZM11.5182 2.04539C11.6256 2.01664 11.7347 1.99121 11.8428 1.96973L11.9648 2.58273C11.8701 2.60156 11.7743 2.62391 11.6802 2.64914C11.5861 2.67438 11.4921 2.70293 11.4007 2.73395L11.1996 2.14223C11.3038 2.10672 11.4111 2.07422 11.5183 2.04539H11.5182ZM8.48238 4.375C8.53777 4.27902 8.59703 4.18379 8.6584 4.09203L9.17793 4.43969C9.12418 4.52008 9.07246 4.60352 9.02371 4.68766C8.97496 4.7718 8.92883 4.8584 8.88602 4.94547L8.32535 4.66926C8.37418 4.56969 8.42703 4.47082 8.48238 4.375ZM7.98285 5.58098C8.01148 5.47418 8.04402 5.36691 8.07965 5.26207L8.67137 5.46316C8.64012 5.55504 8.61164 5.64902 8.58656 5.74266C8.56148 5.83629 8.53906 5.9325 8.52016 6.02727L7.90715 5.90543C7.92871 5.7973 7.95414 5.68816 7.98285 5.58094V5.58098ZM7.8125 6.875C7.8125 6.76441 7.81617 6.65234 7.82344 6.54203L8.44707 6.58297C8.44074 6.67969 8.4375 6.77805 8.4375 6.875C8.4375 6.97195 8.44074 7.07031 8.44707 7.16703L7.82344 7.20797C7.81617 7.09766 7.8125 6.98559 7.8125 6.875ZM7.98289 8.16918C7.95414 8.06184 7.92871 7.9527 7.90723 7.84461L8.52023 7.72277C8.53906 7.81754 8.56141 7.91328 8.58664 8.00738C8.61187 8.10148 8.64043 8.19551 8.67145 8.28687L8.07973 8.48797C8.04422 8.38371 8.01172 8.27645 7.98289 8.16918ZM8.6584 9.65801C8.59703 9.56625 8.53777 9.47101 8.48234 9.37496C8.42691 9.27891 8.37418 9.18031 8.32531 9.08109L8.88598 8.80488C8.92895 8.8918 8.97512 8.97848 9.02363 9.06246C9.07215 9.14645 9.12414 9.23012 9.17789 9.31051L8.6584 9.65801ZM9.52012 10.6382C9.43668 10.5651 9.35488 10.4885 9.27691 10.4105C9.19895 10.3325 9.12238 10.2508 9.04926 10.1674L9.51914 9.75531C9.58332 9.82844 9.65051 9.9002 9.71887 9.96852C9.78723 10.0368 9.85906 10.1042 9.93219 10.1684L9.52012 10.6382ZM9.71898 3.78125C9.65051 3.84969 9.58332 3.92145 9.51914 3.99457L9.04926 3.58262C9.12238 3.49918 9.19902 3.41738 9.27703 3.33941C9.35504 3.26145 9.43668 3.18488 9.52012 3.11176L9.93219 3.58164C9.85906 3.64582 9.7873 3.71301 9.71898 3.78125ZM10.0295 2.72078C10.1213 2.65941 10.2165 2.60016 10.3125 2.54473C10.4086 2.4893 10.5072 2.43656 10.6064 2.3877L10.8828 2.94848C10.7959 2.99145 10.7092 3.03762 10.6252 3.08613C10.5413 3.13465 10.4576 3.18664 10.3772 3.24039L10.0295 2.72078ZM14.6875 7.5C14.6871 7.77704 14.5949 8.04615 14.4253 8.26518C14.2556 8.48421 14.0182 8.6408 13.75 8.71043V9.375H13.125V8.75H12.5V9.375H11.875V8.75H10.625V8.125H11.25V5H10.625V4.375H11.875V3.75H12.5V4.375H13.125V3.75H13.75V4.41457C13.9699 4.47123 14.1703 4.58678 14.3294 4.7488C14.4886 4.91081 14.6006 5.11315 14.6533 5.33405C14.7061 5.55496 14.6976 5.78607 14.6288 6.00252C14.5601 6.21897 14.4336 6.41257 14.263 6.5625C14.3964 6.67956 14.5032 6.82374 14.5765 6.98541C14.6497 7.14709 14.6875 7.32252 14.6875 7.5ZM15.248 3.24039C15.1676 3.18664 15.0842 3.13492 15 3.08617C14.9159 3.03742 14.8293 2.99129 14.7422 2.94848L15.0184 2.38781C15.1177 2.43668 15.2165 2.48938 15.3124 2.54488C15.4082 2.60039 15.5038 2.65953 15.5954 2.7209L15.248 3.24039ZM16.348 10.4106C16.2701 10.4885 16.1883 10.5651 16.1049 10.6382L15.6928 10.1684C15.7659 10.1042 15.8377 10.037 15.906 9.96863C15.9743 9.90027 16.0417 9.82844 16.1059 9.75531L16.5757 10.1674C16.5026 10.2508 16.426 10.3326 16.348 10.4106ZM17.1426 9.375C17.0872 9.47098 17.028 9.56621 16.9666 9.65797L16.4471 9.31031C16.5008 9.22992 16.5525 9.14648 16.6013 9.06234C16.65 8.9782 16.6962 8.8916 16.739 8.80453L17.2996 9.08074C17.2508 9.18031 17.198 9.27918 17.1426 9.375ZM17.6421 8.16902C17.6135 8.27582 17.581 8.38309 17.5454 8.48793L16.9536 8.28684C16.9849 8.19496 17.0134 8.10098 17.0384 8.00734C17.0635 7.91371 17.0859 7.8175 17.1048 7.72273L17.7179 7.84457C17.6963 7.9527 17.6709 8.06184 17.6421 8.16906V8.16902ZM17.1779 7.16699C17.1843 7.07016 17.1875 6.97191 17.1875 6.87496C17.1875 6.77801 17.1843 6.67965 17.1779 6.58293L17.8016 6.54199C17.8088 6.65234 17.8125 6.76437 17.8125 6.87496C17.8125 6.98555 17.8088 7.09762 17.8016 7.20793L17.1779 7.16699Z"
                            fill="url(#paint6_linear_5932_3699)"
                          ></path>
                          <path
                            d="M3.125 6.875H3.75V7.5H3.125V6.875Z"
                            fill="url(#paint7_linear_5932_3699)"
                          ></path>
                          <path
                            d="M7.5 18.125H8.125V18.75H7.5V18.125Z"
                            fill="url(#paint8_linear_5932_3699)"
                          ></path>
                          <path
                            d="M9.375 17.3706V16.1578L8.75 16.2203V17.5C8.75 17.541 8.75808 17.5817 8.77378 17.6196C8.78949 17.6575 8.81251 17.692 8.84152 17.721L9.6875 18.5669V19.375H10.3125V18.4375C10.3125 18.3965 10.3044 18.3558 10.2887 18.3179C10.273 18.28 10.25 18.2455 10.221 18.2165L9.375 17.3706Z"
                            fill="url(#paint9_linear_5932_3699)"
                          ></path>
                          <path
                            d="M7.5 17.5H8.125V16.2203L7.5 16.1578V17.5Z"
                            fill="url(#paint10_linear_5932_3699)"
                          ></path>
                          <path
                            d="M6.69 8.125H5V8.75H6.85207L6.69 8.125Z"
                            fill="url(#paint11_linear_5932_3699)"
                          ></path>
                          <path
                            d="M4.375 7.5H6.59461L6.5625 6.875H4.375V7.5Z"
                            fill="url(#paint12_linear_5932_3699)"
                          ></path>
                          <path
                            d="M6.68816 5.625H5V6.25H6.59367L6.68816 5.625Z"
                            fill="url(#paint13_linear_5932_3699)"
                          ></path>
                          <path
                            d="M5.40402 4.90848C5.43304 4.93749 5.46749 4.96051 5.50541 4.97622C5.54332 4.99192 5.58396 5 5.625 5H6.84996L7.08492 4.375H5.75441L5.22098 3.84152C5.19196 3.81251 5.15751 3.78949 5.11959 3.77378C5.08168 3.75808 5.04104 3.75 5 3.75H3.75V4.375H4.87059L5.40402 4.90848Z"
                            fill="url(#paint14_linear_5932_3699)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_5932_3699"
                              x1="12.1667"
                              y1="5.20833"
                              x2="12.9295"
                              y2="6.54327"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_5932_3699"
                              x1="12.1667"
                              y1="7.08333"
                              x2="12.9295"
                              y2="8.41827"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_5932_3699"
                              x1="5.16667"
                              y1="15.5208"
                              x2="6.05208"
                              y2="16.4062"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_5932_3699"
                              x1="3.37728"
                              y1="11.9791"
                              x2="8.4099"
                              y2="20.5261"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_5932_3699"
                              x1="7.36112"
                              y1="12.1398"
                              x2="7.64853"
                              y2="13.1946"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint5_linear_5932_3699"
                              x1="10.7917"
                              y1="15.5208"
                              x2="11.6771"
                              y2="16.4062"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint6_linear_5932_3699"
                              x1="8.6875"
                              y1="3.03148"
                              x2="16.2489"
                              y2="10.9898"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint7_linear_5932_3699"
                              x1="3.20833"
                              y1="6.97917"
                              x2="3.65104"
                              y2="7.42187"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint8_linear_5932_3699"
                              x1="7.58333"
                              y1="18.2292"
                              x2="8.02604"
                              y2="18.6719"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint9_linear_5932_3699"
                              x1="8.95833"
                              y1="16.694"
                              x2="10.7494"
                              y2="17.5638"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint10_linear_5932_3699"
                              x1="7.58333"
                              y1="16.3815"
                              x2="8.31098"
                              y2="16.7203"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint11_linear_5932_3699"
                              x1="5.24694"
                              y1="8.22917"
                              x2="5.51519"
                              y2="9.02406"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint12_linear_5932_3699"
                              x1="4.67095"
                              y1="6.97917"
                              x2="4.90195"
                              y2="7.79954"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint13_linear_5932_3699"
                              x1="5.22509"
                              y1="5.72917"
                              x2="5.51338"
                              y2="6.50785"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint14_linear_5932_3699"
                              x1="4.19466"
                              y1="3.95833"
                              x2="4.77664"
                              y2="5.51103"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">คริปโต</p>
                    </a>
                  </div>
                  <div data-v-d320b445="" class="w-full gradient-border">
                    <a
                      href="https://lucabet88.electrikora.com/home/providerList"
                      class="rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                    >
                      <span class="nuxt-icon nuxt-icon--fill my-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.3609 12.7733C14.2223 11.8321 13.751 10.9717 13.0324 10.3482C12.3138 9.72469 11.3956 9.37941 10.4442 9.375H9.55753C8.60616 9.37941 7.68789 9.72469 6.96929 10.3482C6.2507 10.9717 5.77939 11.8321 5.64087 12.7733L5.21587 15.745C5.20229 15.8411 5.21126 15.939 5.24207 16.0309C5.27288 16.1229 5.32468 16.2065 5.39337 16.275C5.56003 16.4417 6.58253 17.2917 10.0017 17.2917C13.4209 17.2917 14.4409 16.445 14.61 16.275C14.6787 16.2065 14.7305 16.1229 14.7613 16.0309C14.7921 15.939 14.8011 15.8411 14.7875 15.745L14.3609 12.7733Z"
                            fill="url(#paint0_linear_6320_100237)"
                          ></path>
                          <path
                            d="M6.30004 9.83332C5.49465 10.5758 4.97062 11.5738 4.81671 12.6583L4.50837 14.7917C2.03337 14.775 1.28337 13.875 1.15837 13.6917C1.11006 13.625 1.07557 13.5494 1.05697 13.4693C1.03836 13.3891 1.03601 13.3061 1.05004 13.225L1.23337 12.1917C1.32889 11.6516 1.55322 11.1426 1.88735 10.7077C2.22148 10.2728 2.65554 9.92487 3.15275 9.69344C3.64995 9.46202 4.19563 9.35389 4.74351 9.37824C5.29139 9.40259 5.82533 9.55869 6.30004 9.83332Z"
                            fill="url(#paint1_linear_6320_100237)"
                          ></path>
                          <path
                            d="M18.95 13.225C18.964 13.3061 18.9616 13.3891 18.943 13.4693C18.9244 13.5494 18.8899 13.625 18.8416 13.6917C18.7166 13.875 17.9666 14.775 15.4916 14.7917L15.1833 12.6583C15.0294 11.5738 14.5053 10.5758 13.7 9.83332C14.1747 9.55869 14.7086 9.40259 15.2565 9.37824C15.8044 9.35389 16.35 9.46202 16.8472 9.69344C17.3444 9.92487 17.7785 10.2728 18.1126 10.7077C18.4468 11.1426 18.6711 11.6516 18.7666 12.1917L18.95 13.225Z"
                            fill="url(#paint2_linear_6320_100237)"
                          ></path>
                          <path
                            d="M6.44175 8C6.23198 8.2975 5.9535 8.53997 5.62998 8.70681C5.30645 8.87365 4.94743 8.95994 4.58342 8.95833C4.2203 8.95833 3.86237 8.87205 3.53915 8.70658C3.21592 8.54111 2.93664 8.30121 2.72432 8.00663C2.512 7.71205 2.37272 7.37124 2.31796 7.01227C2.2632 6.6533 2.29452 6.28646 2.40935 5.94198C2.52418 5.59749 2.71922 5.28523 2.97841 5.03091C3.2376 4.77659 3.55351 4.58751 3.90011 4.47924C4.24672 4.37097 4.61409 4.34661 4.97195 4.40818C5.32981 4.46974 5.66792 4.61546 5.95842 4.83333C5.87486 5.16008 5.83286 5.49607 5.83342 5.83333C5.83405 6.59762 6.04447 7.34707 6.44175 8Z"
                            fill="url(#paint3_linear_6320_100237)"
                          ></path>
                          <path
                            d="M17.7083 6.66667C17.7086 6.96768 17.6494 7.26577 17.5344 7.54391C17.4193 7.82205 17.2505 8.07477 17.0376 8.28761C16.8248 8.50045 16.5721 8.66925 16.2939 8.78434C16.0158 8.89943 15.7177 8.95855 15.4167 8.95833C15.0527 8.95994 14.6937 8.87365 14.3701 8.70681C14.0466 8.53997 13.7681 8.2975 13.5583 8C13.9556 7.34708 14.166 6.59762 14.1667 5.83333C14.1672 5.49607 14.1252 5.16009 14.0417 4.83333C14.3822 4.57798 14.787 4.42248 15.2109 4.38426C15.6347 4.34604 16.0609 4.42661 16.4415 4.61694C16.8222 4.80727 17.1423 5.09984 17.3661 5.46187C17.5898 5.8239 17.7083 6.24108 17.7083 6.66667Z"
                            fill="url(#paint4_linear_6320_100237)"
                          ></path>
                          <path
                            d="M10 8.95831C11.7259 8.95831 13.125 7.5592 13.125 5.83331C13.125 4.10742 11.7259 2.70831 10 2.70831C8.27411 2.70831 6.875 4.10742 6.875 5.83331C6.875 7.5592 8.27411 8.95831 10 8.95831Z"
                            fill="url(#paint5_linear_6320_100237)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_6320_100237"
                              x1="6.48758"
                              y1="10.6944"
                              x2="11.9943"
                              y2="17.361"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_6320_100237"
                              x1="1.74222"
                              y1="10.2777"
                              x2="5.57742"
                              y2="14.0012"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_6320_100237"
                              x1="14.4012"
                              y1="10.2777"
                              x2="18.2364"
                              y2="14.0012"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_6320_100237"
                              x1="2.84508"
                              y1="5.13889"
                              x2="6.07568"
                              y2="8.06404"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_6320_100237"
                              x1="14.1117"
                              y1="5.13889"
                              x2="17.3423"
                              y2="8.06404"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint5_linear_6320_100237"
                              x1="7.70833"
                              y1="3.74998"
                              x2="12.1354"
                              y2="8.17706"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="var(--main-icon-1)"></stop>
                              <stop
                                offset="0.5"
                                stop-color="var(--main-icon-2)"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="var(--main-icon-3)"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-sm text-center">ค่ายเกม</p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-full auto-rows-max gap-2 grid grid-cols-2 @xs:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 lg:grid-cols-6">
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/24467008-3317-40c8-b312-fe46ead2eabf.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/b9df3389-fe77-4839-8649-a9ebfd282e4f.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/007fcaf7-8df8-41d8-9e3e-f1a5e347ad92.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/e0c71fcc-31e3-4ce7-acd6-b5a5f1df29c7.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/dfbe5711-b196-479d-a14e-9ed9917b6194.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/3329193c-f121-4493-84c7-93253598c1f9.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/f0dc30fb-2695-49c7-a1c4-4b9ae05906ab.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/15293da2-5cb1-42f9-b479-cc8550b590a0.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/f53a0c4f-6cd6-4c0b-9a8a-cc7703e583d7.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/99a31823-8b98-412b-9728-596cc08a5ef5.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/29f6edb5-6191-409d-816c-c419135ba217.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3"></div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/bde29619-6eb3-4f55-9c94-429a3a6399f2.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3"></div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/fba5a1f4-b730-4de9-aacd-c370065da6ec.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                    <div class="hits text-white p-1">ฮิต</div>
                    <div class="new text-white p-1">ใหม่</div>
                  </div>
                </div>
                <div class="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]">
                  <img
                    src="home_files/47a0090a-7d62-46d6-ad19-242cadf76b43.webp"
                    alt="img-cover"
                    loading="lazy"
                    data-nuxt-img=""
                    class="w-full providerCard min-h-14 relative rounded-base"
                  />
                  <div class="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <unavaliablemodal></unavaliablemodal>
      </div>
    </main>
  );
}

export default Main;
