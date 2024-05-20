import React, { useState, useEffect } from "react";
import axios from "axios";
import Letter_slide from "../../components/Letter_slide";
import Header from "../../components/Header";
import ModalCredit from "../../components/Modal/ModalCredit";
import { createPortal } from "react-dom";
import ShareLink from "../../components/Modal/ShareLink";
import History from "../../components/Modal/History";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import Constant from "../../constant";
import { DataLocalStorage, } from "../../helper";

function Bag() {
  const history = useHistory();
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [dataHistoryWithdraw, setDataHistoryWithdraw] = useState([]);
  const [dataHistoryDeposit, setDataHistoryDeposit] = useState([]);
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

  const NextoCahsback = () => {
    history.push(Constant.CASH_BACK);
  };

  useEffect(() => {
    const userData = DataLocalStorage();
    if (userData) {
      setDataFromLogin(userData);
    }
  }, []);
  useEffect(() => {
    if (dataFromLogin) {
      _getData();
    }
  }, [dataFromLogin]);
  const _getData = async () => {
    const _resHistoryMoney = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Member/History/Finance`,
      data: {
        s_agent_code: dataFromLogin?.agent,
        s_username: dataFromLogin?.username,
      },
    });
    console.log("History_Money", _resHistoryMoney)

    if (_resHistoryMoney?.data?.statusCode === 0) {
      setDataHistoryDeposit(_resHistoryMoney?.data?.data?.deposit);
      // setDataHistoryBonus(_resHistoryMoney?.data?.data?.bonus);
      setDataHistoryWithdraw(_resHistoryMoney?.data?.data?.withdraw);
    }
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
            <div data-v-3c88d514="" className="w-full mx-auto base-container pb-2">
              <Letter_slide />
              <div className="events-wrapper animate__animated animate__slideInLeft animate__fast base-container-small">
                <div>
                  <div className="grid-cols-4 md:grid-cols-6 grid my-4 gap-3">
                    <div
                      onClick={() => setOpenModal2(true)}
                      className="flex flex-col text-center justify-center items-center cursor-pointer"
                      id="btn-referral"
                    >
                      <a className="">
                        <div
                          data-v-d320b445=""
                          className="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span className="nuxt-icon text-4xl text-[var(--primary)]">
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
                      <h5 className="text-xs text-primary mt-1 truncate w-[75px]">
                        สร้างรายได้
                      </h5>
                    </div>
                    <div
                      onClick={() => setOpenModal1(true)}
                      className="flex flex-col text-center justify-center items-center cursor-pointer"
                    >
                      <a className="">
                        <div
                          data-v-d320b445=""
                          className="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span className="nuxt-icon text-4xl text-[var(--primary)]">
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
                      <h5 className="text-xs text-primary mt-1 truncate w-[75px]">
                        กรอกโค้ด
                      </h5>
                    </div>
                    <div
                      onClick={NextoCahsback}
                      className="flex flex-col text-center justify-center items-center cursor-pointer"
                      id="btn-activity"
                    >
                      <a className="">
                        <div
                          data-v-d320b445=""
                          className="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span className="nuxt-icon text-4xl text-[var(--primary)]">
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
                      <h5 className="text-xs text-primary mt-1 truncate w-[75px]">
                        คืนยอดเสีย
                      </h5>
                    </div>
                    <div
                      onClick={() => setOpenModal3(true)}
                      className="flex flex-col text-center justify-center items-center cursor-pointer"
                      id="btn-cash-point"
                    >
                      <a className="">
                        <div
                          data-v-d320b445=""
                          className="borderGradient w-full gradient-border w-[75px] rounded-full h-[75px] bg-card-primary flex light-theme-box-shadow justify-center items-center"
                        >
                          <span className="nuxt-icon text-4xl text-[var(--primary)]">
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
                      <h5 className="text-xs text-primary mt-1 truncate w-[75px]">
                        ประวัติ
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      {openModal1 &&
        createPortal(
          <ModalCredit closeModal={handleButtonClick1} />,
          document.body
        )}
      {openModal2 &&
        createPortal(
          <ShareLink closeModal={handleButtonClick2} dataFromLogin={dataFromLogin}/>,
          document.body
        )}
      {openModal3 &&
        createPortal(
          <History closeModal={handleButtonClick3} dataHistoryDeposit={dataHistoryDeposit} dataHistoryWithdraw={dataHistoryWithdraw} />,
          document.body
        )}
    </body>
  );
}

export default Bag;
