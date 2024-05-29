import React, { useState, useEffect } from "react";
import { formatMontYear } from "../../helper";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import Constant from "../../constant";
import axios from "axios";
function Affiliate() {
  const history = useHistory();
  const dataFromLogin = history?.location?.state;
  const [dataOverview, setDataOverview] = useState([]);
  const [dataOverviewYears, setDataOverviewYears] = useState([]);
  const [tabNameAffiliate, setTabNameAffiliate] = useState("overview");
  const [tapAffiliate, setTapAffiliate] = useState("ภาพรวม");
  const [dataHistoryAffiliate, setDataHistoryAffiliate] = useState([]);
  const [dataIncome, setDataIncome] = useState([]);
  const [years, setYears] = useState([]);
  const [overviewDate, setOverviewDate] = useState(formatMontYear(new Date()));
  const [incomeDateStart, setIncomeDateStart] = useState(
    formatMontYear(new Date())
  );
  const [incomeDateEnd, setIncomeDateEnd] = useState(
    formatMontYear(new Date())
  );
  const Back = () => {
    history.push(Constant.BAG);
  };
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearArray = [];
    for (let year = 2020; year <= currentYear; year++) {
      yearArray.push(year);
    }
    setYears(yearArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const _tabAffiliate = (tabAffiliate) => {
    // console.log("tabAffiliate:: ", tabAffiliate);
    setTabNameAffiliate(tabAffiliate);
    if (tabAffiliate === "overview") {
      _getRegister();
      setTapAffiliate("ภาพรวม");
    } else if (tabAffiliate === "income") {
      _getIncome(incomeDateStart, incomeDateEnd);
      setTapAffiliate("รายได้");
    } else {
      setTapAffiliate("ถอนรายได้");
      _getHistory();
    }
  };
  const _selectYear = (event) => {
    _getRegisterByYear(event);
  };

  const _getRegister = async () => {
    const _res = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Affiliate/Inquiry/Register`,
      data: {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
        d_date: "2023-09",
        page_start: 0,
      },
    });
    if (_res?.data?.statusCode === 0) {
      setDataOverview(_res?.data?.data?.list);
    }
  };
  const _getRegisterByYear = async (year) => {
    const _res = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Affiliate/Inquiry/RegisterByYear`,
      data: {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
        d_date: year,
        page_start: 0,
      },
    });
    if (_res?.data?.statusCode === 0) {
      setDataOverviewYears(_res?.data?.data);
    }
  };
  const _getIncome = async (dateStart, dateEnd) => {
    const _res = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Affiliate/Inquiry/Income`,
      data: {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
        d_start: dateStart,
        d_end: dateEnd,
        page_start: 0,
      },
    });
    if (_res?.data?.statusCode === 0) {
      setDataIncome(_res?.data?.data?.list);
    }
  };
  const _getIncomeDateStart = (event) => {
    setIncomeDateStart(event?.target?.value);
    _getIncome(event?.target?.value, incomeDateEnd);
  };
  const _getIncomeDateEnd = (event) => {
    setIncomeDateEnd(event?.target?.value);
    _getIncome(incomeDateStart, event?.target?.value);
  };
  const _getHistory = async () => {
    const _res = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Affiliate/History`,
      data: {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
      },
    });
    if (_res?.data?.statusCode === 0) {
      setDataHistoryAffiliate(_res?.data?.data);
    }
  };
  const _getReceiveAffiliate = async (amount) => {
    const _res = await axios({
      method: "post",
      url: `${Constant.SERVER_URL}/Affiliate/Receive`,
      data: {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
        f_amount: amount,
        actionBy: "ADM",
      },
    });
    if (_res?.data?.statusCode === 0) {
      setDataHistoryAffiliate(_res?.data?.data);
    }
  };
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
                  <h1 style={{ color: "#ffe1a6" }}>ส่วนแบ่ง Affiliate</h1>
                  <div className="earn-modal-content">
                    <div className="earn-tab-container">
                      <div className="border-input-gold">
                        <div className="earn-tab">
                          <div
                            onClick={() => _tabAffiliate("overview")}
                            onKeyDown={() => ""}
                            className={
                              tabNameAffiliate === "overview"
                                ? "earn-tab-item active"
                                : "earn-tab-item"
                            }
                          >
                            ภาพรวม
                          </div>
                          <div
                            className="border-input-gold earn-tab-item-2"
                            onClick={() => _tabAffiliate("income")}
                            onKeyDown={() => ""}
                          >
                            <div
                              className={
                                tabNameAffiliate === "income"
                                  ? "earn-tab-item active"
                                  : "earn-tab-item"
                              }
                            >
                              รายได้
                            </div>
                          </div>
                          <div
                            onClick={() => _tabAffiliate("withdraw-income")}
                            onKeyDown={() => ""}
                            className={
                              tabNameAffiliate === "withdraw-income"
                                ? "earn-tab-item active"
                                : "earn-tab-item"
                            }
                          >
                            ถอนรายได้
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="earn-detail-data"
                      style={{
                        display:
                          tabNameAffiliate === "overview" ? "block" : "none",
                      }}
                    >
                      <div className="filter-date">
                        <p className="filter-label">ภาพรวมวันที่</p>
                        <input
                          className="filter-date-input"
                          value={overviewDate}
                          type="month"
                          name=""
                          id=""
                        />
                      </div>

                      <div className="border-input-gold">
                        <div className="table-earn-date">
                          <div className="border-input-gold">
                            <div className="th-earn-container">
                              <span className="th-earn">วันที่</span>
                              <span className="th-earn">สมัคร</span>
                              <span className="th-earn">ฝากเงิน</span>
                              <span className="th-earn">รายได้</span>
                            </div>
                          </div>

                          <div className="tr-earn-container">
                            {dataOverview.length > 0 &&
                              dataOverview?.map((item, index) => (
                                <div className="tr-earn">
                                  <span className="td-earn">1/01/66</span>
                                  <span className="td-earn">110</span>
                                  <span className="td-earn">40</span>
                                  <span className="td-earn">11,668</span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="filter-date">
                        <p className="filter-label">ภาพรวมทั้งเดือน</p>
                        <select
                          className="filter-date-input"
                          onChange={(event) =>
                            _selectYear(event?.target?.value)
                          }
                        >
                           <option value="">
                            เลือกปี
                           </option>
                          {years.map((year) => ( 
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="border-input-gold">
                        <div className="table-earn-date">
                          <div className="border-input-gold">
                            <div className="th-earn-container">
                              <span className="th-earn">เดือน</span>
                              <span className="th-earn">สมัคร</span>
                              <span className="th-earn">ฝากเงิน</span>
                              <span className="th-earn">รายได้</span>
                            </div>
                          </div>

                          <div className="tr-earn-container">
                            {dataOverviewYears?.length > 0 &&
                              dataOverviewYears?.map((item, index) => (
                                <div className="tr-earn">
                                  <span className="td-earn">{item?.month}</span>
                                  <span className="td-earn">
                                    {item?.regisCount}
                                  </span>
                                  <span className="td-earn">
                                    {item?.f_affiliate_credit}
                                  </span>
                                  <span className="td-earn">
                                    {item?.deposit}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="earn-detail-data"
                      style={{
                        display:
                          tabNameAffiliate === "income" ? "block" : "none",
                      }}
                    >
                      <div className="filter-date">
                        <p className="filter-label">ประวัติรายได้</p>
                        <div style={{ float: "right", display: "flex" }}>
                          <input
                            className="filter-date-input"
                            value={incomeDateStart}
                            onChange={(event) => _getIncomeDateStart(event)}
                            type="month"
                            name=""
                            id=""
                          />
                          <span style={{ padding: "1px" }} />
                          <input
                            className="filter-date-input"
                            value={incomeDateEnd}
                            onChange={(event) => _getIncomeDateEnd(event)}
                            type="month"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                      <div className="border-input-gold">
                        <div className="table-earn-date">
                          <div className="border-input-gold">
                            <div className="th-earn-container">
                              <span className="th-earn">รอบบิล</span>
                              <span className="th-earn">จำนวนเงิน</span>
                            </div>
                          </div>

                          <div className="tr-earn-container">
                            {dataIncome?.length > 0 &&
                              dataIncome?.map((item, index) => (
                                <div className="tr-earn" key={index}>
                                  <span className="td-earn">
                                    {item?.d_date}
                                  </span>
                                  <span className="td-earn">
                                    {item?.f_affiliate}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="earn-detail-data"
                      style={{
                        display:
                          tabNameAffiliate === "withdraw-income"
                            ? "block"
                            : "none",
                      }}
                    >
                      <div className="border-input-gold">
                        <div className="form-withdraw-income">
                          <div className="form-withdraw-group">
                            <p className="filter-label">รายได้ปัจจุบัน</p>
                            <input
                              style={{ color: "#000" }}
                              type="text"
                              value={dataFromLogin?.balance?.affiliate}
                              className="form-withdraw-input"
                            />
                          </div>
                          <div
                            style={{ marginTop: "-10px" }}
                            className="flex flex-col items-center justify-center w-full rounded-base bg-card-primary text-center"
                          >
                            <button
                              onClick={() =>
                                _getReceiveAffiliate(
                                  dataFromLogin?.balance?.affiliate
                                )
                              }
                              style={{ width: "20%" }}
                              data-v-9dec3a92=""
                              id="btn01"
                              type="submit"
                              disabled={dataFromLogin?.balance?.affiliate>0? false:true}
                              className="base-button-wrapper v-rounded btn-primary btn-md mt-4 font-medium text-base cursor-pointer border border-fontPrimary w-full rounded-base btn-primary h-[38px] flex items-center justify-center"
                            >
                              <div
                                data-v-9dec3a92=""
                                className="flex justify-center items-center"
                              >
                                ถอน
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div
                        className="filter-date"
                        style={{ marginBottom: "5px" }}
                      >
                        <p className="filter-label">ประวัติรายได้</p>
                      </div>

                      <div className="border-input-gold">
                        <div className="table-earn-date">
                          <div className="border-input-gold">
                            <div className="th-earn-container">
                              <span className="th-earn">วัน/เวลา</span>
                              <span className="th-earn">จำนวนเงิน</span>
                            </div>
                          </div>

                          <div className="tr-earn-container">
                            {dataHistoryAffiliate?.length > 0 &&
                              dataHistoryAffiliate?.map((item, index) => (
                                <div className="tr-earn">
                                  <span className="td-earn">
                                    {item?.d_create}
                                  </span>
                                  <span className="td-earn">
                                    {item?.f_amount}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
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

export default Affiliate;
