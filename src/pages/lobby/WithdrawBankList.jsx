import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DataLocalStorage } from "../../helper";
import Constant from "../../constant";
import { showErrorAlert, showSuccessAlert } from "../../helper/SweetAlert";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function WdBankList() {
  const { t } = useTranslation();
  const bank = "BANK";
  const history = useHistory();
  const bankList = history?.location?.state;
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [dataUser, setDataUser] = useState();
  const [amountWithdraw, setAmountWithdraw] = useState("");

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
    const _res = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Member/Balance`,
      data: {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
      },
    });
    if (_res?.data?.statusCode === 0) {
      setDataUser(_res?.data?.data);
    }
  };

  const _withdrawMoney = async () => {
    try {
      const _data = {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
        f_amount: amountWithdraw,
        i_bank: bankList?.id,
        i_ip: "1.2.3.4",
        actionBy: "adm",
      };
      const _res = await axios({
        method: "post",
        url: `${Constant.SERVER_URL}/Withdraw/CreateTransaction`,
        data: _data,
      });
      if (_res?.data?.statusCode === 0) {
        showSuccessAlert(t("Complete"));
        _getData();
      } else {
        showErrorAlert(_res?.data?.statusDesc);
      }
    } catch (error) {
      showErrorAlert(t("unsuccessful"));
    }
  };
  const Back = () => {
    history.push(Constant.WITHDRAW);
  };

  return (
    <div
      className="overflow-x-hidden overflow-y-auto text-primary"
      style={{ zIndex: "-10" }}
    >
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
                style={{ marginTop: "5rem" }}
                className="base-container-small"
              >
                <div
                  onClick={Back}
                  data-v-fe9de6ba=""
                  className="breadcrumb-wrapper py-3 w-max overflow-hidden"
                >
                  <div style={{ display: "flex" }}>
                    <span
                      data-v-fe9de6ba=""
                      className="breadcrumb-wrapper__item font-medium text-sm cursor-pointer flex-shrink-0"
                    >
                      <img
                        src="/assets/images/icons/icon-arrow-left.png"
                        alt="arrow-lft"
                      />
                    </span>
                    <span
                      data-v-fe9de6ba=""
                      className="breadcrumb-wrapper__item font-medium text-sm cursor-pointer flex-shrink-0"
                    >
                      <p>{t("back")}</p>
                    </span>
                  </div>
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
                          style={{ width: "100%" }}
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
                            {t("Withdraw")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-full h-[34px] flex items-center gap-x-2 justify-center bg-card-secondary rounded-[5px] p-2 &lt;sm:h-auto &lt;sm:text-center &lt;sm:justify-start &lt;sm:p-2">
                      <p
                        className="text-danger text-lg font-bold"
                        style={{ textAlign: "center", width: "100%" }}
                      >
                        {t("MinimumWithdrawalFieldBaht")}{" "}
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
                          {/* <p className="text-active text-sm">
                            {t("AccountToBeTransferred")}:{" "}
                          </p> */}
                          <div className="w-[45px] h-[45px] mt-4 text-white">
                            <div className="w-[45px] h-[45px] rounded-base overflow-hidden grid place-content-center">
                              <span className="nuxt-icon text-[2.4rem] text-white">
                                <img
                                  alt=""
                                  src={`/assets/images/bank/${
                                    bankList && bankList?.s_icon
                                  }`}
                                  width="512"
                                  height="512"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            style={{ textTransform: "uppercase" }}
                            className="text-sm"
                          >
                            {" "}
                            {bankList?.s_icon?.split(".")[0]}
                          </p>
                          <p className="text-lg mt-2 text-active font-bold">
                            {bankList?.s_account_no}
                          </p>
                          <p className="text-sm mt-[10px]">
                            {bankList?.s_account_name}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{ marginTop: "20px" }}
                        data-v-d8556cff=""
                        className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                      >
                        <div
                          data-v-d8556cff=""
                          className="main-input h-[44px] relative w-full border-[1px] border-transparent rounded-[10px] p-[10px] bg-[var(--card-secondary)] flex items-center text-[var(--primary)] w-full rounded-[10px] flex items-center"
                        >
                          <input
                            data-v-d8556cff=""
                            className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                            type="number"
                            placeholder={t("EnterTheAmountYourWithdraw")}
                            onChange={(e) =>
                              setAmountWithdraw(e?.target?.value)
                            }
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => _withdrawMoney()}
                        onKeyDown={() => ""}
                        data-v-9dec3a92=""
                        id="btn01"
                        type="submit"
                        disabled={amountWithdraw >= 1 ? false : true}
                        className="base-button-wrapper v-rounded btn-primary btn-md mt-4 font-medium text-base cursor-pointer border border-fontPrimary w-full rounded-base btn-primary h-[38px] flex items-center justify-center"
                      >
                        <div
                          data-v-9dec3a92=""
                          className="flex justify-center items-center"
                        >
                          {t("Withdraw")}
                        </div>
                      </button>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </main>
          <Footer Active={bank} />
        </div>
      </div>
    </div>
  );
}

export default WdBankList;
