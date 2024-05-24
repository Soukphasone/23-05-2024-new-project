import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Letter_slide from "../../components/Letter_slide";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Constant from "../../constant";
import _LoginController from "../../api/login";
import { FillerCategory, FillerCategory2 } from "../../helper";
import { showSuccessAlert } from "../../helper/SweetAlert";

import { OpenNewTabWithHTML } from "../../helper";
function GameType() {
  const history = useHistory();
  const [deviceType, setDeviceType] = useState(false);
  const typeGame = history?.location?.state;
  const [dataGameList, setDataGameList] = useState([]);
  const [categoryGame, setCategoryGame] = useState([]);
  const [activeTypeGame, setActiveTypeGame] = useState("");
  const [percentageData, setPercentageData] = useState([]);
  useEffect(() => {
    _clickCategoryGame(typeGame?.type);
    _getDataGame(typeGame?.dataGame);
    setActiveTypeGame(typeGame?.dataGame?.s_brand_name);
  }, []);
  useEffect(() => {
    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
      const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
      } else if ("orientation" in window) {
        hasTouchScreen = true; // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = navigator.userAgent;
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }
    if (hasTouchScreen) {
      setDeviceType("Mobile");
      // console.log("Mobile: ");
    } else {
      setDeviceType("Desktop");
      // console.log("Desktop: ");
    }
  }, []);

  const _clickCategoryGame = async (value) => {
    FillerCategory2(value, setCategoryGame);
  };

  const _getDataGame = async (value, activeTypeGame) => {
    if (value?.s_brand_name === undefined) {
      setActiveTypeGame(activeTypeGame);
    } else {
      setActiveTypeGame(value?.s_brand_name);
    }
    const _res = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Game/ListGame`,
      data: {
        s_agent_code: Constant.AGENT_CODE,
        s_brand_code: value?.s_brand_code,
        s_username: typeGame?.dataFromLogin?.username,
      },
    });
    if (_res?.data?.statusCode === 0) {
      setDataGameList(_res?.data?.data);
      let dataLength = _res?.data?.data?.length;
      generatePercentageData(dataLength);
      const intervalId = setInterval(() => {
        generatePercentageData(dataLength);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  };
  const _getDataGamePlayGame = async (value) => {
    try {
      const _data = {
        s_game_code:
          value?.s_type === "CASINO"
            ? "B001"
            : value?.s_type === "SPORT"
              ? "B001"
              : value?.s_game_code,
        s_brand_code: value?.s_brand_code,
        s_username: typeGame?.dataFromLogin?.username,
        s_agent_code: Constant?.AGENT_CODE,
        isMobile: deviceType === "Mobile" ? "true" : "false",
        ip_client: "184.22.14.167",
        s_lang: "th",
      };
      // Send the data to the server to get the game URL
      const _res = await axios({
        method: "post",
        url: `${Constant.SERVER_URL}/Game/Access`,
        data: _data,
      });

      if (_res?.data?.url) {
        setTimeout(() => {
          window.open(_res?.data?.url, "_blank");
        });
      }
      if (_res?.data?.res_html) {
        setTimeout(() => {
          OpenNewTabWithHTML(_res?.data?.res_html);
        });
      }
    } catch (error) {
      console.error("Error playing the game:", error);
    }
  };
  const _addFavorite = async (value, activeTypeGame) => {
    const _getData = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Favorite/Select`,
      data: {
        s_agent_code: Constant.AGENT_CODE,
        s_username: typeGame?.dataFromLogin?.username,
        id_favorite: value?.id_favorite,
        actionBy: "ADM",
      },
    });

    if (_getData?.data?.statusCode === 0) {
      _getDataGame(value, activeTypeGame);
    }
  };
  const generatePercentageData = (count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const percentage = Math.random();
      data.push({ percentage: percentage });
    }
    setPercentageData(data);
  };
  // const _selectFavorite = async (event) => {
  //   const result_sl = event.target.value;
  //   if (result_sl === "fav") {
  //     const _getData = await axios({
  //       method: "post",
  //       url: `${Constant.SERVER_URL}/Game/Brand/List`,
  //       data: {
  //         s_agent_code: typeGame?.dataFromLogin?.agent,
  //         s_username: typeGame?.dataFromLogin?.username,
  //       },
  //     });
  //     if (_getData?.data?.statusCode === 0) {
  //       setCategoryGame1(_getData?.data?.data?.FAVORITE);
  //     }
  //   } else {
  //     // _clickCategoryGame("ALL");
  //   }
  // };
  const _selectFavorite = (event) => {
    const result_sl = event.target.value;
    if (result_sl === "fav") {
      let filteredData = dataGameList.filter(
        (game) => game?.s_flg_favorite === "Y"
      );
      setDataGameList(filteredData);

    }
    else {
      _clickCategoryGame(typeGame?.type);
      _getDataGame(typeGame?.dataGame);
      setActiveTypeGame(typeGame?.dataGame?.s_brand_name);
    }

  };
  const _copyAccountNo = (accountNo) => {
    navigator.clipboard.writeText(accountNo);
    showSuccessAlert("สำเร็จ");
  };
  return (
    <body className="overflow-x-hidden overflow-y-auto text-primary" style={{}}>
      <div id="__nuxt" data-v-app="">
        <div data-v-3c88d514="">
          <Header />
          <main
            data-v-3c88d514=""
            className="min-h-screen overflow-scroll pb-[80px]"
          >
            <div
              data-v-3c88d514=""
              className="w-full mx-auto base-container pb-2"
            >
              {/* <Letter_slide /> */}

              <div 
              style={{ marginTop: "6rem" }}
              className="mb-24">
                <div data-v-db4e30f1="">
                 <div
                    data-v-db4e30f1=""
                    className="splide is-overflow is-initialized splide--slide splide--ltr splide--draggable is-active"
                  >
                    <div
                      className="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
                      id="splide44-track"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      <ul
                        style={{overflowX:'scroll'}}
                        className="splide__list"
                        id="splide44-list"
                        role="presentation"
                      >
                        {categoryGame?.length > 0 &&
                          categoryGame?.map((item, index) => (
                            <li
                              key={index}
                              data-v-db4e30f1=""
                              className="splide__slide is-active is-visible"
                              id="splide44-slide01"
                              aria-roledescription="slide"
                              aria-label="1 of 61"
                              style={{ marginRight: "4px"}}
                              onClick={() => _getDataGame(item)}
                            >
                              <div
                                data-v-2d0393e3=""
                                data-v-db4e30f1=""
                                className="animate__animated animate__fadeInUp animate__faster"
                              >
                                <div
                                  data-v-2d0393e3=""
                                  style={{
                                    border:
                                      activeTypeGame === item?.s_brand_name
                                        ? "1px solid #ffe1a6"
                                        : "",
                                  }}
                                  className="active w-[60px] cursor-pointer relative grid place-content-center rounded-full bg-card-primary h-[60px]"
                                >
                                  <div
                                    data-v-2d0393e3=""
                                    className="absolute text-[10px] top-0 overflow-hidden flex items-center w-full justify-center"
                                  >
                                    <span
                                      data-v-2d0393e3=""
                                      className="w-[25px] bg-card-danger text-white rounded-[3px] max-h-[16px] text-center"
                                    >
                                      ฮิต!
                                    </span>
                                  </div>
                                  <img
                                    data-v-2d0393e3=""
                                    src={item?.s_lobby_url}
                                    alt="provider"
                                    data-nuxt-img=""
                                    className="rounded-base p-2 h-auto"
                                  />
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                  </div>
                 </div>
                  <div
                    data-v-db4e30f1=""
                    className="w-full flex gap-4 mt-3 justify-center items-start mb-4"
                  >
                    <div className="relative w-full">
                      <select
                        className="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12"
                        id="nuid-1"
                        onChange={_selectFavorite}
                      >
                        <option
                          value="all"
                        >
                          หมวดหมู่เกม
                        </option>
                        <option value="fav">เกมโปรด</option>
                      </select>
                      <span className="absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5 pe-3.5">
                        <span
                          className="i-heroicons-chevron-down-20-solid flex-shrink-0 dark:text-gray-500 flex-shrink-0 text-gray-400 dark:text-primary-400 text-primary-500 h-6 w-6"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                    <div data-v-db4e30f1="" className="!w-full relative">
                      <div
                        data-v-d0ca5c5c=""
                        data-v-db4e30f1=""
                        className="input-sm base-input-wrapper w-full mb-1 input-primary !w-full"
                        id="username"
                      >
                        <span
                          data-v-d0ca5c5c=""
                          className="text-sm mb-1 relative"
                        ></span>
                        <div
                          data-v-d0ca5c5c=""
                          className="main-input !bg-[var(--input-bg)] text-[var(--primary)] w-full rounded-[10px] flex items-center"
                        >
                          <div
                            data-v-d0ca5c5c=""
                            className="flex justify-center -mt-2 items-center pointer-events-none mr-2"
                          >
                            <span
                              data-v-d0ca5c5c=""
                              className="nuxt-icon text-5xl mt-2 text-[var(--input-password-icon)] cursor-pointer icon-search"
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
                            className="w-full h-full text-base !bg-[var(--input-bg)] text-primary outline-none placeholder-[var(--input-placeholder)]"
                            type="text"
                            placeholder="ค้นหาเกม"
                            autocomplete=""
                            maxlength="false"
                          />
                        </div>
                        <div data-v-d0ca5c5c="" className=""></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-db4e30f1=""
                    className="w-full auto-rows-max gap-2 grid &lt;xs:grid-cols-2 &lt;sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6"
                  >
                    {dataGameList.length > 0 &&
                      dataGameList?.map((game, index) => (
                        <div
                          key={game?.index}
                          data-v-db4e30f1=""
                          className="animate__animated animate__fadeInUp animate__faster"
                        >
                          <div className="percentage">
                            <p style={{padding:'3px'}}>RTP{" "}
                            {(percentageData[index]?.percentage * 100).toFixed(
                              2
                            )}{" "}
                            %</p>
                          </div>
                          <div className="min-h-14 relative cursor-pointer">
                            <img
                              onClick={() => _getDataGamePlayGame(game)}
                              src={game?.s_img}
                              alt="img-cover"
                              loading="lazy"
                              data-nuxt-img=""
                              draggable="false"
                              className="rounded-base z-[9] w-full relative min-h-26"
                            />

                            <div className="absolute z-[20] flex flex-col space-y-1 text-center text-[10px] top-0 right-2">
                              <span
                                onClick={() =>
                                  _addFavorite(game, activeTypeGame)
                                }
                                onKeyDown={() => ""}
                                className={
                                  game?.s_flg_favorite === "Y"
                                    ? "nuxt-icon nuxt-icon--fill text-danger text-2xl"
                                    : "nuxt-icon text-2xl"
                                }
                              >
                                <div className="favorite-svg">
                                  <svg
                                    className="icon-svg"
                                    width="23"
                                    height="20"
                                    viewBox="0 0 23 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g filter="url(#filter0_d_365_17196)">
                                      <path
                                        d="M15.376 3.00014C17.9246 3.01262 19.9876 5.08783 20 7.65157C20 12.3486 11.5 17 11.5 17C11.5 17 3 12.2802 3 7.65157C3 5.08268 5.07022 3.00014 7.62401 3.00014C9.18728 2.98788 10.6488 3.77881 11.5 5.09782C12.3571 3.78523 13.8148 2.99634 15.376 3.00014Z"
                                        fill="#ECECEC"
                                        fill-opacity="0.4"
                                        shape-rendering="crispEdges"
                                      ></path>
                                      <path
                                        d="M11.6122 16.3597C11.5723 16.3832 11.5354 16.4046 11.5017 16.4241C11.4678 16.4042 11.4305 16.3823 11.3902 16.3583C11.1624 16.223 10.8357 16.0238 10.4432 15.7702C9.65718 15.2624 8.61175 14.5394 7.56878 13.6763C6.52338 12.8112 5.49524 11.8174 4.7322 10.7705C3.96516 9.71802 3.5 8.65855 3.5 7.65157C3.5 5.35603 5.34915 3.50014 7.62401 3.50016L7.62794 3.50013C9.01913 3.48921 10.321 4.19306 11.0799 5.36895L11.4976 6.0161L11.9187 5.37119C12.6835 4.19983 13.9833 3.49697 15.3741 3.50014C17.6451 3.51158 19.4883 5.3613 19.5 7.6528C19.4996 8.67793 19.0333 9.74596 18.2674 10.7999C17.5047 11.8494 16.4771 12.8406 15.4322 13.7012C14.3896 14.5598 13.3446 15.2762 12.5588 15.7786C12.1664 16.0294 11.8399 16.2261 11.6122 16.3597Z"
                                        stroke="#ECECEC"
                                        shape-rendering="crispEdges"
                                      ></path>
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d_365_17196"
                                        x="0"
                                        y="0"
                                        width="23"
                                        height="20"
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
                                        <feOffset></feOffset>
                                        <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                        <feComposite
                                          in2="hardAlpha"
                                          operator="out"
                                        ></feComposite>
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                                        ></feColorMatrix>
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_365_17196"
                                        ></feBlend>
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropShadow_365_17196"
                                          result="shape"
                                        ></feBlend>
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                              </span>
                            </div>
                            <p className="text-xs text-secondary text-center">
                              {game?.s_game_name}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default GameType;
