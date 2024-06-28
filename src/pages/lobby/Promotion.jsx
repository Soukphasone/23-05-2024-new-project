import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
// import Letter_slide from "../../components/Letter_slide";
import GetPromotion from "../../components/Modal/GetPromotion";
import { createPortal } from "react-dom";
import Footer from "../../components/Footer";
import { DataLocalStorage } from "../../helper";
import Constant from "../../constant";

function Promotion() {
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [dataPromotion, setDataPromotion] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const promotion = "PROMOTION";

  const handleButtonClick1 = (item) => {
    setSelectedPromotion(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPromotion(null);
  };

  useEffect(() => {
    const userData = DataLocalStorage();
    const _promotion = JSON.parse(
      localStorage.getItem(Constant.DATA_PROMOTION)
    );
    if (userData) {
      setDataFromLogin(userData);
    }
    if (_promotion) {
      setDataPromotion(_promotion);
    }
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-auto text-primary">
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
                style={{ marginTop: "5rem" }}
                data-v-ac0eeeb0=""
                className="promotion-wrapper animate__animated animate__slideInLeft animate__fast base-container-small space-y-2 flex flex-col justify-center"
              >
                <div
                  data-v-ac0eeeb0=""
                  className="animate__animated animate__fadeIn animate__fast"
                >
                  <div
                    data-v-ac0eeeb0=""
                    className="promotion-change-wrapper w-full relative light-theme-box-shadow"
                  ></div>
                  {dataPromotion?.length > 0 &&
                    dataPromotion.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleButtonClick1(item)}
                        data-v-d9762dab=""
                        data-v-ac0eeeb0=""
                        className="flex flex-col rounded-base p-2"
                      >
                        <div
                          data-v-d9762dab=""
                          className="promotion-card-wrapper w-full bg-card-primary rounded-base overflow-hidden flex flex-row justify-between items-center pr-4"
                        >
                          <img
                            data-v-d9762dab=""
                            src={`data:image/jpeg;base64,${item?.s_source_img}`}
                            className="h-[6.25rem] object-cover w-[100px]"
                            alt=""
                          />
                          <div
                            data-v-d9762dab=""
                            className="w-full flex h-[6.25rem] flex-col pt-2 pl-2 overflow-hidden"
                          >
                            <span
                              data-v-d9762dab=""
                              className="text-sm text-primary"
                            >
                              {item?.s_promotion}
                            </span>
                            <div
                              data-v-d9762dab=""
                              className="text h-[48px] text-xs text-secondary"
                            >
                              <span data-v-d9762dab="">
                                {item?.s_promotion}
                              </span>
                            </div>
                          </div>
                          <div
                            data-v-d9762dab=""
                            className="icon-arrow-card flex justify-center items-center p-2 cursor-pointer"
                          >
                            <span
                              data-v-d9762dab=""
                              className="nuxt-icon nuxt-icon--fill text-2xl text-active icon-arrow rounded-full"
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
                    ))}
                </div>
              </div>
            </div>
          </main>
          {openModal ? '' : (<Footer Active={promotion} style />)}
        </div>
      </div>
      {openModal &&
        createPortal(
          <GetPromotion
            closeModal={handleCloseModal}
            dataPromotion={selectedPromotion}
            dataFromLogin={dataFromLogin}
          />,
          document.body
        )}
    </div>
  );
}

export default Promotion;
