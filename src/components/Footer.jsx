import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Constant from "../constant";
import { DataLocalStorage } from "../helper";
function Footer({ Active }) {
  const history = useHistory();
  const [contactUs, setContactUs] = useState("");
  const [activePageTab, setActivePageTab] = useState(Active);
  useEffect(() => {
    const userData = DataLocalStorage();
    const _configLobby = JSON.parse(localStorage.getItem(Constant.CONFIG_LOBBY));

    if (userData && _configLobby) {
      setContactUs(_configLobby?.s_line);
    }
  }, []);
  const _activePage = (value) => {
    setActivePageTab(value);
    if (value === "HOME") {
      history.push(Constant.AFTER_LOGIN);
      setActivePageTab(value);
    }
    if (value === "PROMOTION") {
      history.push(Constant.PROMOTION);
      setActivePageTab(value);
    }
    if (value === "BANK") {
      history.push(Constant.DEPOSIT_WITHDRAW);
      setActivePageTab(value);
    }
    if (value === "BAG") {
      history.push(Constant.BAG);
      setActivePageTab(value);
    }
  };

  return (
    <footer data-v-3c88d514="" className="fixed bottom-[-2px] w-full z-10">
      <footer
        data-v-3c88d514=""
        className="mx-auto bg-[transparent] fixed bottom-[-2px] footer h-[80px] w-full flex"
      >
        <div className="bg-wrapper w-full flex">
          <div className="w-full bg-gradient-wrapper"></div>
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
                <stop offset="1" stop-color="var(--balance-wrapper2)"></stop>
              </linearGradient>
              <clipPath id="clip0_6129_102583">
                <rect width="112" height="80" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="w-full bg-gradient-wrapper"></div>
        </div>
        <div className="navigate-wrapper">
          <div className="navigate-container md:max-w-[630px] base-container-small">
            <a
              onClick={() => _activePage("HOME")}
              className={
                activePageTab === "HOME"
                  ? "router-link-active router-link-exact-active item md:w-full"
                  : " item md:w-full"
              }
            >
              {activePageTab === "HOME" ? (
                <div>
                  <span className="nuxt-icon text-[var(--primary)] text-[23px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.25 8.6745V19.875C22.2494 20.4716 22.0122 21.0435 21.5903 21.4653C21.1685 21.8872 20.5966 22.1244 20 22.125H16.25C15.8522 22.125 15.4706 21.967 15.1893 21.6857C14.908 21.4044 14.75 21.0228 14.75 20.625V16.5C14.75 16.3011 14.671 16.1103 14.5303 15.9697C14.3897 15.829 14.1989 15.75 14 15.75H10.25C10.0511 15.75 9.86032 15.829 9.71967 15.9697C9.57902 16.1103 9.5 16.3011 9.5 16.5V20.625C9.5 21.0228 9.34196 21.4044 9.06066 21.6857C8.77936 21.967 8.39782 22.125 8 22.125H4.25C3.65345 22.1244 3.0815 21.8872 2.65967 21.4653C2.23784 21.0435 2.0006 20.4716 2 19.875V8.6745C2.00056 8.41548 2.06787 8.16098 2.19543 7.93555C2.32299 7.71012 2.5065 7.52136 2.72825 7.3875L11.3532 2.2125C11.5864 2.07256 11.8532 1.99863 12.1252 1.99863C12.3971 1.99863 12.664 2.07256 12.8971 2.2125L21.5221 7.3875C21.7438 7.52141 21.9272 7.71018 22.0547 7.93561C22.1822 8.16104 22.2495 8.41552 22.25 8.6745Z"
                        fill="url(#paint0_linear_6112_2814)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_6112_2814"
                          x1="4.7"
                          y1="5.35302"
                          x2="18.9559"
                          y2="19.6965"
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
                  <span className="text-[12px] gradientText text-[var(--primary)]">
                    หน้าหลัก
                  </span>
                </div>
              ) : (
                <div>
                  <span className="nuxt-icon text-[23px]">
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
                  <span className="text-[12px]">หน้าหลัก</span>
                </div>
              )}
            </a>
            <div
              onClick={() => _activePage("PROMOTION")}
              className={activePageTab === "PROMOTION" ? "item active" : "item"}
            >
              {activePageTab === "PROMOTION" ? (
                <a
                  className="router-link-active router-link-exact-active"
                  aria-current="page"
                >
                  <div>
                    <span className="nuxt-icon text-[23px]">
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
                            <rect width="24" height="24" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-[var(--primary)] gradientText text-[12px]">
                      โปรโมชั่น
                    </span>
                  </div>
                </a>
              ) : (
                <a className="">
                  <div>
                    <span className="nuxt-icon text-[23px]">
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
                            <rect width="100" height="100" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-[12px]">โปรโมชั่น</span>
                  </div>
                </a>
              )}
            </div>
            <a
              onClick={() => _activePage("BANK")}
              className="w-[calc(100%/5)] md:w-[unset]"
            >
              <div className="item">
                <div className="main-icon">
                  <span className="nuxt-icon animate__animated animate__tada animate__delay-2s animate__infinite text-[var(--main-icon-color)] transfer-Icon">
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
                <span
                  className={
                    activePageTab === "BANK"
                      ? "text-[var(--primary)] gradientText text-[12px]"
                      : "text-[12px]"
                  }
                >
                  ฝาก/ถอน
                </span>
              </div>
            </a>
            <div
              onClick={() => _activePage("BAG")}
              className={activePageTab === "BAG" ? "item active" : "item"}
            >
              {activePageTab === "BAG" ? (
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
                            <rect width="24" height="24" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span class="text-[var(--primary)] gradientText text-[12px]">
                      กระเป่า
                    </span>
                  </div>
                </a>
              ) : (
                <a className="">
                  <div>
                    <span className="nuxt-icon text-[23px]">
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
                    <span className="text-[12px]">กระเป๋า</span>
                  </div>
                </a>
              )}
            </div>
            <div className="item">
              <div className="">
                <a href={contactUs} className="">
                  <div className="relative">
                    <span className="nuxt-icon nuxt-icon--fill text-[23px]">
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
                            <stop offset="0.5" stop-color="#F6DB96"></stop>
                            <stop offset="1" stop-color="#9B7A24"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-[12px]">ติดต่อแอดมิน</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
