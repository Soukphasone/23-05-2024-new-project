import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
// import Slide_bank from "../../components/slide_bank";
// import Letter_slide from "../../components/Letter_slide";
import Footer from "../../components/Footer";
import { DataLocalStorage } from "../../helper";
import Constant from "../../constant";
import { showSuccessAlert } from "../../helper/SweetAlert";
import { useHistory } from "react-router-dom";

function Withdraw() {
  const history = useHistory();

  const bank = "BANK";
  const [reMessage, setReMessage] = useState("");
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [dataUser, setDataUser] = useState();
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
        s_agent_code: dataFromLogin?.agent,
        s_username: dataFromLogin?.username,
      },
    });
    if (_res?.data?.statusCode === 0) {
      setDataUser(_res?.data?.data);
    }
    // const _level = await CheckLevelCashBack(dataFromLogin?.info?.cashback);
    // if (_level) setmaxLevel(_level);
    // const _resHistoryCashBack = await axios({
    //   method: "post",
    //   url: `${Constant.SERVER_URL}/Cashback/History`,
    //   data: {
    //     s_agent_code: dataFromLogin?.agent,
    //     s_username: dataFromLogin?.username,
    //   },
    // });

    // if (_resHistoryCashBack?.data?.statusCode === 0) {
    //   setHistoryCashBack(_resHistoryCashBack?.data?.data);
    // }
    // const _resHistoryMoney = await axios({
    //   method: "post",
    //   url: `${Constant.SERVER_URL}/Member/History/Finance`,
    //   data: {
    //     s_agent_code: AGENT_CODE,
    //     s_username: dataFromLogin?.username,
    //   },
    // });

    // if (_resHistoryMoney?.data?.statusCode === 0) {
    //   setDataHistoryDeposit(_resHistoryMoney?.data?.data?.deposit);
    //   setDataHistoryBonus(_resHistoryMoney?.data?.data?.bonus);
    //   setDataHistoryWithdraw(_resHistoryMoney?.data?.data?.withdraw);
    // }
  };

  const _withdrawMoney = async () => {
    try {
      const _data = {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
        f_amount: dataUser?.amount,
        i_bank: dataFromLogin?.info?.bankList[0]?.id,
        i_ip: "1.2.3.4",
        actionBy: "adm",
      };
      // Send the data to the server to get the game URL
      const _res = await axios({
        method: "post",
        url: `${Constant.SERVER_URL}/Withdraw/CreateTransaction`,
        data: _data,
      });
      if (_res?.data?.statusCode === 0) {
        showSuccessAlert("ถอนสำเร็จ");
        _getData();
        history.push(Constant.DEPOSIT_WITHDRAW);
      } else {
        setReMessage(_res?.data?.statusDesc);
      }
    } catch (error) {}
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
            <div
              data-v-3c88d514=""
              className="w-full mx-auto base-container pb-2"
            >
              {/* <Letter_slide /> */}

              <div
                data-v-6307fb48=""
                className="base-container-small flex flex-col justify-center"
              >
                <div
                  data-v-6307fb48=""
                  className="cash-back-content border border-primary bg-card-primary card-wrapper gap-y-2 w-full flex flex-col justify-center items-center"
                >
                  <h3 data-v-6307fb48="">จำนวนเงินที่ถอนได้</h3>
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
                    ถอนขั้นต่ำ 1.00 บาท{" "}
                  </p>
                  <button
                    onClick={_withdrawMoney}
                    data-v-9dec3a92=""
                    data-v-6307fb48=""
                    id="btn-withdraw"
                    disabled={dataUser?.amount >= 1 ? false : true}
                    type="submit"
                    className="base-button-wrapper v-rounded btn-primary btn-md btn-primary mb-[10px] cursor-pointer w-full"
                    label="ถอนเงิน"
                  >
                    <div
                      data-v-9dec3a92=""
                      className="flex justify-center items-center"
                    >
                      ถอนเงิน
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
    </body>
  );
}

export default Withdraw;
