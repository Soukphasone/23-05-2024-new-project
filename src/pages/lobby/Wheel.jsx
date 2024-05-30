import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { DataLocalStorage } from "../../helper";
import Constant from "../../constant";
import { useHistory } from "react-router-dom";
import Roulette from "../../components/Roulette";
import { showPopupLucky } from "../../helper/SweetAlert";
import { DataUser } from "../../api/getdatauser";

function Wheel() {
  const history = useHistory();
  const [dataSpinWheel, setDataSpinWheel] = useState([]);
  const [limitSpinWheel, setLimitSpinWheel] = useState({});
  const [outputSpin, setOutputSpin] = useState("");
  const [currentPoint, setCurrentPoint] = useState("");
  const [notCurrentPoint, setNotCurrentPoint] = useState(0);
  const [username, setUsername] = useState("");
  const [agent, setAgent] = useState("");
  const Back = () => {
    history.push(Constant.BAG);
  };
  useEffect(() => {
    const userData = DataLocalStorage();
    if (userData) {
      setUsername(userData?.username);
      setAgent(userData?.agent);
    }
    getSpinWheel();
  }, []);
  const getSpinWheel = async () => {
    let data = JSON.stringify({
      s_agent_code: Constant?.AGENT_CODE,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${Constant.SERVER_URL}/LuckyWheel/Inquiry?XDEBUG_SESSION_START=netbeans-xdebug`,
      headers: {
        "authorization-agent": "{{AUTHEN-VALUE-AGENT}}",
        "authorization-token": "{{AUTHEN-VALUE-TOKEN}}",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setDataSpinWheel(response.data.data[0]?.eventItem);
        setLimitSpinWheel(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                      <p>ย้อนกลับ</p>
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
                    วงล้อลุ้นโชค
                  </h1>
                  <span
                    style={{ width: "100%", textAlign: "left" }}
                    data-v-fe9de6ba=""
                    className="breadcrumb-wrapper__item font-medium text-sm cursor-pointer flex-shrink-0"
                  >
                    <p>แต้มทั้งหมด: {currentPoint || 0}</p>
                  </span>
                  {dataSpinWheel.length > 0 && (
                    <Roulette
                      data={dataSpinWheel}
                      setOutputSpin={setOutputSpin}
                      username={username}
                      setCurrentPoint={setCurrentPoint}
                      setNotCurrentPoint={setNotCurrentPoint}
                    />
                  )}
                  <div style={{ width: "100%", textAlign: "left" }}>
                    <p style={{ margin: "none", marginTop: 10, color: "#09FF2B" }}>
                      เครดิตกงล้อ : {outputSpin}
                    </p>
                    <div
                      style={{
                        color: "#FFE1A6",
                        fontWeight: 500,
                        fontSize: 16,
                        textDecoration: "underline",
                      }}
                    >
                      รายละเอียด
                    </div>
                    <div style={{color:'red'}}>
                    <p style={{ margin: "none", }}>
                      - หมุนวงล้อได้ทั้งหมด {limitSpinWheel?.i_max} ครั้ง
                    </p>
                    <p style={{ margin: "none" }}>
                      {" "}
                      - ใช้สิทธิไปแล้ว {notCurrentPoint} ครั้ง
                    </p>
                    <p style={{ margin: "none" }}>
                      - ภายในวันสามารถใข้สิทธิได้ {limitSpinWheel?.i_per_day}{" "}
                      ครั้ง
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
