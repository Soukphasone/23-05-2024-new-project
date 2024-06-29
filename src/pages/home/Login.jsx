/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";
import { NewBackList } from "../../constant/newBankList";
import _LoginController from "../../api/login";
import { showErrorAlert, showSuccessAlert } from "../../helper/SweetAlert";
import ModalLanguage from "../../components/Modal/ModalLanguage";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import Constant from "../../constant";
import queryString from "query-string";

function Login() {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const routeMatch = useRouteMatch();
  const [openModalChangeLanguage, setOpenModalChangeLanguage] = useState(false);
  const [imageLang, setImageLang] = useState("/assets/images/flag/th.png");
  const [activeLang, setActiveLang] = useState("th");
  const [bankNameOption, setBankNameOption] = useState(t("ChooseABank"));
  const [showPassword, setShowPassword] = useState(false);

  // bank account
  const { handleLogin, handleRegister } = _LoginController();
  const [inputBank, setInputBank] = useState("");

  //register
  const parsed = queryString.parse(history?.location?.search);
  const [inputRef, setInputRef] = useState(parsed?.ref)
  const [inputPhonenumber, setInputPhonenumber] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [warningPassword, setWarningPassword] = useState("");
  const [warningFirstName, setWarningFirstName] = useState("");
  const [warningLastName, setWarningLastName] = useState("");
  const [activeTab, setActiveTab] = useState(routeMatch?.params?.route);
  const [warningPhone, setWarningPhone] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [messageCreate, setMessageCreate] = useState("");
  const [warningUsername, setUserNameWarning] = useState("");
  const [warningPasswordLg, setWarningPasswordLg] = useState("");
  //bank
  const [textWarning, setTextWarning] = useState(false);
  const [backgroundDropdown, setBackgroundDropdown] = useState("#6A6A6A");
  const [bankCode, setBankCode] = useState(0);
  const [logoweb, setLogoweb] = useState({});
  //Select dropdown
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    getDataBackOffice();
  }, []);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const _clickNextStep = () => {
    if (
      inputPhonenumber === "" ||
      inputFirstname === "" ||
      inputPassword === "" ||
      inputLastname === ""
    ) {
      
      setWarningPhone(t("EnterYourPhoneNumber"));
      setWarningPassword(t("PleaseEnterYourPassword"));
      setWarningFirstName(t("PleaseEnterYourName"));
      setWarningLastName(t("PleaseEnterLastYame"));
      setTimeout(() => {
        setWarningPhone("");
        setWarningPassword("");
        setWarningFirstName("");
        setWarningLastName("");
      }, 5000);
    } else {
      setActiveTab("register-bank");
    }
  };

  const NextToHomeLobby = async () => {
    if (userNameInput === "" || warningPasswordLg === "") {
      setUserNameWarning(t(t("EnterYourPhoneNumber")));
      setWarningPasswordLg(t("PleaseEnterYourPassword"));
      setTimeout(() => {
        setUserNameWarning("");
        setWarningPasswordLg("");
      }, 5000);
    }
    try {
      const _res = await handleLogin(
        userNameInput,
        passwordInput,
        (response) => {
          if (response === false) {
            showSuccessAlert(t("Complete"));
          } else {
            showErrorAlert(t("unsuccessful"));
          }
        }
      );
      if (_res) {
        setMessageCreate(_res?.statusDesc);
        setTimeout(() => setMessageCreate(""), 5000);
      }
    } catch (error) {
      showErrorAlert(t("unsuccessful"));
    }
  };

  const CreateUser = async () => {
    try {
      const _res = await handleRegister(
        inputFirstname,
        inputLastname,
        inputPhonenumber,
        inputPassword,
        inputBank,
        bankCode.toString(),
        inputRef,
      );
      if (_res) {
        setMessageCreate(_res?.statusDesc);
        setTimeout(() => {
          setMessageCreate("");
        }, 5000);
      }
    } catch (error) {
      showErrorAlert(t("unsuccessful"));
    }
  };
  const handleLoginTab = (event) => {
    setUserNameInput("");
    setPasswordInput("");
    event.preventDefault();
    history.push("/login");
    setActiveTab("login");
    setShowPassword(false);
  };
  const handleRegisterTab = (event) => {
    setInputPhonenumber("");
    setInputPassword("");
    event.preventDefault();
    history.push("/register");
    setActiveTab("register");
    setShowPassword(false);
  };

  const handleChangeBank = useCallback((event) => {
    setInputBank(event?.target?.value);
  });

  const wrapperClass =
    activeTab === "login"
      ? "bg-login-wrapper bg-login-wrapper"
      : "bg-login-wrapper bg-register-wrapper";
  const changeColorTextL =
    activeTab === "login"
      ? "tabslinks relative cursor-pointer flex items-center justify-center login w-full active"
      : "tabslinks relative cursor-pointer flex items-center justify-center login w-full";
  const changeColorTextR =
    activeTab === "register"
      ? "tabslinks relative cursor-pointer flex items-center justify-center btn-register w-full active"
      : "tabslinks relative cursor-pointer flex items-center justify-center btn-register w-full";

  const handleSelectBank = (event) => {
    setBankCode(event?.code);
    setBankNameOption(event?.bankName);
    setBackgroundDropdown(event?.backgroundColor);
  };
  const _selectImageBank = (bank) => {
    setBankCode(bank?.code);
    setBankNameOption(bank?.bankName);
    setBackgroundDropdown(bank?.backgroundColor);
  };
  // Change Language
  const ModalChangeLanguage = () => {
    setOpenModalChangeLanguage(false);
  };
  const changeLanguage = (lng, img) => {
    setImageLang(img);
    i18n.changeLanguage(lng);
    setActiveLang(lng);
  };

  const handleChangePassword = useCallback((event) => {
    if (event.target.value.length < 4) {
      setWarningPassword(t("TheSecurityCode4"));
    }
    setInputPassword(event?.target?.value);
  });

  const getDataBackOffice = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${Constant.SERVER_URL}/agent/${Constant?.AGENT_CODE}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.data) {
          setLogoweb(response?.data?.data?.logos?.logo);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const _showPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className="overflow-x-hidden overflow-y-auto text-primary"
      style={{
        display:
          routeMatch?.params?.route !== "login" &&
          routeMatch?.params?.route !== "register" &&
          routeMatch?.params?.route !== "affiliate"
            ? "none"
            : "",
      }}
    >
      <div id="__nuxt" data-v-app="">
        <div data-v-19df7d63="">
          <header data-v-19df7d63="" className="w-full z-10">
            <div data-v-19df7d63="" className="w-full mx-auto"></div>
          </header>
          <main data-v-19df7d63="" className="min-h-screen">
            <div data-v-19df7d63="" className="w-full mx-auto">
              <main data-v-d8556cff="" className={wrapperClass}>
                <div
                  data-v-d8556cff=""
                  className="flex flex-col items-center justify-start min-h-screen relative overflow-hidden bg-wrapper px-4 pt-12 md:pt-24"
                >
                  <img
                    data-v-d8556cff=""
                    className="h-30 my-8 w-auto z-20 mx-auto cursor-pointer"
                    src={`${Constant?.SERVER_URL_IMAGE}/images/${logoweb}`}
                    alt="center menu"
                  />
                  <div
                    data-v-d8556cff=""
                    className="w-full max-w-[500px] bg-card-primary mb-24 border-0 rounded-base mx-auto px-4 py-2"
                  >
                    <div data-v-d8556cff="" className="mt-0">
                      <div data-v-d8556cff="">
                        <div
                          data-v-d8556cff=""
                          className="w-full flex flex-col items-center justify-center"
                        >
                          <div
                            data-v-ea58f736=""
                            data-v-d8556cff=""
                            id="auth-advance-tab"
                            className="w-full"
                          >
                            <div
                              data-v-ea58f736=""
                              className="tabsWrapper w-full"
                            >
                              <div
                                data-v-ea58f736=""
                                className="tabs relative flex items-center justify-center tab-secondary w-full"
                              >
                                <div
                                  data-v-ea58f736=""
                                  className="w-full absolute bottom-0 left-0 rounded-full slide auth-advance-tab"
                                  style={{
                                    width: "50%",
                                    left: activeTab === "login" ? "0px" : "50%",
                                  }}
                                ></div>
                                <div
                                  data-v-ea58f736=""
                                  className="w-full absolute bottom-0 left-0 rounded-full slide-border auth-advance-tab"
                                ></div>
                                <div
                                  data-v-ea58f736=""
                                  id="auth-advance-tab"
                                  className={changeColorTextL}
                                  onClick={(e) => handleLoginTab(e)}
                                >
                                  <span
                                    data-v-ea58f736=""
                                    className="font-semibold &lt;sm:text-base sm:text-base md:text-lg"
                                  >
                                    {t("Login")}
                                  </span>
                                </div>
                                <div
                                  data-v-ea58f736=""
                                  id="auth-advance-tab"
                                  className={changeColorTextR}
                                  onClick={handleRegisterTab}
                                >
                                  <span
                                    data-v-ea58f736=""
                                    className="font-semibold &lt;sm:text-base sm:text-base md:text-lg"
                                  >
                                    {t("Register")}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {activeTab === "login" ? (
                            <div data-v-d8556cff="" className="w-full mt-4">
                              <form
                                data-v-d8556cff=""
                                className="flex flex-col mt-3"
                              >
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    {t("telephoneNumber")}
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="number" // login
                                      value={userNameInput}
                                      placeholder={t("telephoneNumber")}
                                      onChange={(e) =>
                                        setUserNameInput(e?.target?.value)
                                      }
                                    />
                                  </div>
                                  <span style={{ color: "red" }}>
                                    {userNameInput !== ""
                                      ? ""
                                      : warningUsername}
                                  </span>
                                  <div
                                    style={{ marginTop: "-25px" }}
                                    data-v-d8556cff=""
                                    className="h-[18px]"
                                  ></div>
                                </div>
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    {t("Password")}
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type={
                                        showPassword === true
                                          ? "text"
                                          : "password"
                                      } // Login
                                      placeholder={t("EnterPassword")}
                                      value={passwordInput}
                                      onChange={(e) =>
                                        setPasswordInput(e?.target?.value)
                                      }
                                      autocomplete="off"
                                    />
                                    <span
                                      data-v-cbca53d4=""
                                      onClick={() => _showPassword()}
                                      class="nuxt-icon nuxt-icon--fill text-xl text-primary cursor-pointer text-[var(--icon-primary)]"
                                    >
                                      {showPassword === true ? (
                                        <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M9.00014 11.7727C10.5306 11.7727 11.7713 10.532 11.7713 9.00154C11.7713 7.47109 10.5306 6.23041 9.00014 6.23041C7.46968 6.23041 6.229 7.47109 6.229 9.00154C6.229 10.532 7.46968 11.7727 9.00014 11.7727Z"
                                            fill="#8E8E8E"
                                          ></path>
                                          <path
                                            d="M17.7239 8.23394C15.5938 5.6599 12.3694 3.18216 9.00003 3.18216C5.62999 3.18216 2.40484 5.66163 0.276161 8.23394C-0.0920536 8.6787 -0.0920536 9.32438 0.276161 9.76914C0.811336 10.4159 1.9333 11.6643 3.43179 12.755C7.20569 15.5023 10.7861 15.5084 14.5683 12.755C16.0668 11.6643 17.1887 10.4159 17.7239 9.76914C18.091 9.32524 18.093 8.68016 17.7239 8.23394ZM9.00003 5.12195C11.1393 5.12195 12.8796 6.86222 12.8796 9.00154C12.8796 11.1409 11.1393 12.8811 9.00003 12.8811C6.86072 12.8811 5.12045 11.1409 5.12045 9.00154C5.12045 6.86222 6.86072 5.12195 9.00003 5.12195Z"
                                            fill="#8E8E8E"
                                          ></path>
                                        </svg>
                                      ) : (
                                        <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clip-path="url(#clip0_194_735)">
                                            <path
                                              d="M15.335 5.96342C15.1414 5.79695 14.9468 5.63794 14.7518 5.48564L12.4771 7.76029C12.6157 8.14795 12.6915 8.56529 12.6915 9C12.6915 11.0354 11.0355 12.6914 9.00005 12.6914C8.56535 12.6914 8.14801 12.6156 7.76034 12.477L6.05322 14.1841C7.05011 14.5931 8.03888 14.8008 9.00005 14.8008C10.1482 14.8008 11.3356 14.5056 12.5292 13.9235C13.4665 13.4663 14.4105 12.8314 15.335 12.0366C16.8978 10.6927 17.8606 9.36387 17.9008 9.30793C18.0332 9.124 18.0332 8.87604 17.9008 8.69207C17.8606 8.63613 16.8978 7.3073 15.335 5.96342Z"
                                              fill="#8E8E8E"
                                            ></path>
                                            <path
                                              d="M9.00003 11.6367C10.4539 11.6367 11.6367 10.4539 11.6367 9.00001C11.6367 8.87352 11.6273 8.74921 11.6099 8.62743L8.62744 11.6099C8.74926 11.6272 8.87354 11.6367 9.00003 11.6367Z"
                                              fill="#8E8E8E"
                                            ></path>
                                            <path
                                              d="M17.8456 0.154478C17.6397 -0.0514318 17.3058 -0.0514318 17.0998 0.154478L12.9567 4.29757C12.8141 4.21995 12.6716 4.14601 12.5292 4.07658C11.3355 3.49439 10.1481 3.19922 9.00003 3.19922C7.85193 3.19922 6.66453 3.49439 5.4709 4.07654C4.53357 4.53375 3.58955 5.1686 2.66512 5.96342C1.10228 7.3073 0.139491 8.63613 0.0992725 8.69207C-0.0330908 8.87601 -0.0330908 9.12396 0.0992725 9.30794C0.139491 9.36387 1.10224 10.6927 2.66512 12.0366C3.14405 12.4484 3.62826 12.8168 4.11405 13.1402L0.154503 17.0998C-0.0514424 17.3057 -0.0514424 17.6396 0.154503 17.8456C0.257476 17.9485 0.392405 18 0.52737 18C0.662335 18 0.7973 17.9485 0.900237 17.8455L17.8456 0.900213C18.0515 0.694303 18.0515 0.360389 17.8456 0.154478ZM5.30862 9C5.30862 6.96456 6.96459 5.3086 9.00003 5.3086C9.82799 5.3086 10.5931 5.5826 11.2096 6.0447L10.453 6.80126C10.0361 6.52479 9.53669 6.36328 9.00003 6.36328C7.54614 6.36328 6.36331 7.54611 6.36331 9C6.36331 9.53663 6.52482 10.0361 6.80128 10.453L6.04472 11.2096C5.58263 10.5931 5.30862 9.82797 5.30862 9Z"
                                              fill="#8E8E8E"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_194_735">
                                              <rect
                                                width="18"
                                                height="18"
                                                fill="white"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      )}
                                    </span>
                                  </div>
                                  <span style={{ color: "red" }}>
                                    {passwordInput !== ""
                                      ? ""
                                      : warningPasswordLg}
                                  </span>
                                  <div
                                    style={{ marginTop: "-25px" }}
                                    data-v-d8556cff=""
                                    className="h-[18px]"
                                  ></div>
                                </div>
                                <div data-v-d8556cff="">
                                  <button
                                    data-v-9dec3a92=""
                                    data-v-d8556cff=""
                                    id="btn01"
                                    type="button"
                                    onClick={NextToHomeLobby}
                                    className="base-button-wrapper v-rounded btn-primary btn-lg btn-primary mt-4 w-full"
                                  >
                                    <div
                                      data-v-9dec3a92=""
                                      className="flex justify-center items-center"
                                    >
                                      <span
                                        data-v-d8556cff=""
                                        className="font-semibold text-[var(--btn-login)]"
                                      >
                                        {t("Login")}
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </form>
                            </div>
                          ) : activeTab === "register" ||
                            activeTab === "affiliate" ? (
                            <div data-v-d8556cff="" className="w-full mt-4">
                              <form
                                data-v-d8556cff=""
                                className="flex flex-col mt-3"
                              >
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    {t("telephoneNumber")}
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    {/* <Select
                                      isSearchable={false}
                                      onChange={handleChangeSelect}
                                      options={options}
                                      styles={customStyles}
                                      defaultValue={options[0]}
                                      formatOptionLabel={({
                                        value,
                                        label,
                                        image,
                                      }) => (
                                        <div className="flex-select-img">
                                          <img
                                            src={image}
                                            alt={label}
                                            style={{
                                              width: 40,
                                              marginRight: 10,
                                            }}
                                          />
                                          {label}
                                        </div>
                                      )}
                                    /> */}
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      // maxLength={typePhone === "TH" ? 10 : 13}
                                      // value={inputPhonenumber}
                                      // placeholder={selectedOption}
                                      value={inputPhonenumber}
                                      placeholder={t("telephoneNumber")} // Register
                                      onChange={(e) =>
                                        setInputPhonenumber(e?.target?.value)
                                      }
                                    />
                                  </div>
                                  <span style={{ color: "red" }}>
                                    {inputPhonenumber !== ""
                                      ? ""
                                      : warningPhone}
                                  </span>
                                  {/* <span style={{ color: "red" }}>
                                    {inputPhonenumber !== ""
                                      ? ""
                                      : warningPhone}
                                    {inputPhonenumber !== ""
                                      ? typePhone === "TH"
                                        ? inputPhonenumber.length < 10
                                          ? phoneCheck
                                          : ""
                                        : inputPhonenumber.length < 13
                                        ? phoneCheck
                                        : ""
                                      : ""}
                                  </span> */}
                                </div>
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    {t("Password")}
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type={
                                        showPassword === true
                                          ? "text"
                                          : "password"
                                      }
                                      placeholder={t("TheSecurityCode4")}
                                      autocomplete="off" // Register
                                      value={inputPassword}
                                      onChange={(e) => handleChangePassword(e)}
                                    />
                                    <span
                                      data-v-cbca53d4=""
                                      onClick={() => _showPassword()}
                                      class="nuxt-icon nuxt-icon--fill text-xl text-primary cursor-pointer text-[var(--icon-primary)]"
                                    >
                                      {showPassword === true ? (
                                        <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M9.00014 11.7727C10.5306 11.7727 11.7713 10.532 11.7713 9.00154C11.7713 7.47109 10.5306 6.23041 9.00014 6.23041C7.46968 6.23041 6.229 7.47109 6.229 9.00154C6.229 10.532 7.46968 11.7727 9.00014 11.7727Z"
                                            fill="#8E8E8E"
                                          ></path>
                                          <path
                                            d="M17.7239 8.23394C15.5938 5.6599 12.3694 3.18216 9.00003 3.18216C5.62999 3.18216 2.40484 5.66163 0.276161 8.23394C-0.0920536 8.6787 -0.0920536 9.32438 0.276161 9.76914C0.811336 10.4159 1.9333 11.6643 3.43179 12.755C7.20569 15.5023 10.7861 15.5084 14.5683 12.755C16.0668 11.6643 17.1887 10.4159 17.7239 9.76914C18.091 9.32524 18.093 8.68016 17.7239 8.23394ZM9.00003 5.12195C11.1393 5.12195 12.8796 6.86222 12.8796 9.00154C12.8796 11.1409 11.1393 12.8811 9.00003 12.8811C6.86072 12.8811 5.12045 11.1409 5.12045 9.00154C5.12045 6.86222 6.86072 5.12195 9.00003 5.12195Z"
                                            fill="#8E8E8E"
                                          ></path>
                                        </svg>
                                      ) : (
                                        <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clip-path="url(#clip0_194_735)">
                                            <path
                                              d="M15.335 5.96342C15.1414 5.79695 14.9468 5.63794 14.7518 5.48564L12.4771 7.76029C12.6157 8.14795 12.6915 8.56529 12.6915 9C12.6915 11.0354 11.0355 12.6914 9.00005 12.6914C8.56535 12.6914 8.14801 12.6156 7.76034 12.477L6.05322 14.1841C7.05011 14.5931 8.03888 14.8008 9.00005 14.8008C10.1482 14.8008 11.3356 14.5056 12.5292 13.9235C13.4665 13.4663 14.4105 12.8314 15.335 12.0366C16.8978 10.6927 17.8606 9.36387 17.9008 9.30793C18.0332 9.124 18.0332 8.87604 17.9008 8.69207C17.8606 8.63613 16.8978 7.3073 15.335 5.96342Z"
                                              fill="#8E8E8E"
                                            ></path>
                                            <path
                                              d="M9.00003 11.6367C10.4539 11.6367 11.6367 10.4539 11.6367 9.00001C11.6367 8.87352 11.6273 8.74921 11.6099 8.62743L8.62744 11.6099C8.74926 11.6272 8.87354 11.6367 9.00003 11.6367Z"
                                              fill="#8E8E8E"
                                            ></path>
                                            <path
                                              d="M17.8456 0.154478C17.6397 -0.0514318 17.3058 -0.0514318 17.0998 0.154478L12.9567 4.29757C12.8141 4.21995 12.6716 4.14601 12.5292 4.07658C11.3355 3.49439 10.1481 3.19922 9.00003 3.19922C7.85193 3.19922 6.66453 3.49439 5.4709 4.07654C4.53357 4.53375 3.58955 5.1686 2.66512 5.96342C1.10228 7.3073 0.139491 8.63613 0.0992725 8.69207C-0.0330908 8.87601 -0.0330908 9.12396 0.0992725 9.30794C0.139491 9.36387 1.10224 10.6927 2.66512 12.0366C3.14405 12.4484 3.62826 12.8168 4.11405 13.1402L0.154503 17.0998C-0.0514424 17.3057 -0.0514424 17.6396 0.154503 17.8456C0.257476 17.9485 0.392405 18 0.52737 18C0.662335 18 0.7973 17.9485 0.900237 17.8455L17.8456 0.900213C18.0515 0.694303 18.0515 0.360389 17.8456 0.154478ZM5.30862 9C5.30862 6.96456 6.96459 5.3086 9.00003 5.3086C9.82799 5.3086 10.5931 5.5826 11.2096 6.0447L10.453 6.80126C10.0361 6.52479 9.53669 6.36328 9.00003 6.36328C7.54614 6.36328 6.36331 7.54611 6.36331 9C6.36331 9.53663 6.52482 10.0361 6.80128 10.453L6.04472 11.2096C5.58263 10.5931 5.30862 9.82797 5.30862 9Z"
                                              fill="#8E8E8E"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_194_735">
                                              <rect
                                                width="18"
                                                height="18"
                                                fill="white"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      )}
                                    </span>
                                  </div>
                                  <span style={{ color: "red" }}>
                                    {inputPassword !== ""
                                      ? ""
                                      : warningPassword}
                                    {inputPassword !== "" &&
                                      (inputPassword.length < 4
                                        ? warningPassword
                                        : "")}
                                  </span>
                                </div>
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    {t("FirstName")}
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <input
                                      style={{ marginLeft: "5px" }}
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      name="s_firstname"
                                      id="s_firstname"
                                      placeholder={t("FirstName")}
                                      autocomplete="off"
                                      onChange={(e) =>
                                        setInputFirstname(e?.target?.value)
                                      }
                                    />
                                  </div>
                                  <span style={{ color: "red" }}>
                                    {inputFirstname !== ""
                                      ? ""
                                      : warningFirstName}
                                  </span>
                                </div>
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    {t("LastName")}
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <input
                                      style={{ marginLeft: "5px" }}
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      name="s_lastname"
                                      id="s_lastname"
                                      type="text"
                                      placeholder={t("LastName")}
                                      autocomplete="off"
                                      onChange={(e) =>
                                        setInputLastname(e?.target?.value)
                                      }
                                    />
                                  </div>
                                  <span style={{ color: "red" }}>
                                    {inputLastname !== ""
                                      ? ""
                                      : warningLastName}
                                  </span>
                                </div>
                                <div
                                  onClick={() => _clickNextStep()}
                                  data-v-d8556cff=""
                                >
                                  <button
                                    data-v-9dec3a92=""
                                    data-v-d8556cff=""
                                    id="btn01"
                                    type="button"
                                    className="base-button-wrapper v-rounded btn-primary btn-lg btn-primary mt-4 w-full"
                                  >
                                    <div
                                      data-v-9dec3a92=""
                                      className="flex justify-center items-center"
                                    >
                                      <span
                                        data-v-d8556cff=""
                                        className="font-semibold text-[var(--btn-login)]"
                                      >
                                        {t("Next")}
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </form>
                            </div>
                          ) : (
                            <div data-v-d8556cff="" className="w-full mt-4">
                              <div
                                className="banking-list"
                                style={{
                                  width: "100%",
                                  textAlign: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {NewBackList?.map((bank) => (
                                  <div
                                    style={{
                                      opacity:
                                        bankCode === bank?.code ? 1 : 0.5,
                                    }}
                                    className={
                                      bankCode === bank?.code
                                        ? "active-bank"
                                        : ""
                                    }
                                  >
                                    <img
                                      onClick={() => _selectImageBank(bank)}
                                      onKeyDown={() => ""}
                                      className="bank-item"
                                      src={bank?.image}
                                      id="bank1"
                                      alt="icon"
                                    />
                                  </div>
                                ))}
                              </div>

                              <div
                                className="relative w-full"
                                style={{ marginTop: "10px" }}
                              >
                                <h5
                                  data-v-d8556cff=""
                                  className="text-sm mb-2 text-primary"
                                >
                                  {t("ChooseABank")}
                                </h5>
                                <div
                                  onClick={toggleDropdown}
                                  className="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12"
                                >
                                  <div
                                    style={{
                                      background: `linear-gradient(90deg, ${backgroundDropdown} 0%, rgb(17, 17, 17) 100%)`,
                                      color: bankCode === 6 ? "#000" : "#FFF",
                                      borderRadius: "3px",
                                    }}
                                    className="dropdown"
                                    ref={dropdownRef}
                                  >
                                    <span style={{ padding: "10px" }}>
                                      {bankNameOption}
                                    </span>
                                    <div
                                      className="dropdown-menu"
                                      style={{
                                        display: isActive ? "block" : "none",
                                        marginTop: "10px",
                                      }}
                                    >
                                      <ul>
                                        {NewBackList?.map((bank) => (
                                          <li
                                            onClick={() =>
                                              handleSelectBank(bank)
                                            }
                                            style={{
                                              background: `linear-gradient(90deg, ${bank?.backgroundColor} 0%, rgb(17, 17, 17) 100%)`,
                                            }}
                                          >
                                            <img
                                              style={{
                                                width: 35,
                                                height: 35,
                                                marginRight: 18,
                                              }}
                                              src={bank?.image}
                                              id="bank1"
                                              alt="icon"
                                            />
                                            {bank?.bankName}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <span className="absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5 pe-3.5">
                                  <span
                                    className="i-heroicons-chevron-down-20-solid flex-shrink-0 dark:text-gray-500 flex-shrink-0 text-gray-400 dark:text-primary-400 text-primary-500 h-6 w-6"
                                    aria-hidden="true"
                                  ></span>
                                </span>
                                <div
                                  data-v-d8556cff=""
                                  className="h-[18px]"
                                ></div>
                              </div>
                              <div
                                data-v-d8556cff=""
                                className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                              >
                                <h5
                                  data-v-d8556cff=""
                                  className="text-sm mb-2 text-primary"
                                >
                                  {t("AccountMumber")}
                                </h5>
                                <div
                                  data-v-d8556cff=""
                                  className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                >
                                  <input
                                    data-v-d8556cff=""
                                    className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                    name="bank"
                                    id="bank"
                                    type="text"
                                    placeholder={t("AccountMumber")}
                                    autocomplete="off"
                                    onChange={(e) => handleChangeBank(e)}
                                  />
                                </div>
                                {/* <span style={{ color: "red" }}>
                                  {inputBank !== "" ? "" : warningBank}
                                </span> */}
                                <div style={{ padding: 10, color: "red" }}>
                                  {textWarning}
                                  {messageCreate}
                                </div>

                                <div
                                  data-v-d8556cff=""
                                  className="h-[18px]"
                                ></div>
                              </div>
                              <div
                                data-v-d8556cff=""
                                style={{ display: "flex" }}
                              >
                                <button
                                  onClick={(e) => handleRegisterTab(e)}
                                  data-v-9dec3a92=""
                                  data-v-d8556cff=""
                                  id="btn01"
                                  type="submit"
                                  className="base-button-wrapper v-rounded btn-primary btn-lg btn-primary mt-4 w-full"
                                >
                                  <div
                                    data-v-9dec3a92=""
                                    className="flex justify-center items-center"
                                  >
                                    <span
                                      data-v-d8556cff=""
                                      className="text-[var(--btn-login)]"
                                    >
                                      {t("Back")}
                                    </span>
                                  </div>
                                </button>
                                <div style={{ width: "10px" }} />
                                <button
                                  onClick={() => CreateUser()}
                                  data-v-9dec3a92=""
                                  data-v-d8556cff=""
                                  id="btn01"
                                  type="button"
                                  disabled={inputBank === "" ? true : false}
                                  className="base-button-wrapper v-rounded btn-primary btn-lg btn-primary mt-4 w-full"
                                >
                                  <div
                                    data-v-9dec3a92=""
                                    className="flex justify-center items-center"
                                  >
                                    <span
                                      data-v-d8556cff=""
                                      className="text-[var(--btn-login)]"
                                    >
                                      {t("confirm")}
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        <div
                          onClick={() => setOpenModalChangeLanguage(true)}
                          data-v-cbca53d4=""
                          className="flex w-full mt-4 justify-center"
                        >
                          <div data-v-704c3ab0="" data-v-cbca53d4="">
                            <div
                              data-v-704c3ab0=""
                              className="flex wrapper items-center justify-center"
                            >
                              <div
                                data-v-704c3ab0=""
                                className="bg-darkCard flex text-white py-[6px] px-4 rounded-[10px]"
                              >
                                <img
                                  data-v-704c3ab0=""
                                  alt="flat-img"
                                  className="w-8 h-8 object-cover rounded-full"
                                  src={imageLang}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </div>
      </div>
      {openModalChangeLanguage &&
        createPortal(
          <ModalLanguage
            closeModal={ModalChangeLanguage}
            changeLanguage={changeLanguage}
            activeLang={activeLang}
          />,
          document.body
        )}
    </div>
  );
}

export default Login;
