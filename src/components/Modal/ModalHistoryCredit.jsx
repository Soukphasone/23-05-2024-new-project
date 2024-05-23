import React from "react";
function ModalHistoryCredit({ closeModal }) {
  
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
      role="dialog"
      aria-modal="true"
      id="cash-back-history-modal"
      title=""
      style={{ zIndex: 1000, transition: 'opacity 300ms ease-in-out' }}
    >
      <div
        className="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
        aria-hidden="true"
      ></div>
      <div
        className="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
        tabindex="0"
      >
        <div data-v-82953e26="" className="history-title flex justify-between mt-2">
          <div className="text-primary font-medium &lt;sm:text-base sm:text-base md:text-lg">
            ประวัติการรับเครดิต
          </div>
          {/* <span className="text-[var(--text-placeholder)] font-normal &lt;sm:text-sm sm:text-sm md:text-base">
            ( 5 รายการล่าสุด )
          </span> */}
        </div>
        <div data-v-82953e26="" className="my-4"></div>
        <div
          data-v-82953e26=""
          className="w-full flex justify-center items-center gap-2 mb-4"
        >
     
          <span className="text-primary font-medium &lt;sm:text-base sm:text-base md:text-lg" 
                       
           style={{display: 'flex', justifyContent: "space-between", width:'100%', padding: '10px 0'}}>
            {/* No Item */}
            <div>วันที</div>
            <div>จำนวนเงิน</div>
          </span>
        </div>
        <div onClick={closeModal} data-v-82953e26="" className="w-full flex justify-center items-center">
          <button
          style={{border:'1px solid orang'}}
            data-v-9dec3a92=""
            data-v-82953e26=""
            id="btn01"
            type="submit"
            className="base-button-wrapper v-rounded btn-primary btn-md btn-secondary cursor-pointer &lt;sm:text-base sm:text-base md:text-lg"
          >
            <div data-v-9dec3a92="" className="flex justify-center items-center">
              ปิด
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalHistoryCredit;
