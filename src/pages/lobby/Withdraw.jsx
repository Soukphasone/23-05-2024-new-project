import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DataLocalStorage } from "../../helper";
import Constant from "../../constant";
import { showErrorAlert, showSuccessAlert } from "../../helper/SweetAlert";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Withdraw() {
  const { t } = useTranslation();
  const history = useHistory();
  const bank = "BANK";
  const _bankList = JSON.parse(localStorage.getItem(Constant.DATA_BANK_LIST));
  const [reMessage, setReMessage] = useState("");
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [dataUser, setDataUser] = useState();
  const [chooseBankDeposit, setChooseBankDeposit] = useState("");
  const Back = () => {
    history.push(Constant.DEPOSIT_WITHDRAW);
  };
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
        f_amount: dataUser?.amount,
        // i_bank: _bankList?.[0]?.id,
        i_bank: chooseBankDeposit,
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
        history.push(Constant.DEPOSIT_WITHDRAW);
      } else {
        setReMessage(_res?.data?.statusDesc);
      }
    } catch (error) {
      showErrorAlert(t("unsuccessful"));
    }
  };

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
                style={{ marginTop: "5rem" }}
                data-v-6307fb48=""
                className="base-container-small flex flex-col justify-center"
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
                <div
                  data-v-6307fb48=""
                  className="cash-back-content border border-primary bg-card-primary card-wrapper gap-y-2 w-full flex flex-col justify-center items-center"
                >
                  <h3 data-v-6307fb48="">{t("AmountThatCanBeWithdrawn")}</h3>
                  <h3
                    data-v-6307fb48=""
                    className="text-xl text-active flex justify-center items-center"
                  >
                    <span
                      data-v-6307fb48=""
                      className="nuxt-icon nuxt-icon--fill"
                    >
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M76.9458 67.02C76.9458 74.6368 74.8257 80.4083 70.5854 84.3345C66.4236 88.1822 60.0632 90.263 51.5041 90.5771V100H42.1991V90.5771H23V8.12721H42.1991V0H51.5041V8.36278C66.2666 9.77621 73.6478 16.2937 73.6478 27.9152C73.6478 32.5481 72.627 36.3565 70.5854 39.3404C68.5438 42.3243 65.3636 44.6407 61.0448 46.2897V46.6431C66.5414 48.1351 70.5461 50.53 73.0589 53.828C75.6502 57.0475 76.9458 61.4448 76.9458 67.02ZM33.8363 42.874H47.4994C52.5249 42.874 56.3333 41.6961 58.9246 39.3404C61.5159 36.9062 62.8115 33.3726 62.8115 28.7397C62.8115 24.5779 61.3981 21.5548 58.5713 19.6702C55.7444 17.7856 51.2685 16.8433 45.1437 16.8433H33.8363V42.874ZM49.7373 81.861C60.7307 81.861 66.2273 76.8355 66.2273 66.7844C66.2273 61.3663 64.4998 57.4009 61.0448 54.8881C57.6682 52.3753 52.2894 51.119 44.9081 51.119H33.8363V81.861H49.7373Z"
                          fill="#FFD15C"
                        ></path>
                      </svg>
                    </span>
                    {dataUser?.amount}
                  </h3>
                  <p data-v-6307fb48="" className="text-sm text-danger">
                    {" "}
                    {t("MinimumWithdrawalFieldBaht")}{" "}
                  </p>

                  <div class="text-[red] flex space-x-2">
                    <div class="relative w-full">
                      <select
                        style={{ textTransform: "uppercase" }}
                        onChange={(event) =>
                          setChooseBankDeposit(event?.target?.value)
                        }
                        class="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12"
                        id="nuid-14"
                      >
                        <option value="">
                        {t("ChooseABank")}
                        </option>
                        {_bankList?.length > 0 &&
                          _bankList?.map((bank, index) => (
                            <option key={index} value={bank?.id}>
                              {bank?.s_icon.split(".")[0] === "kk"
                                ? "kkp"
                                : bank?.s_icon.split(".")[0]}{" "}
                            </option>
                          ))}
                      </select>
                      <span class="absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5 pe-3.5">
                        <span
                          class="i-heroicons-chevron-down-20-solid flex-shrink-0 dark:text-gray-500 flex-shrink-0 text-gray-400 dark:text-primary-400 text-primary-500 h-6 w-6"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => _withdrawMoney()}
                    onKeyDown={() => ""}
                    data-v-9dec3a92=""
                    data-v-6307fb48=""
                    id="btn-withdraw"
                    disabled={dataUser?.amount >= 1 && chooseBankDeposit !== ''? false : true}
                    type="submit"
                    className="base-button-wrapper v-rounded btn-primary btn-md btn-primary mb-[10px] cursor-pointer w-full"
                    label="ถอนเงิน"
                  >
                    <div
                      data-v-9dec3a92=""
                      className="flex justify-center items-center"
                    >
                      {t("Withdraw")}
                    </div>
                  </button>
                </div>
                <span className="text-message-warning">{reMessage}</span>
              </div>
            </div>
          </main>
          <Footer Active={bank} />
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
