import { t } from "i18next";
import React, { useState } from "react";

function History({
  closeModal,
  dataHistoryDeposit,
  dataHistoryWithdraw,
  dataHistoryBonus,
}) {
  const [active, setActive] = useState("deposit");
  const handleDeposit = () => {
    setActive("deposit");
  };
  const handleWithdraw = () => {
    setActive("withdraw");
  };
  const handleBonus = () => {
    setActive("bonus");
  };
  const Class_Deposit =
    active === "deposit"
      ? "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 active"
      : "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 ";
  const Class_Withdraw =
    active === "withdraw"
      ? "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 active"
      : "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 ";
  const Class_Bonus =
    active === "bonus"
      ? "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 active"
      : "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 ";
  return (
    <div
      className="vfm vfm--fixed vfm--inset flex justify-center items-center dialog"
      onClick={(e) => {
        if (
          e.target.className ===
          "vfm vfm--fixed vfm--inset flex justify-center items-center dialog"
        ) {
          closeModal("close");
        }
      }}
      id="detail-affiliate-modail-show"
      title=""
      style={{ zIndex: 1000 }}
    >
      <div
        className="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
        tabindex="0"
      >
        <span
          onClick={closeModal}
          className="nuxt-icon nuxt-icon--fill absolute bg-[red] top-[-10px] right-[-10px] text-sm p-2 rounded-full z-10 text-xs cursor-pointer"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1401_15474)">
              <path
                d="M4.88369 100C3.91784 100 2.97363 99.7139 2.17049 99.1774C1.36735 98.6409 0.741374 97.8782 0.371733 96.9859C0.00209162 96.0936 -0.0946053 95.1117 0.0938733 94.1644C0.282352 93.2171 0.747538 92.347 1.43059 91.6641L91.6644 1.43032C92.5802 0.514502 93.8223 0 95.1175 0C96.4126 0 97.6548 0.514502 98.5706 1.43032C99.4864 2.34614 100.001 3.58826 100.001 4.88342C100.001 6.17859 99.4864 7.42071 98.5706 8.33653L8.3368 98.5703C7.88375 99.0243 7.34547 99.3843 6.75288 99.6297C6.16029 99.875 5.52506 100.001 4.88369 100Z"
                fill="white"
              ></path>
              <path
                d="M95.1172 100C94.4758 100.001 93.8406 99.875 93.248 99.6297C92.6554 99.3843 92.1172 99.0243 91.6641 98.5703L1.43032 8.33653C0.514502 7.42071 0 6.17859 0 4.88342C0 3.58826 0.514502 2.34614 1.43032 1.43032C2.34614 0.514502 3.58826 0 4.88342 0C6.17859 0 7.42071 0.514502 8.33653 1.43032L98.5703 91.6641C99.2534 92.347 99.7186 93.2171 99.907 94.1644C100.096 95.1117 99.9988 96.0936 99.6292 96.9859C99.2595 97.8782 98.6336 98.6409 97.8304 99.1774C97.0273 99.7139 96.0831 100 95.1172 100V100Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clippath id="clip0_1401_15474">
                <rect width="100" height="100" fill="white"></rect>
              </clippath>
            </defs>
          </svg>
        </span>

        <div className="scroll-container ">
          <div>
            <div
              data-v-ea58f736=""
              id="affiliate-advance-tab"
              className="w-full"
            >
              <div data-v-ea58f736="" className="tabsWrapper">
                <div
                  style={{
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  data-v-ea58f736=""
                  className="tabs relative flex items-center justify-center tab-primary w-max"
                >
                  <div
                    className={active === "deposit" ? "underline-active-h" : ""}
                  >
                    <div
                      onClick={handleDeposit}
                      data-v-ea58f736=""
                      id="affiliate-advance-tab"
                      className={Class_Deposit}
                    >
                      <span
                        data-v-ea58f736=""
                        className="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                      >
                        {t("Deposit")}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      active === "withdraw" ? "underline-active-h" : ""
                    }
                  >
                    <div
                      onClick={handleWithdraw}
                      data-v-ea58f736=""
                      id="affiliate-advance-tab"
                      className={Class_Withdraw}
                    >
                      <span
                        data-v-ea58f736=""
                        className="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                      >
                        {t("Withdraw")}
                      </span>
                    </div>
                  </div>
                  <div
                    className={active === "bonus" ? "underline-active-h" : ""}
                  >
                    <div
                      onClick={handleBonus}
                      data-v-ea58f736=""
                      id="affiliate-advance-tab"
                      className={Class_Bonus}
                    >
                      <span
                        data-v-ea58f736=""
                        className="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                      >
                        {t("bonus")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full my-2 min-h-[356px] flex flex-col items-center">
            {dataHistoryBonus.length > 0 ||
            dataHistoryWithdraw.length > 0 ||
            dataHistoryDeposit.length > 0 ? (
              <div
                className="text-base mx-auto text-secondary flex flex-col justify-center items-center"
                style={{
                  width: "100%",
                }}
              >
                {active === "deposit" ? (
                  <div className="history-list">
                    {dataHistoryDeposit?.length > 0 &&
                      dataHistoryDeposit?.map((deposit, index) => (
                        <div
                          key={index}
                          style={{ padding: "10px 10px" }}
                          className="deposit-withdraw-list"
                        >
                          <div className="h-list-left">
                            <p>{t("DepositList")}</p>
                            <p className="text-h-amount">
                              {" "}
                              {deposit?.f_amount} {t("baht")}
                            </p>
                            <p>
                              {t("Remark")} : {deposit?.s_remark}
                            </p>
                          </div>
                          <div className="h-right">
                            <div
                              className={
                                deposit?.s_status === "Y"
                                  ? "text-success"
                                  : deposit?.s_status === "C"
                                  ? "text-cancel"
                                  : "not-success"
                              }
                            >
                              <p>
                                {deposit?.s_status === "Y"
                                  ? `${t("Complete")}`
                                  : deposit?.s_status === "C"
                                  ? `${t("cancel")}`
                                  : `${t("unsuccessful")}`}
                              </p>
                              <p>{deposit?.d_datetime}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : active === "withdraw" ? (
                  <div className="history-list">
                    {dataHistoryWithdraw?.length > 0 &&
                      dataHistoryWithdraw?.map((withdraw, index) => (
                        <div
                          key={index}
                          style={{ padding: "10px 10px" }}
                          className="deposit-withdraw-list"
                        >
                          <div className="h-list-left">
                            <p>{t("WithdrawalList")}</p>
                            <p className="text-h-amount">
                              {" "}
                              {withdraw?.f_amount} {t("baht")}
                            </p>
                            <p>
                              {t("Remark")} : {withdraw?.s_remark}
                            </p>
                          </div>
                          <div className="h-right">
                            <div
                              className={
                                withdraw?.s_status === "Y"
                                  ? "text-success"
                                  : withdraw?.s_status === "C"
                                  ? "text-cancel"
                                  : "text-not-success"
                              }
                            >
                              <p>
                                {withdraw?.s_status === "Y"
                                  ? `${t("Complete")}`
                                  : withdraw?.s_status === "C"
                                  ? `${t("cancel")}`
                                  : `${t("unsuccessful")}`}
                              </p>
                              <p>{withdraw?.d_datetime}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : active === "bonus" ? (
                  <div className="history-list">
                    {dataHistoryBonus?.length > 0 &&
                      dataHistoryBonus?.map((bonus, index) => (
                        <div
                          key={index}
                          style={{ padding: "10px 10px" }}
                          className="deposit-withdraw-list"
                        >
                          <div className="h-list-left">
                            <p>{t("BonusItems")}</p>
                            <p>
                              {t("Remark")} : {bonus?.s_remark}
                            </p>
                          </div>
                          <div className="h-right">
                            <div
                              style={{ marginTop: "-20px" }}
                              className="text-success"
                            >
                              <p>{t("Complete")}</p>
                              <p>{bonus?.d_datetime}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <div
                style={{ marginTop: "5rem" }}
                data-v-82953e26=""
                class="w-full flex justify-center items-center gap-2 mb-4"
              >
                <span class="nuxt-icon nuxt-icon--fill icon-not-item">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0C3.13111 0 0 3.13075 0 7C0 10.8688 3.13075 14 7 14C10.8689 14 14 10.8693 14 7C14 3.13116 10.8693 0 7 0ZM7.71884 9.7787C7.71884 9.99986 7.39635 10.221 7.00014 10.221C6.5855 10.221 6.29068 9.99986 6.29068 9.7787V6.26812C6.29068 6.01013 6.58552 5.83502 7.00014 5.83502C7.39635 5.83502 7.71884 6.01013 7.71884 6.26812V9.7787ZM7.00016 4.98739C6.57631 4.98739 6.24463 4.67411 6.24463 4.32395C6.24463 3.97381 6.57634 3.66975 7.00016 3.66975C7.4148 3.66975 7.74654 3.97381 7.74654 4.32395C7.74654 4.67411 7.41478 4.98739 7.00016 4.98739Z"
                      fill="#8E8E8E"
                    ></path>
                  </svg>
                </span>
                <span class="text-primary font-medium <sm:text-base sm:text-base md:text-lg">
                  No Item
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
