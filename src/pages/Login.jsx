import React, { useState, useCallback, useRef } from "react";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";
import { BackList } from "../constant/bankList";
import { NewBackList } from "../constant/newBankList";
import Select from "react-select";
import _LoginController from "../api/login";
import { showErrorAlert, showSuccessAlert } from "../helper/SweetAlert";
import { convertBankCode } from "../helper";
import Constant from "../constant";

function Login() {
  const history = useHistory();
  const routeMatch = useRouteMatch();
  // bank account
  const { handleLogin, handleRegister } = _LoginController();
  const [inputBank, setInputBank] = useState("");
  const [warningBank, setWarningBank] = useState("");
  const [warningBankCode, setWarningBankCode] = useState("");

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
  const [typePhone, setTypePhone] = useState("TH");
  const [selectedOption, setSelectedOption] = useState("เบอร์โทรศัพท์ไทย");
  const [phoneCheck, setPhoneCheck] = useState("");
  const [userNameInput, setUserNameInput] = useState(""); //for login
  const [passwordInput, setPasswordInput] = useState("");
  const [messageCreate, setMessageCreate] = useState("");
  const [warningUsername, setUserNameWarning] = useState("");
  const [warningPasswordLg, setWarningPasswordLg] = useState("");
  //bank
  const [textWarning, setTextWarning] = useState(false);
  const [backgroundDropdown, setBackgroundDropdown] = useState("#6A6A6A");
  const [bankCode, setBankCode] = useState(0);
  //Select dropdown
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
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
      showErrorAlert("เกิดข้อผิดพลาด");
    }
  };
  const handleLoginTab = (event) => {
    event.preventDefault();
    history.push("/login");
    setActiveTab("login");
  };
  const handleRegisterTab = (event) => {
    event.preventDefault();
    history.push("/register");
    setActiveTab("register");
  };

  const handleChangeBank = useCallback((event) => {
    setInputBank(event?.target?.value);
  });

  const checkBank = async () => {
    if (inputBank === "") {
      setWarningBank("กรุณากรอกเลขบัญชีธนาคาร");
      setTimeout(() => setWarningBank(""), 5000);
      return;
    }

    if (inputPhonenumber.length >= 13) {
      const bankCodeText = convertBankCode(bankCode);
      const data = JSON.stringify({
        bankCode: bankCodeText,
        recipientAcctNo: inputBank,
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${Constant.SERVER_URL}/check-number-account`,
        headers: {
          "User-Agent": "Dart/3.1 (dart:io)",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "close",
          "Content-Type": "application/json",
        },
        data: data,
      };
      try {
        const response = await axios.request(config);
        if (response.data.data.respDesc !== "Success") {
          setTextWarning("ไม่มีเลขบัญชีนี้ในธนาคาร");
          // console.log("RESPON_BANK_NOT_SUCCESS", response.data.data);
          setTimeout(() => {
            setTextWarning("");
          }, 5000);
        } else {
          // console.log("RESPON_BANK_SUCCESS", response.data.data);
          setInputFirstname(response.data.data.receipient);
          CreateUser();
          // console.log("THIS ACCOUNT LAOS");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      CreateUser();
      console.log("THIS ACCOUNT THAILAND");
    }
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

  const [bankNameOption, setBankNameOption] = useState("เลือกธนาคาร");

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

  return (
    <div className="overflow-x-hidden overflow-y-auto text-primary">
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
                    src="/assets/images/logoweb/shunslot-logo.jpg"
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
                                      type="number"
                                      placeholder="เบอร์โทรศัพท์"
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
                                    />
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      maxLength={typePhone === "TH" ? 10 : 13}
                                      value={inputPhonenumber}
                                      placeholder={selectedOption}
                                      onChange={(event) =>
                                        handleChangePhone(event)
                                      }
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
                                  กรุณาเลือกธนาคารของคุณ
                                </h5>
                                <div
                                  className="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12"
                                >
                                  <div
                                    style={{
                                      background: `linear-gradient(90deg, ${backgroundDropdown} 0%, rgb(17, 17, 17) 100%)`,
                                      color: bankCode === 6 ? "#000" : "#FFF",
                                      borderRadius:'3px'
                                    }}
                                    className="dropdown"
                                    tabIndex="1"
                                    ref={dropdownRef}
                                    onBlur={handleBlur}
                                    onClick={toggleDropdown}
                                  >
                                    <span style={{ padding: "10px" }}>
                                      {bankNameOption ||
                                        "กรุณาเลือกธนาคารของคุณ"}
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
                                            {/* Option 1 */}
                                          </li>
                                        ))}
                                        {/* <li
                                          onClick={() =>
                                            handleItemClick("Option 2", "2")
                                          }
                                        >
                                          Option 2
                                        </li>
                                        <li
                                          onClick={() =>
                                            handleItemClick("Option 3", "3")
                                          }
                                        >
                                          Option 3
                                        </li> */}
                                        {/* Add more options as needed */}
                                      </ul>
                                    </div>
                                    {/* {hiddenValue && (
                                      <span className="msg">
                                        Hidden input value:{" "}
                                        <strong>{hiddenValue}</strong>
                                      </span>
                                    )} */}
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
                                      กลับ
                                    </span>
                                  </div>
                                </button>
                                <div style={{ width: "10px" }} />
                                <button
                                  onClick={() => checkBank()}
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
                        {/* <div
                          data-v-cbca53d4=""
                          class="flex w-full mt-4 justify-center"
                        >
                          <div data-v-704c3ab0="" data-v-cbca53d4="" class="">
                            <div
                              data-v-704c3ab0=""
                              class="flex wrapper items-center justify-center"
                            >
                              <div
                                data-v-704c3ab0=""
                                class="bg-darkCard flex text-white py-[6px] px-4 rounded-[10px]"
                              >
                                <img
                                  data-v-704c3ab0=""
                                  alt="flat-img"
                                  class="w-8 h-8 object-cover rounded-full"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA6ZJREFUaEPlm01IVFEUx3/nTTbONAWtkiCiDxepTRRICQXtKhvcNFFkEdGiFlEbCWpR1qIg2hQtahERfVBkG5msdkGRRVBgZQv7IIKwVZDjjGbzTjx1JkcnnZk36oz3gSDMu+f+f/fcdz/OPVeYpKeNmmVgrVbsaoVKYClQASwAyoer7QN+AN3AZ4EuwXoP9pt63n2aDGlSSKMPWVn3B90osJ6hv3l52v8FPFN4Ngt5soW37XnaGVPMNXAby70JvNsspEGhHphbKHHDdnoE2my01UP//Xo+9rux7wZYItQ0KuwQCLkRkW1ZhYjA3RDvbgGabbmR7+UFHCG4AXQ/6N58KnVfRq6DXA3R8TRXWzkBO91XKT8AHFCoyrWyQr4v0AlcEfqu5NLNswZ+wIrFNlaTIIcKKdytLUUvWdjnt/Lhaza2sgJupbrWgqMg4WyMTv072mLDuQbev5qo7gmBWwmus9CToJsnMja9v8sjGznVQMeL8XSMCzzkWet08cMmER1o+8R4nv4vcPznz8X9A/Z5gSLtxpn9qNDiLbOafPPnZ/ymMwJ3dXV5KxYucmCLaoDK9pNRuNT9/VtTZWXlmEVKRuCeWN9hUS5kW0ExvqfCkbn+8oujtY0BjscHNiTsxGWmeZ4tQCN2eizPQZ+vLG1xkgasqtIb+31t+lZQBcBMMyHX5/hn7xOR1DI0DTgaje9G5Eahq51We6p7AgHfzdQ4nvxHVb29sf4WpmgjMIWNEJnj94ZFZHAAS3k4Go3vQsTZhcy8R7UxEPDdHg18B5EdM4/W2Ujq3UDAtzMFHIsN1CXsxGORgm/ei6L9VOnxWJ5Nfn9Z+2CXrqsNH1PkTFGomyQRgh5vf9VydhA4WBV6wFB4ZiY/bR2dka1SU7Nlmdie15J/wK0kGknhl1qJNRKsDoVR7pWEarcihe0SrAqdBJrd2iqR8s2yqip0U6GxRAS7kilwy/Hwc2egdmWpdAq3O9/wZ5QlpaPZhVLhi+PhXsDvwkwpFY05wAnAKiXVLrTaRgIb1qUNHLTMmpZMXHiYtbQ0bvNg3PbQuACAA7y2NnwMZUaHeBCOv0yGeIwL4jlejkbj5oRph4HNCsQbd9Qy7GVzDtMcYOOOSx1oow7Ek5EEo1IeHGjjkloGu3YqbalYs+8yR7YUzT1tKWnKqMS0f9AGpR6me9qQ5NIktFHpw0looxLER46JxlwBGDURmHPJYyS4Sdd4xsz8RlzU+t9JXrFexfsLeAiy7MYsDWkAAAAASUVORK5CYII="
                                />
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
