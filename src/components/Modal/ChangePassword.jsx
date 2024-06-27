import React, { useState } from "react";
import _LoginController from "../../api/login";
import { LogoutClearLocalStorage } from "../../helper";
import { showSuccessAlert } from "../../helper/SweetAlert";
import { useTranslation } from "react-i18next";
function ChangePassword({ closeModal, oldPassword }) {
  const { t } = useTranslation();
  const { ChangePassword } = _LoginController();
  const [reMessage, setReMessage] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [NewPasswordVery, setNewPasswordVery] = useState("");
  const _ChangePassword = async () => {
    try {
      if (NewPassword !== NewPasswordVery) {
        setReMessage("รหัสผ่านใหม่ และ ยืนยันรหัสผ่านใหม่ ไม่ตรงกัน");
        return;
      }
      const _data = await ChangePassword(NewPassword, oldPassword);
      if (_data?.data) {
        setReMessage(_data?.data?.statusDesc);
        if (_data?.data.statusCode === 0) {
          showSuccessAlert("สำเร็จ")
          LogoutClearLocalStorage();
        }
      }
    } catch (error) {
      console.error("Error playing the game:", error);
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
          closeModal();
        }
      }}
      style={{ Zindex: "1000" }}
    >
      <div
        className="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
        aria-hidden="true"
      ></div>
      <div
        className="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
        tabindex="0"
      >
        <p className="text-center text-primary text-base">
          {t("ChangePassword")}
        </p>
        <p className="text-center mt-1 text-secondary text-xs">
          {t("pleaseSpendANewPass")}
        </p>
        <div
          style={{ display: 'none' }}
          data-v-d0ca5c5c=""
          className="input-sm base-input-wrapper w-full mb-1 input-primary mt-2"
          id="password"
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
              data-v-d0ca5c5c=""
              className="w-full h-full text-base !bg-[var(--input-bg)] text-primary outline-none placeholder-[var(--input-placeholder)]"
              type="password"
              value={oldPassword}
              placeholder={t("PleaseEnterOldPassword")}
              autocomplete=""
              maxlength="false"
            />
          </div>
          <div data-v-d0ca5c5c="" className=""></div>
        </div>
        <div
          data-v-d0ca5c5c=""
          className="input-sm base-input-wrapper w-full mb-1 input-primary mt-2"
          id="password"
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
              data-v-d0ca5c5c=""
              className="w-full h-full text-base !bg-[var(--input-bg)] text-primary outline-none placeholder-[var(--input-placeholder)]"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={t("PleaseEnterNewPassword")}
              autocomplete=""
              maxlength="false"
            />
          </div>
          <div data-v-d0ca5c5c="" className=""></div>
        </div>
        <div
          data-v-d0ca5c5c=""
          className="input-sm base-input-wrapper w-full mb-1 input-primary mt-2"
          id="password"
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
              data-v-d0ca5c5c=""
              className="w-full h-full text-base !bg-[var(--input-bg)] text-primary outline-none placeholder-[var(--input-placeholder)]"
              type="password"
              onChange={(e) => setNewPasswordVery(e.target.value)}
              placeholder={t("PleaseConfirmYourNewPassword")}
              autocomplete=""
              maxlength="false"
            />
          </div>
          <div data-v-d0ca5c5c="" className=""></div>
        </div>
        <div></div>
        <div className="flex gap-x-4 mt-8">
          <button
            onClick={closeModal}
            data-v-9dec3a92=""
            id="btn01"
            type="submit"
            className="base-button-wrapper v-rounded btn-primary btn-md btn-secondary cursor-pointer w-full &lt;sm:text-base sm:text-base md:text-lg"
          >
            <div
              data-v-9dec3a92=""
              className="flex justify-center items-center"
            >
              {t("close")}
            </div>
          </button>
          <button
            onClick={() => _ChangePassword()}
            data-v-9dec3a92=""
            id="btn01"
            type="submit"
            disabled={
              oldPassword === "" || NewPassword === "" || NewPasswordVery === ""
                ? true
                : false
            }
            className="base-button-wrapper v-rounded btn-primary btn-md btn-primary cursor-pointer w-full &lt;sm:text-base sm:text-base md:text-lg"
          >
            <div
              data-v-9dec3a92=""
              className="flex justify-center items-center"
            >
              {t("confirm")}
            </div>
          </button>
        </div>
        <span className="text-message-warning">{reMessage}</span>
      </div>
    </div>
  );
}

export default ChangePassword;
