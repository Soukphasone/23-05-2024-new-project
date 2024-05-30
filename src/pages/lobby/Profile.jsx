import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChangePassword from "../../components/Modal/ChangePassword";
import { createPortal } from "react-dom";
import { DataLocalStorage } from "../../helper";
import { showErrorAlert, showSuccessAlert } from "../../helper/SweetAlert";
import Constant from "../../constant";
function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState("");
  const [bankList, setBankList] = useState("");
  const [Password, setOldPassword] = useState("");
  useEffect(() => {
    const userData = DataLocalStorage();
    const lcsBankList = JSON.parse(
      localStorage.getItem(Constant.DATA_BANK_LIST)
    );

    setUsername(userData.username);
    setBankList(lcsBankList);
    setOldPassword(userData?.password);
  }, []);
  const _copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      showSuccessAlert("คัดลอกสำเร็จ");
    }).catch(err => {
     showErrorAlert("คัดลอกไม่สำเร็จ")
    });
  };
  const handleButtonClick1 = () => {
    setOpenModal(false);
  };
  const [active, setActive] = useState("user");
  const handleUser = () => {
    setActive("user");
  };
  const handleAccount = () => {
    setActive("account");
  };
  const class_user =
    active === "user"
      ? "tabslinks relative cursor-pointer flex items-center justify-center userInfo w-full active"
      : "tabslinks relative cursor-pointer flex items-center justify-center userInfo w-full";
  const class_acount =
    active === "account"
      ? "tabslinks relative cursor-pointer flex items-center justify-center bankInfo w-full active"
      : "tabslinks relative cursor-pointer flex items-center justify-center bankInfo w-full";
  return (
    <div className="overflow-x-hidden overflow-y-auto text-primary" style={{}}>
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
              <div
                style={{ marginTop: "6rem" }}
                className="animate__animated max-w-[420px] mx-auto animate__fadeIn"
              >
                <div className="p-4 rounded-base space-y-4 bg-[var(--card-primary)]">
                  <div data-v-ea58f736="" id="profileTab" className="w-full">
                    <div data-v-ea58f736="" className="tabsWrapper w-full">
                      <div
                        data-v-ea58f736=""
                        className="tabs relative flex items-center justify-center tab-secondary w-full"
                      >
                        <div
                          data-v-ea58f736=""
                          className="w-full absolute bottom-0 left-0 rounded-full slide profileTab"
                          style={{
                            width: "50%",
                            left: active === "user" ? "0px" : "50%",
                          }}
                        ></div>
                        <div
                          data-v-ea58f736=""
                          className="w-full absolute bottom-0 left-0 rounded-full slide-border profileTab"
                        ></div>
                        <div
                          onClick={handleUser}
                          data-v-ea58f736=""
                          id="profileTab"
                          className={class_user}
                        >
                          <span
                            data-v-ea58f736=""
                            className="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                          >
                            ข้อมูลส่วนตัว
                          </span>
                        </div>
                        <div
                          onClick={handleAccount}
                          data-v-ea58f736=""
                          id="profileTab"
                          className={class_acount}
                        >
                          <span
                            data-v-ea58f736=""
                            className="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                          >
                            บัญชีธนาคาร
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {active === "user" ? (
                    <div className="space-y-[10px]">
                      <div className="w-full flex bg-[var(--card-secondary)] px-4 py-[11px] rounded-[10px]">
                        <span className="text-sm text-left w-[60%] text-[var(--text-link)]">
                          ยูสเซอร์เข้าเกม
                        </span>
                        <div className="w-full flex items-center gap-x-4 justify-between">
                          <span className="text-primary text-left w-full max-w-40 truncate text-sm">
                            {username}
                          </span>
                          <span className="nuxt-icon nuxt-icon--fill cursor-pointer text-[var(--primary)]">
                            <svg
                              onClick={() => _copyText(username)}
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_268_1612)">
                                <path
                                  d="M11.4286 2.85712H1.71428C0.767511 2.85712 0 3.62463 0 4.5714V14.2857C0 15.2324 0.767511 16 1.71428 16H11.4286C12.3753 16 13.1428 15.2324 13.1428 14.2857V4.5714C13.1428 3.62463 12.3753 2.85712 11.4286 2.85712Z"
                                  fill="var(--primary)"
                                ></path>
                                <path
                                  d="M14.2856 1.10693e-09H3.99993C3.05828 -3.3481e-05 2.29288 0.759508 2.28564 1.70113C2.28564 1.70571 2.28564 1.7097 2.28564 1.71428H11.4285C13.0057 1.71616 14.2838 2.99424 14.2856 4.57141V13.7143C14.2902 13.7143 14.2942 13.7143 14.2988 13.7143C15.2404 13.707 16 12.9416 15.9999 12V1.71428C15.9999 0.767511 15.2324 1.10693e-09 14.2856 1.10693e-09Z"
                                  fill="var(--primary)"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_268_1612">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex bg-[var(--card-secondary)] px-4 py-[11px] rounded-[10px]">
                        <span className="text-sm text-left w-[60%] text-[var(--text-link)]">
                          เปลี่ยนรหัสผ่าน
                        </span>
                        <div className="w-full flex items-center gap-x-4 justify-between">
                          <span className="text-primary text-left w-full max-w-40 truncate text-sm">
                            {Password}
                          </span>
                          <span className="nuxt-icon nuxt-icon--fill cursor-pointer text-active">
                            <svg
                              onClick={() => setOpenModal(true)}
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_4810_15761)">
                                <path
                                  d="M12.6666 8.03064C12.298 8.03064 12 8.32935 12 8.69727V14.0306C12 14.3979 11.7013 14.6973 11.3334 14.6973H2C1.63196 14.6973 1.33337 14.3979 1.33337 14.0306V4.69727C1.33337 4.32996 1.63196 4.03064 2 4.03064H7.33337C7.70203 4.03064 8 3.73193 8 3.36401C8 2.99597 7.70203 2.69727 7.33337 2.69727H2C0.897339 2.69727 0 3.5946 0 4.69727V14.0306C0 15.1333 0.897339 16.0306 2 16.0306H11.3334C12.436 16.0306 13.3334 15.1333 13.3334 14.0306V8.69727C13.3334 8.32861 13.0353 8.03064 12.6666 8.03064Z"
                                  fill="#FFD15C"
                                ></path>
                                <path
                                  d="M6.25075 7.42334C6.20412 7.46997 6.17275 7.5293 6.15944 7.59326L5.68813 9.95068C5.66616 10.0599 5.70082 10.1726 5.77944 10.252C5.84279 10.3153 5.92812 10.3492 6.01552 10.3492C6.03676 10.3492 6.05886 10.3473 6.08083 10.3427L8.43752 9.87134C8.50283 9.85791 8.56215 9.82666 8.60817 9.77991L13.8828 4.50525L11.5261 2.14868L6.25075 7.42334Z"
                                  fill="#FFD15C"
                                ></path>
                                <path
                                  d="M15.5117 0.518768C14.8618 -0.131256 13.8044 -0.131256 13.155 0.518768L12.2324 1.44138L14.5891 3.79807L15.5117 2.87534C15.8264 2.56137 15.9998 2.14267 15.9998 1.69736C15.9998 1.25204 15.8264 0.833344 15.5117 0.518768Z"
                                  fill="#FFD15C"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_4810_15761">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span className="nuxt-icon nuxt-icon--fill cursor-pointer text-[var(--primary)]">
                            <svg
                              onClick={() => _copyText(Password)}
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_268_1612)">
                                <path
                                  d="M11.4286 2.85712H1.71428C0.767511 2.85712 0 3.62463 0 4.5714V14.2857C0 15.2324 0.767511 16 1.71428 16H11.4286C12.3753 16 13.1428 15.2324 13.1428 14.2857V4.5714C13.1428 3.62463 12.3753 2.85712 11.4286 2.85712Z"
                                  fill="var(--primary)"
                                ></path>
                                <path
                                  d="M14.2856 1.10693e-09H3.99993C3.05828 -3.3481e-05 2.29288 0.759508 2.28564 1.70113C2.28564 1.70571 2.28564 1.7097 2.28564 1.71428H11.4285C13.0057 1.71616 14.2838 2.99424 14.2856 4.57141V13.7143C14.2902 13.7143 14.2942 13.7143 14.2988 13.7143C15.2404 13.707 16 12.9416 15.9999 12V1.71428C15.9999 0.767511 15.2324 1.10693e-09 14.2856 1.10693e-09Z"
                                  fill="var(--primary)"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_268_1612">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-[10px]">
                      <div className="w-full flex justify-center items-center bg-[var(--card-secondary)] px-4 py-[11px] rounded-[10px]">
                        <span className="text-sm text-left w-[60%] text-[var(--text-link)]">
                          ธนาคาร
                        </span>
                        <div className="w-full flex items-center justify-center gap-x-4">
                          <span
                            className="text-primary text-left w-full max-w-40 truncate text-sm flex items-center justify-between gap-10"
                            style={{
                              display: "flex",
                              gap: "10px",
                              textTransform: "uppercase",
                            }}
                          >
                            {bankList[0]?.s_icon.split(".")[0]==='kk'?'kkp':bankList[0]?.s_icon.split(".")[0]}{" "} 
                            <img
                              src={`/assets/images/bank/${bankList[0]?.s_icon}`}
                              alt="logo bank"
                              className="result"
                              style={{ width: 30, height: 30 }}
                            />
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex bg-[var(--card-secondary)] px-4 py-[11px] rounded-[10px]">
                        <span className="text-sm text-left w-[60%] text-[var(--text-link)]">
                          ชื่อบัญชี
                        </span>
                        <div className="w-full flex items-center gap-x-4 justify-between">
                          <span className="text-primary text-left w-full max-w-40 truncate text-sm">
                            {bankList?.[0]?.s_account_name}
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex bg-[var(--card-secondary)] px-4 py-[11px] rounded-[10px]">
                        <span className="text-sm text-left w-[60%] text-[var(--text-link)]">
                          เลขบัญชี
                        </span>
                        <div className="w-full flex items-center gap-x-4 justify-between">
                          <span className="text-primary text-left w-full max-w-40 truncate text-sm">
                            {bankList?.[0]?.s_account_no}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      {openModal &&
        createPortal(
          <ChangePassword
            closeModal={handleButtonClick1}
            oldPassword={Password}
          />,
          document.body
        )}
    </div>
  );
}
export default Profile;
