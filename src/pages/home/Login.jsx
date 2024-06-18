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

function Login() {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const routeMatch = useRouteMatch();
  const [openModalChangeLanguage, setOpenModalChangeLanguage] = useState(false);
  const [imageLang, setImageLang] = useState("/assets/images/flag/th.png");
  const [activeLang, setActiveLang] = useState("th");
  const [bankNameOption, setBankNameOption] = useState(t("ChooseABank"));

  // bank account
  const { handleLogin, handleRegister } = _LoginController();
  const [inputBank, setInputBank] = useState("");

  //register
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
  }, [])

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
    }
    else {
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
        bankCode.toString()
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
    setUserNameInput("")
    setPasswordInput("")
    event.preventDefault();
    history.push("/login");
    setActiveTab("login");
  };
  const handleRegisterTab = (event) => {
    setInputPhonenumber("")
    setInputPassword("")
    event.preventDefault();
    history.push("/register");
    setActiveTab("register");
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
                                      type="password" // Login
                                      placeholder={t("EnterPassword")}
                                      value={passwordInput}
                                      onChange={(e) =>
                                        setPasswordInput(e?.target?.value)
                                      }
                                      autocomplete="off"
                                    />
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
                          ) : activeTab === "register" || activeTab === "affiliate" ? (
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
                                      type="password"
                                      placeholder={t("TheSecurityCode4")}
                                      autocomplete="off" // Register
                                      value={inputPassword}
                                      onChange={(e) =>
                                        handleChangePassword(e)
                                      }
                                    />
                                  </div>
                                  <span style={{ color: "red" }}>
                                    {inputPassword !== "" ? "" : warningPassword}
                                    {inputPassword !== "" && (inputPassword.length < 4 ? warningPassword : "")}
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
                          <div data-v-704c3ab0="" data-v-cbca53d4="" >
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
