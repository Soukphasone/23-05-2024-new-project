import React from "react";
import { useTranslation } from "react-i18next";
function ModalHistoryCashBack({ closeModal, historyCashBack }) {
  const { t } = useTranslation();
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
      id="cash-back-history-modal"
      title=""
      style={{ zIndex: 1000, transition: "opacity 300ms ease-in-out" }}
    >

      <div
        className="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
        tabindex="0"
      >
        <div
          data-v-82953e26=""
          className="history-title flex justify-center mt-2"
        >
          <div style={{ color: '#ffe1a6' }}
            className="text-primary font-medium &lt;sm:text-base sm:text-base md:text-lg">
            {t("CreditReceivingHistory")}
          </div>
        </div>
        <div
          style={{ color: 'white', width: '100%' }}
          data-v-82953e26=""
          className="w-full flex justify-center items-center gap-2 mb-4"
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <p>{t("date")}</p>
            <p>{t("AmountOfMoney")}</p>
          </div>
        </div>
        <div style={{ width: '100%', height: '300px', overflowY: 'scroll' }}>

          {historyCashBack?.length > 0 && historyCashBack?.map((item, index) => (
            <div
              key={index}
              style={{ color: '#09FF2B', width: '100%' }}
              data-v-82953e26=""
              className="w-full flex justify-center items-center gap-2 mb-4"
            >
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <p>   {item?.d_create}</p>
                <p>{item?.f_amount} </p>
              </div>
            </div>))}
        </div>

        <div
          onClick={closeModal}
          data-v-82953e26=""
          className="w-full flex justify-center items-center"
        >
          <button
            style={{ border: "1px solid orang" }}
            data-v-9dec3a92=""
            data-v-82953e26=""
            id="btn01"
            type="submit"
            className="base-button-wrapper v-rounded btn-primary btn-md btn-secondary cursor-pointer &lt;sm:text-base sm:text-base md:text-lg"
          >
            <div
              data-v-9dec3a92=""
              className="flex justify-center items-center"
            >
              {t("close")}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalHistoryCashBack;
