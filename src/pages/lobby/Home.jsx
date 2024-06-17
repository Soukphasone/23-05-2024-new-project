import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image_slide from "../../components/image_slide";
import Constant from "../../constant";
import { useHistory } from "react-router-dom";
import _LoginController from "../../api/login";
import {
  FillerCategory,
  OpenNewTabWithHTML,
  DataLocalStorage, TokenLocalStorage
} from "../../helper";
import { useTranslation } from "react-i18next";

function HomePage() {
  //
  const history = useHistory();
  const home = "HOME";
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [categoryGame, setCategoryGame] = useState([]);
  const [deviceType, setDeviceType] = useState(false);
  const [dataGameType, setDataGameType] = useState("SLOT"); // FAVORITE || HOTHIT
  const [activeCategory, setActiveCategory] = useState("ALL");
  const { t } = useTranslation();

  const gameType = (TypeGame) => {
    history.push(Constant.TYPE_GAME, TypeGame);
  };
  useEffect(() => {
    const _dataUser = DataLocalStorage();
    const _Token = TokenLocalStorage();
    // console.log("Token", _Token)
    if (_dataUser)
      setDataFromLogin(_dataUser);
  }, []);

  useEffect(() => {
    _clickCategoryGame("ALL");
  }, [dataFromLogin]);

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
    // console.log("CATEGORY_ACTIVE: ", value);
    setActiveCategory(value);
    setDataGameType(value);
    FillerCategory(value, setCategoryGame);
  };
  // const _selectFavorite = async (event) => {
  //   const result_sl = event.target.value;
  //   console.log("Choose", result_sl);
  //   setSelectedFav(result_sl)
  //   if (result_sl === "fav") {
  //     setDataGameType("FAVORITE");
  //     const _getData = await axios({
  //       method: "post",
  //       url: `${Constant.SERVER_URL}/Game/Brand/List`,
  //       data: {
  //         s_agent_code: dataFromLogin?.agent,
  //         s_username: dataFromLogin?.username,
  //       },
  //     });
  //     if (_getData?.data?.statusCode === 0) {
  //       setCategoryGame(_getData?.data?.data?.FAVORITE);
  //     }
  //   } else {
  //     _clickCategoryGame("ALL");
  //   }
  // };

  const _getDataGame = async (value) => {
    // console.log("Value get game 1: ", value)
    if (value?.s_type === "CASINO" || value?.s_type === "SPORT") {
      _getDataGamePlayGame(value);
    } else {
      gameType({
        type: value?.s_type,
        dataGame: value,
        dataFromLogin: dataFromLogin,
      });
    }
  };

  const _getDataGamePlayGame = async (value) => {
    console.log("PLAY_GAME_HOME", value)
    try {
      const _data = {
        s_game_code:
          value?.s_type === "CASINO"
            ? "B001"
            : value?.s_type === "SPORT"
              ? "B001"
              : value?.s_game_code,
        s_brand_code: value?.s_brand_code,
        s_username: dataFromLogin?.username,
        s_agent_code: Constant?.AGENT_CODE,
        isMobile: deviceType === "Mobile" ? "true" : "false",
        ip_client: "184.22.14.167",
        s_lang: "th",
      };
      console.log("Fishing_game", _data)
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
  return (
    <div className="overflow-x-hidden overflow-y-auto text-primary">
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
              <div className="flex flex-col gap-y-2">
                <Image_slide />
                <div style={{ marginTop: '2px' }} className="text-[red] flex space-x-2">
                  {/* <div className="relative w-full">
                    <select
                      className="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12"
                      id="nuid-1"
                      value={selectedFav}
                      onChange={_selectFavorite}
                    >
                      <option value="">
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
                  </div> */}
                </div>
                <div>
                  <div className="flex-row flex">
                    <div className="block">
                      <div className="space-y-2 mr-2">
                        <div
                          onClick={() => _clickCategoryGame("ALL")}
                          data-v-d320b445=""
                          className={
                            activeCategory === "ALL"
                              ? "borderGradient w-full gradient-border"
                              : " w-full gradient-border"
                          }
                        >
                          <a
                            aria-current="page"
                            className={
                              activeCategory === "ALL"
                                ? "router-link-active router-link-exact-active gradient-box rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                                : "rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                            }
                          >
                            <span className="nuxt-icon nuxt-icon--fill my-1">
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
                                    <rect
                                      width="20"
                                      height="20"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <p className="text-sm text-center">{t("MainPage")}</p>
                          </a>
                        </div>
                        <div
                          data-v-d320b445=""
                          className={
                            activeCategory === "SLOT"
                              ? "borderGradient w-full gradient-border"
                              : " w-full gradient-border"
                          }
                          onClick={() => _clickCategoryGame("SLOT")}
                        >
                          <a
                            className={
                              activeCategory === "SLOT"
                                ? "router-link-active router-link-exact-active gradient-box rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                                : "rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                            }
                          >
                            <span className="nuxt-icon nuxt-icon--fill my-1">
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
                            <p className="text-sm text-center">{t("Slot")}</p>
                          </a>
                        </div>
                        <div
                          data-v-d320b445=""
                          className={
                            activeCategory === "CASINO"
                              ? "borderGradient w-full gradient-border"
                              : " w-full gradient-border"
                          }
                          onClick={() => _clickCategoryGame("CASINO")}
                        >
                          <a
                            className={
                              activeCategory === "CASINO"
                                ? "router-link-active router-link-exact-active gradient-box rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                                : "rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                            }
                          >
                            <span className="nuxt-icon nuxt-icon--fill my-1">
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
                            <p className="text-sm text-center">{t("Casino")}</p>
                          </a>
                        </div>
                        <div
                          data-v-d320b445=""
                          className={
                            activeCategory === "SPORT"
                              ? "borderGradient w-full gradient-border"
                              : " w-full gradient-border"
                          }
                          onClick={() => _clickCategoryGame("SPORT")}
                        >
                          <a
                            className={
                              activeCategory === "SPORT"
                                ? "router-link-active router-link-exact-active gradient-box rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                                : "rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                            }
                          >
                            <span className="nuxt-icon nuxt-icon--fill my-1">
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
                                    <rect
                                      width="20"
                                      height="20"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <p className="text-sm text-center">{t("Sport")}</p>
                          </a>
                        </div>
                        <div
                          data-v-d320b445=""
                          className={
                            activeCategory === "FISHING"
                              ? "borderGradient w-full gradient-border"
                              : " w-full gradient-border"
                          }
                          onClick={() => _clickCategoryGame("FISHING")}
                        >
                          <a
                            className={
                              activeCategory === "FISHING"
                                ? "router-link-active router-link-exact-active gradient-box rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                                : "rounded-[10px] text-[var(--input-disabled)] flex flex-col items-center justify-center w-[60px] h-[55px] md:w-[4.125rem] md:h-[3.5rem]"
                            }
                          >
                            <span className="nuxt-icon nuxt-icon--fill my-1">
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
                            <p className="text-sm text-center">{t("Fishing")}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-full auto-rows-max gap-2 grid grid-cols-2 @xs:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 lg:grid-cols-6">
                      {categoryGame?.length > 0 &&
                        categoryGame?.map((item, index) => (
                          <div
                            key={item?.index}
                            className="z-1 min-h-14 cursor-pointer animate__animated animate__fadeInUp animate__faster relative overflow-hidden rounded-[10px]"
                          >
                            {item?.s_img !== undefined ? (
                              <img
                                src={item?.s_img}
                                alt="img-cover"
                                loading="lazy"
                                data-nuxt-img=""
                                className="w-full providerCard min-h-14 relative rounded-base"
                                onKeyDown={() => ""}
                                onClick={() =>
                                  dataGameType === "FAVORITE" ||
                                    // dataGameType === "HOTHIT" ||
                                    dataGameType === "FISHING"
                                    ? _getDataGamePlayGame(item, "FISHING")
                                    : _getDataGame(item)
                                }
                              />
                            ) : (
                              <img
                                src={item?.s_lobby_url}
                                alt="img-cover"
                                loading="lazy"
                                data-nuxt-img=""
                                className="w-full providerCard min-h-14 relative rounded-base"
                                onKeyDown={() => ""}
                                onClick={() =>
                                  dataGameType === "FAVORITE"
                                    ? // dataGameType === "HOTHIT"
                                    _getDataGamePlayGame(item)
                                    : _getDataGame(item)
                                }
                              />
                            )}
                            {item?.s_img !== undefined &&
                              item?.status === "Y" ? (
                              <div className="absolute z-[20] flex flex-col space-y-1 text-center text-[10px] top-0 right-2">
                                <span
                                  // onClick={() =>
                                  //   _addFavorite(game, activeTypeGame)
                                  // }
                                  onKeyDown={() => ""}
                                  className="nuxt-icon nuxt-icon--fill text-danger text-2xl"
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
                            ) : (
                              ""
                            )}
                            {item?.s_img !== undefined ? (
                              ""
                            ) : (
                              <div className="absolute flex flex-col space-y-1 w-max h-[16px] text-center text-[10px] bottom-8 left-3">
                                <div className="hits text-white p-1">ฮิต</div>
                                <div className="new text-white p-1">ใหม่</div>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer Active={home} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
