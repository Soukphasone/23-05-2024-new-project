import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import { showSuccessAlert, showErrorAlert } from "../../helper/SweetAlert";
import Constant from "../../constant";
import { useTranslation } from "react-i18next";
function BankList() {
  const { t } = useTranslation();
  const bank = "BANK";
  const history = useHistory();
  const bankList = history?.location?.state;
  const _copyText = async (text) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        showSuccessAlert(t("Complete"));
      } catch (err) {
        showErrorAlert(t("unsuccessful"));
      }
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showSuccessAlert(t("Complete"));
      } catch (err) {
        showErrorAlert(t("unsuccessful"));

      }
      document.body.removeChild(textArea);
    }
  }
  const Back = () => {
    history.push(Constant.DEPOSIT);
  };
  const UploadSlip = () => {
    history.push(Constant.UPLOAD_SLIP, bankList);
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
                            {t("AccountDeposit")}
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
                        {t("Minimum")}
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
                          <p className="text-active text-sm">
                            {t("AccountToBeTransferred")}:{" "}
                          </p>
                          <div className="w-[45px] h-[45px] mt-4 text-white">
                            <div className="w-[45px] h-[45px] rounded-base overflow-hidden grid place-content-center">
                              <span className="nuxt-icon text-[2.4rem] text-white">
                                <img
                                  alt=""
                                  src={`/assets/images/bank/${bankList && bankList?.s_icon
                                    }`}
                                  width="512"
                                  height="512"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{bankList?.s_fname_th}</p>
                          <p className="text-lg mt-2 text-active font-bold">
                            {bankList?.s_account_no}
                          </p>
                          <p className="text-sm mt-[10px]">
                            {bankList?.s_account_name}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => _copyText(bankList?.s_account_no)}
                        data-v-9dec3a92=""
                        id="btn01"
                        type="submit"
                        className="base-button-wrapper v-rounded btn-primary btn-md mt-4 font-medium text-base cursor-pointer border border-fontPrimary w-full rounded-base btn-primary h-[38px] flex items-center justify-center"
                      >
                        <div
                          data-v-9dec3a92=""
                          className="flex justify-center items-center"
                        >
                          {t("Copy")}
                        </div>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={UploadSlip}
                      className="w-full h-[34px] flex items-center gap-x-2 justify-center bg-card-secondary rounded-[5px] p-2 &lt;sm:h-auto &lt;sm:text-center &lt;sm:justify-start &lt;sm:p-2"
                    >
                      <div
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <p className="text-danger text-lg font-bold">
                          {" "}
                          {t("Slip")}
                        </p>
                      </div>
                      <span
                        data-v-c89fa524=""
                        className="nuxt-icon text-[22px]"
                      >
                        <svg
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.594919 11.9047L0.0896837 11.3682C-0.0298946 11.2413 -0.0298947 11.0354 0.0896836 10.9084L4.7008 6L0.0896828 1.09165C-0.0298955 0.964666 -0.0298956 0.758771 0.0896827 0.63176L0.594918 0.0952376C0.714496 -0.0317461 0.908383 -0.0317461 1.02799 0.0952375L6.37186 5.77004C6.49143 5.89703 6.49143 6.10292 6.37186 6.22993L1.02799 11.9047C0.908384 12.0318 0.714497 12.0318 0.594919 11.9047Z"
                            fill="var(--primary)"
                          ></path>
                        </svg>
                      </span>
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

export default BankList;
