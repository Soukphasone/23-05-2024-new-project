import React, { useState } from "react";
import Header from "../components/Header";
// import { useNavigate } from "react-router-dom";
import Letter_slide from "../components/Letter_slide";
import GetPromotion from "../components/Modal/GetPromotion";
import { createPortal } from "react-dom";
function Promotion() {
  const [openModal, setOpenModal] = useState(false);
  const handleButtonClick1 = () => {
    setOpenModal(false);
  };
  // const navigate = useNavigate();
  const NextoHome = () => {
    // navigate("/");
  };
  const NextoBank = () => {
    // navigate("/bank");
  };
  const NextoPromotion = () => {
    // window.location = "/promotion";
  };
  const NextoBag = () => {
    // navigate("/bag");
  };

  return (
    <body class="overflow-x-hidden overflow-y-auto text-primary" style={{}}>
      <div id="__nuxt" data-v-app="">
        <div data-v-3c88d514="">
          <Header />
          <main
            data-v-3c88d514=""
            class="min-h-screen overflow-scroll pb-[80px]"
          >
            <div data-v-3c88d514="" class="w-full mx-auto base-container pb-2">
              <Letter_slide />
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
              <div
                data-v-ac0eeeb0=""
                class="promotion-wrapper animate__animated animate__slideInLeft animate__fast base-container-small space-y-2 flex flex-col justify-center"
              >
                <div data-v-ac0eeeb0="" class="">
                  <div class="hidden md:block">
                    <div
                      class="splide splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized"
                      id="splide39"
                      role="region"
                      aria-roledescription="carousel"
                    >
                      <div
                        class="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
                        id="splide39-track"
                        style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        <ul
                          class="splide__list"
                          id="splide39-list"
                          role="presentation"
                          style={{ transform: `translateX(-1286px)` }}
                        >
                          <li
                            class="splide__slide splide__slide--clone"
                            id="splide39-clone01"
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
                                <img
                                  src="/assets/promotion_files/PC_Huaydragon.b79f7f78.png"
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
                            id="splide39-clone02"
                            role="group"
                            aria-roledescription="slide"
                            aria-label="24 of 24"
                            style={{
                              marginRight: "3px",
                              width: "calc(100% + 0px)",
                            }}
                            aria-hidden="true"
                          >
                            <div class="">
                              <div class="h-[63px] w-full md:h-[167px] relative cursor-pointer">
                                <img
                                  src="/assets/promotion_files/mb1.a020cd91.png"
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
                            id="splide39-slide01"
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-381a5afc=""
                  data-v-ac0eeeb0=""
                  id="advanceTabPromotionType"
                  class="w-full mb-4"
                >
                  <div data-v-381a5afc="" class="tabsWrapper w-full">
                    <div
                      data-v-381a5afc=""
                      class="tabs relative flex items-center justify-center space-x-1 tab-secondary w-full"
                    >
                      <div
                        data-v-381a5afc=""
                        id="advanceTabPromotionType"
                        class="tabslinks relative h-[40px] cursor-pointer flex items-center justify-center promotions w-full active"
                      >
                        <span
                          data-v-381a5afc=""
                          class="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                        >
                          โปรโมชั่น
                        </span>
                      </div>
                      {/* <div
                        data-v-381a5afc=""
                        id="advanceTabPromotionType"
                        class="tabslinks relative h-[40px] cursor-pointer flex items-center justify-center specialPromotions w-full"
                      >
                        <span
                          data-v-381a5afc=""
                          class="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                        >
                          โปรโมชั่นพิเศษ
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div
                  data-v-ac0eeeb0=""
                  class="animate__animated animate__fadeIn animate__fast"
                >
                  <div
                    data-v-ac0eeeb0=""
                    class="promotion-change-wrapper w-full relative light-theme-box-shadow"
                  >
                    {/* <div
                      data-v-8f507023=""
                      id="PromotionStatusBank"
                      class="promotion-status-wrapper w-full relative"
                    >
                      <div
                        data-v-8f507023=""
                        class="bg-card-primary card-wrapper"
                      >
                        <div
                          data-v-8f507023=""
                          class="flex justify-between items-center"
                        >
                          <div
                            data-v-8f507023=""
                            class="flex justify-center items-center"
                          >
                            <span
                              data-v-8f507023=""
                              class="nuxt-icon nuxt-icon--fill text-2xl text-active icon-satus"
                            >
                              <svg
                                width="22"
                                height="18"
                                viewBox="0 0 22 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21.0022 16.105L18.0781 13.6423C18.0842 13.5938 18.1039 13.5488 18.1039 13.4996C18.1055 13.2341 18.0197 12.9627 17.826 12.7363C17.2026 12.0065 16.0361 10.9086 16.0361 7.3121C16.0361 4.58048 14.2781 2.39377 11.9077 1.85729V1.12499C11.9077 0.503786 11.4456 0 10.8757 0C10.3059 0 9.84377 0.503786 9.84377 1.12499V1.85764C8.54238 2.15225 7.4346 2.94994 6.69468 4.05736L2.01703 0.118476C1.79179 -0.0720698 1.46717 -0.0281248 1.29228 0.217264L0.658521 1.10566C0.483625 1.35069 0.523961 1.70401 0.749196 1.89491L19.7344 17.8814C19.9596 18.0723 20.2839 18.028 20.4592 17.7826L21.0929 16.8942C21.2678 16.6492 21.2275 16.2959 21.0022 16.105ZM5.62336 8.84314C5.34553 11.2323 4.44847 12.1243 3.92539 12.7367C3.73178 12.9634 3.64595 13.2345 3.64756 13.4999C3.65111 14.0765 4.06641 14.6249 4.68338 14.6249H12.4898L5.62336 8.84314ZM10.8757 17.9999C12.0154 17.9999 12.9399 16.9927 12.9399 15.7499H8.8115C8.8115 16.9927 9.73599 17.9999 10.8757 17.9999Z"
                                  fill="#FFD15C"
                                ></path>
                              </svg>
                            </span>
                            <div
                              data-v-8f507023=""
                              class="text-active font-semibold &lt;sm:text-sm &lt;sm:ml-2 sm:text-sm sm:ml-2 md:text-lg md:ml-4"
                            >
                              ปิดรับโปรโมชั่น
                            </div>
                          </div>
                          <div
                            data-v-8f507023=""
                            class="text-active cursor-pointer font-semibold &lt;sm:text-sm sm:text-sm md:text-lg"
                          >
                            เปลี่ยน
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-8f507023=""
                        class="PromotionStatusList hidden absolute top-full left-0 v-rounded bg-card-primary card-wrapper"
                      >
                        <div
                          data-v-8f507023=""
                          class="flex justify-between items-center cursor-pointer py-4"
                        >
                          <div
                            data-v-8f507023=""
                            class="flex justify-center items-center"
                          >
                            <span
                              data-v-8f507023=""
                              class="nuxt-icon nuxt-icon--fill text-2xl text-primary icon-satus text-active"
                            >
                              <svg
                                width="22"
                                height="18"
                                viewBox="0 0 22 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21.0022 16.105L18.0781 13.6423C18.0842 13.5938 18.1039 13.5488 18.1039 13.4996C18.1055 13.2341 18.0197 12.9627 17.826 12.7363C17.2026 12.0065 16.0361 10.9086 16.0361 7.3121C16.0361 4.58048 14.2781 2.39377 11.9077 1.85729V1.12499C11.9077 0.503786 11.4456 0 10.8757 0C10.3059 0 9.84377 0.503786 9.84377 1.12499V1.85764C8.54238 2.15225 7.4346 2.94994 6.69468 4.05736L2.01703 0.118476C1.79179 -0.0720698 1.46717 -0.0281248 1.29228 0.217264L0.658521 1.10566C0.483625 1.35069 0.523961 1.70401 0.749196 1.89491L19.7344 17.8814C19.9596 18.0723 20.2839 18.028 20.4592 17.7826L21.0929 16.8942C21.2678 16.6492 21.2275 16.2959 21.0022 16.105ZM5.62336 8.84314C5.34553 11.2323 4.44847 12.1243 3.92539 12.7367C3.73178 12.9634 3.64595 13.2345 3.64756 13.4999C3.65111 14.0765 4.06641 14.6249 4.68338 14.6249H12.4898L5.62336 8.84314ZM10.8757 17.9999C12.0154 17.9999 12.9399 16.9927 12.9399 15.7499H8.8115C8.8115 16.9927 9.73599 17.9999 10.8757 17.9999Z"
                                  fill="#FFD15C"
                                ></path>
                              </svg>
                            </span>
                            <div
                              data-v-8f507023=""
                              class="text-primary font-semibold &lt;sm:text-sm &lt;sm:ml-2 sm:text-sm sm:ml-2 md:text-lg md:ml-4 text-active"
                            >
                              ปิดรับโปรโมชั่น
                            </div>
                          </div>
                          <div
                            data-v-8f507023=""
                            class="font-semibold &lt;sm:text-sm sm:text-sm md:text-lg"
                          >
                            <span
                              data-v-8f507023=""
                              class="nuxt-icon nuxt-icon--fill text-2xl text-active icon-checkpro"
                            >
                              <svg
                                width="512"
                                height="370"
                                viewBox="0 0 512 370"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M500.089 12.681C484.248 -3.18104 458.524 -3.17104 442.662 12.681L184.206 271.148L69.3325 156.276C53.4705 140.414 27.7585 140.414 11.8965 156.276C-3.9655 172.138 -3.9655 197.85 11.8965 213.712L155.482 357.297C163.408 365.223 173.801 369.196 184.195 369.196C194.589 369.196 204.992 365.233 212.918 357.297L500.089 70.116C515.951 54.265 515.951 28.542 500.089 12.681Z"
                                  fill="black"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-8f507023=""
                          class="flex justify-between items-center cursor-pointer py-4"
                        >
                          <div
                            data-v-8f507023=""
                            class="flex justify-center items-center"
                          >
                            <span
                              data-v-8f507023=""
                              class="nuxt-icon nuxt-icon--fill text-2xl text-primary icon-satus"
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_7214_60153)">
                                  <path
                                    d="M21.379 16.913C19.867 15.635 19 13.767 19 11.788V9C19 5.481 16.386 2.568 13 2.08V1C13 0.447 12.552 0 12 0C11.448 0 11 0.447 11 1V2.08C7.613 2.568 5 5.481 5 9V11.788C5 13.767 4.133 15.635 2.612 16.921C2.223 17.254 2 17.738 2 18.25C2 19.215 2.785 20 3.75 20H20.25C21.215 20 22 19.215 22 18.25C22 17.738 21.777 17.254 21.379 16.913Z"
                                    fill="#8E8E8E"
                                  ></path>
                                  <path
                                    d="M12.0002 24C13.8112 24 15.3262 22.709 15.6742 21H8.32617C8.67417 22.709 10.1892 24 12.0002 24Z"
                                    fill="#8E8E8E"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_7214_60153">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <div
                              data-v-8f507023=""
                              class="text-primary font-semibold &lt;sm:text-sm &lt;sm:ml-2 sm:text-sm sm:ml-2 md:text-lg md:ml-4"
                            >
                              รับโปรโมชั่นด้วยตนเอง
                            </div>
                          </div>
                          <div
                            data-v-8f507023=""
                            class="font-semibold &lt;sm:text-sm sm:text-sm md:text-lg"
                          ></div>
                        </div>
                        <div
                          data-v-8f507023=""
                          class="flex justify-between items-center cursor-pointer py-4"
                        >
                          <div
                            data-v-8f507023=""
                            class="flex justify-center items-center"
                          >
                            <span
                              data-v-8f507023=""
                              class="nuxt-icon nuxt-icon--fill text-2xl text-primary icon-satus"
                            >
                              <svg
                                width="21"
                                height="15"
                                viewBox="0 0 21 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.5234 6.20508H16.5227C16.1582 6.20508 15.8623 6.54379 15.8623 6.96356V8.74488C15.8623 9.16518 16.1587 9.50336 16.5227 9.50336C16.8921 9.50336 17.1844 9.15973 17.1844 8.74413V6.96431C17.1844 6.54353 16.8875 6.20508 16.5234 6.20508Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M18.3832 0.78125H2.26627C1.25211 0.78125 0.447754 1.72655 0.447754 2.86979V12.837C0.447754 14.0036 1.27256 14.9255 2.26627 14.9255H18.3832C19.3973 14.9255 20.2017 13.9802 20.2017 12.837V2.86979C20.2017 1.70311 19.3769 0.78125 18.3832 0.78125ZM5.9444 9.98919C5.9444 10.3563 5.68528 10.6539 5.36567 10.6539C5.04606 10.6539 4.78694 10.3563 4.78694 9.98919V9.22995H3.46486V9.98919C3.46486 10.3563 3.20574 10.6539 2.88613 10.6539C2.56652 10.6539 2.3074 10.3563 2.3074 9.98919V6.96271C2.3074 5.80764 3.12148 4.87488 4.12526 4.87488C5.12859 4.87488 5.94436 5.81185 5.94436 6.96346V9.98919H5.9444ZM10.2836 8.74328C10.2836 9.89489 9.46778 10.8319 8.46507 10.8319C7.45889 10.8319 6.64659 9.89733 6.64659 8.74403V5.71755C6.64659 5.35048 6.90571 5.05288 7.22532 5.05288C7.54493 5.05288 7.80405 5.35048 7.80405 5.71755V8.74403C7.80405 9.16437 8.10043 9.50251 8.46445 9.50251C8.82955 9.50251 9.12609 9.16189 9.12609 8.74328V5.71755C9.12609 5.35048 9.38521 5.05288 9.70482 5.05288C10.0244 5.05288 10.2836 5.35048 10.2836 5.71755V8.74328H10.2836ZM13.734 6.38223H13.073V9.98919C13.073 10.3563 12.8139 10.6539 12.4943 10.6539C12.1747 10.6539 11.9156 10.3563 11.9156 9.98919V6.38223H11.2545C10.9349 6.38223 10.6758 6.08463 10.6758 5.71755C10.6758 5.35048 10.9349 5.05288 11.2545 5.05288H13.7341C14.0537 5.05288 14.3128 5.35048 14.3128 5.71755C14.3128 6.08463 14.0537 6.38223 13.734 6.38223ZM18.342 8.74328C18.342 9.9081 17.519 10.8319 16.5236 10.8319C15.5174 10.8319 14.705 9.89733 14.705 8.74403V6.96271C14.705 5.80764 15.5192 4.87488 16.5229 4.87488H16.5236C17.5336 4.87488 18.342 5.81486 18.342 6.96346V8.74328Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M4.12587 6.20508C3.75934 6.20508 3.46484 6.54512 3.46484 6.96356V7.90146H4.78693V6.96431C4.78693 6.5457 4.49035 6.20508 4.12587 6.20508Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </span>
                            <div
                              data-v-8f507023=""
                              class="text-primary font-semibold &lt;sm:text-sm &lt;sm:ml-2 sm:text-sm sm:ml-2 md:text-lg md:ml-4"
                            >
                              รับโปรโมชั่นอัติโนมัติเฉพาะกลุ่ม
                            </div>
                          </div>
                          <div
                            data-v-8f507023=""
                            class="font-semibold &lt;sm:text-sm sm:text-sm md:text-lg"
                          ></div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div
                    onClick={() => setOpenModal(true)}
                    data-v-d9762dab=""
                    data-v-ac0eeeb0=""
                    class="flex flex-col rounded-base p-2"
                  >
                    <div
                      data-v-d9762dab=""
                      id=""
                      class="promotion-card-wrapper w-full bg-card-primary rounded-base overflow-hidden flex flex-row justify-between items-center pr-4"
                    >
                      <img
                        data-v-d9762dab=""
                        style={{ aspectRatio: "1 / 1" }}
                        src="./assets/promotion_files/1710741929243.png"
                        class="h-[6.25rem] object-cover w-[100px]"
                      />
                      <div
                        data-v-d9762dab=""
                        class="w-full flex h-[6.25rem] flex-col pt-2 pl-2 overflow-hidden"
                      >
                        <span data-v-d9762dab="" class="text-sm text-primary">
                          สมาชิกใหม่รับ50%
                        </span>
                        <div
                          data-v-d9762dab=""
                          class="text h-[48px] text-xs text-secondary"
                        >
                          <span data-v-d9762dab="">สมาชิกใหม่รับ50%</span>
                        </div>
                      </div>
                      <div
                        data-v-d9762dab=""
                        class="icon-arrow-card flex justify-center items-center p-2 cursor-pointer"
                      >
                        <span
                          data-v-d9762dab=""
                          class="nuxt-icon nuxt-icon--fill text-2xl text-active icon-arrow rounded-full"
                        >
                          <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.594919 11.9047L0.0896837 11.3682C-0.0298946 11.2413 -0.0298947 11.0354 0.0896836 10.9084L4.7008 6L0.0896828 1.09165C-0.0298955 0.964666 -0.0298956 0.758771 0.0896827 0.63176L0.594918 0.0952376C0.714496 -0.0317461 0.908383 -0.0317461 1.02799 0.0952375L6.37186 5.77004C6.49143 5.89703 6.49143 6.10292 6.37186 6.22993L1.02799 11.9047C0.908384 12.0318 0.714497 12.0318 0.594919 11.9047Z"
                              fill="var(--primary)"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-d9762dab=""
                    data-v-ac0eeeb0=""
                    class="flex flex-col rounded-base p-2"
                  >
                    <div
                      data-v-d9762dab=""
                      id=""
                      class="promotion-card-wrapper w-full bg-card-primary rounded-base overflow-hidden flex flex-row justify-between items-center pr-4"
                    >
                      <img
                        data-v-d9762dab=""
                        style={{ aspectRatio: "1 / 1" }}
                        src="./assets/promotion_files/1710741946700.png"
                        class="h-[6.25rem] object-cover w-[100px]"
                      />
                      <div
                        data-v-d9762dab=""
                        class="w-full flex h-[6.25rem] flex-col pt-2 pl-2 overflow-hidden"
                      >
                        <span data-v-d9762dab="" class="text-sm text-primary">
                          ยอดฝากมหาสนุก
                        </span>
                        <div
                          data-v-d9762dab=""
                          class="text h-[48px] text-xs text-secondary"
                        >
                          <span data-v-d9762dab="">ยอดฝากมหาสนุก</span>
                        </div>
                      </div>
                      <div
                        data-v-d9762dab=""
                        class="icon-arrow-card flex justify-center items-center p-2 cursor-pointer"
                      >
                        <span
                          data-v-d9762dab=""
                          class="nuxt-icon nuxt-icon--fill text-2xl text-active icon-arrow rounded-full"
                        >
                          <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.594919 11.9047L0.0896837 11.3682C-0.0298946 11.2413 -0.0298947 11.0354 0.0896836 10.9084L4.7008 6L0.0896828 1.09165C-0.0298955 0.964666 -0.0298956 0.758771 0.0896827 0.63176L0.594918 0.0952376C0.714496 -0.0317461 0.908383 -0.0317461 1.02799 0.0952375L6.37186 5.77004C6.49143 5.89703 6.49143 6.10292 6.37186 6.22993L1.02799 11.9047C0.908384 12.0318 0.714497 12.0318 0.594919 11.9047Z"
                              fill="var(--primary)"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-d9762dab=""
                    data-v-ac0eeeb0=""
                    class="flex flex-col rounded-base p-2"
                  >
                    <div
                      data-v-d9762dab=""
                      id=""
                      class="promotion-card-wrapper w-full bg-card-primary rounded-base overflow-hidden flex flex-row justify-between items-center pr-4"
                    >
                      <img
                        data-v-d9762dab=""
                        style={{ aspectRatio: "1 / 1" }}
                        src="./assets/promotion_files/1711474932072.jpg"
                        class="h-[6.25rem] object-cover w-[100px]"
                      />
                      <div
                        data-v-d9762dab=""
                        class="w-full flex h-[6.25rem] flex-col pt-2 pl-2 overflow-hidden"
                      >
                        <span data-v-d9762dab="" class="text-sm text-primary">
                          โปรคอสล็อตสำหรับนักปั่น
                        </span>
                        <div
                          data-v-d9762dab=""
                          class="text h-[48px] text-xs text-secondary"
                        >
                          <span data-v-d9762dab="">
                            โปรคอสล็อตสำหรับนักปั่น
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-d9762dab=""
                        class="icon-arrow-card flex justify-center items-center p-2 cursor-pointer"
                      >
                        <span
                          data-v-d9762dab=""
                          class="nuxt-icon nuxt-icon--fill text-2xl text-active icon-arrow rounded-full"
                        >
                          <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.594919 11.9047L0.0896837 11.3682C-0.0298946 11.2413 -0.0298947 11.0354 0.0896836 10.9084L4.7008 6L0.0896828 1.09165C-0.0298955 0.964666 -0.0298956 0.758771 0.0896827 0.63176L0.594918 0.0952376C0.714496 -0.0317461 0.908383 -0.0317461 1.02799 0.0952375L6.37186 5.77004C6.49143 5.89703 6.49143 6.10292 6.37186 6.22993L1.02799 11.9047C0.908384 12.0318 0.714497 12.0318 0.594919 11.9047Z"
                              fill="var(--primary)"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer data-v-3c88d514="" class="fixed bottom-[-2px] w-full z-10">
            <footer
              data-v-3c88d514=""
              class="mx-auto bg-[transparent] fixed bottom-[-2px] footer h-[80px] w-full flex"
            >
              <div class="bg-wrapper w-full flex">
                <div class="w-full bg-gradient-wrapper"></div>
                <svg
                  width="112"
                  height="80"
                  viewBox="0 0 112 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6129_102583)">
                    <path
                      d="M0 0C8.06271 0 15.5318 3.23866 19.6663 10.1606L21.366 13.0061C37.3247 39.7235 76.4234 38.6903 91.287 11.3484C95.408 3.76785 103.372 0 112 0V79H57.5H0V0Z"
                      fill="var(--footer)"
                    ></path>
                    <path
                      d="M0 0C8.06271 0 15.5318 4.23866 19.6663 11.1606L21.366 14.0061C37.3247 40.7235 76.4234 39.6903 91.287 12.3484C95.408 4.76785 103.372 0 112 0V80H57.5H0V0Z"
                      fill="url(#paint0_linear_6129_102583)"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_6129_102583"
                      x1="56"
                      y1="0"
                      x2="56"
                      y2="80"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="var(--footer)"></stop>
                      <stop
                        offset="1"
                        stop-color="var(--balance-wrapper2)"
                      ></stop>
                    </linearGradient>
                    <clipPath id="clip0_6129_102583">
                      <rect width="112" height="80" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div class="w-full bg-gradient-wrapper"></div>
              </div>
              <div class="navigate-wrapper">
                <div></div>
                <div class="navigate-container md:max-w-[630px] base-container-small">
                  <a onClick={NextoHome} class="item md:w-full">
                    <div>
                      <span class="nuxt-icon text-[23px]">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M93.2812 34.5937L55.7812 5.12495C54.1182 3.86272 52.0878 3.17944 50 3.17944C47.9122 3.17944 45.8818 3.86272 44.2187 5.12495L6.71875 34.5937C5.59553 35.4662 4.68747 36.5848 4.06444 37.8634C3.44141 39.142 3.12001 40.5464 3.125 41.9687V87.5C3.13225 89.9841 4.1223 92.3645 5.87888 94.1211C7.63547 95.8776 10.0158 96.8677 12.5 96.875H31.25C33.7342 96.8677 36.1145 95.8776 37.8711 94.1211C39.6277 92.3645 40.6177 89.9841 40.625 87.5V71.875C40.6274 71.0469 40.9574 70.2534 41.5429 69.6679C42.1285 69.0824 42.9219 68.7523 43.75 68.75H56.25C57.0781 68.7523 57.8715 69.0824 58.4571 69.6679C59.0426 70.2534 59.3726 71.0469 59.375 71.875V87.5C59.3823 89.9841 60.3723 92.3645 62.1289 94.1211C63.8855 95.8776 66.2658 96.8677 68.75 96.875H87.5C89.9842 96.8677 92.3645 95.8776 94.1211 94.1211C95.8777 92.3645 96.8677 89.9841 96.875 87.5V41.9687C96.88 40.5464 96.5586 39.142 95.9356 37.8634C95.3125 36.5848 94.4045 35.4662 93.2812 34.5937ZM90.625 87.5C90.6226 88.328 90.2926 89.1215 89.7071 89.707C89.1215 90.2925 88.3281 90.6226 87.5 90.625H68.75C67.9219 90.6226 67.1285 90.2925 66.5429 89.707C65.9574 89.1215 65.6274 88.328 65.625 87.5V71.875C65.6177 69.3908 64.6277 67.0104 62.8711 65.2538C61.1145 63.4973 58.7342 62.5072 56.25 62.5H43.75C41.2658 62.5072 38.8855 63.4973 37.1289 65.2538C35.3723 67.0104 34.3822 69.3908 34.375 71.875V87.5C34.3726 88.328 34.0426 89.1215 33.4571 89.707C32.8715 90.2925 32.0781 90.6226 31.25 90.625H12.5C11.6719 90.6226 10.8785 90.2925 10.2929 89.707C9.7074 89.1215 9.37739 88.328 9.375 87.5V41.9687C9.37361 41.4942 9.47974 41.0256 9.68541 40.598C9.89108 40.1705 10.1909 39.795 10.5625 39.5L48.0625 10.0312C48.6187 9.60546 49.2996 9.37476 50 9.37476C50.7004 9.37476 51.3813 9.60546 51.9375 10.0312L89.4375 39.5C89.8091 39.795 90.1089 40.1705 90.3146 40.598C90.5203 41.0256 90.6264 41.4942 90.625 41.9687V87.5Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span class="text-[12px]">หน้าหลัก</span>
                    </div>
                  </a>
                  <div class="item active">
                    <a
                      class="router-link-active router-link-exact-active"
                      aria-current="page"
                    >
                      <div onClick={NextoPromotion}>
                        <span class="nuxt-icon text-[23px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_6112_3315)">
                              <path
                                d="M23.1533 13.7455L22.2766 12.3982C22.119 12.1564 22.119 11.8438 22.2766 11.6016L23.1537 10.2537C23.9522 9.0243 23.4119 7.37755 22.0492 6.85677L20.5483 6.28176C20.2786 6.17845 20.0945 5.92532 20.0796 5.63714L19.997 4.03205C19.9222 2.57261 18.5216 1.55308 17.1065 1.93174L15.5547 2.34916C15.2768 2.42387 14.9779 2.32773 14.7969 2.10311L13.7861 0.852962C12.8663 -0.285391 11.1304 -0.283516 10.2133 0.853759L9.20259 2.1032C9.02155 2.32788 8.7232 2.42448 8.44528 2.34925L6.89344 1.93211C5.48223 1.552 4.0774 2.57083 4.00244 4.03215L3.91985 5.63751C3.90509 5.92565 3.72148 6.17859 3.45171 6.28185L1.95088 6.8564C0.586495 7.37886 0.0478576 9.02637 0.84679 10.2548L1.72288 11.6011C1.88047 11.8434 1.88047 12.1565 1.72339 12.3982L0.84679 13.7456C0.0482326 14.9713 0.585651 16.6218 1.95088 17.1435L3.45171 17.7182C3.72148 17.8217 3.90509 18.0746 3.91985 18.3628L4.00244 19.9682C4.07726 21.4274 5.47909 22.4475 6.89344 22.0682L8.44528 21.6506C8.72273 21.5761 9.02052 21.672 9.2031 21.8974L10.2133 23.1469C11.1314 24.2829 12.8645 24.2858 13.7867 23.1474L14.7969 21.8974C14.979 21.672 15.2763 21.5766 15.5543 21.6506L17.1076 22.0687C18.5162 22.4463 19.9221 21.4315 19.997 19.9681L20.0796 18.3633C20.0944 18.0747 20.2785 17.8217 20.5483 17.7182L22.0492 17.1439C23.4131 16.6217 23.9523 14.974 23.1533 13.7455ZM8.83181 7.77889C9.69571 7.77889 10.3984 8.48164 10.3984 9.34549C10.3984 10.2094 9.69566 10.9121 8.83181 10.9121C7.96791 10.9121 7.26521 10.2093 7.26521 9.34549C7.26521 8.48164 7.96795 7.77889 8.83181 7.77889ZM14.5761 16.6564C13.7122 16.6564 13.0095 15.9537 13.0095 15.0898C13.0095 14.2259 13.7122 13.5232 14.5761 13.5232C15.44 13.5232 16.1427 14.2259 16.1427 15.0898C16.1427 15.9537 15.44 16.6564 14.5761 16.6564ZM15.9133 9.11604L8.60236 16.4269C8.29636 16.7329 7.8007 16.7329 7.49471 16.4269C7.18875 16.121 7.18875 15.6252 7.49471 15.3193L14.8056 8.00839C15.1115 7.70244 15.6073 7.70244 15.9132 8.00839C16.2192 8.31434 16.2192 8.81004 15.9133 9.11604Z"
                                fill="url(#paint0_linear_6112_3315)"
                              ></path>
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_6112_3315"
                                x1="3.54754"
                                y1="4.00001"
                                x2="20.5338"
                                y2="20.3154"
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
                              <clipPath id="clip0_6112_3315">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span class="text-[var(--primary)] gradientText text-[12px]">
                          โปรโมชั่น
                        </span>
                      </div>
                    </a>
                  </div>
                  <a onClick={NextoBank} class="w-[calc(100%/5)] md:w-[unset]">
                    <div class="item">
                      <div class="main-icon">
                        <span class="nuxt-icon animate__animated animate__tada animate__delay-2s animate__infinite text-[var(--main-icon-color)] transfer-Icon">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.9323 13.0051C19.9307 14.3769 19.522 15.7174 18.758 16.8568C17.9939 17.9962 16.9089 18.8832 15.6403 19.4054C14.3717 19.9276 12.9767 20.0616 11.6319 19.7904C10.2872 19.5191 9.05314 18.8549 8.08619 17.8817C7.11924 16.9086 6.46286 15.6704 6.2002 14.3239C5.93754 12.9774 6.08042 11.5833 6.61073 10.318C7.14104 9.05284 8.03493 7.97348 9.17916 7.2167C10.3234 6.45992 11.6665 6.05977 13.0383 6.06693C16.8434 6.07416 19.9331 9.18044 19.9323 13.0051ZM12.5674 9.13053C12.5294 9.14994 12.4903 9.16709 12.4502 9.18189C11.3123 9.49006 10.7336 10.5658 10.8551 11.4881C11.0085 12.652 11.8577 13.3914 13.0485 13.4326C13.3757 13.4542 13.6827 13.5985 13.9082 13.8366C14.1336 14.0747 14.261 14.3891 14.2647 14.717C14.2685 15.0449 14.1483 15.3622 13.9284 15.6054C13.7084 15.8486 13.4048 15.9998 13.0781 16.0289C12.333 16.0506 11.7536 15.5456 11.7037 14.8309C11.6783 14.4692 11.5054 14.2884 11.219 14.3209C10.9455 14.3528 10.8023 14.5683 10.8435 14.9033C10.952 15.7713 11.394 16.392 12.205 16.7371C12.3193 16.7855 12.4386 16.8217 12.5667 16.8673C12.5667 17.1444 12.5667 17.4149 12.5667 17.6847C12.571 18.0095 12.7302 18.1955 13.0007 18.1955C13.2713 18.1955 13.4282 18.011 13.4348 17.684C13.4398 17.4142 13.4348 17.1436 13.4348 16.8651C13.5295 16.834 13.6134 16.8073 13.6974 16.7783C14.1793 16.6135 14.5873 16.2833 14.849 15.8463C15.1107 15.4093 15.2091 14.8938 15.1268 14.3911C14.9553 13.3299 14.1046 12.6086 12.9689 12.5631C12.2332 12.5327 11.7015 11.9843 11.7044 11.2537C11.7242 10.9262 11.8669 10.6182 12.104 10.3914C12.341 10.1646 12.655 10.0356 12.9831 10.0303C13.3112 10.025 13.6291 10.1437 13.8734 10.3628C14.1177 10.5818 14.2703 10.885 14.3007 11.2118C14.3195 11.5489 14.4909 11.7246 14.7767 11.6993C15.0429 11.6762 15.1839 11.4751 15.163 11.1517C15.1356 10.712 14.9758 10.2908 14.7047 9.94349C14.4336 9.5962 14.0638 9.33903 13.6438 9.20576C13.5773 9.18406 13.5107 9.16019 13.4333 9.13342C13.4333 8.84406 13.4384 8.56772 13.4333 8.28849C13.4261 7.9796 13.2677 7.80237 13.0072 7.79802C12.7468 7.79368 12.5732 7.97815 12.5688 8.3044C12.5645 8.5793 12.5674 8.85781 12.5674 9.13053Z"
                              fill="#171719"
                            ></path>
                            <path
                              d="M2.52416 5.29918C2.03369 4.81089 1.56348 4.33923 1.08531 3.87047C0.917484 3.70625 0.80825 3.53336 0.905186 3.29681C1.00212 3.06026 1.19455 3.03277 1.41735 3.03349C2.93649 3.03856 4.44985 3.03349 5.96609 3.03349C6.36107 3.03349 6.50213 3.17455 6.50213 3.56953C6.50213 5.09446 6.50213 6.61939 6.50213 8.14504C6.50213 8.36206 6.4486 8.53857 6.23592 8.62827C6.02324 8.71797 5.85397 8.63984 5.70133 8.48359C5.27814 8.04955 4.85061 7.62564 4.36883 7.14096C4.06138 7.71968 3.74019 8.25355 3.48917 8.81491C0.898675 14.6209 4.20678 21.4643 10.373 23.0485C12.5719 23.6347 14.9033 23.4729 17.0001 22.5884C17.5485 22.362 17.6628 22.4047 17.929 22.9379C18.1308 23.3408 18.3348 23.743 18.533 24.1474C18.7124 24.5127 18.6401 24.7218 18.2755 24.8845C17.173 25.3787 16.0054 25.7122 14.8082 25.8749C12.719 26.1555 10.6718 25.9711 8.68319 25.252C5.52048 24.109 3.13712 22.0594 1.5331 19.1031C0.377104 16.9734 -0.113362 14.6839 0.021914 12.2735C0.148996 9.84636 0.965019 7.50568 2.37441 5.52561C2.42071 5.4605 2.45977 5.3925 2.52416 5.29918Z"
                              fill="#171719"
                            ></path>
                            <path
                              d="M23.4799 20.7012C23.9674 21.1859 24.4384 21.659 24.9158 22.1256C25.0829 22.2884 25.1943 22.4605 25.0967 22.6985C24.999 22.9365 24.7892 22.9648 24.5585 22.964C23.0603 22.9597 21.5621 22.964 20.0647 22.964C19.6307 22.964 19.5005 22.8309 19.5005 22.3998C19.5005 20.8929 19.5005 19.3861 19.5005 17.8785C19.5005 17.6543 19.5381 17.4597 19.7652 17.3664C19.9924 17.273 20.1616 17.3664 20.3201 17.5284C20.7367 17.9538 21.1592 18.3733 21.6186 18.8349C21.8609 18.4044 22.1061 18.0073 22.3152 17.5921C25.3151 11.6218 21.8161 4.29668 15.2866 2.86579C13.1611 2.385 10.9382 2.58467 8.9323 3.43656C8.48958 3.6203 8.33332 3.56243 8.11703 3.13056C7.90652 2.71171 7.69528 2.29358 7.48767 1.87329C7.29163 1.47759 7.3618 1.27504 7.75822 1.10142C9.75266 0.21622 11.9402 -0.144837 14.1133 0.0524905C17.433 0.349808 20.2398 1.72644 22.5141 4.152C24.3993 6.16305 25.5322 8.55389 25.883 11.292C26.3171 14.6876 25.5177 17.7838 23.5479 20.5797C23.5276 20.6086 23.5132 20.6412 23.4799 20.7012Z"
                              fill="#171719"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <span class="text-[12px]">ฝาก/ถอน</span>
                    </div>
                  </a>
                  <div class="item" onClick={NextoBag}>
                    <a class="">
                      <div>
                        <span class="nuxt-icon text-[23px]">
                          <svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M89.6493 10.8474C89.445 10.8391 89.2404 10.8377 89.0359 10.8435H81.325V4.21693C81.3252 1.5663 78.795 0 76.1443 0H69.036C66.3854 0 64.4577 1.5663 64.4577 4.21693V10.8433H35.542V4.21693C35.542 1.5663 33.6144 0 30.9637 0H23.8552C21.2048 0 18.6745 1.5663 18.6745 4.21693V10.8433H10.9639C6.04173 10.7061 1.94034 14.5851 1.80312 19.507C1.79736 19.7114 1.79874 19.9162 1.80704 20.1205V89.7589C1.80704 95.0601 5.66238 99.9998 10.9636 99.9998H89.0361C94.3374 99.9998 98.1927 95.0601 98.1927 89.7589V20.1205C98.3942 15.2006 94.5691 11.049 89.6493 10.8474ZM69.036 4.81928H76.5059V18.0722H69.036V4.81928ZM23.8554 4.81928H30.723V18.0722H23.8554V4.81928ZM93.3734 89.7589C93.3734 92.4095 91.6867 95.1805 89.0361 95.1805H10.9639C8.31324 95.1805 6.62656 92.4095 6.62656 89.7589V38.5543H93.3734V89.7589ZM93.3734 20.1205V33.735H6.62633V20.1205C6.42224 17.8674 8.08332 15.8754 10.3364 15.6713C10.5448 15.6524 10.7547 15.6496 10.9636 15.6628H18.6745V18.3134C18.6745 20.964 21.2046 22.8917 23.8552 22.8917H30.9637C33.4248 22.9593 35.4744 21.0187 35.542 18.5576C35.5443 18.4762 35.5443 18.3948 35.542 18.3134V15.6626H64.4577V18.3132C64.3902 20.7743 66.3307 22.8239 68.7918 22.8915C68.8732 22.8938 68.9546 22.8938 69.036 22.8915H76.1446C78.7952 22.8915 81.3252 20.9638 81.3252 18.3132V15.6626H89.0361C91.294 15.5203 93.2397 17.2353 93.3819 19.4932C93.3951 19.7021 93.3923 19.912 93.3734 20.1205Z"
                              fill="white"
                            ></path>
                            <path
                              d="M36.6263 71.4457L34.4577 83.4939C34.3719 84.0107 34.4568 84.5416 34.6996 85.0058C35.3165 86.1849 36.7726 86.6408 37.9517 86.0239L48.7949 80.3613L59.6382 86.0239L60.7225 86.2649C61.2453 86.2741 61.7557 86.104 62.1682 85.7829C62.8884 85.2569 63.259 84.3765 63.1322 83.4937L60.9635 71.4455L69.7587 63.0118C70.3881 62.3318 70.6164 61.3724 70.3611 60.4818C70.0366 59.6586 69.3056 59.0647 68.4334 58.9155L56.3852 57.1082L50.9636 46.1444C50.7272 45.6564 50.3333 45.2623 49.8454 45.0261C48.6476 44.4461 47.2065 44.9468 46.6263 46.1444L41.2046 57.1082L29.1564 58.9155C28.2843 59.0645 27.5532 59.6586 27.2288 60.4818C26.9735 61.3724 27.202 62.3318 27.8311 63.0118L36.6263 71.4457ZM43.2529 61.6868C44.0096 61.5735 44.6506 61.0699 44.9396 60.3615L48.7949 52.6506L52.6503 60.3615C52.9395 61.0699 53.5803 61.5735 54.3369 61.6868L62.8912 62.8915L56.7466 68.7951C56.1742 69.3617 55.9058 70.167 56.0236 70.9637L57.4693 79.518L49.879 75.4217L48.7947 75.1807L47.7104 75.4217L40.1201 79.518L41.5658 70.9637C41.6838 70.167 41.4152 69.3617 40.8428 68.7951L34.6982 62.8915L43.2529 61.6868Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                        <span class="text-[12px]">กระเป๋า</span>
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <div class="">
                      <a href="https://line.me/R/ti/p/@799uzxcy" class="">
                        <div class="relative">
                          <span class="nuxt-icon nuxt-icon--fill text-[23px]">
                            <svg
                              width="512"
                              height="512"
                              viewBox="0 0 512 512"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M411 262.862V215C411 145.178 364.589 85.999 301 66.67V45C301 20.187 280.813 0 256 0C231.187 0 211 20.187 211 45V66.67C147.41 85.999 101 145.177 101 215V262.862C101 324.194 77.6222 382.35 35.1732 426.618C31.0132 430.956 29.8442 437.357 32.2022 442.885C34.5602 448.413 39.9902 452 46.0002 452H182.509C189.477 486.192 219.781 512 256 512C292.22 512 322.522 486.192 329.491 452H466C472.01 452 477.439 448.413 479.797 442.885C482.155 437.357 480.986 430.956 476.827 426.618C434.378 382.35 411 324.193 411 262.862ZM241 45C241 36.729 247.729 30 256 30C264.271 30 271 36.729 271 45V60.728C266.063 60.252 261.06 60 256 60C250.94 60 245.937 60.252 241 60.728V45ZM256 482C236.445 482 219.772 469.459 213.58 452H298.42C292.228 469.459 275.555 482 256 482ZM78.3302 422C112.491 376.208 131 320.792 131 262.862V215C131 146.075 187.075 90 256 90C324.925 90 381 146.075 381 215V262.862C381 320.792 399.509 376.208 433.671 422H78.3302Z"
                                fill="url(#paint0_linear_7352_53779)"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_7352_53779"
                                  x1="90.9992"
                                  y1="85.3333"
                                  x2="450.666"
                                  y2="401.447"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#FFD15C"></stop>
                                  <stop
                                    offset="0.5"
                                    stop-color="#F6DB96"
                                  ></stop>
                                  <stop offset="1" stop-color="#9B7A24"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <span class="text-[12px]">ติดต่อแอดมิน</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </footer>
        </div>
      </div>
      {openModal &&
        createPortal(
          <GetPromotion closeModal={handleButtonClick1} />,
          document.body
        )}
    </body>
  );
}

export default Promotion;
