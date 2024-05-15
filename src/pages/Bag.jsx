import React, { useState } from "react";
import Letter_slide from "../components/Letter_slide";
import Header from "../components/Header";
import ModalCredit from "../components/Modal/ModalCredit";
import { createPortal } from "react-dom";
import ShareLink from "../components/Modal/ShareLink";
import History from "../components/Modal/History";
function Bag() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const handleButtonClick1 = () => {
    setOpenModal1(false);
  };
  const handleButtonClick2 = () => {
    setOpenModal2(false);
  };
  const handleButtonClick3 = () => {
    setOpenModal3(false);
  };
  // const navigate = useNavigate();
  const NextoHome = () => {
    // navigate("/");
  };
  const NextoBank = () => {
    // navigate("/bank");
  };
  const NextoPromotion = () => {
    // navigate("/promotion");
  };
  const NextoBag = () => {
    // window.location = "/bag";
  };
  const NextoCahsback = () => {
    // navigate("/bag/cashback");
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
              <div class="events-wrapper animate__animated animate__slideInLeft animate__fast base-container-small">
                <div>
                
                  <div class="grid-cols-4 md:grid-cols-6 grid my-4 gap-3">
                    <div
                      onClick={() => setOpenModal2(true)}
                      class="flex flex-col text-center justify-center items-center cursor-pointer"
                      id="btn-referral"
                    >
                      <a class="">
                        <div
                          data-v-d320b445=""
                          class="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span class="nuxt-icon text-4xl text-[var(--primary)]">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.7364 18.9318V17.3318C22.7364 17.0773 22.5273 16.8682 22.2728 16.8682H16.1909C15.9364 16.8682 15.7273 17.0773 15.7273 17.3318V18.9318C15.7273 19.1864 15.9364 19.3955 16.1909 19.3955H22.2728C22.5273 19.3955 22.7364 19.1864 22.7364 18.9318Z"
                                fill="url(#paint0_linear_5853_103166)"
                              ></path>
                              <path
                                d="M24.5953 13.8955C24.5953 13.6409 24.3862 13.4318 24.1316 13.4318H18.0498C17.7953 13.4318 17.5862 13.6409 17.5862 13.8955V15.4955C17.5862 15.75 17.7953 15.9591 18.0498 15.9591H24.1271C24.3816 15.9591 24.5907 15.75 24.5907 15.4955V13.8955H24.5953Z"
                                fill="url(#paint1_linear_5853_103166)"
                              ></path>
                              <path
                                d="M16.6772 15.4955V13.8955C16.6772 13.6409 16.4681 13.4318 16.2135 13.4318H10.1362C9.8817 13.4318 9.67261 13.6409 9.67261 13.8955V15.4955C9.67261 15.75 9.8817 15.9591 10.1362 15.9591H16.2135C16.4681 15.9591 16.6772 15.75 16.6772 15.4955Z"
                                fill="url(#paint2_linear_5853_103166)"
                              ></path>
                              <path
                                d="M8.27272 19.3955H14.35C14.6045 19.3955 14.8136 19.1864 14.8136 18.9318V17.3318C14.8136 17.0773 14.6045 16.8682 14.35 16.8682H8.27272C8.01817 16.8682 7.80908 17.0773 7.80908 17.3318V18.9318C7.80908 19.1864 8.01817 19.3955 8.27272 19.3955Z"
                                fill="url(#paint3_linear_5853_103166)"
                              ></path>
                              <path
                                d="M17.5862 12.4591C20.4725 12.4591 22.8134 10.1182 22.8134 7.23181C22.8134 4.34545 20.4725 2.00454 17.5862 2.00454C14.6998 2.00454 12.3589 4.34545 12.3589 7.23181C12.3589 10.1182 14.6998 12.4591 17.5862 12.4591ZM17.5862 7.68636C16.6498 7.68636 15.8862 6.92272 15.8862 5.98636C15.8862 5.20909 16.4134 4.55454 17.1316 4.35454V3.88181C17.1316 3.63181 17.3362 3.42727 17.5862 3.42727C17.8362 3.42727 18.0407 3.63181 18.0407 3.88181V4.35454C18.7543 4.55454 19.2862 5.20454 19.2862 5.98636C19.2862 6.23636 19.0816 6.4409 18.8316 6.4409C18.5816 6.4409 18.3771 6.23636 18.3771 5.98636C18.3771 5.54999 18.0225 5.19545 17.5862 5.19545C17.1498 5.19545 16.7953 5.54999 16.7953 5.98636C16.7953 6.42272 17.1498 6.77727 17.5862 6.77727C18.5225 6.77727 19.2862 7.5409 19.2862 8.47727C19.2862 9.25454 18.7589 9.90909 18.0407 10.1091V10.5818C18.0407 10.8318 17.8362 11.0364 17.5862 11.0364C17.3362 11.0364 17.1316 10.8318 17.1316 10.5818V10.1091C16.418 9.90909 15.8862 9.25909 15.8862 8.47727C15.8862 8.22727 16.0907 8.02272 16.3407 8.02272C16.5907 8.02272 16.7953 8.22727 16.7953 8.47727C16.7953 8.91363 17.1498 9.26818 17.5862 9.26818C18.0225 9.26818 18.3771 8.91363 18.3771 8.47727C18.3771 8.0409 18.0225 7.68636 17.5862 7.68636Z"
                                fill="url(#paint4_linear_5853_103166)"
                              ></path>
                              <path
                                d="M26.9363 21.8C26.5726 21.2773 25.8817 21.1182 25.3272 21.4318L19.0272 24.9591C18.659 25.2864 18.1772 25.4818 17.6454 25.4818H13.4363C13.1863 25.4818 12.9817 25.2773 12.9817 25.0273C12.9817 24.7773 13.1863 24.5727 13.4363 24.5727H17.6454C17.9454 24.5727 18.2135 24.4591 18.4226 24.2773C18.4363 24.2636 18.4499 24.25 18.4681 24.2364C18.6863 24.0227 18.8181 23.7273 18.8181 23.4C18.8181 22.7545 18.2908 22.2273 17.6454 22.2273H14.6454C13.9272 22.2273 13.1954 22.0045 12.5317 21.5773C11.8863 21.1636 10.9317 20.9227 9.92264 20.9227C8.69082 20.9227 7.55446 21.2773 6.96355 21.8455C6.29991 22.4864 5.38627 22.8364 4.39082 22.8364H2.84082V28.7636C4.34082 28.3636 5.909 28.2318 7.32718 28.2318C10.009 28.2318 12.1499 28.7045 12.2908 28.7364C12.4181 28.7545 12.5726 28.7773 12.7272 28.7954C15.3408 29.1136 18.0817 28.5273 20.4454 27.1409L26.5545 23.5591C26.8545 23.3818 27.059 23.1 27.1363 22.7591C27.2045 22.4318 27.1363 22.0864 26.9363 21.8Z"
                                fill="url(#paint5_linear_5853_103166)"
                              ></path>
                              <path
                                d="M9.92275 5.00909L10.3818 3.52272L11.8682 3.06363L10.3818 2.6L9.92275 1.11363L9.46366 2.6L7.97729 3.06363L9.46366 3.52272L9.92275 5.00909Z"
                                fill="url(#paint6_linear_5853_103166)"
                              ></path>
                              <path
                                d="M24.9228 12.7364L25.3818 11.25L26.8682 10.7909L25.3818 10.3273L24.9228 8.8409L24.4637 10.3273L22.9773 10.7909L24.4637 11.25L24.9228 12.7364Z"
                                fill="url(#paint7_linear_5853_103166)"
                              ></path>
                              <path
                                d="M11.9045 20.3045C12.3227 20.4364 12.7045 20.6045 13.0273 20.8091C13.5454 21.1409 14.1045 21.3136 14.65 21.3136H16.6773V20.7682C16.6773 20.5136 16.4682 20.3045 16.2136 20.3045H11.9045Z"
                                fill="url(#paint8_linear_5853_103166)"
                              ></path>
                              <path
                                d="M19.6407 22.8318H20.9589L24.5953 20.7955V20.7727C24.5953 20.5182 24.3862 20.3091 24.1316 20.3091H18.0498C17.7953 20.3091 17.5862 20.5182 17.5862 20.7727V21.3182H17.6453C18.5998 21.3182 19.3953 21.9591 19.6407 22.8318Z"
                                fill="url(#paint9_linear_5853_103166)"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_5853_103166"
                                  x1="16.6618"
                                  y1="17.2894"
                                  x2="17.8043"
                                  y2="20.4578"
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
                                  id="paint1_linear_5853_103166"
                                  x1="18.5207"
                                  y1="13.853"
                                  x2="19.6632"
                                  y2="17.0214"
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
                                  id="paint2_linear_5853_103166"
                                  x1="10.6065"
                                  y1="13.853"
                                  x2="11.7495"
                                  y2="17.0209"
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
                                  id="paint3_linear_5853_103166"
                                  x1="8.74302"
                                  y1="17.2894"
                                  x2="9.88602"
                                  y2="20.4573"
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
                                  id="paint4_linear_5853_103166"
                                  x1="13.7528"
                                  y1="3.74696"
                                  x2="21.1581"
                                  y2="11.1523"
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
                                  id="paint5_linear_5853_103166"
                                  x1="6.08363"
                                  y1="22.2489"
                                  x2="9.41518"
                                  y2="32.4317"
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
                                  id="paint6_linear_5853_103166"
                                  x1="8.49608"
                                  y1="1.76287"
                                  x2="11.2554"
                                  y2="4.51893"
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
                                  id="paint7_linear_5853_103166"
                                  x1="23.4961"
                                  y1="9.49015"
                                  x2="26.2554"
                                  y2="12.2462"
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
                                  id="paint8_linear_5853_103166"
                                  x1="12.5409"
                                  y1="20.4727"
                                  x2="12.8302"
                                  y2="21.8411"
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
                                  id="paint9_linear_5853_103166"
                                  x1="18.5207"
                                  y1="20.7295"
                                  x2="19.6595"
                                  y2="23.8935"
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
                      </a>
                      <h5 class="text-xs text-primary mt-1 truncate w-[75px]">
                        สร้างรายได้
                      </h5>
                    </div>
                    <div
                      onClick={() => setOpenModal1(true)}
                      class="flex flex-col text-center justify-center items-center cursor-pointer"
                    >
                      <a class="">
                        <div
                          data-v-d320b445=""
                          class="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span class="nuxt-icon text-4xl text-[var(--primary)]">
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 0.5C10.5277 0.5 8.11099 1.23311 6.05538 2.60663C3.99976 3.98015 2.39761 5.93238 1.45151 8.21646C0.505416 10.5005 0.257874 13.0139 0.74019 15.4386C1.2225 17.8634 2.41301 20.0907 4.16117 21.8388C5.90933 23.587 8.13661 24.7775 10.5614 25.2598C12.9861 25.7421 15.4995 25.4946 17.7836 24.5485C20.0676 23.6024 22.0199 22.0002 23.3934 19.9446C24.7669 17.889 25.5 15.4723 25.5 13C25.5 11.3585 25.1767 9.73303 24.5485 8.21646C23.9203 6.69989 22.9996 5.3219 21.8388 4.16117C20.6781 3.00043 19.3001 2.07969 17.7836 1.45151C16.267 0.823322 14.6415 0.5 13 0.5ZM20.1 12.425L17.4375 15.15L18.0625 19.025C18.1058 19.2606 18.0805 19.5036 17.9897 19.7252C17.8988 19.9468 17.7462 20.1376 17.55 20.275C17.3573 20.4087 17.1308 20.4855 16.8965 20.4965C16.6622 20.5076 16.4295 20.4525 16.225 20.3375L13 18.525L9.75 20.3125C9.56822 20.4195 9.36097 20.4757 9.15001 20.475C8.89086 20.477 8.63751 20.3983 8.42501 20.25C8.2288 20.1126 8.0762 19.9218 7.98534 19.7002C7.89448 19.4786 7.8692 19.2356 7.91251 19L8.55 15.125L5.87501 12.425C5.7133 12.2602 5.60039 12.0538 5.54881 11.8288C5.49722 11.6037 5.50898 11.3688 5.58276 11.15C5.65655 10.9313 5.78949 10.7372 5.96684 10.5894C6.14419 10.4415 6.35902 10.3457 6.58751 10.3125L10.225 9.75L11.8625 6.275C11.9555 6.04867 12.1128 5.8546 12.315 5.71684C12.5172 5.57907 12.7554 5.50368 13 5.5C13.2377 5.4983 13.471 5.56443 13.6725 5.69063C13.874 5.81682 14.0353 5.99786 14.1375 6.2125L15.7625 9.75L19.4 10.3125C19.6276 10.3465 19.8415 10.4427 20.0179 10.5905C20.1944 10.7382 20.3266 10.9319 20.4 11.15C20.4728 11.3695 20.4833 11.6048 20.4304 11.8299C20.3774 12.055 20.2631 12.261 20.1 12.425Z"
                                fill="url(#paint0_linear_5853_103182)"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_5853_103182"
                                  x1="3.83333"
                                  y1="4.66667"
                                  x2="21.5417"
                                  y2="22.375"
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
                      </a>
                      <h5 class="text-xs text-primary mt-1 truncate w-[75px]">
                        กรอกโค้ด
                      </h5>
                    </div>
                    {/* <div
                      class="flex flex-col text-center justify-center items-center cursor-pointer"
                      id="btn-luckywheel"
                    >
                      <a
                        href="https://lucabet88.electrikora.com/events/lucky-wheel"
                        class=""
                      >
                        <div
                          data-v-d320b445=""
                          class="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span class="nuxt-icon text-4xl text-[var(--primary)]">
                            <svg
                              width="26"
                              height="30"
                              viewBox="0 0 26 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.5418 2.47061C13.8365 3.49998 13.15 4.50176 13 4.72061C12.85 4.50176 12.1636 3.50004 11.4583 2.47061C11.4471 2.45414 11.4359 2.43826 11.4247 2.4218C10.6794 1.33529 9.92357 0.231152 9.76473 0H16.2354C16.0765 0.231152 15.3206 1.33529 14.5753 2.4218C14.5641 2.4382 14.5529 2.45408 14.5418 2.47061Z"
                                fill="url(#paint0_linear_5853_103196)"
                              ></path>
                              <path
                                d="M12.4119 5.91644V5.91656V5.94351V9.4575C11.3155 9.57304 10.313 10.0079 9.49894 10.6669L6.99605 8.16398C8.45772 6.87861 10.3334 6.05396 12.3943 5.91785L12.3942 5.91761C12.4001 5.91703 12.4059 5.91703 12.4119 5.91644Z"
                                fill="url(#paint1_linear_5853_103196)"
                              ></path>
                              <path
                                d="M5.87791 25.3786C2.55342 23.1007 0.367636 19.2765 0.367636 14.9511C0.367636 9.03346 4.49293 3.94582 10.1494 2.64234C10.3482 2.93232 10.4877 3.13588 10.4877 3.13588L11.6359 4.81119C9.3735 5.11236 7.34117 6.1524 5.79055 7.68058C5.76992 7.69588 5.74994 7.71293 5.73113 7.73115C5.71291 7.74996 5.69586 7.77 5.68056 7.79056C3.85115 9.64705 2.72058 12.1941 2.72058 14.9999C2.72058 17.8064 3.85115 20.3529 5.68056 22.21C5.69645 22.2299 5.71291 22.25 5.73113 22.2688C5.74994 22.287 5.76998 22.3035 5.78996 22.3194C7.64703 24.1488 10.1935 25.2794 13 25.2794C15.8064 25.2794 18.3529 24.1488 20.21 22.3194C20.23 22.3041 20.25 22.2871 20.2688 22.2688C20.2871 22.25 20.3041 22.23 20.3194 22.2094C22.1488 20.3529 23.2794 17.8059 23.2794 15C23.2794 12.1941 22.1488 9.64705 20.3194 7.79062C20.3041 7.77 20.2871 7.75002 20.2688 7.73121C20.25 7.71299 20.23 7.69593 20.2094 7.68064C18.6588 6.1524 16.6265 5.11242 14.3641 4.81125C14.84 4.11656 15.3747 3.33715 15.8506 2.64246C21.507 3.94588 25.6323 9.03351 25.6323 14.9512C25.6323 19.4008 23.3194 23.3203 19.8329 25.5714L22.8545 29.0244C23.0064 29.1981 23.0428 29.4446 22.9474 29.6548C22.8521 29.865 22.6426 30 22.4118 30H3.58824C3.36541 30 3.16174 29.8741 3.06213 29.6748C2.96246 29.4755 2.98402 29.237 3.11768 29.0588L5.87791 25.3786ZM21.1154 28.8236L18.7961 26.1729C17.0591 27.0738 15.088 27.5835 13 27.5835C10.782 27.5835 8.69615 27.0081 6.8825 26L4.76475 28.8236H21.1154Z"
                                fill="url(#paint2_linear_5853_103196)"
                              ></path>
                              <path
                                d="M9.2032 12.7863C9.81281 11.7449 10.8379 10.9757 12.0498 10.7075L11.2177 12.5457L9.2032 12.7863Z"
                                fill="url(#paint3_linear_5853_103196)"
                              ></path>
                              <path
                                d="M17.397 15C17.397 16.1272 16.9702 17.1563 16.2704 17.9353L15.945 15.9861L17.379 14.6137C17.3901 14.7411 17.397 14.8697 17.397 15Z"
                                fill="url(#paint4_linear_5853_103196)"
                              ></path>
                              <path
                                d="M16.501 10.6669C15.687 10.0079 14.6845 9.57311 13.5881 9.45756V5.94357V5.91662V5.9165C13.5939 5.91709 13.5999 5.91709 13.6057 5.91768L13.6055 5.91791C15.6666 6.05402 17.5422 6.87867 19.0039 8.16404L16.501 10.6669Z"
                                fill="url(#paint5_linear_5853_103196)"
                              ></path>
                              <path
                                d="M13.9601 10.7099C15.1781 10.9824 16.2063 11.7612 16.8123 12.8134L14.835 12.5496L13.9601 10.7099Z"
                                fill="url(#paint6_linear_5853_103196)"
                              ></path>
                              <path
                                d="M6.16392 8.9959L8.66675 11.4988C8.00774 12.3128 7.57286 13.3153 7.45731 14.4117H3.91644C4.04903 12.3438 4.87491 10.4617 6.16392 8.9959Z"
                                fill="url(#paint7_linear_5853_103196)"
                              ></path>
                              <path
                                d="M9.76937 17.9789C9.04585 17.1949 8.60282 16.1484 8.60282 15C8.60282 14.8561 8.61026 14.7139 8.62386 14.5735L10.1111 15.9864L9.76937 17.9789Z"
                                fill="url(#paint8_linear_5853_103196)"
                              ></path>
                              <path
                                d="M13.0069 11.4453L13.9093 13.343C13.9952 13.523 14.1658 13.6471 14.3628 13.6736L16.3787 13.9424L14.9069 15.3512C14.7663 15.4859 14.701 15.6812 14.7333 15.873L15.0604 17.833L13.301 16.9148C13.2157 16.8701 13.1222 16.8483 13.0287 16.8483C12.9346 16.8483 12.8405 16.8707 12.7552 16.9154L10.9858 17.846L11.324 15.876C11.3569 15.6824 11.2917 15.4848 11.1493 15.3501L9.64284 13.9189L11.6864 13.6748C11.8911 13.6501 12.0676 13.5207 12.1528 13.3331L13.0069 11.4453ZM12.584 15.4159C12.6934 15.5253 12.8452 15.5882 12.9999 15.5882C13.1546 15.5882 13.3064 15.5253 13.4158 15.4159C13.5252 15.3065 13.5881 15.1547 13.5881 15C13.5881 14.8453 13.5252 14.6936 13.4158 14.5841C13.3064 14.4747 13.1547 14.4117 12.9999 14.4117C12.8452 14.4117 12.6935 14.4746 12.584 14.5841C12.4746 14.6935 12.4117 14.8453 12.4117 15C12.4117 15.1547 12.4746 15.3064 12.584 15.4159Z"
                                fill="url(#paint9_linear_5853_103196)"
                              ></path>
                              <path
                                d="M9.49869 19.3331C10.3127 19.9921 11.3152 20.427 12.4116 20.5425V24.0834C10.3437 23.9508 8.46164 23.125 6.9958 21.836L9.49869 19.3331Z"
                                fill="url(#paint10_linear_5853_103196)"
                              ></path>
                              <path
                                d="M3.91649 15.5882H7.45737C7.57292 16.6846 8.00774 17.6872 8.66675 18.5012L6.16392 21.004C4.87491 19.5382 4.04903 17.6561 3.91649 15.5882Z"
                                fill="url(#paint11_linear_5853_103196)"
                              ></path>
                              <path
                                d="M19.8358 21.004L17.3329 18.5012C17.9919 17.6871 18.4268 16.6846 18.5423 15.5882H22.0833C21.9507 17.6561 21.1248 19.5382 19.8358 21.004Z"
                                fill="url(#paint12_linear_5853_103196)"
                              ></path>
                              <path
                                d="M22.0835 14.4118H18.5426C18.427 13.3154 17.9922 12.3129 17.3332 11.4988L19.8361 8.99596C21.125 10.4618 21.9509 12.3439 22.0835 14.4118Z"
                                fill="url(#paint13_linear_5853_103196)"
                              ></path>
                              <path
                                d="M13.5883 20.5425C14.6847 20.427 15.6872 19.9921 16.5013 19.3331L19.0042 21.8359C17.5383 23.125 15.6562 23.9508 13.5883 24.0834L13.5883 20.5425Z"
                                fill="url(#paint14_linear_5853_103196)"
                              ></path>
                              <path
                                d="M11.2532 19.0343L13.0298 18.1003L14.7859 19.0165C14.2397 19.2603 13.6356 19.397 13 19.397C12.3795 19.397 11.789 19.2671 11.2532 19.0343Z"
                                fill="url(#paint15_linear_5853_103196)"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_5853_103196"
                                  x1="15.3726"
                                  y1="0.786768"
                                  x2="12.1885"
                                  y2="5.15132"
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
                                  id="paint1_linear_5853_103196"
                                  x1="11.6898"
                                  y1="6.70818"
                                  x2="8.35357"
                                  y2="10.5117"
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
                                  id="paint2_linear_5853_103196"
                                  x1="22.2637"
                                  y1="7.20195"
                                  x2="2.94657"
                                  y2="25.0412"
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
                                  id="paint3_linear_5853_103196"
                                  x1="11.6703"
                                  y1="11.054"
                                  x2="10.2677"
                                  y2="12.9747"
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
                                  id="paint4_linear_5853_103196"
                                  x1="17.2034"
                                  y1="15.1673"
                                  x2="15.4764"
                                  y2="15.9222"
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
                                  id="paint5_linear_5853_103196"
                                  x1="18.2818"
                                  y1="6.70824"
                                  x2="14.9456"
                                  y2="10.5117"
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
                                  id="paint6_linear_5853_103196"
                                  x1="16.432"
                                  y1="11.0605"
                                  x2="15.0085"
                                  y2="12.9906"
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
                                  id="paint7_linear_5853_103196"
                                  x1="8.03337"
                                  y1="9.89853"
                                  x2="4.22991"
                                  y2="13.2346"
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
                                  id="paint8_linear_5853_103196"
                                  x1="9.90998"
                                  y1="15.1411"
                                  x2="8.12368"
                                  y2="15.9322"
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
                                  id="paint9_linear_5853_103196"
                                  x1="15.4806"
                                  y1="12.5121"
                                  x2="10.9526"
                                  y2="17.2771"
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
                                  id="paint10_linear_5853_103196"
                                  x1="11.6895"
                                  y1="20.1248"
                                  x2="8.35347"
                                  y2="23.9283"
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
                                  id="paint11_linear_5853_103196"
                                  x1="8.03338"
                                  y1="16.4909"
                                  x2="4.22992"
                                  y2="19.8269"
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
                                  id="paint12_linear_5853_103196"
                                  x1="21.4499"
                                  y1="16.4909"
                                  x2="17.6464"
                                  y2="19.827"
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
                                  id="paint13_linear_5853_103196"
                                  x1="21.4501"
                                  y1="9.89859"
                                  x2="17.6467"
                                  y2="13.2347"
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
                                  id="paint14_linear_5853_103196"
                                  x1="18.282"
                                  y1="20.1248"
                                  x2="14.9459"
                                  y2="23.9283"
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
                                  id="paint15_linear_5853_103196"
                                  x1="14.3149"
                                  y1="18.3164"
                                  x2="13.7206"
                                  y2="19.9354"
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
                      </a>
                      <h5 class="text-xs text-primary mt-1 truncate w-[75px]">
                      โปรโมชั่น
                      </h5>
                    </div> */}
                    <div
                      onClick={NextoCahsback}
                      class="flex flex-col text-center justify-center items-center cursor-pointer"
                      id="btn-activity"
                    >
                      <a class="">
                        <div
                          data-v-d320b445=""
                          class="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span class="nuxt-icon text-4xl text-[var(--primary)]">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_5853_103217)">
                                <path
                                  d="M3.04688 30H0.878906C0.393516 30 0 29.6065 0 29.1211V18.5742C0 18.0888 0.393516 17.6953 0.878906 17.6953H3.04688C3.53227 17.6953 3.92578 18.0888 3.92578 18.5742V29.1211C3.92578 29.6065 3.53227 30 3.04688 30Z"
                                  fill="url(#paint0_linear_5853_103217)"
                                ></path>
                                <path
                                  d="M28.9015 20.4382C28.2239 20.0652 27.397 20.0906 26.7436 20.5045L23.528 22.5411C23.4308 23.3708 23.0655 24.1406 22.4704 24.7501C21.7471 25.4906 20.7796 25.8984 19.7461 25.8984H15.3764C14.9031 25.8984 14.4959 25.5347 14.4737 25.062C14.4499 24.5573 14.8521 24.1406 15.3516 24.1406H19.7461C20.8933 24.1406 21.8236 23.1936 21.7963 22.0403C21.7698 20.9208 20.8274 20.0391 19.7076 20.0391H14.7656L14.1923 19.6091C13.0506 18.7528 11.636 18.2812 10.2088 18.2812C9.00574 18.2812 7.82455 18.6084 6.79289 19.2274L5.68359 19.893V28.8281H20.4566C21.3108 28.8281 22.1466 28.5792 22.8615 28.1117L29.0396 24.0722C29.6409 23.6789 30 23.0152 30 22.2966C30 21.5232 29.5791 20.8111 28.9015 20.4382Z"
                                  fill="url(#paint1_linear_5853_103217)"
                                ></path>
                                <path
                                  d="M12.4219 0C8.3833 0 5.09766 3.28564 5.09766 7.32422C5.09766 11.3628 8.3833 14.6484 12.4219 14.6484C16.4604 14.6484 19.7461 11.3628 19.7461 7.32422C19.7461 3.28564 16.4604 0 12.4219 0ZM13.3008 10.9612V11.1328C13.3008 11.6182 12.9073 12.0117 12.4219 12.0117C11.9365 12.0117 11.543 11.6182 11.543 11.1328V10.9604C10.8327 10.6712 10.2846 10.0419 10.1252 9.25693C10.0287 8.78127 10.3359 8.31732 10.8117 8.22064C11.2873 8.1242 11.7513 8.43141 11.8479 8.90707C11.903 9.17818 12.1444 9.37494 12.4219 9.37494C12.745 9.37494 13.0079 9.11209 13.0079 8.789C13.0079 8.46592 12.745 8.20307 12.4219 8.20307C11.1296 8.20307 10.0782 7.15166 10.0782 5.85932C10.0782 4.87775 10.685 4.03564 11.543 3.68719V3.51562C11.543 3.03023 11.9365 2.63672 12.4219 2.63672C12.9073 2.63672 13.3008 3.03023 13.3008 3.51562V3.68801C14.0111 3.97723 14.5592 4.60652 14.7186 5.3915C14.8151 5.86717 14.5078 6.33111 14.0321 6.42779C13.5565 6.52436 13.0925 6.21703 12.9959 5.74137C12.9408 5.4702 12.6994 5.27344 12.4219 5.27344C12.0988 5.27344 11.8359 5.53629 11.8359 5.85938C11.8359 6.18246 12.0988 6.44531 12.4219 6.44531C13.7142 6.44531 14.7656 7.49672 14.7656 8.78906C14.7656 9.77063 14.1588 10.6127 13.3008 10.9612Z"
                                  fill="url(#paint2_linear_5853_103217)"
                                ></path>
                                <path
                                  d="M29.9169 11.8246C29.7723 11.5157 29.462 11.3184 29.121 11.3184H27.8417C27.0649 8.25047 25.3136 5.47406 22.8578 3.44033C21.7154 2.49428 20.4428 1.73027 19.0889 1.1642C20.5868 2.7842 21.5038 4.949 21.5038 7.32422C21.5038 8.05477 21.4165 8.76516 21.2529 9.44619C21.661 10.0311 22.0061 10.659 22.2774 11.3184H21.5038C21.1628 11.3184 20.8525 11.5157 20.7079 11.8246C20.5632 12.1334 20.6103 12.498 20.8286 12.76L24.6372 17.3303C24.8042 17.5307 25.0515 17.6466 25.3124 17.6466C25.5733 17.6466 25.8206 17.5307 25.9876 17.3303L29.7962 12.76C30.0145 12.498 30.0616 12.1334 29.9169 11.8246Z"
                                  fill="url(#paint3_linear_5853_103217)"
                                ></path>
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_5853_103217"
                                  x1="0.523437"
                                  y1="19.7461"
                                  x2="5.57115"
                                  y2="21.3566"
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
                                  id="paint1_linear_5853_103217"
                                  x1="8.92578"
                                  y1="20.0391"
                                  x2="14.3803"
                                  y2="32.6147"
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
                                  id="paint2_linear_5853_103217"
                                  x1="7.05078"
                                  y1="2.44141"
                                  x2="17.4268"
                                  y2="12.8174"
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
                                  id="paint3_linear_5853_103217"
                                  x1="20.5437"
                                  y1="3.91126"
                                  x2="31.2912"
                                  y2="11.0259"
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
                                <clipPath id="clip0_5853_103217">
                                  <rect
                                    width="30"
                                    height="30"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <h5 class="text-xs text-primary mt-1 truncate w-[75px]">
                        คืนยอดเสีย
                      </h5>
                    </div>
                    <div
                      onClick={() => setOpenModal3(true)}
                      class="flex flex-col text-center justify-center items-center cursor-pointer"
                      id="btn-cash-point"
                    >
                      <a class="">
                        <div
                          data-v-d320b445=""
                          class="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span class="nuxt-icon text-4xl text-[var(--primary)]">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.89242 8.96552C4.47196 8.72268 3.93455 8.86687 3.69193 9.2871C3.44909 9.70756 3.59329 10.245 4.01351 10.4876C4.43374 10.7304 4.97138 10.5862 5.214 10.166C5.45684 9.74555 5.31264 9.20814 4.89242 8.96552Z"
                                fill="url(#paint0_linear_5853_103225)"
                              ></path>
                              <path
                                d="M27.3044 7.09007H26.4255V6.21116C26.4255 5.72547 26.0325 5.33225 25.5466 5.33225C25.0609 5.33225 24.6677 5.72547 24.6677 6.21116V7.09007H23.7888C23.3031 7.09007 22.9099 7.48328 22.9099 7.96897C22.9099 8.45489 23.3031 8.84788 23.7888 8.84788H24.6677V9.72678C24.6677 10.2125 25.0609 10.6057 25.5466 10.6057C26.0325 10.6057 26.4255 10.2125 26.4255 9.72678V8.84788H27.3044C27.7901 8.84788 28.1833 8.45489 28.1833 7.96897C28.1833 7.48328 27.7901 7.09007 27.3044 7.09007Z"
                                fill="url(#paint1_linear_5853_103225)"
                              ></path>
                              <path
                                d="M3.57422 4.39476C3.57422 4.88067 3.96721 5.27366 4.45312 5.27366C4.93881 5.27366 5.33203 4.88067 5.33203 4.39476V3.51585H6.21093C6.69662 3.51585 7.08984 3.12286 7.08984 2.63694C7.08984 2.15126 6.69662 1.75804 6.21093 1.75804H5.33203V0.879133C5.33203 0.393447 4.93881 0.000227928 4.45312 0.000227928C3.96721 0.000227928 3.57422 0.393447 3.57422 0.879133V1.75804H2.69531C2.20962 1.75804 1.81641 2.15126 1.81641 2.63694C1.81641 3.12286 2.20962 3.51585 2.69531 3.51585H3.57422V4.39476Z"
                                fill="url(#paint2_linear_5853_103225)"
                              ></path>
                              <path
                                d="M9.12587 1.64314C9.96243 3.31672 10.4271 5.16426 10.544 7.03147H19.4562C19.5729 5.16448 20.0376 3.31672 20.8741 1.64314L21.0595 1.27235C21.2287 0.934294 21.1625 0.52574 20.8947 0.257949C20.6279 -0.00984265 20.2193 -0.0759895 19.8803 0.0931541L16.9312 1.56761L15.6213 0.257949C15.278 -0.0853736 14.7218 -0.0853736 14.3785 0.257949L13.0688 1.56761L10.1197 0.0929252C9.77979 -0.0759895 9.37398 -0.0107582 9.10527 0.257949C8.83748 0.525512 8.77133 0.934065 8.94048 1.27235L9.12587 1.64314Z"
                                fill="url(#paint3_linear_5853_103225)"
                              ></path>
                              <path
                                d="M20.381 8.84788H9.61853L6.1869 13.0012C4.5021 15.0414 3.57422 17.6825 3.57422 20.3322C3.57422 26.2053 8.05893 30 14.9998 30C21.9408 30 26.4255 26.2053 26.4255 20.3322C26.4255 17.6825 25.4976 15.1 23.8119 13.0598L20.381 8.84788ZM14.9904 17.953C16.4445 17.953 17.6271 19.1356 17.6271 20.5897C17.6271 21.7305 16.8947 22.6948 15.8787 23.0614V23.8479C15.8787 24.3336 15.4857 24.7268 14.9998 24.7268C14.5141 24.7268 14.1211 24.3336 14.1211 23.8479V23.0674C13.0952 22.706 12.3537 21.7373 12.3537 20.5897C12.3537 20.1038 12.7469 19.7108 13.2326 19.7108C13.7185 19.7108 14.1115 20.1038 14.1115 20.5897C14.1115 21.0747 14.5056 21.4686 14.9904 21.4686C15.4754 21.4686 15.8693 21.0747 15.8693 20.5897C15.8693 20.1047 15.4754 19.7108 14.9904 19.7108C13.5365 19.7108 12.3537 18.528 12.3537 17.0741C12.3537 15.9263 13.0952 14.9579 14.1211 14.5965V13.301C14.1211 12.8153 14.5141 12.4221 14.9998 12.4221C15.4857 12.4221 15.8787 12.8153 15.8787 13.301V14.6024C16.8947 14.9691 17.6271 15.9334 17.6271 17.0741C17.6271 17.56 17.2341 17.953 16.7482 17.953C16.2625 17.953 15.8693 17.56 15.8693 17.0741C15.8693 16.5893 15.4754 16.1952 14.9904 16.1952C14.5056 16.1952 14.1115 16.5893 14.1115 17.0741C14.1115 17.5591 14.5054 17.953 14.9904 17.953Z"
                                fill="url(#paint4_linear_5853_103225)"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_5853_103225"
                                  x1="3.80837"
                                  y1="9.14056"
                                  x2="5.05361"
                                  y2="10.3858"
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
                                  id="paint1_linear_5853_103225"
                                  x1="23.613"
                                  y1="6.21116"
                                  x2="27.3484"
                                  y2="9.94651"
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
                                  id="paint2_linear_5853_103225"
                                  x1="2.51953"
                                  y1="0.879133"
                                  x2="6.25488"
                                  y2="4.61448"
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
                                  id="paint3_linear_5853_103225"
                                  x1="10.4883"
                                  y1="1.17195"
                                  x2="14.7793"
                                  y2="8.68106"
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
                                  id="paint4_linear_5853_103225"
                                  x1="6.62106"
                                  y1="12.3732"
                                  x2="21.5592"
                                  y2="28.5114"
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
                      </a>
                      <h5 class="text-xs text-primary mt-1 truncate w-[75px]">
                        ประวัติ
                      </h5>
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
                  <div class="item" onClick={NextoPromotion}>
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
                            <g clip-path="url(#clip0_3_13235)">
                              <path
                                d="M92.8206 51.6601C92.1643 50.6515 92.1643 49.3487 92.8206 48.3401L96.4725 42.7269C99.799 37.614 97.5576 30.7449 91.8721 28.5686L85.6183 26.1741C84.4946 25.7436 83.7284 24.6895 83.6667 23.4878L83.322 16.8003C83.0079 10.7097 77.1574 6.46793 71.2777 8.04995L64.8112 9.78862C63.6494 10.1007 62.4098 9.69819 61.6536 8.76245L57.4436 3.55447C53.6095 -1.18847 46.3841 -1.18085 42.5564 3.55447L38.3463 8.76265C37.59 9.69858 36.3508 10.1007 35.1887 9.78881L28.7217 8.05015C22.8305 6.46578 16.9907 10.7216 16.6774 16.8005L16.3327 23.488C16.2706 24.6895 15.5048 25.7438 14.3812 26.1741L8.12769 28.5686C2.43026 30.7494 0.206841 37.6242 3.52694 42.7271L7.17907 48.3401C7.83512 49.3485 7.83512 50.6517 7.17907 51.6601L3.52752 57.2731C0.200591 62.3866 2.44277 69.2559 8.12789 71.4316L14.3818 73.8261C15.5054 74.2566 16.2714 75.3107 16.3333 76.5125L16.678 83.1999C16.9921 89.2917 22.8436 93.5317 28.7223 91.9502L35.1889 90.2116C36.3512 89.8999 37.5902 90.302 38.3467 91.2378L42.5566 96.4455C46.3915 101.19 53.6167 101.18 57.4438 96.4455L61.6538 91.2378C62.41 90.3022 63.65 89.9001 64.8113 90.2116L71.2783 91.9502C77.1679 93.5352 83.0091 89.2796 83.3226 83.1999L83.6673 76.5125C83.7294 75.3109 84.4952 74.2566 85.6188 73.8263L91.8723 71.4318C97.5694 69.251 99.793 62.3764 96.4733 57.2731L92.8206 51.6601ZM89.5382 65.3358L83.2843 67.7303C79.7513 69.083 77.3427 72.3982 77.148 76.1761L76.8033 82.8636C76.7035 84.8013 74.8431 86.1489 72.9728 85.6466L66.5059 83.9079C62.8526 82.9251 58.9549 84.1921 56.577 87.1341L52.3675 92.3419C51.1478 93.8506 48.8501 93.8475 47.6327 92.3419L43.4232 87.1341C41.5798 84.8536 38.8236 83.5798 35.9756 83.5798C35.1496 83.5798 34.3156 83.6868 33.494 83.9079L27.027 85.6466C25.1528 86.1497 23.2966 84.7974 23.1966 82.8636L22.8518 76.1761C22.6571 72.3982 20.2483 69.0828 16.7155 67.7303L10.4617 65.3356C8.64976 64.6418 7.94293 62.4559 8.99878 60.833L12.6507 55.22C14.7138 52.0489 14.7138 47.9509 12.6507 44.7802L8.99878 39.1672C7.94059 37.541 8.65347 35.3568 10.4619 34.6644L16.7157 32.2699C20.2487 30.9172 22.6573 27.602 22.852 23.8241L23.1967 17.1366C23.2966 15.1989 25.1569 13.8513 27.0272 14.3536L33.4941 16.0923C37.1474 17.0749 41.0449 15.8081 43.423 12.8661L47.6329 7.65816C48.8527 6.14957 51.1505 6.1527 52.3675 7.65816L56.5774 12.8663C58.9559 15.8083 62.8526 17.0751 66.5063 16.0923L72.9732 14.3536C74.8472 13.8503 76.7037 15.2028 76.8037 17.1366L77.148 23.8241C77.3427 27.602 79.7515 30.9174 83.2843 32.2699L89.5384 34.6646C91.3501 35.358 92.0569 37.5443 91.0012 39.1672L87.3495 44.78C85.286 47.9509 85.286 52.0489 87.3493 55.22L91.0012 60.8329C92.059 62.4594 91.3465 64.6434 89.5382 65.3358Z"
                                fill="white"
                              ></path>
                              <path
                                d="M66.3053 33.3679C65.0309 32.0935 62.9643 32.0935 61.6897 33.3679L31.2278 63.8298C29.9533 65.1043 29.9533 67.1708 31.2279 68.4454C31.8653 69.0827 32.7006 69.4015 33.5357 69.4015C34.3709 69.4015 35.2064 69.0827 35.8435 68.4454L66.3055 37.9833C67.5801 36.7091 67.5801 34.6425 66.3053 33.3679Z"
                                fill="white"
                              ></path>
                              <path
                                d="M36.7994 32.4119C33.2 32.4119 30.2719 35.3402 30.2719 38.9394C30.2719 42.5388 33.2004 45.4669 36.7994 45.4669C40.3988 45.4669 43.3269 42.5386 43.3269 38.9394C43.3271 35.3402 40.3988 32.4119 36.7994 32.4119Z"
                                fill="white"
                              ></path>
                              <path
                                d="M60.7338 56.3463C57.1344 56.3463 54.2063 59.2746 54.2063 62.8738C54.2063 66.4732 57.1346 69.4013 60.7338 69.4013C64.333 69.4013 67.2613 66.473 67.2613 62.8738C67.2615 59.2746 64.3332 56.3463 60.7338 56.3463Z"
                                fill="white"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_3_13235">
                                <rect
                                  width="100"
                                  height="100"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span class="text-[12px]">โปรโมชั่น</span>
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
                  <div class="item active">
                    <a
                      class="router-link-active router-link-exact-active"
                      aria-current="page"
                    >
                      <div>
                        <span class="nuxt-icon text-[var(--primary)] gradientText text-[23px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_6112_2946)">
                              <path
                                d="M9.0579 15.4513L8.68967 17.6383C8.63948 17.9374 8.76216 18.2387 9.00695 18.4171C9.25211 18.5952 9.57766 18.619 9.84551 18.4786L11.8118 17.4522L13.7782 18.4788C13.8945 18.5392 14.022 18.5696 14.1481 18.5696C14.3133 18.5696 14.4781 18.5179 14.6171 18.4173C14.8621 18.2389 14.9852 17.9375 14.9346 17.6385L14.5668 15.4515L16.15 13.8983C16.3666 13.6863 16.4437 13.3697 16.3508 13.0817C16.2575 12.7938 16.0079 12.5831 15.7084 12.5389L13.5144 12.2135L12.5262 10.2274C12.3922 9.95626 12.1145 9.78455 11.8117 9.78455C11.5094 9.78455 11.2319 9.95626 11.0967 10.2274L10.1095 12.2135L7.91552 12.5387C7.61536 12.5829 7.36692 12.7937 7.27347 13.0815C7.18002 13.3696 7.25694 13.6864 7.47384 13.8982L9.0579 15.4513Z"
                                fill="url(#paint0_linear_6112_2946)"
                              ></path>
                              <path
                                d="M21.2413 2.55146H18.729V1.15796C18.729 0.518407 18.2106 0 17.5709 0H17.3872C16.7477 0 16.2295 0.518407 16.2295 1.15796V2.55146H7.36558V1.15796C7.36558 0.518407 6.84717 0 6.20781 0H6.02399C5.38444 0 4.86622 0.518407 4.86622 1.15796V2.55146H2.38321C1.06931 2.55146 -9.53674e-07 3.62039 -9.53674e-07 4.93468V21.617C-9.53674e-07 22.9305 1.06931 24.0002 2.38321 24.0002H21.2414C22.5552 24.0002 23.6247 22.9307 23.6247 21.617V4.93468C23.6245 3.62039 22.555 2.55146 21.2413 2.55146ZM20.9303 21.306H2.69414V8.3199H20.9303V21.306Z"
                                fill="url(#paint1_linear_6112_2946)"
                              ></path>
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_6112_2946"
                                x1="8.45506"
                                y1="11.2487"
                                x2="14.6725"
                                y2="17.7281"
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
                                id="paint1_linear_6112_2946"
                                x1="3.14995"
                                y1="4.00003"
                                x2="20.148"
                                y2="20.7321"
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
                              <clipPath id="clip0_6112_2946">
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
                          กระเป๋า
                        </span>
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
      {openModal1 &&
        createPortal(
          <ModalCredit closeModal={handleButtonClick1} />,
          document.body
        )}
      {openModal2 &&
        createPortal(
          <ShareLink closeModal={handleButtonClick2} />,
          document.body
        )}
      {openModal3 &&
        createPortal(
          <History closeModal={handleButtonClick3} />,
          document.body
        )}
    </body>
  );
}

export default Bag;
