import React from "react";
import Header from "../../components/Header";
// import Letter_slide from "../../components/Letter_slide";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import {showSuccessAlert } from "../../helper/SweetAlert";
import Constant from "../../constant";
function BankList() {
  const bank = "BANK";
  const history = useHistory();
  const banklist = history?.location?.state;
  const _copyText = (text) => {
    navigator.clipboard.writeText(text);
    showSuccessAlert("คัดลอกสำเร็จ");
  };
  const Back =()=>{
    history.push(Constant.DEPOSIT)
  }
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
              {/* <Letter_slide /> */}
              <div className="base-container-small">
                <div
                onClick={Back}
                  data-v-fe9de6ba=""
                  className="breadcrumb-wrapper py-3 w-max overflow-hidden"
                >
                  <span
                    data-v-fe9de6ba=""
                    className="breadcrumb-wrapper__item font-medium text-sm cursor-pointer flex-shrink-0"
                  >
                    เติมเงิน {" "}
                  </span>
                  <span
                    data-v-fe9de6ba=""
                    className="breadcrumb-wrapper__item font-medium text-sm text-primary"
                  >
                    /{ banklist?.s_icon?.split(".")[0]}
                  </span>
                </div>
                <div className="p-4 rounded-base space-y-4 bg-[var(--card-primary)]">
                  <div data-v-ea58f736="" id="depositTab" className="w-full">
                    <div data-v-ea58f736="" className="tabsWrapper w-full">
                      <div
                        data-v-ea58f736=""
                        className="tabs relative flex items-center justify-center tab-secondary w-full"
                      >
                        <div
                          data-v-ea58f736=""
                          className="w-full absolute bottom-0 left-0 rounded-full slide depositTab"
                          style={{ width: "608px", left: "0px" }}
                        ></div>
                        <div
                          data-v-ea58f736=""
                          className="w-full absolute bottom-0 left-0 rounded-full slide-border depositTab"
                        ></div>
                        <div
                          data-v-ea58f736=""
                          id="depositTab"
                          className="tabslinks relative cursor-pointer flex items-center justify-center accounting w-full active"
                        >
                          <span
                            data-v-ea58f736=""
                            className="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                          >
                            โอนแบบบัญชี
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-full h-[34px] flex items-center gap-x-2 justify-center bg-card-secondary rounded-[5px] p-2 &lt;sm:h-auto &lt;sm:text-center &lt;sm:justify-start &lt;sm:p-2">
                      <p className="text-danger text-lg font-bold">
                        {" "}
                        เติมเงินขั้นต่ำ 1 บาท{" "}
                      </p>
                      <span className="nuxt-icon nuxt-icon--fill text-danger">
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
                    <div className="flex flex-col items-center justify-center w-full rounded-base bg-card-primary text-center mt-4">
                      <div className="flex flex-row w-full justify-between">
                        <div className="flex flex-col">
                          <p className="text-active text-sm">บัญชีที่ต้องโอน: </p>
                          <div className="w-[45px] h-[45px] mt-4 text-white">
                            <div
                              style={{ backgroundColor: "rgb(78, 46, 127)" }}
                              className="w-[45px] h-[45px] rounded-base overflow-hidden grid place-content-center"
                            >
                              <span
                                className="nuxt-icon text-[2.4rem] text-white"
                                id="scb"
                              >
                                <img
                                  src={`/assets/images/bank/${
                                    banklist && banklist?.s_icon
                                  }`}
                                  alt="scb"
                                  id="image0_5_3"
                                  width="512"
                                  height="512"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{banklist?.s_fname_th}</p>
                          <p className="text-lg mt-2 text-active font-bold">
                            {banklist?.s_account_no}
                          </p>
                          <p className="text-sm mt-[10px]">
                            {banklist?.s_account_name}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => _copyText(banklist?.s_account_no)}
                        data-v-9dec3a92=""
                        id="btn01"
                        type="submit"
                        className="base-button-wrapper v-rounded btn-primary btn-md mt-4 font-medium text-base cursor-pointer border border-fontPrimary w-full rounded-base btn-primary h-[38px] flex items-center justify-center"
                      >
                        <div
                          data-v-9dec3a92=""
                          className="flex justify-center items-center"
                        >
                          คัดลอกบัญชี
                        </div>
                      </button>
                    </div>
                    <div className="h-[1px] mt-4 bg-[#38383A]"></div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer Active={bank}/>
        </div>
      </div>
    </body>
  );
}

export default BankList;
