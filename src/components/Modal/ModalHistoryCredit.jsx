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
      style={{ zIndex: 1000 }}
    >
      <div
        class="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
        aria-hidden="true"
      ></div>
      <div
        class="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
        tabindex="0"
      >
        <div data-v-82953e26="" class="history-title flex justify-between mt-2">
          <div class="text-primary font-medium &lt;sm:text-base sm:text-base md:text-lg">
            ประวัติการรับเครดิต
          </div>
          <span class="text-[var(--text-placeholder)] font-normal &lt;sm:text-sm sm:text-sm md:text-base">
            ( 5 รายการล่าสุด )
          </span>
        </div>
        <div data-v-82953e26="" class="my-4"></div>
        <div
          data-v-82953e26=""
          class="w-full flex justify-center items-center gap-2 mb-4"
        >
          <span class="nuxt-icon nuxt-icon--fill icon-not-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0C3.13111 0 0 3.13075 0 7C0 10.8688 3.13075 14 7 14C10.8689 14 14 10.8693 14 7C14 3.13116 10.8693 0 7 0ZM7.71884 9.7787C7.71884 9.99986 7.39635 10.221 7.00014 10.221C6.5855 10.221 6.29068 9.99986 6.29068 9.7787V6.26812C6.29068 6.01013 6.58552 5.83502 7.00014 5.83502C7.39635 5.83502 7.71884 6.01013 7.71884 6.26812V9.7787ZM7.00016 4.98739C6.57631 4.98739 6.24463 4.67411 6.24463 4.32395C6.24463 3.97381 6.57634 3.66975 7.00016 3.66975C7.4148 3.66975 7.74654 3.97381 7.74654 4.32395C7.74654 4.67411 7.41478 4.98739 7.00016 4.98739Z"
                fill="#8E8E8E"
              ></path>
            </svg>
          </span>
          <span class="text-primary font-medium &lt;sm:text-base sm:text-base md:text-lg">
            No Item
          </span>
        </div>
        <div onClick={closeModal} data-v-82953e26="" class="w-full flex justify-center items-center">
          <button
            data-v-9dec3a92=""
            data-v-82953e26=""
            id="btn01"
            type="submit"
            class="base-button-wrapper v-rounded btn-primary btn-md btn-secondary cursor-pointer &lt;sm:text-base sm:text-base md:text-lg"
          >
            <div data-v-9dec3a92="" class="flex justify-center items-center">
              ปิด
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalHistoryCredit;
