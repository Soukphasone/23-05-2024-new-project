import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Constant from "../../constant";
import { useHistory } from "react-router-dom";
import Roulette from "../../components/Roulette";
import { showPopupLucky } from "../../helper/SweetAlert";
import { DataUser } from "../../api/getdatauser";
import { useTranslation } from "react-i18next";
function Wheel() {
  const { t } = useTranslation();
  const history = useHistory();
  const data = history?.location?.state;
  const [outputSpin, setOutputSpin] = useState("");
  const [currentPoint, setCurrentPoint] = useState("");
  const [notCurrentPoint, setNotCurrentPoint] = useState(0);
  const [username, setUsername] = useState("");
  const [agent, setAgent] = useState("");
  const Back = () => {
    history.push(Constant.BAG);
  };
  useEffect(() => {
    if (data) {
      setUsername(data?.username);
      setAgent(data?.agent);
    }
  }, []);

  useEffect(() => {
    _getData();
  }, [username]);
  useEffect(() => {
    if (outputSpin) {
      showPopupLucky("ได้รับ" + outputSpin);
      _getData();
    }
  }, [outputSpin]);
  const _getData = async () => {
    try {
      const data = await DataUser({ agent, username });
      setCurrentPoint(data?.cevent);
    } catch (error) {
    } finally {
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
                  <h1
                    style={{ color: "#FFE1A6", fontWeight: 500, fontSize: 19 }}
                  >
                    {t("Wheel")}
                  </h1>
                  <span
                    style={{ width: "100%", textAlign: "left" }}
                    data-v-fe9de6ba=""
                    className="breadcrumb-wrapper__item font-medium text-sm cursor-pointer flex-shrink-0"
                  >
                    <p>{t("TotalPoints")}: {currentPoint || 0}</p>
                  </span>
                  {data?.dataSpinWheel.length > 0 && (
                    <Roulette
                      data={data?.dataSpinWheel}
                      setOutputSpin={setOutputSpin}
                      username={data?.username}
                      setCurrentPoint={setCurrentPoint}
                      setNotCurrentPoint={setNotCurrentPoint}
                    />
                  )}
                  <div style={{ width: "100%", textAlign: "left" }}>
                    <p
                      style={{
                        margin: "none",
                        marginTop: 10,
                        color: "#09FF2B",
                      }}
                    >
                      {t("creditWheel")} : {outputSpin}
                    </p>
                    <div
                      style={{
                        color: "red",
                        fontWeight: 500,
                        fontSize: 16,
                        textDecoration: "underline",
                      }}
                    >
                      {t("details")}
                    </div>
                    <div style={{ color: "#FFE1A6" }}>
                      <p style={{ margin: "none" }}>
                        - {t("SpinAllTheWheels")} {data?.limitSpinWheel?.i_max}{" "}
                        {t("times")}
                      </p>
                      <p style={{ margin: "none" }}>
                        {" "}
                        - {t("RightsAlreadyExercised")} {notCurrentPoint} {t("times")}
                      </p>
                      <p style={{ margin: "none" }}>
                        - {t("WithinTheDay")}{" "}
                        {data?.limitSpinWheel?.i_per_day} {t("times")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Wheel;
