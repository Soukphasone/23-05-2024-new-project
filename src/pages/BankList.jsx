import React from "react";
import Header from "../components/Header";
import Letter_slide from "../components/Letter_slide";
// import { useNavigate } from "react-router-dom";
import FooterDW from "../components/FooterDW";
function BankList() {
  // const navigate = useNavigate();
  const NextoHome = () => {
    // navigate("/");
  };
  const NextoPromotion = () => {
    // navigate("/promotion");
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
              <div class="base-container-small">
                <div
                  data-v-fe9de6ba=""
                  class="breadcrumb-wrapper py-3 w-max overflow-hidden"
                >
                  <span
                    data-v-fe9de6ba=""
                    class="breadcrumb-wrapper__item font-medium text-sm cursor-pointer flex-shrink-0"
                  >
                    เติมเงิน
                  </span>
                  <span
                    data-v-fe9de6ba=""
                    class="breadcrumb-wrapper__item font-medium text-sm text-primary"
                  >
                    SCB
                  </span>
                </div>
                <div class="p-4 rounded-base space-y-4 bg-[var(--card-primary)]">
                  <div data-v-ea58f736="" id="depositTab" class="w-full">
                    <div data-v-ea58f736="" class="tabsWrapper w-full">
                      <div
                        data-v-ea58f736=""
                        class="tabs relative flex items-center justify-center tab-secondary w-full"
                      >
                        <div
                          data-v-ea58f736=""
                          class="w-full absolute bottom-0 left-0 rounded-full slide depositTab"
                          style={{ width: '608px', left: '0px' }}
                        ></div>
                        <div
                          data-v-ea58f736=""
                          class="w-full absolute bottom-0 left-0 rounded-full slide-border depositTab"
                        ></div>
                        <div
                          data-v-ea58f736=""
                          id="depositTab"
                          class="tabslinks relative cursor-pointer flex items-center justify-center accounting w-full active"
                        >
                          <span
                            data-v-ea58f736=""
                            class="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                          >
                            โอนแบบบัญชี
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="w-full h-[34px] flex items-center gap-x-2 justify-center bg-card-secondary rounded-[5px] p-2 &lt;sm:h-auto &lt;sm:text-center &lt;sm:justify-start &lt;sm:p-2">
                      <p class="text-danger text-lg font-bold">
                        {" "}
                        เติมเงินขั้นต่ำ 1 บาท{" "}
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
                    <div class="flex flex-col items-center justify-center w-full rounded-base bg-card-primary text-center mt-4">
                      <div class="flex flex-row w-full justify-between">
                        <div class="flex flex-col">
                          <p class="text-active text-sm">บัญชีที่ต้องโอน: </p>
                          <div class="w-[45px] h-[45px] mt-4 text-white">
                            <div
                              style={{ backgroundColor: 'rgb(78, 46, 127)' }}
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
                                  <path
                                    fill="#FFFFFF"
                                    d="M8.2,107.6c9.2,4.3,18.4,8.7,27.6,13.1c0.4,0.3,1.1,0.3,1.6,0.3c7,0,14,0,21,0c1.2,0,1.4-0.4,1.4-1.5
      c-0.1-6.2,0-12.4,0-18.6c0-0.4-0.1-0.6-0.1-1.2c-0.5,0.3-1,0.4-1.4,0.6c-6.4,2.8-13,5.1-20.2,4.2c-2.8-0.4-5.3-1.3-7.4-3.3
      c-3.7-3.5-4.7-8.1-4.8-12.9c-0.1-4,0.3-8,0.8-12c0.5-4.7,1.7-9.2,3.7-13.5c5.3-11.7,13.1-21.7,22.3-30.5c3-2.9,6.6-5.2,10-7.8
      c0.8-0.6,1.6-0.6,2.5,0c2.7,2,5.5,3.8,8,5.9c6.5,5.7,12,12.2,16.8,19.3c4.9,7.1,9,14.7,10.6,23.3c1.2,6.3,2,12.7,0.9,19.1
      c-1.6,8.6-6.7,12.3-14.4,12.5c-3.8,0.1-7.5-0.7-11.1-2c-2.6-0.9-5.2-2-7.8-3c0,0.4,0,0.6,0,0.9c0,6.2,0,12.4,0,18.5
      c0,1.3,0.4,1.6,1.7,1.6c6.8-0.1,13.5,0,20.3-0.1c0.9,0,1.8-0.3,2.6-0.6c8.9-4.2,17.8-8.5,26.6-12.7c1.8-0.9,1.8-0.8,1.3-2.8
      c-5-19.6-9.9-39.1-14.9-58.7c-0.2-0.6-0.5-1.3-1.1-1.9c-2-2-4.1-3.9-6.1-5.8c-3.9-3.6-7.8-7.2-11.8-10.8
      c-5.3-4.8-10.5-9.5-15.8-14.4c-2-1.9-4.2-3.8-6.2-5.8c-0.7-0.6-1.2-0.6-1.9,0.1c-0.9,0.9-1.9,1.7-2.8,2.5
      c-4.1,3.8-8.2,7.6-12.3,11.3c-4.4,4-8.7,8-13.2,12c-3.2,2.9-6.4,5.8-9.6,8.7c-1.2,1.2-2.7,2.2-3.2,4.1c-4.9,19.5-9.8,39.1-14.8,58.6
      C6.8,106.4,7,107.1,8.2,107.6z"
                                  ></path>
                                </svg> */}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="text-right">
                          <p class="text-sm">ไทยพาณิชย์</p>
                          <p class="text-lg mt-2 text-active font-bold">
                            438-1-79069-9
                          </p>
                          <p class="text-sm mt-[10px]">อัยการต์ อรัณยกานนท์</p>
                        </div>
                      </div>
                      <button
                        data-v-9dec3a92=""
                        id="btn01"
                        type="submit"
                        class="base-button-wrapper v-rounded btn-primary btn-md mt-4 font-medium text-base cursor-pointer border border-fontPrimary w-full rounded-base btn-primary h-[38px] flex items-center justify-center"
                      >
                        <div
                          data-v-9dec3a92=""
                          class="flex justify-center items-center"
                        >
                          คัดลอกบัญชี
                        </div>
                      </button>
                    </div>
                    <div class="h-[1px] mt-4 bg-[#38383A]"></div>
                  </div>
                </div>
                {/* <div
                  data-v-c89fa524=""
                  class="history-card light-theme-box-shadow bg-card-primary card-wrapper py-3 flex justify-between items-center cursor-pointer my-4"
                >
                  <div
                    data-v-c89fa524=""
                    class="&lt;sm:text-base sm:text-base md:text-lg"
                  >
                    ประวัติการเติมเงิน
                  </div>
                  <span data-v-c89fa524="" class="nuxt-icon text-[22px]">
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
                </div> */}
              </div>
            </div>
          </main>
          <FooterDW />
        </div>
      </div>
    </body>
  );
}

export default BankList;
