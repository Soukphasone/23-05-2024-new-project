import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { BackList } from "../constant/bankList";
import Select from "react-select";
import _LoginController from "../api/login";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { showErrorAlert, showSuccessAlert } from "../helper/SweetAlert";
function Login() {
  const history = useHistory();
  const { data } = useParams();
  const parsed = queryString.parse(history?.location?.search);
  // bank account
  const { handleLogin, handleRegister } = _LoginController();
  const [bankCode, setBankCode] = useState(0);
  const [inputBank, setInputBank] = useState("");
  const [warningBank, setWarningBank] = useState("");
  //register
  const [inputPhonenumber, setInputPhonenumber] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputRef, setInputRef] = useState(parsed?.ref);
  const [warningPassword, setWarningPassword] = useState("");
  const [warningFirstName, setWarningFirstName] = useState("");
  const [warningLastName, setWarningLastName] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [warningPhone, setWarningPhone] = useState("");
  const [typePhone, setTypePhone] = useState("TH");
  const [selectedOption, setSelectedOption] = useState("เบอร์โทรศัพท์ไทย");
  const [phoneCheck, setPhoneCheck] = useState("");
  const [userNameInput, setUserNameInput] = useState(""); //for login
  const [passwordInput, setPasswordInput] = useState("");
  const [messageCreate, setMessageCreate] = useState("");
  const [warningUsername, setUserNameWarning] = useState("");
  const [warningPasswordLg, setWarningPasswordLg] = useState("");
  const _clickNextStep = () => {
    if (
      inputPhonenumber === "" ||
      inputFirstname === "" ||
      inputPassword === "" ||
      inputLastname === ""
    ) {
      setWarningPhone("กรุณากรอกเบอร์โทร");
      setWarningPassword("กรุณาป้อนรหัสผ่าน");
      setWarningFirstName("กรุณาป้อนชื่อ");
      setWarningLastName("กรุณาป้อนนามสกุล");
      setTimeout(() => {
        setWarningPhone("");
        setWarningPassword("");
        setWarningFirstName("");
        setWarningLastName("");
      }, 5000);
    } else {
      setActiveTab("bank");
    }
  };
  //handle bank

  const handleChangeBank = useCallback((event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setInputBank(event?.target?.value);
    }
  });
  const options = [
    {
      value: "เบอร์โทรศัพท์ไทย",
      label: "TH",
      image: "/assets/lg_files/thai-flag.png",
    },
    {
      value: "เบอร์โทรศัพท์ลาว",
      label: "LA",
      image: "/assets/lg_files/laos-flag.png",
    },
  ];
  const handleChangeSelect = (option) => {
    setTypePhone(option.label);
    setSelectedOption(option.value);
    setInputPhonenumber("");
  };

  const handleChangePhone = useCallback((event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setInputPhonenumber(event?.target?.value);
    }
    if (event.target.value.length < 10 && typePhone === "TH") {
      setPhoneCheck("กรุณากรอกเบอร์โทรให้ครบ 10 หลัก");
    } else {
      setPhoneCheck("กรุณากรอกเบอร์โทรให้ครบ 13 หลัก");
    }
  });
  // style option
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    control: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      boxShadow: "none",
      borderColor: state.isFocused ? "transparent" : provided.borderColor,
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    menuList: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    menuPortal: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    multiValue: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    noOptionsMessage: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#A7A7A7" : "#A7A7A7",
      border: state.isSelected ? "none" : "none",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? "rgb(var(--color-primary-DEFAULT)/.4)"
        : "rgb(var(--color-primary-DEFAULT)/.4)",
      border: state.isSelected ? "none" : "none",
    }),
  };
  //

  const NextToHomeLobby = async () => {
    if (userNameInput === "" || warningPasswordLg === "") {
      setUserNameWarning("กรุณากรอกเบอร์โทร");
      setWarningPasswordLg("กรุณาป้อนรหัสผ่าน");
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
            showSuccessAlert("สำเร็จ");
          } else {
            showErrorAlert("ล็อกอินไม่สำเร็จ");
          }
        }
      );
      if (_res) {
        setMessageCreate(_res?.statusDesc);
        setTimeout(() => setMessageCreate(""), 5000);
      }
    } catch (error) {
      showErrorAlert("เกิดข้อผิดพลาด");
    }
  };
  const CreateUser = async () => {
    if (inputBank === "") {
      setWarningBank("กรุณากรอกเลขบัญชีธนาคาร");
      setTimeout(() => setWarningBank(""), 5000);
      return;
    }

    try {
      const _res = await handleRegister(
        inputFirstname,
        inputLastname,
        inputPhonenumber,
        inputPassword,
        inputBank,
        bankCode,
        (response) => {
          if (response === false) {
            showSuccessAlert("สำเร็จ");
          } else {
            showErrorAlert("ทำรายการไม่สำเร็จ");
          }
        }
      );
      if (_res) {
        setMessageCreate(_res?.statusDesc);
        setTimeout(() => {
          setMessageCreate("");
        }, 5000);
      }
    } catch (error) {
      showErrorAlert("เกิดข้อผิดพลาด");
    }
  };
  const handleLoginTab = (event) => {
    event.preventDefault();
    setActiveTab("login");
  };
  const handleRegisterTab = (event) => {
    event.preventDefault();
    setActiveTab("register");
  };

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
  return (
    <body className="overflow-x-hidden overflow-y-auto text-primary">
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
                    src="/assets/images/logoweb/logoweb.jpg"
                    alt="center menu"
                  />
                  <div
                    data-v-d8556cff=""
                    className="w-full max-w-[500px] bg-card-primary mb-24 border-0 rounded-base mx-auto px-4 py-2"
                  >
                    <div data-v-d8556cff="" className="mt-0">
                      <div data-v-d8556cff="" className="">
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
                                    className="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                                  >
                                    เข้าสู่ระบบ
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
                                    className="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                                  >
                                    สมัครสมาชิก
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
                                    เบอร์โทรศัพท์
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      placeholder="เบอร์โทรศัพท์"
                                      autocomplete="off"
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
                                    รหัสผ่าน
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="password"
                                      placeholder="รหัสผ่าน"
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
                                        className="text-[var(--btn-login)]"
                                      >
                                        เข้าสู่ระบบ
                                      </span>
                                    </div>
                                  </button>
                                </div>
                                <span className="text-message-warning">
                                  {messageCreate}
                                </span>
                              </form>
                            </div>
                          ) : activeTab === "register" ? (
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
                                    เบอร์โทรศัพท์
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <Select
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
                                              width: 30,
                                              marginRight: 10,
                                            }}
                                          />
                                          {label}
                                        </div>
                                      )}
                                    />

                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      maxLength={typePhone === "TH" ? 10 : 13}
                                      placeholder={selectedOption}
                                      onChange={(event) =>
                                        handleChangePhone(event)
                                      }
                                      autocomplete="off"
                                    />
                                  </div>
                                  <span style={{ color: "red" }}>
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
                                    รหัสผ่าน
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="password"
                                      placeholder=" รหัสผ่าน"
                                      autocomplete="off"
                                      onChange={(e) =>
                                        setInputPassword(e?.target?.value)
                                      }
                                    />
                                  </div>
                                  <span style={{ color: "red" }}>
                                    {inputPassword !== ""
                                      ? ""
                                      : warningPassword}
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
                                    ชื่อ
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
                                      placeholder="ชื่อ"
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
                                    นามสกุล
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
                                      placeholder="นามสกุล"
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
                                  style={{ marginBottom: "17px" }}
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
                                        className="text-[var(--btn-login)]"
                                      >
                                        ถัดไป
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </form>
                            </div>
                          ) : (
                            <div data-v-d8556cff="" className="w-full mt-4">
                              <div className="banking-list">
                                <div
                                  style={{ opacity: bankCode === 2 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 2 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(2)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/scb2.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 1 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 1 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(1)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/kbank1.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 3 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 3 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(3)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/ktb3.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 4 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 4 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(4)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/bbl4.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 5 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 5 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(5)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/bay5.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 6 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 6 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(6)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/tmb6.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 8 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 8 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(8)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/gsb8.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 10 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 10 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(10)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/uob10.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 11 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 11 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(11)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/kk11.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 12 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 12 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(12)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/lh12.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 13 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 13 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(13)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/ibank13.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 14 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 14 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(14)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/tisco14.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 15 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 15 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(16)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/ghb16.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 16 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 16 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(17)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/cimb17.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 18 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 18 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(18)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/baac18.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 19 ? 1 : 0.5 }}
                                >
                                  <img
                                    onClick={() => setBankCode(19)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/icbc19.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                                <div
                                  style={{ opacity: bankCode === 20 ? 1 : 0.5 }}
                                  className={
                                    bankCode === 20 ? "active-bank" : ""
                                  }
                                >
                                  <img
                                    onClick={() => setBankCode(20)}
                                    onKeyDown={() => ""}
                                    className="bank-item"
                                    src="/assets/images/icon-bank-active/ldb20.png"
                                    id="bank1"
                                    alt="icon"
                                  />
                                </div>
                              </div>
                              <div
                                className="relative w-full"
                                style={{ marginTop: "10px" }}
                              >
                                <h5
                                  data-v-d8556cff=""
                                  className="text-sm mb-2 text-primary"
                                >
                                  กรุณาเลือกธนาคารของคุณ
                                </h5>
                                <select
                                  className="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12"
                                  id="nuid-1"
                                  value={bankCode}
                                  placeholder="เลขบัญชีธนาคาร"
                                  onChange={(event) =>
                                    setBankCode(
                                      Number.parseInt(event?.target?.value)
                                    )
                                  }
                                >
                                  <option>กรุณาเลือกธนาคารของคุณ</option>
                                  {BackList?.map((bank) => (
                                    <option key={bank?.code} value={bank?.code}>
                                      {bank?.bankName}
                                    </option>
                                  ))}
                                </select>
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
                                  เลขบัญชีธนาคาร
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
                                    placeholder=" กรุณากรอกเลขบัญชีธนาคาร"
                                    autocomplete="off"
                                    onChange={(e) => handleChangeBank(e)}
                                  />
                                </div>
                                <span style={{ color: "red" }}>
                                  {inputBank !== "" ? "" : warningBank}
                                </span>

                                <div style={{ padding: 10, color: "red" }}>
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
                                      กลับ
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
                                      ยืนยัน
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          )}
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
    </body>
  );
}

export default Login;
