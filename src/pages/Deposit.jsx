import React from "react";
import Header from "../components/Header";
import Letter_slide from "../components/Letter_slide";
// import { useNavigate } from "react-router-dom";
import FooterDW from "../components/FooterDW";
function Deposit() {
  // const navigate = useNavigate();
  const NextoBankList = () => {
    // navigate("/bank/deposit/banklist");
  };
  const NextoPromotion = () => {
    // navigate("/promotion");
  };
  const NextoBag = () => {
    // navigate("/bag");
  };
  const NextoHome = () => {
    // navigate("/");
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
              <div class="base-container-small">
                <div class="flex flex-col items-center space-y-3 justify-center w-full rounded-base bg-card-primary p-4 text-center">
                  <span class="text-base text-active">เลือกธนาคาร</span>
                  <div
                    onClick={NextoBankList}
                    class="flex flex-row cursor-pointer w-full h-[60px] rounded-[5px] overflow-hidden bg-card-secondary px-[10px] items-center justify-between"
                  >
                    <div class="w-[45px] h-[45px]">
                      <div
                        style={{ backgroundColor: "rgb(78, 46, 127)" }}
                        class="w-[45px] h-[45px] rounded-base overflow-hidden grid place-content-center"
                      >
                        <span
                          class="nuxt-icon text-[2.4rem] text-white"
                          id="scb"
                        >
                          {/* <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 128 128"
                            enable-background="new 0 0 128 128"
                            xml:space="preserve"
                          >

                          </svg> */}
                        </span>
                      </div>
                    </div>
                    <p class="text-sm">ไทยพาณิชย์</p>
                    <div class="">
                      <span class="nuxt-icon nuxt-icon--fill">
                        <svg
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.631342 11.9047L0.0951745 11.3682C-0.0317249 11.2413 -0.0317249 11.0354 0.0951744 10.9084L4.9886 6L0.0951736 1.09165C-0.0317258 0.964665 -0.0317258 0.758771 0.0951735 0.631761L0.631341 0.0952377C0.75824 -0.031746 0.963998 -0.031746 1.09092 0.0952376L6.76197 5.77004C6.88887 5.89703 6.88887 6.10292 6.76197 6.22993L1.09093 11.9047C0.963999 12.0318 0.758241 12.0318 0.631342 11.9047Z"
                            fill="#ECECEC"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="flex flex-row cursor-pointer w-full h-[60px] rounded-[5px] overflow-hidden bg-card-secondary px-[10px] items-center justify-between">
                    <div class="w-[45px] h-[45px]">
                      <div
                        style={{ backgroundColor: "rgb(236, 240, 241)" }}
                        class="w-[45px] h-[45px] rounded-base overflow-hidden grid place-content-center"
                      >
                        <span
                          class="nuxt-icon text-[2.4rem] text-white"
                          id="tmw"
                        >
                          <svg
                            width="371"
                            height="371"
                            viewBox="0 0 371 371"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                          >
                            <rect
                              width="371"
                              height="371"
                              fill="url(#pattern0)"
                            ></rect>
                            <defs>
                              {/* <pattern
                                id="pattern0"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                              >
                                <use
                                  xlink:href="#image0_5_3"
                                  transform="scale(0.00195312)"
                                ></use>
                              </pattern> */}
                              <image
                                id="image0_5_3"
                                width="512"
                                height="512"
                              ></image>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p class="text-sm">ทรูมันนี่ วอลเล็ท</p>
                    <div class="">
                      <span class="nuxt-icon nuxt-icon--fill">
                        <svg
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.631342 11.9047L0.0951745 11.3682C-0.0317249 11.2413 -0.0317249 11.0354 0.0951744 10.9084L4.9886 6L0.0951736 1.09165C-0.0317258 0.964665 -0.0317258 0.758771 0.0951735 0.631761L0.631341 0.0952377C0.75824 -0.031746 0.963998 -0.031746 1.09092 0.0952376L6.76197 5.77004C6.88887 5.89703 6.88887 6.10292 6.76197 6.22993L1.09093 11.9047C0.963999 12.0318 0.758241 12.0318 0.631342 11.9047Z"
                            fill="#ECECEC"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col items-center justify-center w-full rounded-base bg-card-primary text-center mt-4 p-4">
                  <div class="flex flex-row w-full justify-between">
                    <div class="flex flex-col">
                      <p class="text-sm">บัญชีของคุณ: </p>
                      <div class="w-[45px] h-[45px] mt-4 text-white">
                        <div
                          style={{ backgroundColor: "rgb(19, 143, 45)" }}
                          class="w-[45px] h-[45px] rounded-base overflow-hidden grid place-content-center"
                        >
                          <span
                            class="nuxt-icon text-[2.4rem] text-white"
                            id="kbank"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm">ธนาคาร กสิกรไทย จำกัด (มหาชน)</p>
                      <p class="text-lg mt-2 text-active font-bold">
                        038-1-23162-3
                      </p>
                      <p class="text-sm mt-[10px]">test test111</p>
                    </div>
                  </div>
                  <div class="w-full h-[34px] flex items-center gap-x-2 justify-center bg-card-secondary rounded-[5px] p-2 &lt;sm:h-auto &lt;sm:text-center &lt;sm:justify-start &lt;sm:p-2 mt-4">
                    <p class="text-danger text-lg font-bold">
                      “กรุณาใช้บัญชีที่ท่านสมัครโอนมาเท่านั้น”
                    </p>
                    <span class="nuxt-icon nuxt-icon--fill text-danger">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
                          fill="#D72F3C"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterDW />
        </div>
      </div>
    </body>
  );
}

export default Deposit;
