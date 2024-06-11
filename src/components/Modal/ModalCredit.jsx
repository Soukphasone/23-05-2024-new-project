import React, { useState, useEffect } from "react";
import axios from "axios";
import { showErrorAlert, showSuccessAlert } from "../../helper/SweetAlert";
import { DataLocalStorage } from "../../helper";
import Constant from "../../constant";

function ModalCredit({ closeModal }) {
  const [reMessage, setReMessage] = useState("");
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [codeCoupon, setCodeCoupon] = useState("");
  useEffect(() => {
    const userData = DataLocalStorage();
    if (userData) {
      setDataFromLogin(userData);
    }
  }, []);
  const _addCoupon = async () => {
    try {
      const _data = await axios.post(`${Constant.SERVER_URL}/Coupon/Receive`, {
        s_agent_code: Constant?.AGENT_CODE,
        s_username: dataFromLogin?.username,
        s_code: codeCoupon,
        actionBy: "ADM",
      });
      if (_data?.data?.statusCode === 0) {
        showSuccessAlert("สำเร็จ")
        closeModal("close");
      }else{
        setReMessage(_data?.data?.statusDesc);
      }
    } catch (error) {
    }
  };
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
      style={{ zIndex: 1000 }}
      role="dialog"
      aria-modal="true"
      id="cash-back-history-modal"
      title=""
    >
      <div
        className="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
        aria-hidden="true"
      ></div>
      <div
        className="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
        tabindex="0"
      >
        <div data-v-e339f85c="">
          <div data-v-e339f85c="" className="text-center text-primary">
            ใส่โค้ดรับเครดิตฟรี
          </div>
          <div data-v-e339f85c="" className="w-full flex justify-between mt-3">
            <div
              data-v-d0ca5c5c=""
              data-v-e339f85c=""
              className="input-sm base-input-wrapper w-full mb-1 input-primary pr-4"
              id="code"
              rounded="5px"
              background="black"
            >
              <span data-v-d0ca5c5c="" className="text-sm mb-1 relative"></span>
              <div
                data-v-d0ca5c5c=""
                className="main-input !bg-[var(--input-bg)] text-[var(--primary)] w-full rounded-[10px] flex items-center"
              >
                <div
                  data-v-d0ca5c5c=""
                  className="flex justify-center -mt-2 items-center pointer-events-none"
                ></div>
                <input
                  onChange={(e) => setCodeCoupon(e.target.value)}
                  data-v-d0ca5c5c=""
                  className="w-full h-full text-base !bg-[var(--input-bg)] text-primary outline-none placeholder-[var(--input-placeholder)]"
                  type="text"
                  placeholder="ใส่โค้ดที่นี่"
                  autocomplete=""
                  maxlength="false"
                />
              </div>
              <div data-v-d0ca5c5c="" className=""></div>
              <div style={{ textAlign: "center", color: "red" }}>
                {reMessage}
              </div>
            </div>
            <button
              onClick={() => _addCoupon()}
              data-v-9dec3a92=""
              data-v-e339f85c=""
              id="btn01"
              type="submit"
              disabled={codeCoupon === ''  ? true : false}
              className="base-button-wrapper v-rounded btn-primary btn-lg btn-primary cursor-pointer <sm:text-base sm:text-base md:text-lg"
            >
              <div data-v-9dec3a92="" className="flex justify-center items-center">
                ยืนยัน
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCredit;
