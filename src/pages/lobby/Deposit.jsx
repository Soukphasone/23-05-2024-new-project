import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
// import Letter_slide from "../../components/Letter_slide";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import { DataLocalStorage } from "../../helper";
import Constant from "../../constant";
function Deposit() {
  const bank = "BANK";
  const history = useHistory();
  const [depositBankList, setDepositBankList] = useState({});
  const [bankList, setBankList] = useState("");
  useEffect(() => {
    const userData = DataLocalStorage();
    if (userData) {
      setDepositBankList(userData?.info?.bankDeposit);
      setBankList(userData?.info?.bankList?.[0]);
    }
  }, []);
  const NextoBankList = (bank) => {
    history.push(Constant.BANK_LIST, bank);
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
              {/* <Letter_slide /> */}
              <div className="base-container-small">
                <div className="flex flex-col items-center space-y-3 justify-center w-full rounded-base bg-card-primary p-4 text-center">
                  <span className="text-base text-active">เลือกธนาคาร</span>
                  {depositBankList?.length > 0 &&
                    depositBankList?.map((bank) => (
                      <div
                        onClick={() => NextoBankList(bank)}
                        className="flex flex-row cursor-pointer w-full h-[60px] rounded-[5px] overflow-hidden bg-card-secondary px-[10px] items-center justify-between"
                      >
                        <div className="w-[45px] h-[45px]">
                          <div className="w-[45px] h-[45px] rounded-base overflow-hidden grid place-content-center">
                            <span className="nuxt-icon text-[2.4rem] text-white">
                              <img
                                key={bank?.index}
                                src={`/assets/images/bank/${bank?.s_icon}`}
                                alt="scb"
                                width="512"
                                height="512"
                              />
                            </span>
                          </div>
                        </div>
                        <p className="text-sm">{bank?.s_fname_th}</p>
                        <div className="">
                          <span className="nuxt-icon nuxt-icon--fill">
                            <svg
                              width="7"
                              height="12"
                              viewBox="0 0 7 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.631342 11.9047L0.0951745 11.3682C-0.0317249 11.2413 -0.0317249 11.0354 0.0951744 10.9084L4.9886 6L0.0951736 1.09165C-0.0317258 0.964665 -0.0317258 0.758771 0.0951735 0.631761L0.631341 0.0952377C0.75824 -0.031746 0.963998 -0.031746 1.09092 0.0952376L6.76197 5.77004C6.88887 5.89703 6.88887 6.10292 6.76197 6.22993L1.09093 11.9047C0.963999 12.0318 0.758241 12.0318 0.631342 11.9047Z"
                                fill="#ECECEC"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center w-full rounded-base bg-card-primary text-center mt-4 p-4">
                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm">บัญชีของคุณ: </p>
                      <div className="w-[45px] h-[45px] mt-4 text-white">
                        <div
                          // style={{ backgroundColor: "rgb(19, 143, 45)" }}
                          className="w-[45px] h-[45px] rounded-base overflow-hidden grid place-content-center"
                        >
                          <span
                            className="nuxt-icon text-[2.4rem] text-white"
                            id="kbank"
                          >
                            <img
                              src={`/assets/images/bank/${
                                bankList && bankList?.s_icon
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
                      <p className="text-sm" 
                      style={{textTransform: 'uppercase' }}
                      >
                      { bankList?.s_icon?.split(".")[0]}
                      </p>
                      <p className="text-lg mt-2 text-active font-bold">
                        {bankList?.s_account_no}
                      </p>
                      <p className="text-sm mt-[10px]">
                        {bankList?.s_account_name}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[34px] flex items-center gap-x-2 justify-center bg-card-secondary rounded-[5px] p-2 &lt;sm:h-auto &lt;sm:text-center &lt;sm:justify-start &lt;sm:p-2 mt-4">
                    <p className="text-danger text-lg font-bold">
                      “กรุณาใช้บัญชีที่ท่านสมัครโอนมาเท่านั้น”
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
                </div>
              </div>
            </div>
          </main>
          <Footer  Active={bank}/>
        </div>
      </div>
    </body>
  );
}

export default Deposit;
