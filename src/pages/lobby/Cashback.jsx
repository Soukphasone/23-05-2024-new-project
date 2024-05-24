import React, { useState, useEffect } from "react";
import Letter_slide from "../../components/Letter_slide";
import Header from "../../components/Header";
import ModalHistoryCredit from "../../components/Modal/ModalHistoryCredit";
import { createPortal } from "react-dom";
import Footer from "../../components/Footer";
import axios from "axios";
import { DataLocalStorage, CheckLevelCashBack } from "../../helper";
import Constant from "../../constant";
function Cashback() {
  const bag = "BAG"
  const [openModal, setOpenModal] = useState(false);
  const [reMessage, setReMessage] = useState("");
  const [maxLevel, setmaxLevel] = useState();
  const [historyCashBack, setHistoryCashBack] = useState([]);
  const [dataFromLogin, setDataFromLogin] = useState({});
  const _cashback = JSON.parse(localStorage.getItem(Constant.CASHBACK));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFromLogin]);

  const handleButtonClick1 = () => {
    setOpenModal(false);
  };
  const _getData = async () => {
    const _level = await CheckLevelCashBack(_cashback);
    if (_level) setmaxLevel(_level);
    const _resHistoryCashBack = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Cashback/History`,
      data: {
        s_agent_code: dataFromLogin?.agent,
        s_username: dataFromLogin?.username,
      },
    });
    if (_resHistoryCashBack?.data?.statusCode === 0) {
      setHistoryCashBack(_resHistoryCashBack?.data?.data);
    }
  };
  const _resiveCashBack = async () => {
    try {
      const _res = await axios({
        method: "post",
        url: `${Constant.SERVER_URL}/Affiliate/Receive`,
        data: {
          s_agent_code: dataFromLogin?.agent,
          s_username: dataFromLogin?.username,
          f_amount: dataFromLogin?.balance?.cashback,
          actionBy: "ADM",
        },
      });
      if (_res?.data) {
        setReMessage(_res?.data?.statusDesc);
      }
      if (_res?.data?.statusCode === 0) {
        _getData();
      }
    } catch (error) {
      console.log("🚀 ~ const_login= ~ error:", error);
    }
  };
  return (
    <body className="overflow-x-hidden overflow-y-auto text-primary" style={{}}>
      <div id="__nuxt" data-v-app="">
        <div data-v-a828f7ed="">
          <Header />
          <main
            data-v-a828f7ed=""
            className="min-h-screen overflow-scroll pb-[80px]"
          >
            <div data-v-a828f7ed="" className="w-full mx-auto base-container pb-2">
              {/* <Letter_slide /> */}
              <div
              style={{marginTop:'5rem'}}

                data-v-82953e26=""
                className="base-container-small flex flex-col justify-center"
              >
                <div
                  data-v-82953e26=""
                  className="cash-back-content bg-card-primary card-wrapper w-full flex-col justify-center flex items-center my-4"
                >
                  <h3 data-v-82953e26="" className="mb-2">
                    ยอดเสียสะสมของคุณ (คืนยอดเสีย {maxLevel} %)
                  </h3>
                  <h3
                    data-v-82953e26=""
                    className="mb-4 text-xl text-primary flex items-center"
                  >
                    <span data-v-82953e26="" className="nuxt-icon nuxt-icon--fill">
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
                    </span>{" "}
                    {dataFromLogin?.balance?.cashback}
                  </h3>
                  <p>
                    อัพเดทล่าสุด
                  </p>
                  <p>
                    {historyCashBack?.length > 0 &&
                      historyCashBack[historyCashBack?.length - 1]?.d_create}
                  </p>

                  <button
                    style={{ marginTop: '10px' }}
                    onClick={() => _resiveCashBack()}
                    data-v-9dec3a92=""
                    data-v-82953e26=""
                    id="btn01"
                    type="submit"
                    disabled={
                      dataFromLogin?.balance?.cashback > 0 ? false : true
                    }
                    className="base-button-wrapper v-rounded btn-primary btn-md btn-primary mb-[10px] cursor-pointer"
                    label="รับเครดิต"
                  >
                    <div
                      data-v-9dec3a92=""
                      className="flex justify-center items-center"
                    >
                      รับเครดิต
                    </div>
                  </button>
                  <div style={{ textAlign: "center", color: "red" }}>
                    {reMessage}
                  </div>
                </div>
                <div
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  data-v-c89fa524=""
                  data-v-82953e26=""
                  className="history-card light-theme-box-shadow bg-card-primary card-wrapper py-3 flex justify-between items-center cursor-pointer History-Card-cash-back"
                >
                  <div
                    data-v-c89fa524=""
                    className="&lt;sm:text-base sm:text-base md:text-lg"
                  >
                    ประวัติการรับเครดิต
                  </div>
                  <span data-v-c89fa524="" className="nuxt-icon text-[22px]">
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
          </main>
          <Footer Active={bag} />
        </div>
      </div>
      {openModal &&
        createPortal(
          <ModalHistoryCredit closeModal={handleButtonClick1} />,
          document.body
        )}
    </body>
  );
}

export default Cashback;
